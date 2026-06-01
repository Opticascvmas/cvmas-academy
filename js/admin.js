/* ============================================================================
   ACADEMIA CV+  ·  PANEL DE ADMINISTRADOR  (versión mejorada)
   ----------------------------------------------------------------------------
   Reemplaza tu admin.js anterior por este archivo.
   Se conecta igual a tu Firebase (usa window.db) y mantiene las mismas
   funciones globales: openAdminPanel(), closeAdminPanel(), saveUserInfo().

   Requiere en tu HTML (igual que antes):
     <div id="admin-panel" style="display:none">
        <div id="admin-users"></div>
     </div>
   y un botón que llame a openAdminPanel().
   ========================================================================== */


/* ============================================================================
   1) CONFIGURACIÓN  ·  ¡EDITA ESTO!
   ----------------------------------------------------------------------------
   IMPORTANTE: Aquí pones el NOMBRE de cada módulo.
   En tu base de datos los quizzes se guardan con una clave (1, 2, 3...).
   Escribe a la derecha el nombre real para que el panel deje de mostrar
   "Módulo 1" y muestre el nombre de verdad.
   ========================================================================== */
const MODULE_NAMES = {
  "1":  "Introducción CV+",
  "2":  "Atención al Cliente",
  "3":  "Visión Binocular",
  "4":  "Lentes y Materiales",
  "5":  "Monturas",
  "6":  "Lentes de Contacto",
  "7":  "Protección Solar",
  "8":  "Salud Visual",
  "9":  "Ventas Consultivas",
  "10": "Cierre de Venta",
  "11": "Garantías",
  "12": "Postventa",
  "13": "Producto Premium",
  "14": "Tecnología Óptica",
  "15": "Manejo de Objeciones",
  "16": "Imagen y Estilo",
  "17": "Procesos Internos",
  "18": "Examen Final"
  // ...agrega o corrige los que necesites
};

// Total de módulos del curso (para la barra de progreso)
const TOTAL_MODULES = 18;

// (Opcional) Seguridad: si en tu app guardas el rol del usuario logueado en
// window.CVP_CURRENT_ROLE, el panel solo abrirá para "admin".
// Si no lo defines, el panel abre normalmente.
const ENFORCE_ADMIN_ONLY = true;

// Devuelve el nombre del módulo a partir de su clave
function moduleName(key) {
  return MODULE_NAMES[key] || ("Módulo " + key);
}

// Pequeño escape para no romper el HTML con comillas en nombres
function esc(v) {
  return String(v == null ? "" : v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}


/* ============================================================================
   2) ESTADO GLOBAL (datos cargados una sola vez)
   ========================================================================== */
const CVP = {
  users: [],
  scores: [],
  ready: false
};


/* ============================================================================
   3) ABRIR PANEL  ·  función principal
   ========================================================================== */
window.openAdminPanel = async function () {

  // --- Seguridad básica: solo admins ---
  if (ENFORCE_ADMIN_ONLY &&
      typeof window.CVP_CURRENT_ROLE !== "undefined" &&
      window.CVP_CURRENT_ROLE !== "admin") {
    alert("Acceso restringido: solo administradores.");
    return;
  }

  const panel = document.getElementById("admin-panel");
  const container = document.getElementById("admin-users");
  panel.style.display = "block";
  container.innerHTML = `<div class="cvp-loading">Cargando panel CV+…</div>`;

  // --- Estilos (se inyectan una sola vez) ---
  injectStyles();

  // --- Cargar datos ---
  if (window.CVP_MOCK) {
    // MODO DEMO: datos de ejemplo (para previsualizar sin Firebase)
    CVP.users  = window.CVP_MOCK.users;
    CVP.scores = window.CVP_MOCK.scores;
  } else {
    // MODO REAL: Firebase
    const { collection, getDocs } = await import(
      "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js"
    );
    const usersSnap  = await getDocs(collection(window.db, "users"));
    const scoresSnap = await getDocs(collection(window.db, "quiz_scores"));
    CVP.users  = [];
    CVP.scores = [];
    usersSnap.forEach(d => CVP.users.push({ id: d.id, ...d.data() }));
    scoresSnap.forEach(d => CVP.scores.push({ id: d.id, ...d.data() }));
  }
  CVP.ready = true;

  // --- Calcular todo y dibujar ---
  const data = computeData();
  container.innerHTML = renderShell(data);

  // --- Conectar eventos (pestañas, búsqueda, filtros) ---
  wireUpTabs();
  wireUpUserFilters();

  // --- Dibujar gráficas (carga Chart.js si hace falta) ---
  await loadChartJs();
  drawCharts(data);
};

window.closeAdminPanel = function () {
  document.getElementById("admin-panel").style.display = "none";
};


/* ============================================================================
   4) CÁLCULOS  ·  toda la lógica de datos en un solo lugar
   ========================================================================== */
function computeData() {
  const users  = CVP.users;
  const scores = CVP.scores;
  const now = new Date();

  const scoreOf = (uid) => scores.find(s => s.id === uid);
  const daysSince = (iso) => {
    if (!iso) return Infinity;
    return Math.floor((now - new Date(iso)) / 86400000);
  };

  // ---- Enriquecer cada usuario ----
  const enriched = users.map(u => {
    const sc = scoreOf(u.id) || {};
    const stats = sc.stats || {};
    const scoreMap = sc.scores || {};

    // módulos completados = entradas tipo objeto en scores
    const moduleEntries = Object.entries(scoreMap)
      .filter(([, v]) => typeof v === "object" && v !== null)
      .map(([key, v]) => ({
        key,
        name: moduleName(key),
        average:   Math.round(v.average   || 0),
        lastScore: Math.round(v.lastScore || 0),
        attempts:  v.attempts || 0
      }));

    const d = daysSince(u.lastLogin);
    let status = "inactivo", statusLabel = "Inactivo";
    if (d <= 1)      { status = "hoy";    statusLabel = "Activo hoy"; }
    else if (d <= 7) { status = "semana"; statusLabel = "Activo esta semana"; }

    return {
      id: u.id,
      name: u.name || u.email || "Sin nombre",
      email: u.email || "Sin correo",
      branch: u.branch || "Sin sucursal",
      position: u.position || "Sin cargo",
      role: u.role || "participant",
      lastLogin: u.lastLogin || null,
      daysSince: d,
      status, statusLabel,
      avg: Math.round(stats.overallAverage || 0),
      totalQuizzes: stats.totalQuizzes || moduleEntries.length,
      totalAttempts: stats.totalAttempts ||
                     moduleEntries.reduce((a, m) => a + m.attempts, 0),
      completed: moduleEntries.length,
      progress: Math.round((moduleEntries.length / TOTAL_MODULES) * 100),
      modules: moduleEntries
    };
  });

  // ---- Globales ----
  const withAvg = enriched.filter(u => u.avg > 0);
  const globalAverage = withAvg.length
    ? Math.round(withAvg.reduce((a, u) => a + u.avg, 0) / withAvg.length) : 0;

  const totalQuizzes  = enriched.reduce((a, u) => a + u.totalQuizzes, 0);
  const totalAttempts = enriched.reduce((a, u) => a + u.totalAttempts, 0);
  const activeToday   = enriched.filter(u => u.daysSince <= 1).length;
  const activeWeek    = enriched.filter(u => u.daysSince <= 7).length;
  const inactive      = enriched.length - activeWeek;

  // ---- Ranking (top 10) ----
  const ranking = [...enriched].sort((a, b) => b.avg - a.avg).slice(0, 10);
  const bestUser = ranking[0] || null;

  // ---- Por sucursal ----
  const branchStats = aggregateBy(enriched, "branch");
  // ---- Por cargo ----
  const positionStats = aggregateBy(enriched, "position");

  // ---- Por módulo (promedio real de cada módulo) ----
  const modAgg = {};
  enriched.forEach(u => u.modules.forEach(m => {
    if (!modAgg[m.key]) modAgg[m.key] = { name: m.name, sum: 0, count: 0, attempts: 0 };
    modAgg[m.key].sum += m.average;
    modAgg[m.key].count++;
    modAgg[m.key].attempts += m.attempts;
  }));
  const moduleStats = Object.entries(modAgg).map(([key, v]) => ({
    key, name: v.name,
    avg: Math.round(v.sum / v.count),
    learners: v.count,
    attempts: v.attempts
  })).sort((a, b) => b.avg - a.avg);

  const hardestModule = moduleStats.length
    ? [...moduleStats].sort((a, b) => a.avg - b.avg)[0] : null;

  // ---- Usuarios por día (últimos 7 días, dato real por lastLogin) ----
  const dayLabels = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const last7 = [];
  for (let i = 6; i >= 0; i--) {
    const day = new Date(now); day.setDate(now.getDate() - i);
    const count = enriched.filter(u => {
      if (!u.lastLogin) return false;
      const l = new Date(u.lastLogin);
      return l.toDateString() === day.toDateString();
    }).length;
    last7.push({ label: dayLabels[day.getDay()], count });
  }

  // ---- Distribución de notas (real) ----
  const buckets = { "0-59": 0, "60-69": 0, "70-79": 0, "80-89": 0, "90-100": 0 };
  withAvg.forEach(u => {
    if (u.avg < 60) buckets["0-59"]++;
    else if (u.avg < 70) buckets["60-69"]++;
    else if (u.avg < 80) buckets["70-79"]++;
    else if (u.avg < 90) buckets["80-89"]++;
    else buckets["90-100"]++;
  });

  // ---- Analíticas inteligentes ----
  const lowPerformers = enriched.filter(u => u.avg > 0 && u.avg < 60);
  const noActivity7   = enriched.filter(u => u.daysSince > 7 && u.daysSince !== Infinity);
  const neverLogged   = enriched.filter(u => u.daysSince === Infinity);

  // ---- Alertas (derivadas de datos reales) ----
  const alerts = [];
  enriched.forEach(u => {
    if (u.daysSince > 7 && u.daysSince !== Infinity)
      alerts.push({ level: "warn", text: `${u.name} lleva ${u.daysSince} días sin actividad` });
    if (u.avg > 0 && u.avg < 60)
      alerts.push({ level: "danger", text: `${u.name} tiene bajo rendimiento (${u.avg}%)` });
    if (u.progress >= 100)
      alerts.push({ level: "ok", text: `${u.name} completó todos los módulos 🎉` });
  });
  if (hardestModule && hardestModule.avg < 65)
    alerts.push({ level: "danger", text: `El módulo "${hardestModule.name}" tiene bajo rendimiento (${hardestModule.avg}%)` });

  return {
    enriched, globalAverage, totalQuizzes, totalAttempts,
    activeToday, activeWeek, inactive, totalUsers: enriched.length,
    ranking, bestUser, branchStats, positionStats, moduleStats, hardestModule,
    last7, buckets, lowPerformers, noActivity7, neverLogged, alerts
  };
}

// Agrupa y promedia por un campo (branch / position)
function aggregateBy(list, field) {
  const map = {};
  list.forEach(u => {
    const k = u[field] || "Sin dato";
    if (!map[k]) map[k] = { sum: 0, count: 0 };
    if (u.avg > 0) { map[k].sum += u.avg; map[k].count++; }
  });
  return Object.entries(map)
    .map(([name, v]) => ({ name, avg: v.count ? Math.round(v.sum / v.count) : 0, count: v.count }))
    .filter(x => x.count > 0)
    .sort((a, b) => b.avg - a.avg);
}


/* ============================================================================
   5) RENDER  ·  estructura general con pestañas
   ========================================================================== */
function renderShell(d) {
  return `
  <div class="cvp">
    <header class="cvp-head">
      <div class="cvp-head-title">
        <span class="cvp-logo">CV+</span>
        <div>
          <h1>Panel Administrador</h1>
          <p>Academia CV+ · ${d.totalUsers} usuarios</p>
        </div>
      </div>
      <div class="cvp-head-actions">
        <button class="cvp-btn ghost" onclick="cvpExportCSV()">⬇️ Excel</button>
        <button class="cvp-btn ghost" onclick="window.print()">🖨️ PDF</button>
        <button class="cvp-btn close" onclick="closeAdminPanel()">✕ Cerrar</button>
      </div>
    </header>

    <nav class="cvp-tabs">
      <button class="cvp-tab active" data-tab="dashboard">📊 Dashboard</button>
      <button class="cvp-tab" data-tab="usuarios">👥 Usuarios</button>
      <button class="cvp-tab" data-tab="leaderboard">🏆 Leaderboard</button>
      <button class="cvp-tab" data-tab="modulos">📚 Módulos</button>
      <button class="cvp-tab" data-tab="analiticas">🧠 Analíticas</button>
      <button class="cvp-tab" data-tab="alertas">🔔 Alertas
        ${d.alerts.length ? `<span class="cvp-badge">${d.alerts.length}</span>` : ""}
      </button>
    </nav>

    <main class="cvp-body">
      <section class="cvp-panel active" data-panel="dashboard">${renderDashboard(d)}</section>
      <section class="cvp-panel" data-panel="usuarios">${renderUsers(d)}</section>
      <section class="cvp-panel" data-panel="leaderboard">${renderLeaderboard(d)}</section>
      <section class="cvp-panel" data-panel="modulos">${renderModules(d)}</section>
      <section class="cvp-panel" data-panel="analiticas">${renderAnalytics(d)}</section>
      <section class="cvp-panel" data-panel="alertas">${renderAlerts(d)}</section>
    </main>
  </div>`;
}


/* ---------- DASHBOARD ---------- */
function renderDashboard(d) {
  const card = (icon, label, value, sub, cls) => `
    <div class="cvp-stat ${cls}">
      <div class="cvp-stat-top">${icon} ${label}</div>
      <div class="cvp-stat-value">${value}</div>
      <div class="cvp-stat-sub">${sub}</div>
    </div>`;

  return `
    <div class="cvp-grid stats">
      ${card("📈", "Promedio Global", d.globalAverage + "%", "Rendimiento general", "teal")}
      ${card("🟢", "Activos hoy", d.activeToday, "Usuarios conectados", "green")}
      ${card("🏆", "Mejor promedio",
            d.bestUser ? esc(d.bestUser.name) : "N/A",
            d.bestUser ? d.bestUser.avg + "%" : "—", "navy")}
      ${card("⚠️", "Módulo difícil",
            d.hardestModule ? esc(d.hardestModule.name) : "N/A",
            d.hardestModule ? d.hardestModule.avg + "% promedio" : "Sin datos", "amber")}
      ${card("👥", "Usuarios", d.totalUsers, "Registrados", "teal")}
      ${card("📋", "Quizzes", d.totalQuizzes, "Realizados en total", "navy")}
      ${card("🔥", "Intentos", d.totalAttempts, "Intentos acumulados", "amber")}
      ${card("📅", "Activos (7 días)", d.activeWeek, `${d.inactive} inactivos`, "green")}
    </div>

    <div class="cvp-grid charts">
      <div class="cvp-card">
        <h3>Usuarios conectados por día (últimos 7 días)</h3>
        <canvas id="cvpChartWeek" height="160"></canvas>
      </div>
      <div class="cvp-card">
        <h3>Rendimiento por sucursal</h3>
        <canvas id="cvpChartBranch" height="160"></canvas>
      </div>
      <div class="cvp-card">
        <h3>Distribución de notas</h3>
        <canvas id="cvpChartDist" height="160"></canvas>
      </div>
      <div class="cvp-card">
        <h3>Promedio por cargo</h3>
        <canvas id="cvpChartPos" height="160"></canvas>
      </div>
    </div>`;
}


/* ---------- USUARIOS ---------- */
function renderUsers(d) {
  const branches  = [...new Set(d.enriched.map(u => u.branch))].sort();
  const positions = [...new Set(d.enriched.map(u => u.position))].sort();

  const filters = `
    <div class="cvp-filters">
      <input id="cvpSearch" placeholder="🔍 Buscar por nombre o correo…">
      <select id="cvpFilterBranch">
        <option value="">Todas las sucursales</option>
        ${branches.map(b => `<option value="${esc(b)}">${esc(b)}</option>`).join("")}
      </select>
      <select id="cvpFilterPos">
        <option value="">Todos los cargos</option>
        ${positions.map(p => `<option value="${esc(p)}">${esc(p)}</option>`).join("")}
      </select>
      <select id="cvpFilterStatus">
        <option value="">Todos</option>
        <option value="hoy">Activos hoy</option>
        <option value="semana">Activos esta semana</option>
        <option value="inactivo">Inactivos</option>
      </select>
    </div>`;

  const cards = d.enriched
    .sort((a, b) => b.avg - a.avg)
    .map(u => renderUserCard(u)).join("");

  return filters + `<div id="cvpUserList" class="cvp-grid users">${cards}</div>`;
}

function renderUserCard(u) {
  const statusClass = u.status; // hoy / semana / inactivo
  const history = u.modules.length ? u.modules.map(m => {
    const c = m.average >= 80 ? "ok" : m.average >= 60 ? "warn" : "danger";
    const label = m.average >= 80 ? "Excelente" : m.average >= 60 ? "Regular" : "Necesita refuerzo";
    return `
      <div class="cvp-quiz ${c}">
        <div class="cvp-quiz-head">
          <div>
            <div class="cvp-quiz-name">📘 ${esc(m.name)}</div>
            <div class="cvp-quiz-status">${label}</div>
          </div>
          <div class="cvp-quiz-avg">${m.average}%</div>
        </div>
        <div class="cvp-quiz-meta">
          <span>🎯 Última nota: <b>${m.lastScore}%</b></span>
          <span>🔄 Intentos: <b>${m.attempts}</b></span>
        </div>
        <div class="cvp-bar"><div style="width:${m.average}%"></div></div>
      </div>`;
  }).join("") : `<p class="cvp-empty">Sin quizzes registrados</p>`;

  return `
  <div class="cvp-user-card"
       data-name="${esc(u.name).toLowerCase()}"
       data-email="${esc(u.email).toLowerCase()}"
       data-branch="${esc(u.branch)}"
       data-position="${esc(u.position)}"
       data-status="${u.status}">

    <div class="cvp-user-top">
      <h3>${esc(u.name)}</h3>
      <span class="cvp-pill ${statusClass}">● ${u.statusLabel}</span>
    </div>
    <p class="cvp-muted">${esc(u.email)}</p>
    <p class="cvp-muted">Último login: ${u.lastLogin ? esc(u.lastLogin.replace("T", " ").slice(0, 16)) : "No disponible"}</p>
    <p class="cvp-tags">🏢 ${esc(u.branch)} &nbsp;·&nbsp; 💼 ${esc(u.position)} &nbsp;·&nbsp; 🔑 ${esc(u.role)}</p>

    <div class="cvp-mini-stats">
      <div><b style="color:#00B9D6">${u.avg}%</b><span>Promedio</span></div>
      <div><b>${u.totalQuizzes}</b><span>Quizzes</span></div>
      <div><b style="color:#28a745">${u.totalAttempts}</b><span>Intentos</span></div>
    </div>

    <div class="cvp-progress">
      <div class="cvp-progress-head"><b>📚 Progreso</b><span>${u.completed}/${TOTAL_MODULES}</span></div>
      <div class="cvp-bar"><div style="width:${u.progress}%"></div></div>
      <small>${u.progress}% completado</small>
    </div>

    <div class="cvp-history"><b>Historial de quizzes</b>${history}</div>

    <div class="cvp-edit">
      <input id="name-${u.id}" value="${esc(u.name)}" placeholder="Nombre">
      <select id="branch-${u.id}">${branchOptions(u.branch)}</select>
      <select id="position-${u.id}">${positionOptions(u.position)}</select>
      <select id="role-${u.id}">
        <option value="participant" ${u.role === "participant" ? "selected" : ""}>participant</option>
        <option value="admin" ${u.role === "admin" ? "selected" : ""}>admin</option>
      </select>
      <button class="cvp-btn save" onclick="saveUserInfo('${u.id}')">💾 Guardar cambios</button>
    </div>
  </div>`;
}


/* ---------- LEADERBOARD ---------- */
function renderLeaderboard(d) {
  const medals = ["🥇", "🥈", "🥉"];
  const rows = d.ranking.map((u, i) => {
    const top = i < 3 ? `top${i + 1}` : "";
    const medal = medals[i] || `#${i + 1}`;
    return `
      <div class="cvp-rank ${top}">
        <div class="cvp-rank-pos">${medal}</div>
        <div class="cvp-rank-info">
          <b>${esc(u.name)}</b>
          <small>🏢 ${esc(u.branch)} · 💼 ${esc(u.position)}</small>
          <div class="cvp-bar light"><div style="width:${u.avg}%"></div></div>
        </div>
        <div class="cvp-rank-avg">${u.avg}%</div>
      </div>`;
  }).join("");

  const byBranch = d.branchStats.slice(0, 8).map((b, i) =>
    `<li><span>${i + 1}. ${esc(b.name)}</span><b>${b.avg}%</b></li>`).join("");
  const byPos = d.positionStats.slice(0, 8).map((p, i) =>
    `<li><span>${i + 1}. ${esc(p.name)}</span><b>${p.avg}%</b></li>`).join("");

  return `
    <div class="cvp-card"><h3>🏆 Top 10 CV+</h3><div class="cvp-ranklist">${rows || '<p class="cvp-empty">Sin datos</p>'}</div></div>
    <div class="cvp-grid two">
      <div class="cvp-card"><h3>🏢 Ranking por sucursal</h3><ul class="cvp-list">${byBranch || '<li>Sin datos</li>'}</ul></div>
      <div class="cvp-card"><h3>💼 Ranking por cargo</h3><ul class="cvp-list">${byPos || '<li>Sin datos</li>'}</ul></div>
    </div>`;
}


/* ---------- MÓDULOS ---------- */
function renderModules(d) {
  if (!d.moduleStats.length)
    return `<div class="cvp-card"><p class="cvp-empty">Aún no hay datos de módulos.</p></div>`;

  const rows = d.moduleStats.map(m => {
    const c = m.avg >= 80 ? "ok" : m.avg >= 60 ? "warn" : "danger";
    return `
      <div class="cvp-mod ${c}">
        <div class="cvp-mod-head">
          <b>📘 ${esc(m.name)}</b>
          <span class="cvp-mod-avg">${m.avg}%</span>
        </div>
        <div class="cvp-bar"><div style="width:${m.avg}%"></div></div>
        <small>${m.learners} usuarios · ${m.attempts} intentos</small>
      </div>`;
  }).join("");

  return `
    <div class="cvp-card">
      <h3>📚 Rendimiento por módulo</h3>
      <p class="cvp-muted">Promedio real de cada módulo, ordenado de mejor a peor.
      El de hasta abajo es el más difícil.</p>
      <div class="cvp-grid mods">${rows}</div>
    </div>`;
}


/* ---------- ANALÍTICAS ---------- */
function renderAnalytics(d) {
  const list = (arr, mapFn, empty) =>
    arr.length ? `<ul class="cvp-list">${arr.map(mapFn).join("")}</ul>` : `<li class="cvp-empty">${empty}</li>`;

  return `
    <div class="cvp-grid two">
      <div class="cvp-card danger-card">
        <h3>📉 Bajo rendimiento (&lt;60%)</h3>
        ${list(d.lowPerformers, u => `<li><span>${esc(u.name)}</span><b>${u.avg}%</b></li>`, "Nadie por debajo de 60% 🎉")}
      </div>
      <div class="cvp-card warn-card">
        <h3>😴 Sin actividad (+7 días)</h3>
        ${list(d.noActivity7, u => `<li><span>${esc(u.name)}</span><b>${u.daysSince} días</b></li>`, "Todos activos esta semana")}
      </div>
      <div class="cvp-card">
        <h3>🚫 Nunca ingresaron</h3>
        ${list(d.neverLogged, u => `<li><span>${esc(u.name)}</span><b>—</b></li>`, "Todos han ingresado")}
      </div>
      <div class="cvp-card">
        <h3>⚠️ Módulos más difíciles</h3>
        ${list(d.moduleStats.slice().reverse().slice(0, 5),
          m => `<li><span>${esc(m.name)}</span><b>${m.avg}%</b></li>`, "Sin datos")}
      </div>
    </div>
    <div class="cvp-card cvp-note">
      <h3>🚀 Próximas funciones premium</h3>
      <p class="cvp-muted">Estas requieren guardar datos adicionales en Firebase
      (tiempo por quiz, preguntas falladas, histórico mensual). Cuando quieras las activamos:</p>
      <div class="cvp-roadmap">
        <span>⏱️ Tiempo promedio por quiz</span>
        <span>❌ Preguntas más falladas</span>
        <span>📈 Tendencia mensual</span>
        <span>🎓 Certificados automáticos</span>
        <span>🤖 Análisis con IA</span>
        <span>🔔 Notificaciones push</span>
      </div>
    </div>`;
}


/* ---------- ALERTAS ---------- */
function renderAlerts(d) {
  if (!d.alerts.length)
    return `<div class="cvp-card"><p class="cvp-empty">Todo en orden ✅ No hay alertas.</p></div>`;

  const order = { danger: 0, warn: 1, ok: 2 };
  const items = [...d.alerts].sort((a, b) => order[a.level] - order[b.level]).map(a => {
    const dot = a.level === "danger" ? "🔴" : a.level === "warn" ? "🟡" : "🟢";
    return `<div class="cvp-alert ${a.level}">${dot} ${esc(a.text)}</div>`;
  }).join("");

  return `<div class="cvp-card"><h3>🔔 Centro de alertas</h3>${items}</div>`;
}


/* ============================================================================
   6) OPCIONES DE SUCURSAL Y CARGO (para los selects de edición)
   ========================================================================== */
const BRANCHES = ["Metrocentro 1","Metrocentro 2","Plaza Mundo","Metrocentro Santa Ana","Sonsonate","San Miguel","Aguilares","Apopa","Valle Dulce","San Gabriel","Metropolis","Galerias","El Paseo","Zona Rosa","El Casco","Multiplaza","Santa Rosa","Encuentro Zacatecoluca","Zacatecoluca Centro","Usulutan","San Francisco Gotera","San Martin","Unicentro Soyapango","Alta Vista","Encuentro Lourdes","Metrocentro Lourdes","Acajutla","Las Ramblas","Encuentro Santa Ana","Empresarial","SAC","Zaragoza","Puerto de La Libertad","Armenia","San Marcos","Recursos Humanos","Ventas","Mercadeo"];
const POSITIONS = ["Asesor Visual","Optometrista","Capacitador","Supervisor","RRHH"];

function branchOptions(current) {
  const opts = BRANCHES.includes(current) ? BRANCHES : [current, ...BRANCHES];
  return opts.map(b => `<option value="${esc(b)}" ${b === current ? "selected" : ""}>${esc(b)}</option>`).join("");
}
function positionOptions(current) {
  const opts = POSITIONS.includes(current) ? POSITIONS : [current, ...POSITIONS];
  return opts.map(p => `<option value="${esc(p)}" ${p === current ? "selected" : ""}>${esc(p)}</option>`).join("");
}


/* ============================================================================
   7) GUARDAR CAMBIOS  ·  rol, sucursal, cargo, nombre  (+ log de cambios)
   ========================================================================== */
window.saveUserInfo = async function (userId) {
  const name     = document.getElementById(`name-${userId}`).value;
  const branch   = document.getElementById(`branch-${userId}`).value;
  const position = document.getElementById(`position-${userId}`).value;
  const role     = document.getElementById(`role-${userId}`).value;

  const { doc, updateDoc, setDoc, collection } = await import(
    "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js"
  );

  await updateDoc(doc(window.db, "users", userId), { name, branch, position, role });

  // Log de cambios (seguridad) — colección admin_logs
  try {
    await setDoc(doc(collection(window.db, "admin_logs")), {
      userId, name, branch, position, role,
      changedBy: window.CVP_CURRENT_EMAIL || "admin",
      at: new Date().toISOString()
    });
  } catch (e) { /* si no quieres logs, ignora */ }

  alert("✅ Usuario actualizado");
  openAdminPanel();
};


/* ============================================================================
   8) EVENTOS  ·  pestañas y filtros
   ========================================================================== */
function wireUpTabs() {
  document.querySelectorAll(".cvp-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const name = tab.dataset.tab;
      document.querySelectorAll(".cvp-tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".cvp-panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(`.cvp-panel[data-panel="${name}"]`).classList.add("active");
    });
  });
}

function wireUpUserFilters() {
  const search = document.getElementById("cvpSearch");
  const fBranch = document.getElementById("cvpFilterBranch");
  const fPos = document.getElementById("cvpFilterPos");
  const fStatus = document.getElementById("cvpFilterStatus");
  if (!search) return;

  const apply = () => {
    const q = search.value.toLowerCase().trim();
    const b = fBranch.value, p = fPos.value, s = fStatus.value;
    document.querySelectorAll("#cvpUserList .cvp-user-card").forEach(card => {
      const okText = !q || card.dataset.name.includes(q) || card.dataset.email.includes(q);
      const okB = !b || card.dataset.branch === b;
      const okP = !p || card.dataset.position === p;
      const okS = !s || card.dataset.status === s;
      card.style.display = (okText && okB && okP && okS) ? "" : "none";
    });
  };
  [search, fBranch, fPos, fStatus].forEach(el => {
    el.addEventListener("input", apply);
    el.addEventListener("change", apply);
  });
}


/* ============================================================================
   9) GRÁFICAS  ·  Chart.js
   ========================================================================== */
async function loadChartJs() {
  if (window.Chart) return;
  await new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js";
    s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
}

let cvpCharts = [];
function drawCharts(d) {
  if (!window.Chart) return;
  cvpCharts.forEach(c => c.destroy()); cvpCharts = [];
  const teal = "#00B9D6", green = "#28a745", amber = "#f3b300", navy = "#0B2137";

  const mk = (id, cfg) => {
    const el = document.getElementById(id);
    if (el) cvpCharts.push(new Chart(el, cfg));
  };

  mk("cvpChartWeek", {
    type: "line",
    data: { labels: d.last7.map(x => x.label),
      datasets: [{ data: d.last7.map(x => x.count), borderColor: teal,
        backgroundColor: "rgba(0,185,214,.15)", fill: true, tension: .4, borderWidth: 3,
        pointBackgroundColor: teal, pointRadius: 5 }] },
    options: baseOpts(true)
  });

  mk("cvpChartBranch", {
    type: "bar",
    data: { labels: d.branchStats.slice(0, 7).map(b => b.name),
      datasets: [{ data: d.branchStats.slice(0, 7).map(b => b.avg),
        backgroundColor: teal, borderRadius: 8 }] },
    options: baseOpts(true)
  });

  mk("cvpChartDist", {
    type: "doughnut",
    data: { labels: Object.keys(d.buckets),
      datasets: [{ data: Object.values(d.buckets),
        backgroundColor: ["#dc3545", amber, "#ffcb3d", "#43c463", green] }] },
    options: { responsive: true, plugins: { legend: { position: "bottom" } } }
  });

  mk("cvpChartPos", {
    type: "bar",
    data: { labels: d.positionStats.map(p => p.name),
      datasets: [{ data: d.positionStats.map(p => p.avg),
        backgroundColor: amber, borderRadius: 8 }] },
    options: { ...baseOpts(true), indexAxis: "y" }
  });
}

function baseOpts(hideLegend) {
  return {
    responsive: true,
    plugins: { legend: { display: !hideLegend } },
    scales: { y: { beginAtZero: true, grid: { color: "#eef2f7" } },
              x: { grid: { display: false } } }
  };
}


/* ============================================================================
   10) EXPORTAR A EXCEL (CSV)
   ========================================================================== */
window.cvpExportCSV = function () {
  const d = computeData();
  const rows = [["Nombre", "Correo", "Sucursal", "Cargo", "Rol",
                 "Promedio", "Quizzes", "Intentos", "Completados", "Ultimo login"]];
  d.enriched.forEach(u => rows.push([
    u.name, u.email, u.branch, u.position, u.role,
    u.avg + "%", u.totalQuizzes, u.totalAttempts,
    u.completed + "/" + TOTAL_MODULES, u.lastLogin || "—"
  ]));
  const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "academia-cvplus-usuarios.csv";
  a.click();
};


/* ============================================================================
   11) ESTILOS  ·  diseño corporativo CV+ (responsive)
   ========================================================================== */
function injectStyles() {
  if (document.getElementById("cvp-styles")) return;
  const css = document.createElement("style");
  css.id = "cvp-styles";
  css.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

#admin-panel{position:fixed;inset:0;background:#eef2f7;z-index:9999;overflow:auto}
.cvp{font-family:'Plus Jakarta Sans',sans-serif;color:#0B2137;max-width:1280px;margin:0 auto;padding:18px}
.cvp-loading{font-family:'Plus Jakarta Sans',sans-serif;padding:60px;text-align:center;color:#0B2137;font-weight:600}

/* Header */
.cvp-head{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;
  background:linear-gradient(135deg,#0B2137,#1f3b57);color:#fff;padding:20px 24px;border-radius:20px}
.cvp-head-title{display:flex;align-items:center;gap:14px}
.cvp-logo{background:linear-gradient(135deg,#00B9D6,#14A9C4);font-weight:800;font-size:22px;
  width:54px;height:54px;display:flex;align-items:center;justify-content:center;border-radius:16px;
  box-shadow:0 6px 18px rgba(0,185,214,.4)}
.cvp-head h1{margin:0;font-size:22px;font-weight:800}
.cvp-head p{margin:2px 0 0;font-size:13px;opacity:.8}
.cvp-head-actions{display:flex;gap:8px;flex-wrap:wrap}

/* Botones */
.cvp-btn{border:none;border-radius:12px;padding:10px 16px;font-weight:700;cursor:pointer;
  font-family:inherit;font-size:13px;transition:.2s}
.cvp-btn.ghost{background:rgba(255,255,255,.15);color:#fff}
.cvp-btn.ghost:hover{background:rgba(255,255,255,.28)}
.cvp-btn.close{background:#dc3545;color:#fff}
.cvp-btn.save{background:#14A9C4;color:#fff;width:100%;margin-top:4px;padding:12px}
.cvp-btn.save:hover{background:#0FA0BA}

/* Tabs */
.cvp-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:18px 0}
.cvp-tab{border:none;background:#fff;color:#0B2137;padding:11px 18px;border-radius:14px;
  font-weight:700;font-family:inherit;cursor:pointer;font-size:14px;position:relative;
  box-shadow:0 2px 8px rgba(0,0,0,.05);transition:.2s}
.cvp-tab:hover{transform:translateY(-2px)}
.cvp-tab.active{background:linear-gradient(135deg,#00B9D6,#14A9C4);color:#fff;
  box-shadow:0 6px 16px rgba(0,185,214,.35)}
.cvp-badge{background:#dc3545;color:#fff;border-radius:999px;padding:1px 7px;font-size:11px;margin-left:6px}

/* Paneles */
.cvp-panel{display:none;animation:cvpfade .3s ease}
.cvp-panel.active{display:block}
@keyframes cvpfade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}

/* Grids */
.cvp-grid{display:grid;gap:16px}
.cvp-grid.stats{grid-template-columns:repeat(auto-fit,minmax(200px,1fr));margin-bottom:18px}
.cvp-grid.charts{grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}
.cvp-grid.users{grid-template-columns:repeat(auto-fit,minmax(340px,1fr))}
.cvp-grid.two{grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}
.cvp-grid.mods{grid-template-columns:repeat(auto-fit,minmax(260px,1fr));margin-top:14px}

/* Stat cards */
.cvp-stat{padding:20px;border-radius:18px;color:#fff;box-shadow:0 8px 20px rgba(0,0,0,.12)}
.cvp-stat.teal{background:linear-gradient(135deg,#00B9D6,#14A9C4)}
.cvp-stat.green{background:linear-gradient(135deg,#28a745,#43c463)}
.cvp-stat.navy{background:linear-gradient(135deg,#0B2137,#1f3b57)}
.cvp-stat.amber{background:linear-gradient(135deg,#f3b300,#ffcb3d)}
.cvp-stat-top{font-size:13px;opacity:.9;font-weight:600}
.cvp-stat-value{font-size:30px;font-weight:800;margin:8px 0 4px;word-break:break-word;line-height:1.1}
.cvp-stat-sub{font-size:12px;opacity:.85}

/* Cards genéricas */
.cvp-card{background:#fff;border-radius:18px;padding:22px;box-shadow:0 4px 16px rgba(0,0,0,.05);margin-bottom:16px}
.cvp-card h3{margin:0 0 12px;font-size:16px;font-weight:800}
.cvp-muted{color:#6b7785;font-size:13px;margin:4px 0}
.cvp-empty{color:#9aa5b1;font-size:14px;text-align:center;padding:20px}
.danger-card{border-top:4px solid #dc3545}
.warn-card{border-top:4px solid #f3b300}

/* Listas */
.cvp-list{list-style:none;margin:0;padding:0}
.cvp-list li{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #f0f3f7;font-size:14px}
.cvp-list li:last-child{border-bottom:none}
.cvp-list b{color:#00B9D6}

/* Filtros */
.cvp-filters{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:16px}
.cvp-filters input,.cvp-filters select{padding:12px;border-radius:12px;border:1px solid #d6dde6;
  font-family:inherit;font-size:14px;background:#fff}

/* Tarjeta de usuario */
.cvp-user-card{background:#fff;border-radius:18px;padding:20px;box-shadow:0 4px 16px rgba(0,0,0,.05);border:1px solid #eef2f7}
.cvp-user-top{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap}
.cvp-user-card h3{margin:0;font-size:18px}
.cvp-pill{font-size:11px;font-weight:700;padding:5px 12px;border-radius:999px;white-space:nowrap}
.cvp-pill.hoy{background:#eaf7ee;color:#28a745}
.cvp-pill.semana{background:#fff8e1;color:#c79100}
.cvp-pill.inactivo{background:#fdecec;color:#dc3545}
.cvp-tags{font-size:13px;color:#555;margin:8px 0}
.cvp-mini-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0}
.cvp-mini-stats div{background:#f5f7fb;border-radius:12px;padding:12px;text-align:center}
.cvp-mini-stats b{display:block;font-size:22px}
.cvp-mini-stats span{font-size:12px;color:#666}

/* Progreso y barras */
.cvp-progress{margin:14px 0}
.cvp-progress-head{display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px}
.cvp-progress small{font-size:12px;color:#888}
.cvp-bar{width:100%;height:12px;background:#edf1f5;border-radius:999px;overflow:hidden;margin-top:6px}
.cvp-bar>div{height:100%;background:linear-gradient(90deg,#00B9D6,#14A9C4);border-radius:999px;transition:.6s}
.cvp-bar.light{background:rgba(255,255,255,.3)}
.cvp-bar.light>div{background:#fff}

/* Historial de quizzes */
.cvp-history{margin-top:14px}
.cvp-quiz{margin-top:12px;padding:14px;border-radius:14px;border-left:5px solid #ccc}
.cvp-quiz.ok{background:#eaf7ee;border-color:#28a745}
.cvp-quiz.warn{background:#fff8e1;border-color:#f3b300}
.cvp-quiz.danger{background:#fdecec;border-color:#dc3545}
.cvp-quiz-head{display:flex;justify-content:space-between;align-items:center}
.cvp-quiz-name{font-weight:700;font-size:15px}
.cvp-quiz-status{font-size:12px;font-weight:700;margin-top:2px;color:#555}
.cvp-quiz-avg{font-size:22px;font-weight:800}
.cvp-quiz.ok .cvp-quiz-avg{color:#28a745}
.cvp-quiz.warn .cvp-quiz-avg{color:#c79100}
.cvp-quiz.danger .cvp-quiz-avg{color:#dc3545}
.cvp-quiz-meta{display:flex;gap:16px;flex-wrap:wrap;font-size:13px;color:#555;margin-top:8px}

/* Edición de usuario */
.cvp-edit{margin-top:16px;display:grid;gap:9px;background:#f8f9fb;padding:14px;border-radius:14px}
.cvp-edit input,.cvp-edit select{padding:10px;border-radius:10px;border:1px solid #ccd4dd;font-family:inherit;font-size:14px}

/* Leaderboard */
.cvp-ranklist{display:flex;flex-direction:column;gap:10px}
.cvp-rank{display:flex;align-items:center;gap:14px;background:#f5f7fb;border-radius:14px;padding:14px 16px}
.cvp-rank.top1{background:linear-gradient(135deg,#FFD700,#ffcc00);color:#5a4500}
.cvp-rank.top2{background:linear-gradient(135deg,#dfe3e8,#c4cad1)}
.cvp-rank.top3{background:linear-gradient(135deg,#e6a766,#d99552);color:#5a3210}
.cvp-rank-pos{font-size:28px;min-width:42px;text-align:center;font-weight:800}
.cvp-rank-info{flex:1}
.cvp-rank-info b{font-size:16px}
.cvp-rank-info small{display:block;opacity:.8;font-size:12px;margin:2px 0 6px}
.cvp-rank-avg{font-size:28px;font-weight:800}

/* Módulos */
.cvp-mod{padding:16px;border-radius:14px;border-left:5px solid #ccc;background:#f5f7fb}
.cvp-mod.ok{border-color:#28a745}.cvp-mod.warn{border-color:#f3b300}.cvp-mod.danger{border-color:#dc3545}
.cvp-mod-head{display:flex;justify-content:space-between;align-items:center}
.cvp-mod-avg{font-weight:800;font-size:18px}
.cvp-mod small{color:#777;font-size:12px;display:block;margin-top:6px}

/* Alertas */
.cvp-alert{padding:14px 16px;border-radius:12px;margin-top:10px;font-size:14px;font-weight:600}
.cvp-alert.danger{background:#fdecec;color:#a71d2a}
.cvp-alert.warn{background:#fff8e1;color:#8a6d00}
.cvp-alert.ok{background:#eaf7ee;color:#1e7e34}

/* Roadmap */
.cvp-roadmap{display:flex;flex-wrap:wrap;gap:10px;margin-top:12px}
.cvp-roadmap span{background:#f0f4f8;border:1px dashed #c3ccd6;border-radius:999px;padding:8px 14px;font-size:13px;color:#5a6b7b}

/* Móvil */
@media(max-width:600px){
  .cvp{padding:12px}
  .cvp-head{padding:16px}
  .cvp-stat-value{font-size:26px}
  .cvp-rank-avg{font-size:22px}
}

/* Impresión / PDF */
@media print{
  .cvp-head-actions,.cvp-tabs,.cvp-edit,.cvp-filters{display:none!important}
  .cvp-panel{display:block!important}
  #admin-panel{position:static;background:#fff}
}
`;
  document.head.appendChild(css);
}
