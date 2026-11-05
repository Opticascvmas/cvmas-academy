/* ============================================================================
   ACADEMIA CV+  ·  PANEL DE ADMINISTRADOR  (v2 · noviembre 2026)
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
  "1":  "ADN CV+",
  "2":  "Anatomia ocular",
  "3":  "Defectos visuales",
  "4":  "Lectura de receta",
  "5":  "Lentes oftalmicos",
  "6":  "Procesos de fabricacion",
  "7":  "Materiales de lentes oftalmicos",
  "8":  "Tratamientos para lentes oftalmicos",
  "9":  "Lentes vision sencilla",
  "10": "Lentes progresivos",
  "11": "Progresivos Akkurat",
  "12": "Ocupacionales Akkurat",
  "13": "Antifatiga Akkurat",
  "14": "Vision sencilla Akkurat",
  "15": "Lentes de contacto",
  "16": "Luminex",
  "17": "Cierre de ventas",
  "18": "Aros oftalmicos y ficha de marca",
  "19": "Flujo de Servicio al Cliente en Odoo",
  "20": "Ingles Nivel 1 - Survival English",
  "21": "Ingles Nivel 2 - Presente y rutina",
  "22": "Ingles Nivel 3 - Pasado y futuro",
  "23": "Ingles Nivel 4 - Conversacion real",
  "24": "Ingles Nivel 0 - Desde cero",
  "25": "Flexi-Cuotas - Proceso de credito",
  "26": "SUMAS - Programa de Lealtad y Reactivacion"
  // ...agrega o corrige los que necesites
};

// Total de módulos del curso (para la barra de progreso)
// Se calcula automáticamente: al agregar una línea arriba, el total se ajusta solo.
const TOTAL_MODULES = Object.keys(MODULE_NAMES).length;

// Módulos para optometristas
// ✏️ SOLO EDITA ESTO al agregar un módulo nuevo: agrega una línea con el ID y el nombre.
// El total de módulos se calcula automáticamente.
const MODULE_NAMES_OPTO = {
  "1": "Lentes para el Control de la Miopía",
  "2": "Flujo de Servicio al Cliente en Odoo",
  "3": "Ingles Nivel 1 - Survival English",
  "4": "Ingles Nivel 2 - Presente y rutina",
  "5": "Ingles Nivel 3 - Pasado y futuro",
  "6": "Ingles Nivel 4 - Conversacion real",
  "7": "Ingles Nivel 0 - Desde cero",
  "8": "Flexi-Cuotas - Proceso de credito",
  "9": "SUMAS - Programa de Lealtad y Reactivacion",
};
const TOTAL_MODULES_OPTO = Object.keys(MODULE_NAMES_OPTO).length;

// (Opcional) Seguridad: si en tu app guardas el rol del usuario logueado en
// window.CVP_CURRENT_ROLE, el panel solo abrirá para "admin".
// Si no lo defines, el panel abre normalmente.
const ENFORCE_ADMIN_ONLY = true;

// ─────────────────────────────────────────────────────────────
// 👑 ADMINS SUPREMOS (los ÚNICOS que pueden hacer cambios)
// Los demás correos que tengan acceso al panel solo podrán VER,
// no modificar nada. Agrega aquí los correos con permiso total.
// ─────────────────────────────────────────────────────────────
const SUPER_ADMINS = [
  "oskarmchdo@gmail.com"
];

// ─────────────────────────────────────────────────────────────
// 🧹 CORREOS EXCLUIDOS DE LAS ESTADÍSTICAS
// Estos correos (admins y visores) NO aparecerán en las gráficas,
// promedios, leaderboard ni conteos del panel, porque no son
// alumnos y ensucian los datos. Agrega aquí los que quieras ocultar.
// ─────────────────────────────────────────────────────────────
const EXCLUDED_EMAILS = [
  "oskarmchdo@gmail.com",
  "alevargas93@hotmail.com",
  "erick.ramirez@opticascvmas.com"
];

// ¿El usuario que está viendo el panel puede editar?
// (true solo si su correo está en SUPER_ADMINS)
function currentCanEdit() {
  try {
    const email = (window.auth && window.auth.currentUser && window.auth.currentUser.email) || "";
    return SUPER_ADMINS.includes(email);
  } catch (e) { return false; }
}

// Devuelve el nombre del módulo a partir de su clave (según la vista activa)
function moduleName(key) {
  const names = CVP.view === "optometras" ? MODULE_NAMES_OPTO : MODULE_NAMES;
  return names[key] || ("Módulo " + key);
}

// Devuelve todos los intentos de un módulo para un usuario (ordenados por fecha)
function allAttemptsForModule(uid, moduleKey) {
  const intentos = cvxHistDe(uid).filter(h =>
    h.uid === uid && String(h.moduleId) === String(moduleKey) && h.score != null);
  intentos.sort((a, b) => new Date(a.date) - new Date(b.date));
  return intentos;
}

// Muestra una fecha ISO (UTC) en hora de El Salvador (UTC-6), formato legible
function fechaElSalvador(iso) {
  if (!iso) return "No disponible";
  try {
    const f = new Date(iso);
    return f.toLocaleString("es-SV", {
      timeZone: "America/El_Salvador",
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hour12: false
    });
  } catch (e) {
    return iso.replace("T", " ").slice(0, 16);
  }
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
  history: [],
  range: null,
  ready: false,
  view: "asesores"   // "asesores" | "optometras"
};


/* ============================================================================
   3) ABRIR PANEL  ·  función principal
   ========================================================================== */
window.openAdminPanel = async function () {

  // --- Seguridad básica: solo admins o visores ---
  if (ENFORCE_ADMIN_ONLY &&
      typeof window.CVP_CURRENT_ROLE !== "undefined" &&
      window.CVP_CURRENT_ROLE !== "admin" &&
      window.CVP_CURRENT_ROLE !== "viewer" &&
      window.CVP_CURRENT_ROLE !== "admin_opto") {
    alert("Acceso restringido: solo administradores.");
    return;
  }

  const panel = document.getElementById("admin-panel");
  const container = document.getElementById("admin-users");
  panel.style.display = "block";
  container.innerHTML = `<div class="cvp-loading">Cargando panel CV+…</div>`;

  // Si es admin_opto: fijar vista en optometras desde el inicio
  if (window.CVP_CURRENT_ROLE === "admin_opto") {
    CVP.view = "optometras";
  }

  // --- Estilos (se inyectan una sola vez) ---
  injectStyles();

  // --- Cargar datos ---
  if (window.CVP_MOCK) {
    // MODO DEMO: datos de ejemplo (para previsualizar sin Firebase)
    CVP.users   = window.CVP_MOCK.users;
    CVP.scores  = window.CVP_MOCK.scores;
    CVP.history = window.CVP_MOCK.history || [];
    CVP.followMarks = window.CVP_MOCK.followMarks || {};
  } else {
    // MODO REAL: Firebase
    const { collection, getDocs } = await import(
      "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js"
    );
    const usersSnap   = await getDocs(collection(window.db, "users"));
    const scoresSnap  = await getDocs(collection(window.db, "quiz_scores"));
    CVP.users   = [];
    CVP.scores  = [];
    CVP.history = [];
    usersSnap.forEach(d => CVP.users.push({ id: d.id, ...d.data() }));
    scoresSnap.forEach(d => CVP.scores.push({ id: d.id, ...d.data() }));
    // Histórico (Plan B). Si la colección no existe aún, queda vacío sin romper nada.
    try {
      const histSnap = await getDocs(collection(window.db, "quiz_history"));
      histSnap.forEach(d => CVP.history.push({ id: d.id, ...d.data() }));
    } catch (e) { console.warn("Sin histórico todavía:", e); }
    // Marcas de "contactado" del tab Seguimiento
    CVP.followMarks = {};
    try {
      const fSnap = await getDocs(collection(window.db, "admin_followups"));
      fSnap.forEach(d => { CVP.followMarks[d.id] = d.data(); });
    } catch (e) { /* sin permisos o sin datos: queda vacío */ }
  }
  CVP.ready = true;
  CVP.range = null; // null = "Cualquier fecha" (comportamiento original)

  // 🧹 Quitar a los admins/visores (staff) para que no ensucien las estadísticas.
  // Se identifican por correo; también se quitan sus notas e histórico.
  const excluded = EXCLUDED_EMAILS.map(e => e.toLowerCase());
  const excludedIds = CVP.users
    .filter(u => excluded.includes((u.email || "").toLowerCase()))
    .map(u => u.id);
  CVP.users   = CVP.users.filter(u => !excluded.includes((u.email || "").toLowerCase()));
  CVP.scores  = CVP.scores.filter(s => !excludedIds.includes(s.id));
  CVP.history = CVP.history.filter(h => !excludedIds.includes(h.uid));
  cvxIndexarHistorial();

  // --- Calcular todo y dibujar ---
  const data = computeData(CVP.range);
  container.innerHTML = renderShell(data);

  // --- Conectar eventos (pestañas, búsqueda, filtros, calendario) ---
  wireUpTabs();
  wireUpUserFilters();
  wireUpCalendar();

  // --- Dibujar gráficas (carga Chart.js si hace falta) ---
  await loadChartJs();
  drawCharts(data);
};

window.closeAdminPanel = function () {
  document.getElementById("admin-panel").style.display = "none";
};

// Cambia entre vista de Asesores y Optometristas
window.cvpSetView = async function(view) {
  CVP.view = view;
  CVP.range = null;
  if (CVP.selectedDays) CVP.selectedDays = new Set();
  CVP.calOpen = false;

  const data = computeData(CVP.range);
  const container = document.getElementById("admin-users");
  container.innerHTML = renderShell(data);

  wireUpTabs();
  wireUpUserFilters();
  wireUpCalendar();
  await loadChartJs();
  drawCharts(data);
};


/* ============================================================================
   4) CÁLCULOS  ·  toda la lógica de datos en un solo lugar
   computeData(range) acepta un rango opcional de fechas (Plan B).
   ========================================================================== */
/* ----------------------------------------------------------------------------
   Reconstruye, por usuario, la misma estructura que tiene CVP.scores
   (stats + scores por módulo) pero usando SOLO los intentos del histórico
   que caen dentro del rango de fechas elegido. Así el panel completo
   (dashboard, leaderboard, módulos, analíticas) refleja ese periodo real.
   range = { from: Date, to: Date }
---------------------------------------------------------------------------- */
// Día calendario en hora de El Salvador, formato "YYYY-MM-DD"
// Histórico agrupado por persona: se arma una vez al abrir el panel (antes se recorría todo por cada módulo)
function cvxIndexarHistorial() {
  CVP.histByUid = {};
  CVP.history.forEach(h => { (CVP.histByUid[h.uid] = CVP.histByUid[h.uid] || []).push(h); });
}
function cvxHistDe(uid) { return (CVP.histByUid && CVP.histByUid[uid]) || []; }

function svDayKey(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-CA", { timeZone: "America/El_Salvador" });
  } catch (e) { return ""; }
}

// Preguntas falladas del ÚLTIMO intento de un usuario en un módulo (desde quiz_history)
function latestWrongForModule(uid, moduleKey) {
  const intentos = cvxHistDe(uid).filter(h =>
    h.uid === uid && String(h.moduleId) === String(moduleKey) && Array.isArray(h.wrong));
  if (!intentos.length) return [];
  // el más reciente por fecha
  intentos.sort((a, b) => new Date(b.date) - new Date(a.date));
  return intentos[0].wrong || [];
}

function buildScoresFromHistory(range) {
  let inRange;
  if (range && range.days) {
    // Modo días/semana: solo los intentos cuyo día (hora El Salvador) está marcado
    const set = new Set(range.days);
    inRange = CVP.history.filter(h => h.date && set.has(svDayKey(h.date)));
  } else if (range && range.from && range.to) {
    // Modo rango por timestamp (compatibilidad)
    inRange = CVP.history.filter(h => {
      if (!h.date) return false;
      const t = new Date(h.date).getTime();
      return t >= range.from.getTime() && t <= range.to.getTime();
    });
  } else {
    inRange = [];
  }

  // Agrupar por usuario y por módulo
  const byUser = {};
  inRange.forEach(h => {
    if (!byUser[h.uid]) byUser[h.uid] = {};
    const mod = String(h.moduleId);
    if (!byUser[h.uid][mod]) byUser[h.uid][mod] = [];
    byUser[h.uid][mod].push(h);
  });

  // Para cada usuario, armar { id, scores:{mod:{...}}, stats:{...} }
  return Object.entries(byUser).map(([uid, mods]) => {
    const scoresObj = {};
    let allScores = [];
    let totalAttempts = 0;

    Object.entries(mods).forEach(([mod, attempts]) => {
      // ordenar por fecha para saber cuál fue la última nota del periodo
      attempts.sort((a, b) => new Date(a.date) - new Date(b.date));
      const notes = attempts.map(a => a.score);
      const last = attempts[attempts.length - 1];
      scoresObj[mod] = {
        average: Math.round(notes.reduce((x, y) => x + y, 0) / notes.length),
        lastScore: last.score,
        attempts: attempts.length,
        lastActivity: last.date
      };
      allScores = allScores.concat(notes);
      totalAttempts += attempts.length;
    });

    const overall = allScores.length
      ? Math.round(allScores.reduce((x, y) => x + y, 0) / allScores.length) : 0;

    return {
      id: uid,
      scores: scoresObj,
      stats: {
        totalQuizzes: Object.keys(scoresObj).length,
        overallAverage: overall,
        totalAttempts
      }
    };
  });
}

function computeData(range) {
  // Filtrar usuarios según la vista activa
  const users = CVP.view === "optometras"
    ? CVP.users.filter(u => u.role === "optometra")
    : CVP.users.filter(u => u.role !== "optometra");
  const TOTAL_MOD = CVP.view === "optometras" ? TOTAL_MODULES_OPTO : TOTAL_MODULES;
  const now = new Date();

  // Si hay un rango de fechas, reconstruimos los "scores" SOLO con los
  // intentos del histórico que caen dentro del periodo. Si no hay rango,
  // usamos los datos de siempre (comportamiento original, no cambia nada).
  const scores = range ? buildScoresFromHistory(range) : CVP.scores;

  const scoreOf = (uid) => scores.find(s => s.id === uid);
  // Compara días calendario en El Salvador (no solo horas transcurridas)
  // Así "ayer a las 23:59" siempre cuenta como 1 día atrás, no 0.
  const daysSince = (iso) => {
    if (!iso) return Infinity;
    try {
      const loginDay = new Date(iso).toLocaleDateString("en-CA", { timeZone: "America/El_Salvador" });
      const todayDay = now.toLocaleDateString("en-CA", { timeZone: "America/El_Salvador" });
      return Math.round((new Date(todayDay) - new Date(loginDay)) / 86400000);
    } catch(e) {
      return Math.floor((now - new Date(iso)) / 86400000);
    }
  };

  // ---- Enriquecer cada usuario ----
  const enriched = users.map(u => {
    const sc = scoreOf(u.id) || {};
    const stats = sc.stats || {};
    const scoreMap = sc.scores || {};

    // Solo mostrar módulos que pertenecen a la vista activa (evita mezcla de IDs)
    const validKeys = new Set(Object.keys(CVP.view === "optometras" ? MODULE_NAMES_OPTO : MODULE_NAMES));
    const moduleEntries = Object.entries(scoreMap)
      .filter(([key, v]) => typeof v === "object" && v !== null && validKeys.has(key))
      .map(([key, v]) => ({
        key,
        name: moduleName(key),
        average:   Math.round(v.average   || 0),
        lastScore: Math.round(v.lastScore || 0),
        attempts:  v.attempts || 0,
        wrong:     latestWrongForModule(u.id, key)   // preguntas falladas (último intento)
      }));

    const d = daysSince(u.lastLogin);
    let status = "inactivo", statusLabel = "Inactivo";
    if (d === 0)     { status = "hoy";    statusLabel = "Activo hoy"; }
    else if (d <= 7) { status = "semana"; statusLabel = "Activo esta semana"; }

    return {
      id: u.id,
      name: u.name || u.email || "Sin nombre",
      email: u.email || "Sin correo",
      branch: u.branch || "Sin sucursal",
      position: u.position || "Sin cargo",
      role: u.role || u.rol || "participant",  // tolera 'rol' y 'role'
      lastLogin: u.lastLogin || null,
      lastSessionDuration: (() => {
        // Preferir cálculo en tiempo real: lastSeen - sessionStart
        if (u.lastSeen && u.sessionStart) {
          const mins = Math.round(
            (new Date(u.lastSeen) - new Date(u.sessionStart)) / 60000
          );
          return mins >= 0 ? mins : null;
        }
        // Fallback: duración guardada al cerrar sesión
        return u.lastSessionDuration || null;
      })(),
      daysSince: d,
      status, statusLabel,
      avg: Math.round(stats.overallAverage || 0),
      totalQuizzes: stats.totalQuizzes || moduleEntries.length,
      totalAttempts: stats.totalAttempts ||
                     moduleEntries.reduce((a, m) => a + m.attempts, 0),
      completed: moduleEntries.length,
      totalMod: TOTAL_MOD,
      progress: Math.round((moduleEntries.length / TOTAL_MOD) * 100),
      modules: moduleEntries
    };
  });

  // ---- Globales ----
  const withAvg = enriched.filter(u => u.avg > 0);
  const globalAverage = withAvg.length
    ? Math.round(withAvg.reduce((a, u) => a + u.avg, 0) / withAvg.length) : 0;

  const totalQuizzes  = enriched.reduce((a, u) => a + u.totalQuizzes, 0);
  const totalAttempts = enriched.reduce((a, u) => a + u.totalAttempts, 0);
  const activeToday   = enriched.filter(u => u.daysSince === 0).length;
  const activeWeek    = enriched.filter(u => u.daysSince <= 7).length;
  const inactive      = enriched.length - activeWeek;

  // ── Tasa de participación ──────────────────────────────────────────────────
  const participating    = enriched.filter(u => u.completed > 0).length;
  const participationRate = enriched.length > 0
    ? Math.round((participating / enriched.length) * 100) : 0;

  // ── Tasa de aprobación (intentos con score ≥80 / total intentos) ──────────
  const relevantUids    = new Set(users.map(u => u.id));
  const relevantHistory = CVP.history.filter(h => relevantUids.has(h.uid) && h.score != null);
  const approvedCount   = relevantHistory.filter(h => h.score >= 80).length;
  const approvalRate    = relevantHistory.length > 0
    ? Math.round((approvedCount / relevantHistory.length) * 100) : 0;

  // ── Tendencia semanal (últimas 6 semanas, promedio de notas) ──────────────
  const weeklyTrend = [];
  for (let i = 5; i >= 0; i--) {
    const end   = new Date(now); end.setDate(now.getDate() - i * 7);
    const start = new Date(end); start.setDate(end.getDate() - 6);
    const entries = relevantHistory.filter(h => {
      const d = new Date(h.date); return d >= start && d <= end;
    });
    const avg = entries.length > 0
      ? Math.round(entries.reduce((s, h) => s + h.score, 0) / entries.length)
      : null;
    const label = start.toLocaleDateString("es-SV", {
      day: "numeric", month: "short", timeZone: "America/El_Salvador"
    });
    weeklyTrend.push({ label, avg, count: entries.length });
  }

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

  // ---- Quizzes realizados por día (últimos 7 días, dato real del histórico) ----
  // Usa quiz_history (cada intento tiene fecha). El día se calcula en hora de
  // El Salvador para que los quizzes caigan en el día correcto.
  const dayLabels = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const last7 = [];
  // Conteo de intentos por día (clave "YYYY-MM-DD" en hora SV)
  const porDia = {};
  CVP.history.forEach(h => {
    if (!h.date) return;
    const k = svDayKey(h.date);
    porDia[k] = (porDia[k] || 0) + 1;
  });
  for (let i = 6; i >= 0; i--) {
    const day = new Date(now); day.setDate(now.getDate() - i);
    const key = day.toLocaleDateString("en-CA", { timeZone: "America/El_Salvador" });
    last7.push({ label: dayLabels[day.getDay()], count: porDia[key] || 0 });
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

  const extra = cvxExtras(enriched, relevantHistory, range, now);

  return CVP._last = Object.assign({
    enriched, globalAverage, totalQuizzes, totalAttempts,
    activeToday, activeWeek, inactive, totalUsers: enriched.length,
    participating, participationRate, approvalRate, weeklyTrend,
    ranking, bestUser, branchStats, positionStats, moduleStats, hardestModule,
    last7, buckets, lowPerformers, noActivity7, neverLogged, alerts
  }, extra);
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


// ── v2: indicadores adicionales (sin leer nada nuevo de Firebase) ───────────
const CVX_MIN_MODS = 3;          // mínimo de módulos para entrar al ranking
const CVX_DIAS_INACTIVO = 7;
// Cohorte de ingreso: campo "cohorte" del usuario o texto "(Ingreso Junio)" en el nombre
function cvxCohorte(u) {
  if (u.cohorte) return String(u.cohorte);
  const m = /\(\s*ingreso\s+([^)]+)\)/i.exec(u.name || '');
  if (!m) return '';
  const t = m[1].trim().toLowerCase();
  return t.charAt(0).toUpperCase() + t.slice(1);
}
const CVX_MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
function cvxShort(name) {
  const n = String(name).replace(/^Ingles Nivel (\d).*/, 'Inglés $1').replace(/ - .*$/, '');
  return n.length > 24 ? n.slice(0, 23) + '…' : n;
}

function cvxExtras(enriched, relevantHistory, range, now) {
  const enRango = h => {
    if (!range) return true;
    if (range.days) return new Set(range.days).has(svDayKey(h.date));
    if (range.from && range.to) { const t = new Date(h.date).getTime(); return t >= range.from.getTime() && t <= range.to.getTime(); }
    return true;
  };
  const hist = relevantHistory.filter(h => h.date && enRango(h));

  // Semana actual vs. anterior (siempre relativa a hoy)
  const ventana = (desde, hasta) => {
    const xs = relevantHistory.filter(h => { const t = (now - new Date(h.date)) / 86400000; return t >= desde && t < hasta; });
    return { count: xs.length, avg: xs.length ? Math.round(xs.reduce((s, h) => s + h.score, 0) / xs.length) : null };
  };
  const week = { cur: ventana(0, 7), prev: ventana(7, 14) };

  // Aprobación por módulo (última nota ≥ 80), no por intento
  let modAttempted = 0, modApproved = 0;
  enriched.forEach(u => u.modules.forEach(m => { modAttempted++; if (m.lastScore >= 80) modApproved++; }));
  const modApprovalRate = modAttempted ? Math.round(modApproved / modAttempted * 100) : 0;

  // Quizzes por día · 14 días · solo la vista activa
  const porDia = {};
  relevantHistory.forEach(h => { if (h.date) { const k = svDayKey(h.date); porDia[k] = (porDia[k] || 0) + 1; } });
  const last14 = [];
  for (let i = 13; i >= 0; i--) {
    const day = new Date(now); day.setDate(now.getDate() - i);
    const key = day.toLocaleDateString("en-CA", { timeZone: "America/El_Salvador" });
    last14.push({ label: day.toLocaleDateString("es-SV", { day: "numeric", month: "short", timeZone: "America/El_Salvador" }), count: porDia[key] || 0 });
  }

  // Ranking justo: 70% promedio + 30% avance, mínimo de módulos
  const indice = u => Math.round(u.avg * 0.7 + u.progress * 0.3);
  const fairRanking = enriched.filter(u => u.completed >= CVX_MIN_MODS)
    .map(u => Object.assign({}, u, { indice: indice(u) }))
    .sort((a, b) => b.indice - a.indice || b.avg - a.avg);
  const bmap = {};
  enriched.filter(u => u.completed > 0).forEach(u => {
    const k = u.branch; if (!bmap[k]) bmap[k] = { sum: 0, n: 0, avg: 0 };
    bmap[k].sum += indice(u); bmap[k].avg += u.avg; bmap[k].n++;
  });
  const branchFair = Object.entries(bmap).filter(([, v]) => v.n >= 2)
    .map(([name, v]) => ({ name, people: v.n, indice: Math.round(v.sum / v.n), avg: Math.round(v.avg / v.n) }))
    .sort((a, b) => b.indice - a.indice);

  // Diagnóstico por módulo + preguntas más falladas (del campo "wrong" del histórico)
  const md = {};
  enriched.forEach(u => u.modules.forEach(m => {
    if (!md[m.key]) md[m.key] = { key: m.key, name: m.name, sum: 0, n: 0, ok: 0, attempts: 0 };
    const x = md[m.key]; x.sum += m.average; x.n++; x.attempts += m.attempts; if (m.lastScore >= 80) x.ok++;
  }));
  const wq = {};
  hist.forEach(h => (Array.isArray(h.wrong) ? h.wrong : []).forEach(w => {
    if (!w || !w.q) return;
    const mk = String(h.moduleId); if (!wq[mk]) wq[mk] = {};
    const q = wq[mk][w.q] || (wq[mk][w.q] = { q: w.q, n: 0, correcta: w.correcta || '', errores: {} });
    q.n++; if (w.tuRespuesta) q.errores[w.tuRespuesta] = (q.errores[w.tuRespuesta] || 0) + 1;
  }));
  const moduleDiag = Object.values(md).map(x => {
    const top = Object.values(wq[x.key] || {}).sort((a, b) => b.n - a.n).slice(0, 5).map(q => {
      const e = Object.entries(q.errores).sort((a, b) => b[1] - a[1])[0];
      return { q: q.q, n: q.n, correcta: q.correcta, error: e ? e[0] : '', errorN: e ? e[1] : 0 };
    });
    return { key: x.key, name: x.name, learners: x.n, avg: Math.round(x.sum / x.n), approved: Math.round(x.ok / x.n * 100),
             avgAttempts: (x.attempts / x.n).toFixed(1), top };
  }).sort((a, b) => a.avg - b.avg);

  // Mapa de calor sucursal × módulo
  const heatMods = Object.values(md).sort((a, b) => Number(a.key) - Number(b.key)).map(x => ({ key: x.key, name: x.name, short: cvxShort(x.name) }));
  const cells = {}, peopleBy = {};
  enriched.forEach(u => {
    if (!u.modules.length) return;
    peopleBy[u.branch] = (peopleBy[u.branch] || 0) + 1;
    u.modules.forEach(m => {
      const k = u.branch + '|' + m.key; const c = cells[k] || (cells[k] = { sum: 0, n: 0 });
      c.sum += m.average; c.n++;
    });
  });
  Object.values(cells).forEach(c => { c.avg = Math.round(c.sum / c.n); });
  const heat = { modules: heatMods, cells,
    branches: Object.keys(peopleBy).sort((a, b) => peopleBy[b] - peopleBy[a] || a.localeCompare(b)).map(n => ({ name: n, people: peopleBy[n] })) };

  // Seguimiento: una fila por persona con sus motivos, ordenada por prioridad
  const marks = CVP.followMarks || {};
  const followups = [];
  enriched.forEach(u => {
    const motivos = [];
    if (u.daysSince === Infinity) motivos.push({ tipo: 'nunca', nivel: 'danger', texto: 'Nunca ingresó', p: 3 });
    else if (u.daysSince > CVX_DIAS_INACTIVO) motivos.push({ tipo: 'inactivo', nivel: 'warn', texto: `${u.daysSince} días sin entrar`, p: 2 });
    if (u.avg > 0 && u.avg < 60) motivos.push({ tipo: 'bajo', nivel: 'danger', texto: `Promedio ${u.avg}%`, p: 3 });
    const reprobados = u.modules.filter(m => m.lastScore < 80 && m.attempts >= 2).map(m => m.name);
    if (reprobados.length) motivos.push({ tipo: 'reprobado', nivel: 'warn', texto: `${reprobados.length} módulo${reprobados.length > 1 ? 's' : ''} sin aprobar`, p: 1 });
    if (u.daysSince !== Infinity && u.completed === 0) motivos.push({ tipo: 'sinavance', nivel: 'warn', texto: 'Entró pero 0 módulos', p: 2 });
    if (!motivos.length) return;
    motivos.sort((a, b) => b.p - a.p);
    followups.push(Object.assign({}, u, { motivos, reprobados, dias: u.daysSince, cohorte: cvxCohorte(u),
      nivel: motivos[0].nivel, prioridad: motivos.reduce((s, m) => s + m.p, 0), contactado: marks[u.id] || null }));
  });
  followups.sort((a, b) => (a.contactado ? 1 : 0) - (b.contactado ? 1 : 0) || b.prioridad - a.prioridad || a.name.localeCompare(b.name));

  // Cohortes de nuevos ingresos
  const cmap = {};
  enriched.forEach(u => { const c = cvxCohorte(u); if (!c) return; (cmap[c] = cmap[c] || []).push(u); });
  const ordenMes = n => { const i = CVX_MESES.indexOf(String(n).toLowerCase().split(' ')[0]); return i === -1 ? 99 : i; };
  const cohorts = Object.entries(cmap).map(([name, ms]) => {
    const conAvg = ms.filter(u => u.avg > 0);
    return { name, people: ms.length,
      progress: Math.round(ms.reduce((s, u) => s + u.progress, 0) / ms.length),
      avg: conAvg.length ? Math.round(conAvg.reduce((s, u) => s + u.avg, 0) / conAvg.length) : 0,
      active: ms.filter(u => u.daysSince <= 7).length,
      members: ms.slice().sort((a, b) => b.progress - a.progress) };
  }).sort((a, b) => ordenMes(b.name) - ordenMes(a.name));

  // "Esta semana atiende": máximo 4 puntos, escritos solos
  const attention = [];
  if (moduleDiag[0] && moduleDiag[0].avg < 80)
    attention.push({ level: cvxTone(moduleDiag[0].avg), title: `Reforzar ${moduleDiag[0].name}`,
      text: `Es el módulo más difícil: ${moduleDiag[0].avg}% de promedio y ${moduleDiag[0].approved}% aprobado.${moduleDiag[0].top[0] ? ' Pregunta más fallada: «' + moduleDiag[0].top[0].q + '».' : ''}` });
  const peorSuc = branchFair[branchFair.length - 1];
  if (peorSuc && peorSuc.indice < 80)
    attention.push({ level: cvxTone(peorSuc.avg), title: `Acompañar a ${peorSuc.name}`, text: `Es la sucursal con menor puntaje (${peorSuc.indice} pts · ${peorSuc.avg}% de promedio) con ${peorSuc.people} personas evaluadas.` });
  const nunca = followups.filter(f => f.motivos.some(m => m.tipo === 'nunca')).length;
  const inact = followups.filter(f => f.motivos.some(m => m.tipo === 'inactivo')).length;
  if (nunca || inact)
    attention.push({ level: 'warn', title: 'Seguimiento pendiente', text: `${nunca} nunca han ingresado y ${inact} llevan más de ${CVX_DIAS_INACTIVO} días sin entrar.` });
  if (week.cur.avg != null && week.prev.avg != null && week.cur.avg < week.prev.avg - 3)
    attention.push({ level: 'danger', title: 'El promedio bajó', text: `Pasó de ${week.prev.avg}% a ${week.cur.avg}% esta semana.` });

  return { week, modApprovalRate, modApproved, modAttempted, last14, fairRanking, branchFair, moduleDiag, heat, followups, cohorts, attention };
}


/* ============================================================================
   5) RENDER  ·  estructura general con pestañas  (v2 · nov 2026)
   La pestaña USUARIOS se conserva tal cual (renderUsers / renderUserCard).
   ========================================================================== */
// Íconos de línea propios (en lugar de emojis en títulos)
const CVX_ICO = {
  resumen:  '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  usuarios: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><circle cx="17.5" cy="9" r="2.5"/><path d="M17 14.5c2.3.2 4 1.8 4.6 4.5"/>',
  ranking:  '<path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0z"/><path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4"/>',
  modulos:  '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>',
  seguimiento: '<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11"/>',
  ingresos: '<circle cx="10" cy="8" r="4"/><path d="M3 21c1-4 3.8-6 7-6 1.6 0 3 .5 4.2 1.3"/><path d="M19 15v6M16 18h6"/>',
  alerta:   '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/>',
  reporte:  '<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h8M9 17h5"/>',
};
const cvxIco = (k, s) => `<svg class="cvx-ico" width="${s||18}" height="${s||18}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${CVX_ICO[k]||''}</svg>`;
const cvxTone = v => v >= 80 ? "ok" : v >= 60 ? "warn" : "danger";
const cvxDelta = (cur, prev, suf) => {
  if (cur == null || prev == null) return `<span class="cvx-delta neutral">sin dato anterior</span>`;
  const d = cur - prev;
  if (d === 0) return `<span class="cvx-delta neutral">= igual que la semana anterior</span>`;
  return `<span class="cvx-delta ${d > 0 ? 'up' : 'down'}">${d > 0 ? '▲' : '▼'} ${Math.abs(d)}${suf || ''} vs. semana anterior</span>`;
};

function renderShell(d) {
  const tab = (k, label, extra) =>
    `<button class="cvp-tab${k === 'dashboard' ? ' active' : ''}" data-tab="${k}">${cvxIco(k === 'dashboard' ? 'resumen' : k)}<span>${label}</span>${extra || ''}</button>`;
  return `
  <div class="cvp cvx">
    <header class="cvp-head">
      <div class="cvp-head-title">
        <div class="cvp-logo"><img src="${window.CVP_LOGO || 'logo-cvplus.svg'}" alt="CV+" style="height:34px;display:block"></div>
        <div>
          <h1>Panel de Capacitación</h1>
          <p>Academia CV+ · ${CVP.view === 'optometras' ? 'Optometristas' : 'Asesores'} · ${d.totalUsers} colaboradores${currentCanEdit() ? "" : " · Solo lectura"}</p>
        </div>
      </div>
      <div class="cvp-head-actions">
        <button class="cvp-btn gold" onclick="cvpReporteDireccion()">${cvxIco('reporte', 16)} Reporte para dirección</button>
        ${currentCanEdit() ? `<button class="cvp-btn ghost" onclick="window.open('herramientas/crear-usuarios.html','_blank')" title="Crear usuarios en Firebase desde un Excel">＋ Alta masiva</button>` : ''}
        <button class="cvp-btn ghost" onclick="cvpExportXLSX()">Excel</button>
        <button class="cvp-btn close" onclick="closeAdminPanel()">✕ Cerrar</button>
      </div>
    </header>

    <div class="cvx-toolbar">
      ${window.CVP_CURRENT_ROLE !== 'admin_opto' ? `
      <div class="cvp-role-toggle">
        <button class="cvp-role-btn ${CVP.view === 'asesores' ? 'active' : ''}" onclick="cvpSetView('asesores')">Asesores</button>
        <button class="cvp-role-btn ${CVP.view === 'optometras' ? 'active' : ''}" onclick="cvpSetView('optometras')">Optometristas</button>
      </div>` : ''}
      <div class="cvp-calbar" id="cvpCalArea"><!-- calendario: lo llena wireUpCalendar() --></div>
    </div>

    <nav class="cvp-tabs">
      ${tab('dashboard', 'Resumen')}
      ${tab('usuarios', 'Usuarios')}
      ${tab('seguimiento', 'Seguimiento', d.followups.length ? `<span class="cvp-badge">${d.followups.filter(f => !f.contactado).length}</span>` : '')}
      ${tab('modulos', 'Módulos')}
      ${tab('ranking', 'Ranking')}
      ${tab('ingresos', 'Nuevos ingresos')}
    </nav>

    <main class="cvp-body">
      <section class="cvp-panel active" data-panel="dashboard">${renderDashboard(d)}</section>
      <section class="cvp-panel" data-panel="usuarios">${renderUsers(d)}</section>
      <section class="cvp-panel" data-panel="seguimiento">${renderSeguimiento(d)}</section>
      <section class="cvp-panel" data-panel="modulos">${renderModules(d)}</section>
      <section class="cvp-panel" data-panel="ranking">${renderLeaderboard(d)}</section>
      <section class="cvp-panel" data-panel="ingresos">${renderCohortes(d)}</section>
    </main>
  </div>`;
}


/* ---------- RESUMEN EJECUTIVO ---------- */
function renderDashboard(d) {
  const w = d.week;
  const kpi = (label, value, sub, delta, tone, meta) => `
    <div class="cvx-kpi ${tone || ''}">
      <div class="cvx-kpi-label">${label}</div>
      <div class="cvx-kpi-value">${value}</div>
      ${meta != null ? `<div class="cvx-meter"><i style="width:${Math.min(100, Math.max(0, meta))}%"></i><b style="left:80%"></b></div>` : ''}
      <div class="cvx-kpi-sub">${sub}</div>
      ${delta || ''}
    </div>`;

  const heat = renderHeatmap(d);
  const atiende = d.attention.length
    ? `<ol class="cvx-attn">${d.attention.map(a => `<li class="${a.level}"><b>${esc(a.title)}</b><span>${esc(a.text)}</span></li>`).join('')}</ol>`
    : `<p class="cvp-empty">Sin puntos críticos esta semana.</p>`;

  return `
    <div class="cvx-kpis">
      ${kpi('Participación', d.participationRate + '%', `${d.participating} de ${d.totalUsers} con al menos un módulo`, '', cvxTone(d.participationRate), d.participationRate)}
      ${kpi('Promedio de la semana', w.cur.avg != null ? w.cur.avg + '%' : '—', `${w.cur.count} quizzes en los últimos 7 días`, cvxDelta(w.cur.avg, w.prev.avg, ' pts'), w.cur.avg != null ? cvxTone(w.cur.avg) : '', w.cur.avg)}
      ${kpi('Módulos aprobados', d.modApprovalRate + '%', `${d.modApproved} de ${d.modAttempted} módulos con última nota ≥ 80%`, '', cvxTone(d.modApprovalRate), d.modApprovalRate)}
      ${kpi('Activos 7 días', d.activeWeek, `de ${d.totalUsers} · ${d.inactive} sin entrar esta semana`, '', d.totalUsers ? cvxTone(Math.round(d.activeWeek / d.totalUsers * 100)) : '', d.totalUsers ? Math.round(d.activeWeek / d.totalUsers * 100) : 0)}
    </div>

    <div class="cvx-row">
      <div class="cvp-card cvx-grow">
        <div class="cvx-card-head"><h3>Tendencia del promedio</h3><span class="cvx-legend"><i class="l1"></i>Promedio semanal <i class="l2"></i>Meta 80%</span></div>
        <div class="cvx-chart"><canvas id="cvpChartTrend"></canvas></div>
      </div>
      <div class="cvp-card cvx-side">
        <div class="cvx-card-head"><h3>${cvxIco('alerta')} Esta semana atiende</h3></div>
        ${atiende}
        <button class="cvx-link" onclick="cvxIrA('seguimiento')">Ver lista de seguimiento →</button>
      </div>
    </div>

    <div class="cvp-card">
      <div class="cvx-card-head"><h3>Sucursal × módulo</h3><span class="cvp-muted">Promedio de cada sucursal en cada módulo. Gris = nadie lo ha hecho.</span></div>
      ${heat}
    </div>

    <div class="cvp-card">
      <div class="cvx-card-head"><h3>Quizzes por día</h3><span class="cvp-muted">Últimos 14 días · ${CVP.view === 'optometras' ? 'optometristas' : 'asesores'}</span></div>
      <div class="cvx-chart small"><canvas id="cvpChartWeek"></canvas></div>
    </div>`;
}

function renderHeatmap(d) {
  const h = d.heat;
  if (!h.branches.length || !h.modules.length) return `<p class="cvp-empty">Aún no hay datos suficientes.</p>`;
  const head = h.modules.map(m => `<th title="${esc(m.name)}"><span>${esc(m.short)}</span></th>`).join('');
  const rows = h.branches.map(b => `<tr><th class="cvx-hb">${esc(b.name)}<small>${b.people} pers.</small></th>${
    h.modules.map(m => {
      const c = h.cells[b.name + '|' + m.key];
      return c ? `<td class="${cvxTone(c.avg)}" title="${esc(b.name)} · ${esc(m.name)}: ${c.avg}% (${c.n} pers.)">${c.avg}</td>` : `<td class="vacio">·</td>`;
    }).join('')}</tr>`).join('');
  return `<div class="cvx-heatwrap"><table class="cvx-heat"><thead><tr><th></th>${head}</tr></thead><tbody>${rows}</tbody></table></div>
    <div class="cvx-heatlegend"><span class="ok">80–100</span><span class="warn">60–79</span><span class="danger">&lt; 60</span></div>`;
}


/* ---------- RANKING (justo) ---------- */
function renderLeaderboard(d) {
  const r = d.fairRanking;
  if (!r.length) return `<div class="cvp-card"><p class="cvp-empty">Todavía nadie tiene ${CVX_MIN_MODS} módulos o más.</p></div>`;
  const podio = r.slice(0, 3).map((u, i) => `
    <div class="cvx-pod p${i + 1}">
      <div class="cvx-pod-pos">${i + 1}</div>
      <b>${esc(u.name)}</b><small>${esc(u.branch)}</small>
      <div class="cvx-pod-score">${u.indice}<span>pts</span></div>
      <small>${u.avg}% promedio · ${u.completed}/${u.totalMod} módulos</small>
    </div>`).join('');
  const resto = r.slice(3, 15).map((u, i) => `
    <div class="cvx-rk">
      <span class="cvx-rk-pos">${i + 4}</span>
      <div class="cvx-rk-info"><b>${esc(u.name)}</b><small>${esc(u.branch)} · ${esc(u.position)}</small></div>
      <div class="cvx-rk-bars"><small>${u.avg}% · ${u.completed}/${u.totalMod}</small><div class="cvp-bar"><div style="width:${u.indice}%"></div></div></div>
      <span class="cvx-rk-score">${u.indice}</span>
    </div>`).join('');
  const suc = d.branchFair.slice(0, 12).map((b, i) => `
    <li><span>${i + 1}. ${esc(b.name)} <small>${b.people} pers.</small></span><b>${b.indice}</b></li>`).join('');
  return `
    <div class="cvp-card">
      <div class="cvx-card-head"><h3>Ranking CV+</h3><span class="cvp-muted">Puntaje = 70% promedio + 30% avance. Entran quienes tienen ${CVX_MIN_MODS} módulos o más.</span></div>
      <div class="cvx-podio">${podio}</div>
      <div class="cvx-rklist">${resto}</div>
    </div>
    <div class="cvp-card">
      <div class="cvx-card-head"><h3>Ranking por sucursal</h3><span class="cvp-muted">Promedio del puntaje de su gente. Solo sucursales con 2 personas o más.</span></div>
      <ul class="cvp-list">${suc || '<li>Sin datos</li>'}</ul>
    </div>`;
}


/* ---------- MÓDULOS (diagnóstico) ---------- */
function renderModules(d) {
  if (!d.moduleDiag.length)
    return `<div class="cvp-card"><p class="cvp-empty">Aún no hay datos de módulos.</p></div>`;
  const filas = d.moduleDiag.map((m, i) => `
    <tr class="cvx-mrow" onclick="cvxToggleMod(${i})">
      <td><b>${esc(m.name)}</b></td>
      <td class="num">${m.learners}</td>
      <td class="num"><span class="cvx-chip ${cvxTone(m.avg)}">${m.avg}%</span></td>
      <td class="num">${m.approved}%</td>
      <td class="num">${m.avgAttempts}</td>
      <td class="cvx-topq">${m.top[0] ? esc(m.top[0].q) : '<span class="cvp-muted">Sin errores registrados</span>'}</td>
      <td class="num">${m.top.length ? '▾' : ''}</td>
    </tr>
    <tr class="cvx-mdet" id="cvxMod${i}" hidden><td colspan="7">
      ${m.top.length ? `<div class="cvx-qlist">${m.top.map(q => `
        <div class="cvx-q">
          <div class="cvx-q-n">${q.n}<small>veces</small></div>
          <div><b>${esc(q.q)}</b>
            ${q.correcta ? `<div class="cvp-wrong-ok">✔ Correcta: ${esc(q.correcta)}</div>` : ''}
            ${q.error ? `<div class="cvp-wrong-bad">✖ Respuesta equivocada más elegida: ${esc(q.error)} (${q.errorN})</div>` : ''}
          </div>
        </div>`).join('')}</div>` : '<p class="cvp-empty">Sin preguntas falladas en el periodo.</p>'}
    </td></tr>`).join('');
  return `
    <div class="cvp-card">
      <div class="cvx-card-head"><h3>Diagnóstico por módulo</h3><span class="cvp-muted">Ordenado del más difícil al más fácil. Toca un módulo para ver sus preguntas más falladas.</span></div>
      <div class="cvx-tablewrap"><table class="cvx-table">
        <thead><tr><th>Módulo</th><th class="num">Personas</th><th class="num">Promedio</th><th class="num">Aprobado</th><th class="num">Intentos por persona</th><th>Pregunta más fallada</th><th></th></tr></thead>
        <tbody>${filas}</tbody>
      </table></div>
    </div>`;
}
window.cvxToggleMod = function (i) {
  const r = document.getElementById('cvxMod' + i);
  if (r) r.hidden = !r.hidden;
};


/* ---------- SEGUIMIENTO ---------- */
function renderSeguimiento(d) {
  if (!d.followups.length)
    return `<div class="cvp-card"><p class="cvp-empty">Nadie necesita seguimiento en este momento.</p></div>`;
  const motivosTxt = { nunca: 'Nunca ingresó', inactivo: 'Sin entrar', bajo: 'Bajo rendimiento', reprobado: 'Módulo sin aprobar', sinavance: 'Entró pero no avanza' };
  const cuenta = {};
  d.followups.forEach(f => f.motivos.forEach(m => { cuenta[m.tipo] = (cuenta[m.tipo] || 0) + 1; }));
  const chips = Object.keys(motivosTxt).filter(k => cuenta[k]).map(k =>
    `<button class="cvx-fchip" data-f="${k}" onclick="cvxFiltrarSeg('${k}', this)">${motivosTxt[k]} <b>${cuenta[k]}</b></button>`).join('');
  const filas = d.followups.map(f => `
    <div class="cvx-seg ${f.nivel}${f.contactado ? ' hecho' : ''}" data-tipos="${f.motivos.map(m => m.tipo).join(' ')}">
      <div class="cvx-seg-main">
        <b>${esc(f.cohorte ? f.name.replace(/\s*\(\s*ingreso[^)]*\)\s*/i, ' ').trim() : f.name)}</b>
        <small>${esc(f.branch)} · ${esc(f.position)}${f.cohorte ? ' · Ingreso ' + esc(f.cohorte) : ''}</small>
        <div class="cvx-seg-tags">${f.motivos.map(m => `<span class="cvx-tag ${m.nivel}">${esc(m.texto)}</span>`).join('')}</div>
      </div>
      <div class="cvx-seg-acc">
        ${f.contactado ? `<span class="cvx-hecho">✓ Contactado ${esc(fechaElSalvador(f.contactado.at).slice(0, 10))}</span>` : ''}
        <button class="cvp-btn ghost dark" onclick="cvxCopiarMsg('${f.id}', this)">Copiar mensaje</button>
        ${currentCanEdit() ? `<button class="cvp-btn ${f.contactado ? 'ghost dark' : 'apply'}" onclick="cvxContactado('${f.id}', this)">${f.contactado ? 'Quitar marca' : 'Marcar contactado'}</button>` : ''}
      </div>
    </div>`).join('');
  return `
    <div class="cvp-card">
      <div class="cvx-card-head"><h3>Seguimiento</h3><span class="cvp-muted">Una fila por persona, ordenada por prioridad. Copia el mensaje para WhatsApp y marca a quién ya contactaste.</span></div>
      <div class="cvx-fchips"><button class="cvx-fchip on" data-f="" onclick="cvxFiltrarSeg('', this)">Todos <b>${d.followups.length}</b></button>${chips}</div>
      <div class="cvx-seglist">${filas}</div>
    </div>`;
}
window.cvxFiltrarSeg = function (tipo, btn) {
  document.querySelectorAll('.cvx-fchip').forEach(b => b.classList.toggle('on', b === btn));
  document.querySelectorAll('.cvx-seg').forEach(r => { r.hidden = !!tipo && r.dataset.tipos.split(' ').indexOf(tipo) === -1; });
};
function cvxMensaje(f) {
  const nombre = (f.name || '').replace(/\s*\(.*\)\s*/g, '').split(' ')[0];
  const m = f.motivos[0] ? f.motivos[0].tipo : '';
  const base = `Hola ${nombre}, te saluda el equipo de Capacitación CV+. `;
  if (m === 'nunca') return base + 'Aún no has ingresado a la Academia CV+. Entra con tu correo y la contraseña que te enviamos; si tienes problemas para entrar, escríbenos y te ayudamos.';
  if (m === 'inactivo') return base + `Hace ${f.dias} días que no entras a la Academia CV+. Te esperan tus módulos pendientes: ${f.completed} de ${f.totalMod} completados. ¡Tú puedes!`;
  if (m === 'bajo') return base + `Revisamos tus resultados (promedio ${f.avg}%). Te recomendamos repasar el contenido y repetir los quizzes; si quieres, agendamos un refuerzo juntos.`;
  if (m === 'reprobado') return base + `Te falta aprobar ${f.reprobados.join(', ')}. Repasa el módulo y vuelve a intentar el quiz: necesitas 80% o más.`;
  return base + 'Vimos que entraste a la Academia CV+ pero aún no completas tu primer módulo. Empieza por ADN CV+: toma pocos minutos.';
}
window.cvxCopiarMsg = function (uid, btn) {
  const f = (CVP._last && CVP._last.followups || []).find(x => x.id === uid);
  if (!f) return;
  const txt = cvxMensaje(f);
  const ok = () => { const t = btn.textContent; btn.textContent = '✓ Copiado'; setTimeout(() => { btn.textContent = t; }, 1600); };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(ok, () => window.prompt('Copia el mensaje:', txt));
  else window.prompt('Copia el mensaje:', txt);
};
window.cvxContactado = async function (uid, btn) {
  if (!currentCanEdit()) return;
  const ya = CVP.followMarks[uid];
  btn.disabled = true;
  try {
    if (!window.CVP_MOCK) {
      const { doc, setDoc, deleteDoc } = await import("https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js");
      if (ya) await deleteDoc(doc(window.db, "admin_followups", uid));
      else await setDoc(doc(window.db, "admin_followups", uid), { at: new Date().toISOString(), by: window.CVP_CURRENT_EMAIL || "admin" });
    }
    if (ya) delete CVP.followMarks[uid]; else CVP.followMarks[uid] = { at: new Date().toISOString() };
    cvxRedibujar('seguimiento');
  } catch (e) { btn.disabled = false; alert('No se pudo guardar. Revisa tu conexión.'); }
};


/* ---------- NUEVOS INGRESOS ---------- */
function renderCohortes(d) {
  if (!d.cohorts.length)
    return `<div class="cvp-card"><p class="cvp-empty">No hay cohortes de ingreso identificadas. Se detectan por el texto «(Ingreso Mes)» en el nombre.</p></div>`;
  const tarjetas = d.cohorts.map(c => `
    <div class="cvx-coh">
      <div class="cvx-coh-head"><h3>Ingreso ${esc(c.name)}</h3><span>${c.people} personas</span></div>
      <div class="cvx-coh-kpis">
        <div><b>${c.progress}%</b><small>avance promedio</small></div>
        <div><b>${c.avg ? c.avg + '%' : '—'}</b><small>promedio</small></div>
        <div><b>${c.active}/${c.people}</b><small>activos 7 días</small></div>
      </div>
      <div class="cvx-coh-list">${c.members.map(u => `
        <div class="cvx-coh-m ${u.progress === 0 ? 'cero' : ''}">
          <span>${esc(u.name.replace(/\s*\(.*\)\s*/g, ''))}<small>${esc(u.branch)}</small></span>
          <div class="cvp-bar"><div style="width:${u.progress}%"></div></div>
          <b>${u.completed}/${u.totalMod}</b>
        </div>`).join('')}</div>
    </div>`).join('');
  return `
    <div class="cvp-card">
      <div class="cvx-card-head"><h3>Nuevos ingresos por cohorte</h3><span class="cvp-muted">Compara cómo avanza cada grupo de ingreso. En rojo, quienes no han completado ningún módulo.</span></div>
      <div class="cvx-cohs">${tarjetas}</div>
    </div>`;
}

// Cambiar de pestaña desde un botón
window.cvxIrA = function (name) {
  const t = document.querySelector(`.cvp-tab[data-tab="${name}"]`);
  if (t) t.click();
};
// Redibuja el panel conservando la pestaña activa
async function cvxRedibujar(activeName) {
  const data = computeData(CVP.range);
  const container = document.getElementById("admin-users");
  const y = (document.getElementById("admin-panel") || {}).scrollTop || 0;
  container.innerHTML = renderShell(data);
  wireUpTabs(); wireUpUserFilters(); wireUpCalendar();
  cvxIrA(activeName || 'dashboard');
  await loadChartJs(); drawCharts(data);
  const p = document.getElementById("admin-panel"); if (p) p.scrollTop = y;
}


/* ---------- REPORTE PARA DIRECCIÓN (una página) ---------- */
window.cvpReporteDireccion = function () {
  const d = CVP._last || computeData(CVP.range);
  const fecha = new Date().toLocaleDateString("es-SV", { year: "numeric", month: "long", day: "numeric", timeZone: "America/El_Salvador" });
  const top = d.branchFair.slice(0, 3), bot = d.branchFair.slice(-3).reverse();
  const mods = d.moduleDiag.slice(0, 3);
  const html = `
    <div class="cvx-rep-doc">
      <div class="cvx-rep-top"><img src="${window.CVP_LOGO || 'logo-cvplus.svg'}" alt="CV+"><div><h2>Academia CV+ · Reporte de capacitación</h2><p>${CVP.view === 'optometras' ? 'Optometristas' : 'Asesores'} · ${fecha}${CVP.range ? ' · periodo seleccionado' : ''}</p></div></div>
      <div class="cvx-rep-kpis">
        <div><b>${d.participationRate}%</b><span>Participación</span></div>
        <div><b>${d.week.cur.avg != null ? d.week.cur.avg + '%' : '—'}</b><span>Promedio semana</span></div>
        <div><b>${d.modApprovalRate}%</b><span>Módulos aprobados</span></div>
        <div><b>${d.activeWeek}/${d.totalUsers}</b><span>Activos 7 días</span></div>
      </div>
      <h4>Lo que hay que atender</h4>
      <ul>${d.attention.map(a => `<li><b>${esc(a.title)}:</b> ${esc(a.text)}</li>`).join('') || '<li>Sin puntos críticos.</li>'}</ul>
      <div class="cvx-rep-2">
        <div><h4>Sucursales con mejor resultado</h4>${top.length ? `<ol>${top.map(b => `<li>${esc(b.name)} · ${b.indice} pts</li>`).join('')}</ol>` : '<p class="cvp-muted">Aún no hay sucursales con 2 personas evaluadas o más.</p>'}</div>
        <div><h4>Sucursales a reforzar</h4>${bot.length ? `<ol>${bot.map(b => `<li>${esc(b.name)} · ${b.indice} pts</li>`).join('')}</ol>` : '<p class="cvp-muted">Aún no hay sucursales con 2 personas evaluadas o más.</p>'}</div>
      </div>
      <h4>Módulos más difíciles</h4>
      <ol>${mods.map(m => `<li>${esc(m.name)} · ${m.avg}% promedio${m.top[0] ? ' · más fallada: «' + esc(m.top[0].q) + '»' : ''}</li>`).join('')}</ol>
      <p class="cvx-rep-pie">Equipo de Capacitación CV+</p>
    </div>`;
  let ov = document.getElementById('cvxRep');
  if (!ov) { ov = document.createElement('div'); ov.id = 'cvxRep'; document.body.appendChild(ov); }
  ov.innerHTML = `<div class="cvx-rep-bar"><b>Reporte para dirección</b><span><button class="cvp-btn apply" onclick="window.print()">Imprimir o guardar PDF</button> <button class="cvp-btn ghost dark" onclick="document.getElementById('cvxRep').remove()">Cerrar</button></span></div>${html}`;
};


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
      <select id="cvpFilterDate">
        <option value="">📅 Cualquier fecha</option>
        <option value="1">Último día</option>
        <option value="7">Últimos 7 días</option>
        <option value="15">Últimos 15 días</option>
        <option value="30">Últimos 30 días</option>
        <option value="month">Este mes</option>
      </select>
    </div>`;

  const cards = d.enriched
    .sort((a, b) => b.avg - a.avg)
    .map(u => renderUserCard(u)).join("");

  return filters + `<div id="cvpUserList" class="cvp-grid users">${cards}</div>`;
}

function renderUserCard(u) {
  const statusClass = u.status; // hoy / semana / inactivo

  const isOpto = CVP.view === "optometras";

  const history = u.modules.length ? u.modules.map(m => {
    // Para optometristas usamos lastScore como nota principal
    const mainScore = isOpto ? m.lastScore : m.average;
    const c = mainScore >= 80 ? "ok" : mainScore >= 60 ? "warn" : "danger";
    const label = mainScore >= 80 ? "Excelente" : mainScore >= 60 ? "Regular" : "Necesita refuerzo";

    // Preguntas falladas (último intento)
    const wrong = Array.isArray(m.wrong) ? m.wrong : [];
    const falladas = wrong.length ? `
        <div class="cvp-wrong">
          <div class="cvp-wrong-title">❌ Preguntas falladas (último intento): ${wrong.length}</div>
          ${wrong.map(w => `
            <div class="cvp-wrong-item">
              <div class="cvp-wrong-q">${esc(w.q)}</div>
              ${w.correcta ? `<div class="cvp-wrong-ok">✔️ Correcta: ${esc(w.correcta)}</div>` : ``}
              ${w.tuRespuesta ? `<div class="cvp-wrong-bad">✖️ Respondió: ${esc(w.tuRespuesta)}</div>` : ``}
            </div>`).join("")}
        </div>` : `<div class="cvp-wrong-none">✅ Sin errores en el último intento</div>`;

    // Historial de intentos individuales (solo para optometristas)
    const allAttempts = isOpto ? allAttemptsForModule(u.id, m.key) : [];
    const attemptsHTML = isOpto ? `
      <div class="cvp-attempts">
        <div class="cvp-attempts-title">📋 Historial de intentos (${allAttempts.length})</div>
        ${allAttempts.length ? allAttempts.map((a, i) => {
          const ac = a.score >= 80 ? "ok" : a.score >= 60 ? "warn" : "danger";
          return `<div class="cvp-attempt-row ${ac}">
            <span>Intento ${i + 1} &nbsp;<small>${fechaElSalvador(a.date)}</small></span>
            <b>${a.score}%</b>
          </div>`;
        }).join("") : `<div class="cvp-wrong-none">Sin intentos en el historial aún</div>`}
      </div>` : "";

    return `
      <div class="cvp-quiz ${c}">
        <div class="cvp-quiz-head cvp-quiz-toggle" onclick="cvpToggleQuiz(this, event)">
          <div>
            <div class="cvp-quiz-name">📘 ${esc(m.name)}</div>
            <div class="cvp-quiz-status">${label}</div>
          </div>
          <div class="cvp-quiz-right">
            <div class="cvp-quiz-avg">${mainScore}%</div>
            ${wrong.length ? `<span class="cvp-quiz-errbadge">${wrong.length} ❌</span>` : ``}
          </div>
        </div>
        <div class="cvp-quiz-meta">
          ${isOpto
            ? `<span>🎯 Última nota: <b>${m.lastScore}%</b></span>
               <span>🔄 Intentos: <b>${m.attempts}</b></span>`
            : `<span>🎯 Última nota: <b>${m.lastScore}%</b></span>
               <span>📊 Promedio: <b>${m.average}%</b></span>
               <span>🔄 Intentos: <b>${m.attempts}</b></span>`}
        </div>
        <div class="cvp-bar"><div style="width:${mainScore}%"></div></div>
        ${attemptsHTML}
        <div class="cvp-quiz-wrongwrap" style="display:none">${falladas}</div>
      </div>`;
  }).join("") : `<p class="cvp-empty">Sin quizzes registrados</p>`;

  return `
  <div class="cvp-user-card"
       data-name="${esc(u.name).toLowerCase()}"
       data-email="${esc(u.email).toLowerCase()}"
       data-branch="${esc(u.branch)}"
       data-position="${esc(u.position)}"
       data-status="${u.status}"
       data-login="${u.lastLogin ? esc(u.lastLogin) : ''}">

    <div class="cvp-user-head" onclick="cvpToggleCard(this)">
      <div class="cvp-user-top">
        <h3>${esc(u.name)}</h3>
        <span class="cvp-pill ${statusClass}">● ${u.statusLabel}</span>
      </div>
      <p class="cvp-muted">${esc(u.email)}</p>
      <p class="cvp-tags">🏢 ${esc(u.branch)} &nbsp;·&nbsp; 💼 ${esc(u.position)} &nbsp;·&nbsp; 🔑 ${esc(u.role)}</p>

      <div class="cvp-mini-stats">
        <div><b style="color:#00B9D6">${u.avg}%</b><span>Promedio</span></div>
        <div><b>${u.totalQuizzes}</b><span>Quizzes</span></div>
        <div><b style="color:#28a745">${u.totalAttempts}</b><span>Intentos</span></div>
      </div>

      <div class="cvp-progress">
        <div class="cvp-progress-head"><b>📚 Progreso</b><span>${u.completed}/${u.totalMod}</span></div>
        <div class="cvp-bar"><div style="width:${u.progress}%"></div></div>
        <small>${u.progress}% completado</small>
      </div>

      <div class="cvp-login-info">
        <span>🕐 Último acceso: <b>${fechaElSalvador(u.lastLogin)}</b></span>
        ${u.lastSessionDuration != null
          ? `<span>⏱️ Duración: <b>${u.lastSessionDuration === 0
              ? '< 2 min'
              : u.lastSessionDuration >= 60
                ? Math.floor(u.lastSessionDuration / 60) + 'h ' + (u.lastSessionDuration % 60) + 'min'
                : u.lastSessionDuration + ' min'}</b></span>`
          : `<span class="cvp-muted">⏱️ Sin dato de duración aún</span>`}
      </div>

      <div class="cvp-expand-hint"><span class="cvp-chevron">▾</span> Ver detalle de quizzes</div>
    </div>

    <div class="cvp-user-detail" style="display:none">
      <p class="cvp-muted">Último login: ${fechaElSalvador(u.lastLogin)}</p>
      <div class="cvp-history"><b>Historial de quizzes</b>${history}</div>

      ${currentCanEdit() ? `
      <div class="cvp-edit">
        <input id="name-${u.id}" value="${esc(u.name)}" placeholder="Nombre">
        <select id="branch-${u.id}">${branchOptions(u.branch)}</select>
        <select id="position-${u.id}">${positionOptions(u.position)}</select>
        <select id="role-${u.id}">
          <option value="participant" ${u.role === "participant" ? "selected" : ""}>participant</option>
          <option value="optometra" ${u.role === "optometra" ? "selected" : ""}>optometra (academia óptica)</option>
          <option value="viewer" ${u.role === "viewer" ? "selected" : ""}>viewer (solo ver)</option>
          <option value="admin" ${u.role === "admin" ? "selected" : ""}>admin</option>
        </select>
        <button class="cvp-btn save" onclick="saveUserInfo('${u.id}')">💾 Guardar cambios</button>
      </div>` : ``}
    </div>
  </div>`;
}

// Expandir / colapsar la ficha de usuario
window.cvpToggleCard = function(headEl) {
  const card = headEl.closest(".cvp-user-card");
  const detail = card.querySelector(".cvp-user-detail");
  const chev = card.querySelector(".cvp-chevron");
  const abierto = detail.style.display !== "none";
  detail.style.display = abierto ? "none" : "block";
  card.classList.toggle("open", !abierto);
  if (chev) chev.textContent = abierto ? "▾" : "▴";
};

// Expandir / colapsar las preguntas falladas de un módulo
window.cvpToggleQuiz = function(headEl, ev) {
  if (ev) ev.stopPropagation(); // no cerrar la ficha del usuario
  const quiz = headEl.closest(".cvp-quiz");
  const wrap = quiz.querySelector(".cvp-quiz-wrongwrap");
  if (!wrap) return;
  const abierto = wrap.style.display !== "none";
  wrap.style.display = abierto ? "none" : "block";
  quiz.classList.toggle("open", !abierto);
};


/* ============================================================================
   6) OPCIONES DE SUCURSAL Y CARGO (para los selects de edición)
   ========================================================================== */
const BRANCHES = ["Metrocentro 1","Metrocentro 2","Plaza Mundo","Metrocentro Santa Ana","Sonsonate","San Miguel","Aguilares","Apopa","Valle Dulce","San Gabriel","Metropolis","Galerias","El Paseo","Zona Rosa","El Casco","Multiplaza","Santa Rosa","Encuentro Zacatecoluca","Zacatecoluca Centro","Usulutan","San Francisco Gotera","San Martin","Unicentro Soyapango","Alta Vista","Encuentro Lourdes","Metrocentro Lourdes","Acajutla","Las Ramblas","Encuentro Santa Ana","Empresarial","SAC","Zaragoza","Puerto de La Libertad","Armenia","San Marcos","Recursos Humanos","Ventas","Mercadeo","Coberturas","Compras"];
const POSITIONS = ["Asesor Visual","Optometra","Capacitador","Supervisor","RRHH","Asesor de Coberturas","Auxiliar"];

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
  // Seguridad: solo los admins supremos pueden guardar cambios
  if (!currentCanEdit()) {
    alert("👁️ Tu cuenta es de solo lectura. No tienes permiso para hacer cambios.");
    return;
  }

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
      if (name === "dashboard") cvpCharts.forEach(c => { try { c.resize(); } catch (e) {} });
    });
  });
}

/* ----------------------------------------------------------------------------
   Convierte la opción elegida en un rango { from, to } de fechas.
   Devuelve null para "Cualquier fecha".
---------------------------------------------------------------------------- */

const CVP_MESES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio",
                   "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

// Recalcula y redibuja TODO el panel según los días seleccionados en el calendario
async function aplicarSeleccionCalendario() {
  const dias = Array.from(CVP.selectedDays || []);
  CVP.range = dias.length ? { days: dias } : null;

  const data = computeData(CVP.range);

  // Conservar la pestaña activa
  const activeTab = document.querySelector(".cvp-tab.active");
  const activeName = activeTab ? activeTab.dataset.tab : "dashboard";

  const container = document.getElementById("admin-users");
  container.innerHTML = renderShell(data);

  document.querySelectorAll(".cvp-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".cvp-panel").forEach(p => p.classList.remove("active"));
  const tabBtn = document.querySelector(`.cvp-tab[data-tab="${activeName}"]`);
  const panel = document.querySelector(`.cvp-panel[data-panel="${activeName}"]`);
  if (tabBtn) tabBtn.classList.add("active");
  if (panel) panel.classList.add("active");

  // Reconstruir el calendario, los filtros, las gráficas
  wireUpTabs();
  wireUpUserFilters();
  wireUpCalendar();
  await loadChartJs();
  drawCharts(data);
}

// Texto resumen de la selección actual
function textoSeleccion() {
  const n = (CVP.selectedDays || new Set()).size;
  if (n === 0) return "Mostrando: todo el histórico";
  if (n === 1) return "Mostrando: 1 día seleccionado";
  return `Mostrando: ${n} días seleccionados`;
}

/* ----------------------------------------------------------------------------
   📅 CALENDARIO INTERACTIVO (reemplaza la barra de periodo)
   Permite elegir mes/año, y seleccionar un RANGO o DÍAS SUELTOS.
   Recalcula todo el panel con el histórico de los días elegidos.
---------------------------------------------------------------------------- */
function wireUpCalendar() {
  const area = document.getElementById("cvpCalArea");
  if (!area) return;

  // Inicializar estado la primera vez
  const now = new Date();
  if (CVP.calYear == null)  CVP.calYear = now.getFullYear();
  if (CVP.calMonth == null) CVP.calMonth = now.getMonth();
  if (!CVP.calMode)         CVP.calMode = "range";   // 'range' | 'days'
  if (!CVP.selectedDays)    CVP.selectedDays = new Set();
  if (CVP.rangeStart === undefined) CVP.rangeStart = null;
  if (CVP.calOpen === undefined) CVP.calOpen = false; // empieza cerrado

  const n = CVP.selectedDays.size;
  const etiqueta = n === 0 ? "Todo el histórico" : (n === 1 ? "1 día" : `${n} días`);

  // Botón disparador + popover (oculto si calOpen=false)
  area.innerHTML = `
    <div class="cvp-cal-wrap">
      <button id="cvpCalToggle" class="cvp-cal-trigger ${n>0?'active':''}">
        📅 Periodo: <b>${etiqueta}</b> <span class="cvp-cal-caret">▾</span>
      </button>
      ${n>0 ? `<button id="cvpCalReset" class="cvp-cal-reset" title="Ver todo">✕</button>` : ``}
      <div id="cvpCalPop" class="cvp-cal-pop" style="display:${CVP.calOpen?'block':'none'}">
        ${renderCalendarHTML()}
      </div>
    </div>`;

  // Abrir/cerrar el calendario
  area.querySelector("#cvpCalToggle").onclick = (e) => {
    e.stopPropagation();
    CVP.calOpen = !CVP.calOpen;
    wireUpCalendar();
  };

  // Botón rápido para quitar el filtro (✕ junto al disparador)
  const resetBtn = area.querySelector("#cvpCalReset");
  if (resetBtn) resetBtn.onclick = (e) => {
    e.stopPropagation();
    CVP.selectedDays = new Set();
    CVP.rangeStart = null;
    CVP.calOpen = false;
    aplicarSeleccionCalendario();
  };

  // Si está cerrado, no hace falta conectar el resto
  if (!CVP.calOpen) {
    if (CVP._calOutside) { document.removeEventListener("click", CVP._calOutside); CVP._calOutside = null; }
    return;
  }

  const pop = area.querySelector("#cvpCalPop");

  // Cerrar al hacer clic fuera del calendario
  if (CVP._calOutside) document.removeEventListener("click", CVP._calOutside);
  CVP._calOutside = (ev) => {
    if (!area.contains(ev.target)) { CVP.calOpen = false; wireUpCalendar(); }
  };
  setTimeout(() => document.addEventListener("click", CVP._calOutside), 0);
  pop.onclick = (e) => e.stopPropagation();

  // --- Controles superiores ---
  pop.querySelector("#cvpCalPrevY").onclick = () => { CVP.calYear--; wireUpCalendar(); };
  pop.querySelector("#cvpCalNextY").onclick = () => { CVP.calYear++; wireUpCalendar(); };
  pop.querySelector("#cvpCalMonth").onchange = (e) => { CVP.calMonth = parseInt(e.target.value,10); wireUpCalendar(); };

  pop.querySelectorAll(".cvp-calmode").forEach(btn => {
    btn.onclick = () => {
      CVP.calMode = btn.dataset.mode;
      CVP.rangeStart = null;
      wireUpCalendar();
    };
  });

  // --- Días ---
  pop.querySelectorAll(".cvp-calday[data-key]").forEach(cell => {
    cell.onclick = () => onClickDay(cell.dataset.key);
  });

  // --- Botones de acción ---
  pop.querySelector("#cvpCalAll").onclick = () => {
    const keys = diasDelMes(CVP.calYear, CVP.calMonth);
    keys.forEach(k => CVP.selectedDays.add(k));
    CVP.rangeStart = null;
    wireUpCalendar();
  };
  pop.querySelector("#cvpCalClear").onclick = () => {
    CVP.selectedDays = new Set();
    CVP.rangeStart = null;
    wireUpCalendar();
  };
  pop.querySelector("#cvpCalApply").onclick = () => {
    CVP.calOpen = false;            // cerrar al aplicar
    aplicarSeleccionCalendario();
  };
}

// Lógica al hacer clic en un día, según el modo
function onClickDay(key) {
  if (CVP.calMode === "days") {
    // Días sueltos: alternar
    if (CVP.selectedDays.has(key)) CVP.selectedDays.delete(key);
    else CVP.selectedDays.add(key);
  } else {
    // Rango: primer clic = inicio; segundo = fin (rellena entre ambos)
    if (!CVP.rangeStart) {
      CVP.selectedDays = new Set([key]);
      CVP.rangeStart = key;
    } else {
      let a = CVP.rangeStart, b = key;
      if (a > b) { const t = a; a = b; b = t; }   // ordenar
      CVP.selectedDays = new Set(rangoDeDias(a, b));
      CVP.rangeStart = null;                        // listo el rango
    }
  }
  wireUpCalendar();
}

// Lista de "YYYY-MM-DD" de todos los días de un mes
function diasDelMes(year, month) {
  const total = new Date(year, month + 1, 0).getDate();
  const out = [];
  for (let d = 1; d <= total; d++) out.push(claveDia(year, month, d));
  return out;
}

// Lista de "YYYY-MM-DD" entre dos fechas (inclusive)
function rangoDeDias(a, b) {
  const out = [];
  let cur = new Date(a + "T00:00:00");
  const end = new Date(b + "T00:00:00");
  while (cur <= end) {
    out.push(cur.toLocaleDateString("en-CA"));
    cur.setDate(cur.getDate() + 1);
  }
  return out;
}

// Clave "YYYY-MM-DD" a partir de año, mes(0-11), día
function claveDia(year, month, day) {
  const mm = String(month + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}

// HTML del calendario
function renderCalendarHTML() {
  const year = CVP.calYear, month = CVP.calMonth;
  const primerDia = new Date(year, month, 1).getDay();        // 0=Dom..6=Sab
  const offset = (primerDia + 6) % 7;                          // para que la semana empiece en Lunes
  const total = new Date(year, month + 1, 0).getDate();

  let celdas = "";
  for (let i = 0; i < offset; i++) celdas += `<div class="cvp-calday empty"></div>`;
  for (let d = 1; d <= total; d++) {
    const key = claveDia(year, month, d);
    const sel = CVP.selectedDays.has(key) ? "sel" : "";
    const ini = (CVP.rangeStart === key) ? "ini" : "";
    celdas += `<div class="cvp-calday ${sel} ${ini}" data-key="${key}">${d}</div>`;
  }

  const opcionesMes = CVP_MESES.map((m, i) =>
    `<option value="${i}" ${i === month ? "selected" : ""}>${m}</option>`).join("");

  return `
    <div class="cvp-cal-top">
      <span class="cvp-cal-title">📅 Periodo a mostrar</span>
      <div class="cvp-cal-modes">
        <button class="cvp-calmode ${CVP.calMode==='range'?'on':''}" data-mode="range">Rango</button>
        <button class="cvp-calmode ${CVP.calMode==='days'?'on':''}" data-mode="days">Días sueltos</button>
      </div>
      <div class="cvp-cal-nav">
        <select id="cvpCalMonth">${opcionesMes}</select>
        <button id="cvpCalPrevY">‹</button>
        <b>${year}</b>
        <button id="cvpCalNextY">›</button>
      </div>
    </div>

    <div class="cvp-cal-hint">${CVP.calMode==='range'
      ? 'Toca el día de inicio y luego el día final para marcar una semana o periodo.'
      : 'Toca los días que quieras (se marcan/desmarcan uno por uno).'}</div>

    <div class="cvp-cal-grid">
      <div class="cvp-caldow">L</div><div class="cvp-caldow">M</div><div class="cvp-caldow">M</div>
      <div class="cvp-caldow">J</div><div class="cvp-caldow">V</div><div class="cvp-caldow">S</div><div class="cvp-caldow">D</div>
      ${celdas}
    </div>

    <div class="cvp-cal-actions">
      <button id="cvpCalAll" class="cvp-btn ghost dark">Todo el mes</button>
      <button id="cvpCalClear" class="cvp-btn ghost dark">Limpiar</button>
      <span class="cvp-cal-count">${textoSeleccion()}</span>
      <button id="cvpCalApply" class="cvp-btn apply">✓ Aplicar</button>
    </div>`;
}


function wireUpUserFilters() {
  const search = document.getElementById("cvpSearch");
  const fBranch = document.getElementById("cvpFilterBranch");
  const fPos = document.getElementById("cvpFilterPos");
  const fStatus = document.getElementById("cvpFilterStatus");
  const fDate = document.getElementById("cvpFilterDate");
  if (!search) return;

  // ¿El login de la tarjeta cae dentro del rango de fecha elegido?
  const matchesDate = (loginISO, value) => {
    if (!value) return true;            // "Cualquier fecha"
    if (!loginISO) return false;        // sin login no entra en ningún rango
    const login = new Date(loginISO);
    const now = new Date();
    if (value === "month") {            // este mes calendario
      return login.getFullYear() === now.getFullYear() &&
             login.getMonth() === now.getMonth();
    }
    const days = parseInt(value, 10);   // últimos N días
    const diff = (now - login) / 86400000;
    return diff <= days;
  };

  const apply = () => {
    const q = search.value.toLowerCase().trim();
    const b = fBranch.value, p = fPos.value, s = fStatus.value;
    const dt = fDate ? fDate.value : "";
    document.querySelectorAll("#cvpUserList .cvp-user-card").forEach(card => {
      const okText = !q || card.dataset.name.includes(q) || card.dataset.email.includes(q);
      const okB = !b || card.dataset.branch === b;
      const okP = !p || card.dataset.position === p;
      const okS = !s || card.dataset.status === s;
      const okD = matchesDate(card.dataset.login, dt);
      card.style.display = (okText && okB && okP && okS && okD) ? "" : "none";
    });
  };
  [search, fBranch, fPos, fStatus, fDate].forEach(el => {
    if (!el) return;
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
    s.onload = res; s.onerror = () => res();   // sin internet o CDN bloqueado: el panel sigue sin gráficas
    document.head.appendChild(s);
  });
}

let cvpCharts = [];
function drawCharts(d) {
  if (!window.Chart) return;
  cvpCharts.forEach(c => c.destroy()); cvpCharts = [];
  Chart.defaults.font.family = "'Plus Jakarta Sans', system-ui, sans-serif";
  Chart.defaults.color = "#5a6b7b";
  const teal = "#00abc8", gold = "#ffc629", navy = "#0B2137", grid = "#eef2f7";
  const mk = (id, cfg) => { const el = document.getElementById(id); if (el) cvpCharts.push(new Chart(el, cfg)); };

  const ultimo = d.weeklyTrend.length - 1;
  mk("cvpChartTrend", {
    type: "line",
    data: { labels: d.weeklyTrend.map(w => w.label), datasets: [
      { label: "Promedio semanal", data: d.weeklyTrend.map(w => w.avg), borderColor: teal, backgroundColor: "rgba(0,171,200,.10)",
        fill: true, tension: .35, borderWidth: 3, spanGaps: true,
        pointRadius: d.weeklyTrend.map((w, i) => i === ultimo ? 6 : 3), pointBackgroundColor: d.weeklyTrend.map((w, i) => i === ultimo ? navy : teal) },
      { label: "Meta 80%", data: d.weeklyTrend.map(() => 80), borderColor: gold, borderWidth: 2, borderDash: [6, 4], pointRadius: 0, fill: false }
    ] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false },
        tooltip: { callbacks: { label: c => c.datasetIndex ? "Meta 80%" : `${c.parsed.y}% · ${d.weeklyTrend[c.dataIndex].count} quizzes` } } },
      scales: { y: { min: 40, max: 100, grid: { color: grid }, ticks: { callback: v => v + "%" } }, x: { grid: { display: false } } } }
  });

  mk("cvpChartWeek", {
    type: "bar",
    data: { labels: d.last14.map(x => x.label), datasets: [{ data: d.last14.map(x => x.count),
      backgroundColor: d.last14.map((x, i) => i === d.last14.length - 1 ? navy : teal), borderRadius: 6, maxBarThickness: 26 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, grid: { color: grid }, ticks: { precision: 0 } }, x: { grid: { display: false } } } }
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
   10) EXPORTAR A EXCEL (XLSX) y PDF
   ========================================================================== */
window.cvpExportXLSX = async function () {
  if (!window.XLSX) {
    await new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
      s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }
  const d = computeData(CVP.range);
  const viewLabel = CVP.view === "optometras" ? "Optometristas" : "Asesores";
  const totalMod = CVP.view === "optometras" ? TOTAL_MODULES_OPTO : TOTAL_MODULES;

  const headers = ["Nombre","Correo","Sucursal","Cargo","Rol",
                   "Promedio (%)","Módulos completados","Total intentos","Último login"];
  const rows = d.enriched.map(u => [
    u.name, u.email, u.branch || "", u.position || "", u.role,
    u.avg,
    u.completed + "/" + totalMod,
    u.totalAttempts,
    u.lastLogin ? new Date(u.lastLogin).toLocaleDateString("es-SV",{timeZone:"America/El_Salvador"}) : "—"
  ]);

  const ws = window.XLSX.utils.aoa_to_sheet([headers, ...rows]);
  ws["!cols"] = [{wch:28},{wch:36},{wch:18},{wch:18},{wch:14},{wch:12},{wch:20},{wch:14},{wch:22}];

  const wb = window.XLSX.utils.book_new();
  window.XLSX.utils.book_append_sheet(wb, ws, viewLabel);
  window.XLSX.writeFile(wb, `academia-cvplus-${CVP.view}-${new Date().toISOString().slice(0,10)}.xlsx`);
};

window.cvpExportPDF = function () {
  const d = computeData(CVP.range);
  const viewLabel = CVP.view === "optometras" ? "Optometristas" : "Asesores";
  const totalMod = CVP.view === "optometras" ? TOTAL_MODULES_OPTO : TOTAL_MODULES;
  const fecha = new Date().toLocaleDateString("es-SV",
    {year:"numeric",month:"long",day:"numeric",timeZone:"America/El_Salvador"});
  const avgScore = d.enriched.length > 0
    ? Math.round(d.enriched.reduce((s,u) => s + u.avg, 0) / d.enriched.length) : 0;

  const filas = d.enriched.map(u => {
    const color = u.avg >= 80 ? "#16a34a" : u.avg >= 60 ? "#d97706" : "#dc2626";
    const loginFmt = u.lastLogin
      ? new Date(u.lastLogin).toLocaleDateString("es-SV",{timeZone:"America/El_Salvador"}) : "—";
    return `<tr>
      <td>${u.name}</td><td>${u.branch||"—"}</td><td>${u.position||"—"}</td>
      <td style="text-align:center;font-weight:700;color:${color}">${u.avg}%</td>
      <td style="text-align:center">${u.completed}/${totalMod}</td>
      <td style="text-align:center">${u.totalAttempts}</td>
      <td>${loginFmt}</td>
    </tr>`;
  }).join("");

  const html = `<!DOCTYPE html>
<html lang="es"><head><meta charset="UTF-8">
<title>Reporte Academia CV+ · ${viewLabel}</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Arial,sans-serif;padding:28px;color:#1a1a1a;font-size:13px}
h1{font-size:20px;color:#0B2137;margin-bottom:4px}
.meta{color:#666;margin-bottom:20px;font-size:12px}
.stats{display:flex;gap:20px;margin-bottom:20px}
.stat{background:#f0f7ff;border-radius:8px;padding:12px 20px}
.stat-val{font-size:22px;font-weight:700;color:#0B2137}
.stat-lbl{font-size:11px;color:#666;margin-top:2px}
table{width:100%;border-collapse:collapse;font-size:12px}
thead tr{background:#0B2137;color:#fff}
th{padding:8px 10px;text-align:left;font-weight:600}
td{padding:7px 10px;border-bottom:1px solid #e5e7eb}
tr:nth-child(even) td{background:#f9fafb}
@media print{body{padding:0}}
</style></head><body>
<h1>Reporte Academia CV+ · ${viewLabel}</h1>
<p class="meta">Generado el ${fecha} &nbsp;·&nbsp; ${d.totalUsers} usuarios</p>
<div class="stats">
  <div class="stat"><div class="stat-val">${d.participationRate}%</div><div class="stat-lbl">Participación</div></div>
  <div class="stat"><div class="stat-val">${d.approvalRate}%</div><div class="stat-lbl">Aprobación</div></div>
  <div class="stat"><div class="stat-val">${avgScore}%</div><div class="stat-lbl">Promedio general</div></div>
</div>
<table>
  <thead><tr><th>Nombre</th><th>Sucursal</th><th>Cargo</th><th>Promedio</th><th>Módulos</th><th>Intentos</th><th>Último login</th></tr></thead>
  <tbody>${filas}</tbody>
</table>
</body></html>`;

  const win = window.open("","_blank","width=950,height=720");
  if (!win) { alert("Permite ventanas emergentes para generar el PDF."); return; }
  win.document.write(html);
  win.document.close();
  setTimeout(() => { win.focus(); win.print(); }, 700);
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
#admin-panel>h1{display:none!important}   /* título viejo del index: el panel ya trae su encabezado */
#admin-panel{padding:0!important;background:#eef2f7!important}
.cvp{font-family:'Plus Jakarta Sans',sans-serif;color:#0B2137;max-width:1280px;margin:0 auto;padding:18px}
.cvp-loading{font-family:'Plus Jakarta Sans',sans-serif;padding:60px;text-align:center;color:#0B2137;font-weight:600}

/* Header */
.cvp-head{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;
  background:linear-gradient(135deg,#0B2137,#1f3b57);color:#fff;padding:20px 24px;border-radius:20px}
.cvp-head-title{display:flex;align-items:center;gap:14px}
.cvp-logo{background:#fff;padding:8px 14px;border-radius:14px;display:flex;align-items:center;
  justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,.18)}
.cvp-head h1{margin:0;font-size:22px;font-weight:800}
.cvp-head p{margin:2px 0 0;font-size:13px;opacity:.8}
.cvp-head-actions{display:flex;gap:8px;flex-wrap:wrap}

/* Botones */
.cvp-btn{border:none;border-radius:12px;padding:10px 16px;font-weight:700;cursor:pointer;
  font-family:inherit;font-size:13px;transition:.2s}
.cvp-btn.ghost{background:rgba(255,255,255,.15);color:#fff}
.cvp-btn.ghost:hover{background:rgba(255,255,255,.28)}
.cvp-btn.close{background:#dc3545;color:#fff}
.cvp-btn.gold{background:#FFC629;color:#373A36}
.cvp-btn.gold:hover{filter:brightness(.95)}
.cvp-btn.save{background:#14A9C4;color:#fff;width:100%;margin-top:4px;padding:12px}
.cvp-btn.save:hover{background:#0FA0BA}
.cvp-btn.ghost.dark{background:#eef2f7;color:#0B2137}
.cvp-btn.ghost.dark:hover{background:#dde4ec}
.cvp-btn.apply{background:linear-gradient(135deg,#00B9D6,#14A9C4);color:#fff;margin-left:auto}
.cvp-btn.apply:hover{filter:brightness(1.05)}

/* Calendario interactivo (botón + popover) */
.cvp-calbar{margin-top:14px}
.cvp-cal-wrap{position:relative;display:inline-flex;align-items:center;gap:6px}
.cvp-cal-trigger{background:#fff;border:1px solid #d6dde6;border-radius:12px;
  padding:10px 16px;font-family:inherit;font-size:14px;font-weight:600;color:#0B2137;
  cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.05);transition:.15s}
.cvp-cal-trigger:hover{border-color:#00B9D6}
.cvp-cal-trigger.active{border-color:#00B9D6;color:#00B9D6}
.cvp-cal-trigger b{color:#00B9D6}
.cvp-cal-caret{margin-left:4px;font-size:11px;color:#9aa5b1}
.cvp-cal-reset{width:34px;height:34px;border:1px solid #d6dde6;border-radius:10px;
  background:#fff;cursor:pointer;color:#dc3545;font-weight:700;font-size:13px}
.cvp-cal-reset:hover{background:#fdecec}

/* Popover compacto */
.cvp-cal-pop{position:absolute;top:46px;left:0;z-index:50;width:300px;
  background:#fff;border-radius:14px;padding:14px;
  box-shadow:0 12px 32px rgba(11,33,55,.18);border:1px solid #eef2f7}
.cvp-cal-top{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px}
.cvp-cal-title{font-weight:800;font-size:13px;color:#0B2137;width:100%}
.cvp-cal-modes{display:flex;gap:4px;background:#eef2f7;border-radius:9px;padding:3px}
.cvp-calmode{border:none;background:transparent;padding:6px 10px;border-radius:7px;
  font-family:inherit;font-size:12px;font-weight:700;color:#5a6b7b;cursor:pointer}
.cvp-calmode.on{background:#fff;color:#00B9D6;box-shadow:0 1px 4px rgba(0,0,0,.1)}
.cvp-cal-nav{display:flex;align-items:center;gap:5px;margin-left:auto}
.cvp-cal-nav select{padding:6px 7px;border-radius:8px;border:1px solid #d6dde6;
  font-family:inherit;font-size:12px;font-weight:600;background:#fff}
.cvp-cal-nav button{width:26px;height:26px;border:none;border-radius:7px;background:#eef2f7;
  font-size:15px;font-weight:700;cursor:pointer;color:#0B2137}
.cvp-cal-nav button:hover{background:#dde4ec}
.cvp-cal-nav b{font-size:13px;min-width:38px;text-align:center}
.cvp-cal-hint{font-size:11px;color:#6b7785;margin:6px 0 10px}
.cvp-cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}
.cvp-caldow{text-align:center;font-size:10px;font-weight:800;color:#9aa5b1;padding:2px 0}
.cvp-calday{aspect-ratio:1;display:flex;align-items:center;justify-content:center;
  border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;background:#f5f7fb;
  color:#0B2137;transition:.12s;user-select:none}
.cvp-calday:hover{background:#dceef2}
.cvp-calday.empty{background:transparent;cursor:default}
.cvp-calday.sel{background:linear-gradient(135deg,#00B9D6,#14A9C4);color:#fff}
.cvp-calday.ini{outline:2px solid #0B2137;outline-offset:-2px}
.cvp-cal-actions{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:12px;
  padding-top:12px;border-top:1px solid #eef2f7}
.cvp-cal-actions .cvp-btn{padding:7px 10px;font-size:12px}
.cvp-cal-count{font-size:11px;color:#00B9D6;font-weight:700;width:100%;order:5;margin-top:4px}

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
.cvp-user-head{cursor:pointer}
.cvp-user-card.open{box-shadow:0 8px 28px rgba(0,0,0,.12);border-color:#cfeaf0}
.cvp-login-info{display:flex;gap:16px;flex-wrap:wrap;align-items:center;
  background:#f5f7fb;border-radius:10px;padding:9px 12px;margin:10px 0;font-size:12px;color:#5a6b7b}
.cvp-login-info b{color:#0B2137}

.cvp-expand-hint{margin-top:12px;text-align:center;font-size:12px;font-weight:700;
  color:#00B9D6;background:#f0fafc;border-radius:10px;padding:8px;transition:.15s}
.cvp-user-head:hover .cvp-expand-hint{background:#dcf2f7}
.cvp-chevron{font-weight:700}
.cvp-user-detail{margin-top:16px;border-top:1px dashed #e0e7ee;padding-top:14px;animation:cvpfade .25s ease}

/* Preguntas falladas */
.cvp-wrong{margin-top:12px;background:#fff5f5;border:1px solid #f3d4d4;border-radius:10px;padding:10px 12px}
.cvp-wrong-title{font-size:12px;font-weight:800;color:#b71c1c;margin-bottom:8px}
.cvp-wrong-item{padding:8px 0;border-bottom:1px dashed #f0d0d0}
.cvp-wrong-item:last-child{border-bottom:none}
.cvp-wrong-q{font-size:13px;font-weight:700;color:#0B2137;margin-bottom:4px}
.cvp-wrong-ok{font-size:12px;color:#1e7e34}
.cvp-wrong-bad{font-size:12px;color:#b71c1c}
.cvp-wrong-none{margin-top:10px;font-size:12px;color:#1e7e34;font-weight:600}
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
.cvp-quiz-toggle{cursor:pointer;border-radius:8px;transition:.12s}
.cvp-quiz-toggle:hover{opacity:.8}
.cvp-quiz-right{display:flex;align-items:center;gap:8px}
.cvp-quiz-right::after{content:"▾";font-size:12px;color:#9aa5b1}
.cvp-quiz.open .cvp-quiz-right::after{content:"▴"}
.cvp-quiz-errbadge{background:#fdecec;color:#b71c1c;font-size:11px;font-weight:800;
  border-radius:999px;padding:3px 9px;white-space:nowrap}
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

/* Toggle de vista Asesores / Optometristas */
.cvp-role-toggle{display:flex;gap:8px;margin:14px 0 0}
.cvp-role-btn{border:2px solid #d6dde6;background:#fff;color:#5a6b7b;padding:10px 22px;
  border-radius:999px;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;transition:.2s}
.cvp-role-btn:hover{border-color:#00B9D6;color:#00B9D6}
.cvp-role-btn.active{background:linear-gradient(135deg,#0B2137,#1f3b57);color:#fff;
  border-color:transparent;box-shadow:0 4px 14px rgba(11,33,55,.25)}

/* Historial de intentos (optometristas) */
.cvp-attempts{margin-top:12px;background:#f5f7fb;border-radius:10px;padding:10px 12px}
.cvp-attempts-title{font-size:12px;font-weight:800;color:#0B2137;margin-bottom:8px}
.cvp-attempt-row{display:flex;justify-content:space-between;align-items:center;
  padding:7px 10px;border-radius:8px;margin-bottom:5px;font-size:13px;font-weight:600}
.cvp-attempt-row:last-child{margin-bottom:0}
.cvp-attempt-row small{font-weight:400;color:#6b7785;font-size:11px}
.cvp-attempt-row.ok{background:#eaf7ee;color:#1e7e34}
.cvp-attempt-row.ok b{color:#28a745}
.cvp-attempt-row.warn{background:#fff8e1;color:#8a6d00}
.cvp-attempt-row.warn b{color:#c79100}
.cvp-attempt-row.danger{background:#fdecec;color:#a71d2a}
.cvp-attempt-row.danger b{color:#dc3545}

/* Móvil */
@media(max-width:600px){
  .cvp{padding:12px}
  .cvp-head{padding:16px}
  .cvp-stat-value{font-size:26px}
  .cvp-rank-avg{font-size:22px}
}

/* Impresión / PDF */
@media print{
  .cvp-head-actions,.cvp-tabs,.cvp-edit,.cvp-filters,.cvp-calbar{display:none!important}
  .cvp-panel{display:block!important}
  #admin-panel{position:static;background:#fff}
}

/* ===================== v2 · Panel de Capacitación ===================== */
.cvx{--cx-c:#00abc8;--cx-cd:#007f95;--cx-g:#ffc629;--cx-k:#0B2137;--cx-m:#5a6b7b;--cx-l:#e3e9ef;--cx-ok:#1d8a4e;--cx-okb:#e6f5ec;--cx-w:#a86f00;--cx-wb:#fff4d6;--cx-d:#c4302b;--cx-db:#fdecea}
.cvx .cvp-head{background:linear-gradient(120deg,#0B2137 0%,#173452 60%,#0d6f82 130%);border-radius:18px;padding:18px 22px}
.cvx .cvp-head h1{font-size:20px;letter-spacing:-.2px}
.cvx .cvp-btn{display:inline-flex;align-items:center;gap:6px}
.cvx .cvp-btn.close{background:rgba(255,255,255,.12);color:#fff}
.cvx .cvp-btn.close:hover{background:#c4302b}
.cvx-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:14px}
.cvx .cvp-calbar{margin-top:0}
.cvx .cvp-role-toggle{margin:0;background:#fff;border:1px solid var(--cx-l);border-radius:999px;padding:4px;gap:4px}
.cvx .cvp-role-btn{border:none;padding:8px 18px;font-size:13px}
.cvx .cvp-tabs{gap:4px;background:#fff;border:1px solid var(--cx-l);border-radius:14px;padding:5px;margin:14px 0 18px;flex-wrap:wrap}
.cvx .cvp-tab{box-shadow:none;background:transparent;color:var(--cx-m);display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border-radius:10px;font-size:13.5px}
.cvx .cvp-tab:hover{transform:none;background:#f2f6f8;color:var(--cx-k)}
.cvx .cvp-tab.active{background:var(--cx-k);color:#fff;box-shadow:0 4px 12px rgba(11,33,55,.25)}
.cvx .cvp-tab .cvp-badge{background:var(--cx-g);color:var(--cx-k)}
.cvx-ico{flex:none;vertical-align:-3px}
.cvx .cvp-card{border:1px solid var(--cx-l);box-shadow:none;border-radius:16px}
.cvx-card-head{display:flex;align-items:baseline;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:12px}
.cvx-card-head h3{margin:0;display:flex;align-items:center;gap:8px;font-size:16px}
.cvx-card-head .cvp-muted{margin:0;font-size:12.5px}
/* KPIs */
.cvx-kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px;margin-bottom:16px}
.cvx-kpi{background:#fff;border:1px solid var(--cx-l);border-radius:16px;padding:16px 18px;position:relative;overflow:hidden}
.cvx-kpi::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--cx-l)}
.cvx-kpi.ok::before{background:var(--cx-ok)}.cvx-kpi.warn::before{background:var(--cx-g)}.cvx-kpi.danger::before{background:var(--cx-d)}
.cvx-kpi-label{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--cx-m)}
.cvx-kpi-value{font-size:34px;font-weight:800;color:var(--cx-k);line-height:1.1;margin:6px 0 8px;font-variant-numeric:tabular-nums}
.cvx-kpi-sub{font-size:12.5px;color:var(--cx-m)}
.cvx-meter{position:relative;height:6px;background:#edf1f5;border-radius:99px;margin-bottom:8px}
.cvx-meter i{display:block;height:100%;border-radius:99px;background:var(--cx-c)}
.cvx-kpi.ok .cvx-meter i{background:var(--cx-ok)}.cvx-kpi.warn .cvx-meter i{background:var(--cx-g)}.cvx-kpi.danger .cvx-meter i{background:var(--cx-d)}
.cvx-meter b{position:absolute;top:-3px;width:2px;height:12px;background:var(--cx-k);opacity:.45}
.cvx-delta{display:inline-block;margin-top:8px;font-size:11.5px;font-weight:700;border-radius:999px;padding:2px 8px}
.cvx-delta.up{background:var(--cx-okb);color:var(--cx-ok)}.cvx-delta.down{background:var(--cx-db);color:var(--cx-d)}.cvx-delta.neutral{background:#f0f3f6;color:var(--cx-m)}
.cvx-row{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:16px}
.cvx-row .cvp-card{margin-bottom:16px}
.cvx-chart{position:relative;height:260px}.cvx-chart.small{height:180px}
.cvx-legend{font-size:12px;color:var(--cx-m);display:flex;align-items:center;gap:6px}
.cvx-legend i{display:inline-block;width:14px;height:3px;border-radius:2px;margin-left:8px}
.cvx-legend i.l1{background:var(--cx-c)}.cvx-legend i.l2{background:var(--cx-g)}
.cvx-attn{list-style:none;margin:0 0 10px;padding:0;display:grid;gap:10px;counter-reset:a}
.cvx-attn li{counter-increment:a;display:grid;grid-template-columns:28px 1fr;column-gap:10px;padding:10px 12px;border-radius:12px;background:#f6f8fa}
.cvx-attn li::before{content:counter(a);grid-row:span 2;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;background:var(--cx-k);color:#fff}
.cvx-attn li.danger::before{background:var(--cx-d)}.cvx-attn li.warn::before{background:var(--cx-g);color:var(--cx-k)}
.cvx-attn b{font-size:14px}.cvx-attn span{font-size:12.5px;color:var(--cx-m)}
.cvx-link{border:none;background:none;color:var(--cx-cd);font:inherit;font-weight:700;font-size:13px;cursor:pointer;padding:0}
/* Mapa de calor */
.cvx-heatwrap{overflow-x:auto}
.cvx-heat{border-collapse:separate;border-spacing:3px;font-size:12px;font-variant-numeric:tabular-nums}
.cvx-heat thead th{height:150px;vertical-align:bottom;padding:0 0 4px}
.cvx-heat thead th span{display:inline-block;writing-mode:vertical-rl;transform:rotate(180deg);font-weight:600;color:var(--cx-m);white-space:nowrap}
.cvx-heat td{width:34px;min-width:34px;height:30px;text-align:center;border-radius:6px;font-weight:700}
.cvx-heat td.ok{background:#cdebd8;color:#145c34}.cvx-heat td.warn{background:#ffe8a6;color:#6b4a00}.cvx-heat td.danger{background:#f6c4c1;color:#8c201c}
.cvx-heat td.vacio{background:#f2f5f7;color:#b7c0c8}
.cvx-hb{text-align:left;padding-right:10px;white-space:nowrap;font-weight:700;color:var(--cx-k)}
.cvx-hb small{display:block;font-weight:500;color:var(--cx-m);font-size:11px}
.cvx-heatlegend{display:flex;gap:8px;margin-top:10px;font-size:11.5px;font-weight:700}
.cvx-heatlegend span{border-radius:6px;padding:2px 8px}
.cvx-heatlegend .ok{background:#cdebd8;color:#145c34}.cvx-heatlegend .warn{background:#ffe8a6;color:#6b4a00}.cvx-heatlegend .danger{background:#f6c4c1;color:#8c201c}
/* Ranking */
.cvx-podio{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-bottom:14px;align-items:end}
.cvx-pod{border-radius:16px;padding:16px;text-align:center;background:#f6f8fa;border:1px solid var(--cx-l);display:grid;gap:2px}
.cvx-pod.p1{background:linear-gradient(160deg,#fff6d8,#ffe9a3);border-color:#f3d77a;padding-top:26px}
.cvx-pod.p2{background:#f1f4f7}.cvx-pod.p3{background:#fbefe4;border-color:#f0d4b9}
.cvx-pod-pos{width:34px;height:34px;margin:0 auto 6px;border-radius:50%;background:var(--cx-k);color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center}
.cvx-pod.p1 .cvx-pod-pos{background:var(--cx-g);color:var(--cx-k)}
.cvx-pod b{font-size:15px}.cvx-pod small{font-size:12px;color:var(--cx-m)}
.cvx-pod-score{font-size:32px;font-weight:800;color:var(--cx-k);margin:4px 0}.cvx-pod-score span{font-size:13px;margin-left:3px;color:var(--cx-m)}
.cvx-rklist{display:grid;gap:6px}
.cvx-rk{display:grid;grid-template-columns:34px minmax(0,1fr) minmax(120px,200px) 44px;align-items:center;gap:12px;padding:10px 12px;border-radius:12px;background:#f8fafb}
.cvx-rk-pos{font-weight:800;color:var(--cx-m);text-align:center}
.cvx-rk-info b{display:block;font-size:14px}.cvx-rk-info small,.cvx-rk-bars small{font-size:12px;color:var(--cx-m)}
.cvx-rk-bars .cvp-bar{height:7px;margin-top:4px}
.cvx-rk-score{font-size:18px;font-weight:800;text-align:right;font-variant-numeric:tabular-nums}
.cvx .cvp-list li small{color:var(--cx-m);font-weight:500;margin-left:4px}
/* Tabla de módulos */
.cvx-tablewrap{overflow-x:auto}
.cvx-table{width:100%;border-collapse:collapse;font-size:13.5px}
.cvx-table th{text-align:left;font-size:11.5px;text-transform:uppercase;letter-spacing:.5px;color:var(--cx-m);padding:8px 10px;border-bottom:2px solid var(--cx-l);white-space:nowrap}
.cvx-table td{padding:11px 10px;border-bottom:1px solid #eef2f5;vertical-align:top}
.cvx-table .num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
.cvx-mrow{cursor:pointer}.cvx-mrow:hover td{background:#f6fafb}
.cvx-topq{color:#3c4a57;max-width:380px}
.cvx-chip{display:inline-block;border-radius:999px;padding:2px 9px;font-weight:800;font-size:12.5px}
.cvx-chip.ok{background:var(--cx-okb);color:var(--cx-ok)}.cvx-chip.warn{background:var(--cx-wb);color:var(--cx-w)}.cvx-chip.danger{background:var(--cx-db);color:var(--cx-d)}
.cvx-mdet td{background:#fbfcfd}
.cvx-qlist{display:grid;gap:8px}
.cvx-q{display:grid;grid-template-columns:56px 1fr;gap:12px;align-items:start;background:#fff;border:1px solid var(--cx-l);border-radius:12px;padding:10px 12px}
.cvx-q-n{font-size:22px;font-weight:800;color:var(--cx-d);text-align:center;line-height:1}.cvx-q-n small{display:block;font-size:10.5px;color:var(--cx-m);font-weight:600}
/* Seguimiento */
.cvx-fchips{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}
.cvx-fchip{border:1px solid var(--cx-l);background:#fff;border-radius:999px;padding:6px 12px;font:inherit;font-size:12.5px;font-weight:600;color:var(--cx-k);cursor:pointer}
.cvx-fchip b{margin-left:4px;color:var(--cx-cd)}
.cvx-fchip.on{background:var(--cx-k);color:#fff;border-color:var(--cx-k)}.cvx-fchip.on b{color:var(--cx-g)}
.cvx-seglist{display:grid;gap:8px}
.cvx-seg{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;padding:12px 14px;border:1px solid var(--cx-l);border-left:4px solid var(--cx-g);border-radius:12px;background:#fff}
.cvx-seg.danger{border-left-color:var(--cx-d)}
.cvx-seg.hecho{opacity:.6;border-left-color:var(--cx-ok)}
.cvx-seg-main{min-width:0;flex:1 1 280px}
.cvx-seg-main b{font-size:14.5px}.cvx-seg-main small{display:block;font-size:12px;color:var(--cx-m)}
.cvx-seg-tags{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px}
.cvx-tag{font-size:11.5px;font-weight:700;border-radius:6px;padding:2px 8px}
.cvx-tag.danger{background:var(--cx-db);color:var(--cx-d)}.cvx-tag.warn{background:var(--cx-wb);color:var(--cx-w)}
.cvx-seg-acc{display:flex;gap:6px;align-items:center;flex-wrap:wrap}
.cvx-seg-acc .cvp-btn{padding:7px 12px;font-size:12.5px}
.cvx-hecho{font-size:12px;font-weight:700;color:var(--cx-ok)}
/* Cohortes */
.cvx-cohs{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:14px}
.cvx-coh{border:1px solid var(--cx-l);border-radius:14px;padding:14px;background:#fbfcfd}
.cvx-coh-head{display:flex;justify-content:space-between;align-items:baseline}
.cvx-coh-head h3{margin:0;font-size:16px}.cvx-coh-head span{font-size:12.5px;color:var(--cx-m)}
.cvx-coh-kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:10px 0}
.cvx-coh-kpis div{background:#fff;border:1px solid var(--cx-l);border-radius:10px;padding:8px;text-align:center}
.cvx-coh-kpis b{display:block;font-size:20px}.cvx-coh-kpis small{font-size:11px;color:var(--cx-m)}
.cvx-coh-list{display:grid;gap:6px;max-height:320px;overflow:auto}
.cvx-coh-m{display:grid;grid-template-columns:minmax(0,1fr) 90px 40px;align-items:center;gap:10px;font-size:13px}
.cvx-coh-m span small{display:block;font-size:11px;color:var(--cx-m)}
.cvx-coh-m .cvp-bar{height:7px;margin:0}.cvx-coh-m b{text-align:right;font-variant-numeric:tabular-nums}
.cvx-coh-m.cero span{color:var(--cx-d)}
/* Reporte para dirección */
#cvxRep{position:fixed;inset:0;z-index:150000;background:rgba(11,33,55,.6);overflow:auto;padding:20px 16px;font-family:'Plus Jakarta Sans',sans-serif}
.cvx-rep-bar{max-width:820px;margin:0 auto 10px;display:flex;justify-content:space-between;align-items:center;gap:10px;color:#fff;flex-wrap:wrap}
.cvx-rep-doc{max-width:820px;margin:0 auto;background:#fff;border-radius:14px;padding:32px;color:#0B2137}
.cvx-rep-top{display:flex;gap:16px;align-items:center;border-bottom:3px solid #00abc8;padding-bottom:14px;margin-bottom:18px}
.cvx-rep-top img{height:40px}.cvx-rep-top h2{margin:0;font-size:20px}.cvx-rep-top p{margin:2px 0 0;color:#5a6b7b;font-size:13px}
.cvx-rep-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:18px}
.cvx-rep-kpis div{background:#f2f8fa;border-radius:10px;padding:12px;text-align:center}
.cvx-rep-kpis b{display:block;font-size:24px}.cvx-rep-kpis span{font-size:11.5px;color:#5a6b7b}
.cvx-rep-doc h4{margin:16px 0 6px;font-size:14px;text-transform:uppercase;letter-spacing:.6px;color:#007f95}
.cvx-rep-doc ul,.cvx-rep-doc ol{margin:0;padding-left:20px;font-size:13.5px;line-height:1.6}
.cvx-rep-2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.cvx-rep-pie{margin-top:22px;font-size:12px;color:#5a6b7b;border-top:1px solid #e3e9ef;padding-top:10px}
@media print{ body>*:not(#cvxRep){display:none!important} #cvxRep{position:static;background:#fff;padding:0} .cvx-rep-bar{display:none} .cvx-rep-doc{border-radius:0;padding:0} }
@media(max-width:820px){ .cvx-row{grid-template-columns:1fr} .cvx-rep-kpis{grid-template-columns:1fr 1fr} .cvx-rep-2{grid-template-columns:1fr} }
@media(max-width:600px){ .cvx-podio{grid-template-columns:1fr} .cvx-rk{grid-template-columns:28px minmax(0,1fr) 44px} .cvx-rk-bars{display:none} .cvx .cvp-tab span{display:none} .cvx .cvp-tab.active span{display:inline} }
`;
  document.head.appendChild(css);
}
