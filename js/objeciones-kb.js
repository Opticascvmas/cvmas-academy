/* ============================================================
   ACADEMIA CV+ · BASE DE CONOCIMIENTO DE OBJECIONES
   Archivo: js/objeciones-kb.js
   Uso: lo consumen el chatbot de la Academia y
        herramientas/objeciones.html (Consultar / Practicar / Biblioteca)
   Método oficial CV+ (Paso 5 del Modelo de Ventas):
   E.R.A.R. → Escuchar · Reconocer · Analizar · Responder
   + las 5 técnicas del manual (Aplazamiento, Sí…pero…, Boomerang, ¿Por qué?, Balanza)
   + los 4 cierres del Paso 6 (Consultivo, Por beneficio, Por elección, Con iniciativa)
   NOTA: los textos entre «comillas angulares» son datos que deben
   ajustarse a la política vigente de CV+ (plazos, garantías, precios).
   ============================================================ */

(function (global) {
  'use strict';

  var CATEGORIAS = {
    apertura: { nombre: 'Antes del examen',      color: '#6b6e6a', icono: '👋' },
    precio:   { nombre: 'Precio y valor',        color: '#00abc8', icono: '$' },
    duda:     { nombre: 'Duda y confianza',      color: '#ffc629', icono: '?' },
    demora:   { nombre: 'Postergación',          color: '#e0a800', icono: '⏸' },
    tercero:  { nombre: 'Decide otra persona',   color: '#6b6e6a', icono: '👥' },
    proceso:  { nombre: 'Proceso y tiempo',      color: '#2e9e5b', icono: '⏱' }
  };

  /* Las 5 técnicas oficiales del manual de Ventas CV+ (Paso 5 del modelo) */
  var TECNICAS = {
    aplazamiento: {
      nombre: 'Aplazamiento',
      idea: 'Desenmascara la excusa real. Muchas ventas se pierden por una excusa; enfrentá con tacto y descubrí la duda verdadera.',
      modelo: '"¿Verdad que le estoy cotizando muy alto?" · "Parece que la cotización no termina de convencerle, ¿qué le genera dudas?"'
    },
    sipero: {
      nombre: 'Sí… pero…',
      idea: 'Estás de acuerdo con la objeción, pero la refutás con información adicional que agrega valor. Nunca discutas ni presiones.',
      modelo: '"Sí, tiene toda la razón, son más costosos. Pero la tecnología es única porque…"'
    },
    boomerang: {
      nombre: 'Boomerang',
      idea: 'Convertí la objeción en tu mejor argumento de compra. Actitud sincera y amistosa: nunca ironía ni tono de ganador.',
      modelo: '"Es verdad, el tratamiento antirreflejo es costoso, y su costo se debe a que posee 3 beneficios que…"'
    },
    porque: {
      nombre: '¿Por qué?',
      idea: 'Hacé hablar al cliente. Es la técnica más recomendada cuando tuvo una mala experiencia previa con el producto.',
      modelo: '"Comprendo lo que me dice, ¿por qué opina de esa manera?"'
    },
    balanza: {
      nombre: 'La Balanza',
      idea: 'Cuando la objeción es válida y cierta hay que reconocerlo, e igualarla con ventajas reales que la compensen.',
      modelo: '"Es verdad, el tiempo de entrega puede parecer largo, sin embargo el proceso de sus lentes es bajo tecnología Free Form y esto…"'
    }
  };

  /* Los 4 cierres modernos del Paso 6 */
  var CIERRES = {
    consultivo: { nombre: 'Consultivo',    idea: 'Resumís lo que el cliente te contó y presentás la solución como tu recomendación profesional.' },
    beneficio:  { nombre: 'Por beneficio', idea: 'Cerrás recordando los 2 o 3 beneficios que más le importan, ligados a su necesidad.' },
    eleccion:   { nombre: 'Por elección',  idea: 'Ofrecés dos opciones y ambas cierran: la pregunta pasa de "¿compra?" a "¿esta o esta?".' },
    iniciativa: { nombre: 'Con iniciativa',idea: 'Con seguridad y sin rodeos, guiás el siguiente paso dando por hecho la compra.' }
  };

  var OBJECIONES = [

  /* ---------------------------------------------------------- 1 */
  {
    id: 'precio-alto',
    cat: 'precio',
    meta: { paso: 'A · Agrega', perfil: 'Busca precios', tecnica: 'sipero', tecnica2: 'balanza', cierre: 'beneficio' },
    titulo: 'El precio está muy caro / muy alto',
    variantes: [
      'está muy caro', 'está muy alto', 'qué caro', 'está carísimo',
      'no me alcanza', 'no traigo tanto', 'se me pasa del presupuesto',
      'tanto por unos lentes', 'está fuera de mi presupuesto', 'muy elevado'
    ],
    claves: ['caro','carisimo','precio','costoso','alto','presupuesto','alcanza','dinero','plata','pisto','costo','cuesta','vale'],
    senal: 'Casi nunca es falta de dinero: es que todavía no ve POR QUÉ cuesta lo que cuesta. "Caro" significa precio > valor percibido.',
    causas: [
      'Está comparando con unos lentes que compró hace años, o con un precio de farmacia, no con lo que se lleva hoy.',
      'Nadie le explicó qué incluye la cotización: material, diseño, tratamientos, garantía y servicio.',
      'Se le dio el precio total de golpe, sin desglose y antes de haber construido valor.'
    ],
    pregunta: '¿Caro comparado con qué? ¿Con unos lentes que tuvo antes o con otra cotización que le dieron?',
    guion: {
      escuchar: 'Dejá que termine la frase completa y hacé una pausa de dos segundos antes de hablar. Si respondés encima del precio, suena a defensa.',
     
      valida: 'Le entiendo perfectamente, y qué bueno que me lo diga con confianza. Es una inversión importante y usted merece saber exactamente qué está pagando.',
      pregunta: '¿Me permite una pregunta? ¿Caro comparado con qué: con unos lentes que usó antes o con otra cotización?',
      reencuadra: 'Mire, este precio no es solo el armazón. Incluye el lente «material», el diseño «tipo de lente», el tratamiento antirreflejo y la garantía de adaptación. Estos lentes los va a usar todos los días durante los próximos «2 años»: son centavos al día por ver bien en su trabajo, no terminar con dolor de cabeza y manejar de noche con seguridad.',
      cierra: 'Con eso claro, ¿avanzamos con esta opción o prefiere que le arme una alternativa que cuide más el presupuesto sin bajarle a la calidad de su graduación?'
    },
    evitar: [
      '"Sí, es que los lentes son caros" — le da la razón y mata la venta.',
      'Soltar el descuento de inmediato: enseña que su primer precio no era real.',
      'Repetir el precio total una y otra vez en lugar de desglosarlo por componentes.'
    ],
    frase: 'No es lo que cuestan los lentes; es lo que cuesta no ver bien todos los días.',
    tip: 'Divida la inversión entre los meses de uso. Una cifra grande se vuelve una decisión pequeña.',
    practica: {
      apertura: '¡Uy no! ¿«$XXX» por unos lentes? Está muy caro, yo pensaba que iban a salir como la mitad.',
      opciones: [
        { t: 'Le entiendo, es una inversión. ¿Caro comparado con qué, con unos lentes anteriores o con otra cotización?', tipo: 'ideal', fb: 'Correcto. Validás sin darle la razón y hacés la pregunta de diagnóstico que te dice contra qué te está comparando.' },
        { t: 'Déjeme ver qué descuento le puedo aplicar para que le salga más barato.', tipo: 'mala', fb: 'Descuento reflejo. Todavía no sabés si el problema es precio o falta de valor, y le enseñás que tu primer precio era inflado.' },
        { t: 'Es que estos lentes son de muy buena calidad, por eso el precio.', tipo: 'regular', fb: 'Es cierto pero es genérico. "Buena calidad" no significa nada para el cliente si no lo aterrizás en qué le resuelve a él.' }
      ],
      replica: 'Sí, es que yo antes compré unos en «$XX» y me sirvieron bien.',
      opciones2: [
        { t: 'Perfecto, eso me ayuda. Aquellos eran «visión sencilla sin tratamiento» y hoy su receta pide «progresivo con antirreflejo». Es otro producto: es como comparar el precio de una llanta con el de las cuatro. ¿Le desgloso qué incluye este?', tipo: 'ideal', fb: 'Excelente. Reencuadrás la comparación con un ejemplo concreto y pedís permiso para desglosar. Así el precio deja de ser un número suelto.' },
        { t: 'Es que aquellos seguro no eran de la misma calidad que los nuestros.', tipo: 'mala', fb: 'Descalificás su decisión anterior. El cliente se pone a la defensiva y ahora tiene que defenderse en lugar de escucharte.' },
        { t: 'Sí, los precios han subido bastante últimamente.', tipo: 'regular', fb: 'Te escudás en la inflación. No explicás valor, solo justificás el número, y dejás la sensación de que está pagando de más.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 2 */
  {
    id: 'competencia-barato',
    cat: 'precio',
    meta: { paso: 'A · Agrega', perfil: 'Busca precios', tecnica: 'balanza', tecnica2: 'boomerang', cierre: 'consultivo' },
    titulo: 'En otro lado me lo dan más barato',
    variantes: [
      'en otro lado me lo dan más barato', 'me dieron mejor precio', 'vi más barato',
      'en tal óptica está más económico', 'me cotizaron menos', 'la competencia me lo deja en'
    ],
    claves: ['otro lado','otra optica','competencia','mas barato','mejor precio','cotizaron','vi mas barato','economico afuera'],
    senal: 'Está pidiendo permiso para quedarse con vos. Si de verdad quisiera el otro precio, ya se habría ido. Quiere una razón para justificar pagar más.',
    causas: [
      'Está comparando dos cotizaciones que NO son el mismo producto (material, diseño, tratamiento y garantía distintos).',
      'Nadie le explicó la diferencia técnica, entonces lo único comparable que le queda es el número.',
      'Está probando si su precio tiene margen o si usted se sostiene.'
    ],
    pregunta: '¿Me permite ver la cotización? Quiero asegurarme de que estemos comparando lo mismo, porque a veces el nombre suena igual y el lente no lo es.',
    guion: {
      escuchar: 'Escuchá el número y de dónde viene sin reaccionar. No pongás cara de sorpresa ni de molestia: el cliente la lee.',
     
      valida: 'Me parece muy bien que compare, es su dinero y está haciendo lo correcto.',
      pregunta: '¿Me permite ver la cotización o me dice qué lente le ofrecieron? Quiero asegurarme de que estamos comparando lo mismo.',
      reencuadra: 'Mire la diferencia: ahí le están ofreciendo «lente/material», y lo que su receta necesita es «lente/material». Además aquí lleva «tratamiento» y la garantía de adaptación, con su expediente en el sistema para cualquier ajuste. Si le pongo exactamente lo mismo que ellos, el precio se le parece; la diferencia es lo que usted se lleva puesto todos los días.',
      cierra: '¿Quiere que le cotice la opción equivalente para que compare peras con peras, o prefiere quedarse con la que sí le resuelve la graduación completa?'
    },
    evitar: [
      'Hablar mal de la otra óptica: lo hace sentir tonto por haber ido y no le enseña nada.',
      'Igualar el precio de inmediato sin comparar el producto.',
      'Decir "pues vaya y compre allá" en tono retador.'
    ],
    frase: 'Con mucho gusto le igualo el producto; lo que no le puedo igualar es un lente que no es el que su vista necesita.',
    tip: 'Pedir ver la cotización es la jugada más poderosa: casi siempre revela que no es el mismo lente.',
    practica: {
      apertura: 'Fíjese que en otra óptica me lo dejan como «$XX» más barato, con todo y examen.',
      opciones: [
        { t: 'Me parece bien que compare. ¿Me permite ver la cotización? Quiero asegurarme de que estemos comparando el mismo lente.', tipo: 'ideal', fb: 'Perfecto. Respetás su búsqueda y llevás la conversación de "precio" a "producto", que es donde vos ganás.' },
        { t: 'Uy, en esa óptica los lentes no son de buena calidad, después vienen aquí a arreglarlos.', tipo: 'mala', fb: 'Nunca hablés mal de la competencia. Le decís indirectamente que casi comete un error y se pone a la defensiva.' },
        { t: 'Déjeme consultar si le puedo igualar ese precio.', tipo: 'regular', fb: 'Todavía no. Igualar antes de comparar el producto regala margen y confirma que solo se trataba del número.' }
      ],
      replica: 'No traigo la cotización, pero me dijeron que eran progresivos con antirreflejo igual que estos.',
      opciones2: [
        { t: 'Entiendo. Le comento: dentro de "progresivo con antirreflejo" hay varios niveles de diseño. El que le estoy proponiendo es «diseño», que le da un campo de visión más amplio y menos zona borrosa a los lados. ¿Le muestro la diferencia en el simulador?', tipo: 'ideal', fb: 'Muy bien. Educás sobre la categoría en vez de atacar al competidor, y proponés una demostración.' },
        { t: 'Entonces sí es lo mismo, déjeme ver qué hago con el precio.', tipo: 'mala', fb: 'Aceptaste la premisa sin verificar. Acabás de convertir tu producto en un commodity.' },
        { t: 'Bueno, pero aquí le damos mejor servicio.', tipo: 'regular', fb: '"Mejor servicio" lo dice todo el mundo. Sin un hecho concreto (garantía, ajustes, expediente) no pesa nada.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 3 */
  {
    id: 'solo-lo-economico',
    cat: 'precio',
    meta: { paso: 'U · Un aro para ti', perfil: 'Busca precios', tecnica: 'porque', tecnica2: 'balanza', cierre: 'eleccion' },
    titulo: 'Deme lo más barato / lo más sencillo',
    variantes: [
      'deme lo más barato', 'lo más económico', 'algo sencillo', 'lo básico nomás',
      'no quiero nada elegante', 'lo más simple que tenga'
    ],
    claves: ['mas barato','economico','sencillo','basico','simple','lo minimo','corriente'],
    senal: 'No está pidiendo lo barato: está pidiendo no equivocarse. Teme que le vendan de más.',
    causas: [
      'Llegó con un techo mental antes de saber qué necesita su receta.',
      'Alguna vez sintió que en una óptica le vendieron cosas que no usó.',
      'No conoce la diferencia entre un lente básico y uno adecuado para su graduación.'
    ],
    pregunta: '¿En qué los va a usar más: computadora, manejar, leer? Así le muestro lo que de verdad le sirve y no lo que sobra.',
    guion: {
      escuchar: 'Escuchá sin corregirlo. Su frase es un techo mental, no una decisión final.',
     
      valida: 'Claro que sí, y le voy a ser honesto: mi trabajo no es venderle de más, es que no gaste dos veces.',
      pregunta: 'Cuénteme, ¿en qué los va a usar la mayor parte del día? ¿Computadora, manejar, leer?',
      reencuadra: 'Con su graduación de «X», si nos vamos al lente más básico va a notar «distorsión / lentes gruesos / reflejos de noche» y en «6 meses» va a estar de vuelta. Le propongo el punto justo: «opción», que es lo que su receta necesita, sin extras que usted no vaya a aprovechar.',
      cierra: 'Le armo esa opción y le muestro también la más económica, para que usted decida viendo las dos. ¿Le parece?'
    },
    evitar: [
      'Mostrarle solo lo barato: se va con un lente que no le sirve y no regresa.',
      'Mostrarle solo lo caro: confirma su miedo de que le quieren vender de más.',
      'Juzgarlo por lo que pide o por cómo viene vestido.'
    ],
    frase: 'Lo barato no es lo que menos cuesta, es lo que no hay que comprar dos veces.',
    tip: 'Siempre presente dos opciones lado a lado. Comparar activa la decisión; una sola opción activa la duda.',
    practica: {
      apertura: 'Mire, yo solo quiero algo sencillito, lo más barato que tenga, no necesito nada del otro mundo.',
      opciones: [
        { t: 'Con gusto. Cuénteme primero: ¿en qué los va a usar la mayor parte del día? Así le muestro lo que de verdad le sirve y no lo que sobra.', tipo: 'ideal', fb: 'Bien. Aceptás su marco y ganás la información que necesitás para recomendar sin sonar a vendedor.' },
        { t: 'Perfecto, estos son los más económicos que tenemos.', tipo: 'mala', fb: 'Obediencia sin diagnóstico. Le vendés algo que probablemente no le sirva para su graduación y perdés al cliente para siempre.' },
        { t: 'Le recomiendo mejor estos que son de mejor calidad, valen la pena.', tipo: 'regular', fb: 'Ignorás lo que acaba de pedirte. Necesitás primero entender el uso, si no suena a que le estás subiendo la venta.' }
      ],
      replica: 'Los uso para todo, pero paso más en la computadora en el trabajo.',
      opciones2: [
        { t: 'Perfecto, eso cambia la recomendación. Ocho horas de pantalla con un lente sin «antirreflejo/filtro» le va a dar vista cansada y dolor de cabeza al final del día. Le muestro dos opciones: la económica y la que le resuelve la pantalla, y usted decide.', tipo: 'ideal', fb: 'Excelente. Conectás su realidad diaria con una característica específica y le das el control con dos opciones.' },
        { t: 'Ah, entonces necesita el filtro de luz azul sí o sí.', tipo: 'regular', fb: 'La recomendación es razonable pero el "sí o sí" le quita la decisión y suena a presión.' },
        { t: 'Bueno, con estos económicos igual va a estar bien.', tipo: 'mala', fb: 'Tenías la información perfecta para recomendar y la desperdiciaste. El cliente vuelve en meses con molestias.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 4 */
  {
    id: 'quitar-tratamiento',
    cat: 'precio',
    meta: { paso: 'A · Agrega', perfil: 'Busca precios', tecnica: 'boomerang', tecnica2: null, cierre: 'beneficio' },
    titulo: '¿Y sin el antirreflejo cuánto sale?',
    variantes: [
      'sin el antirreflejo cuánto sale', 'quítele el antirreflejo', 'quíteme el antirreflejo', 'quíteme el tratamiento', 'sin filtro cuánto queda',
      'y si le quito eso', 'no le ponga el antirreflejo'
    ],
    claves: ['sin antirreflejo','quitar tratamiento','sin filtro','quitele','sin el tratamiento','quitar el filtro','antirreflejo','quite el','quitar el antirreflejo','tratamiento'],
    senal: 'Está buscando la palanca más fácil para bajar el total. No sabe que el tratamiento es lo que más va a notar en el uso diario.',
    causas: [
      'Percibe el tratamiento como un "extra opcional", no como parte del lente.',
      'Nunca usó un lente con y sin antirreflejo, entonces no tiene con qué comparar.',
      'Quiere llegar a un número específico y el tratamiento es lo primero que ve recortable.'
    ],
    pregunta: '¿Maneja de noche o pasa varias horas frente a una pantalla?',
    guion: {
      escuchar: 'Escuchá la petición completa antes de cotizar nada. No agarres la calculadora todavía.',
     
      valida: 'Sí se puede, claro. Antes de quitarlo permítame decirle qué es exactamente lo que se estaría quitando.',
      pregunta: '¿Usted maneja de noche o pasa varias horas frente a la computadora o el celular?',
      reencuadra: 'El antirreflejo no es un adorno: es lo que hace que las luces de los carros no se le partan en estrellas de noche y que a las 5 de la tarde no sienta la vista quemada. Sin él, el lente funciona, pero usted va a ver reflejos suyos dentro del lente y la gente no le va a ver los ojos en las fotos. Es «$X» de diferencia sobre «2 años» de uso.',
      cierra: 'Si de verdad necesitamos ajustar el total, mejor bajémosle por «el armazón», que se puede cambiar después. El tratamiento va pegado al lente y ya no se le puede agregar. ¿Le parece?'
    },
    evitar: [
      'Quitarlo sin decir nada: el cliente regresa molesto por los reflejos y culpa a la óptica.',
      'Decir "usted decide" y quedarse callado: es su responsabilidad técnica advertirlo.',
      'Asustarlo con daños que no ocurren; céntrese en confort real.'
    ],
    frase: 'El armazón se puede cambiar mañana; el tratamiento va dentro del lente y ya no se le puede agregar.',
    tip: 'Ofrezca recortar por donde SÍ se puede recuperar después (armazón), no por donde es permanente (tratamiento).',
    practica: {
      apertura: '¿Y si le quito el antirreflejo ese, cuánto me queda?',
      opciones: [
        { t: 'Sí se puede. Antes déjeme preguntarle: ¿usted maneja de noche o pasa horas en la computadora?', tipo: 'ideal', fb: 'Bien. No te negás, pero diagnosticás antes de quitar algo que probablemente sí necesita.' },
        { t: 'Le queda en «$XX». ¿Se lo quito?', tipo: 'mala', fb: 'Cotizás sin advertir. Es una falla técnica: el cliente va a notar los reflejos y la culpa va a ser de CV+.' },
        { t: 'No se lo recomiendo, el antirreflejo es indispensable.', tipo: 'regular', fb: 'Tenés razón técnica pero cero argumento. "Indispensable" sin explicar por qué suena a que solo querés vender más.' }
      ],
      replica: 'Sí manejo de noche, pero he andado toda la vida sin eso y nunca me ha pasado nada.',
      opciones2: [
        { t: 'Le creo, y por eso mismo vale la pena: ahora que su graduación subió, el lente es más grueso y los reflejos se notan más que antes. Pruébeselo un momento con la lámpara y me dice si nota la diferencia.', tipo: 'ideal', fb: 'Muy bien. No lo contradecís, conectás con el cambio en su receta y proponés que lo compruebe él mismo. La demostración vence al argumento.' },
        { t: 'Bueno, pero es que ahora hay mucha más luz LED en las calles y es más peligroso.', tipo: 'regular', fb: 'El dato puede ser cierto pero suena a susto genérico y no es verificable en el momento.' },
        { t: 'Está bien, se lo quito entonces.', tipo: 'mala', fb: 'Te rendiste al primer empujón. Bastaba una demostración de 20 segundos.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 5 */
  {
    id: 'no-me-convence',
    cat: 'duda',
    meta: { paso: 'L · ¡Listo!', perfil: 'Todos los perfiles', tecnica: 'aplazamiento', tecnica2: null, cierre: 'consultivo' },
    titulo: 'No me convence',
    variantes: [
      'no me convence', 'no sé', 'no estoy seguro', 'como que no', 'no me late',
      'no me termina de gustar', 'algo no me cuadra'
    ],
    claves: ['no me convence','no se','no estoy seguro','no me late','no me cuadra','dudo','inseguro','no me gusta'],
    senal: 'Es una objeción sin contenido: el cliente no le está diciendo QUÉ no le convence. Su única jugada es preguntar. Si adivina, pierde.',
    causas: [
      'No le gusta cómo se ve con el armazón (y le da pena decirlo).',
      'El precio le incomoda pero no quiere hablar de dinero.',
      'No entendió la explicación técnica y no quiere quedar mal preguntando.',
      'Vino sin intención de comprar hoy y "no me convence" es su salida educada.'
    ],
    pregunta: '¿Qué es lo que no le convence: cómo se ve, la inversión, o algo de lo que le expliqué?',
    guion: {
      escuchar: 'Esta objeción no trae información. Escuchá, asentí y quedate en silencio: el silencio es lo que hace hablar al cliente.',
     
      valida: 'Qué bueno que me lo diga, prefiero mil veces eso a que se lleve algo con dudas.',
      pregunta: 'Ayúdeme a entenderlo: ¿es cómo se ve, es la inversión, o es algo de lo que le expliqué que no le quedó claro?',
      reencuadra: '(Escuche la respuesta y trate ESA objeción real). "Perfecto, entonces el punto es «X». Vamos a resolver eso: «solución concreta»."',
      cierra: 'Si resolvemos «X», ¿nos quedamos con esta opción?'
    },
    evitar: [
      'Adivinar y ponerse a defender el precio cuando el problema era el armazón.',
      'Contestar "¿pero por qué?" en tono de reclamo.',
      'Llenar el silencio hablando más. Pregunte y CÁLLESE hasta que conteste.'
    ],
    frase: '¿Qué es lo que no le convence? Y le prometo que si no se lo puedo resolver, se lo digo de frente.',
    tip: 'Esta objeción es una puerta cerrada con la llave puesta. La pregunta abierta y tres segundos de silencio la abren.',
    practica: {
      apertura: 'Mmm... no sé, la verdad es que no me convence.',
      opciones: [
        { t: 'Qué bueno que me lo diga. Ayúdeme a entenderlo: ¿es cómo se ve, es la inversión, o es algo que le expliqué?', tipo: 'ideal', fb: 'Exacto. Le das tres puertas concretas para que elija en vez de dejarlo con una pregunta abierta que no sabe contestar.' },
        { t: 'Le entiendo, si quiere le puedo hacer un descuento.', tipo: 'mala', fb: 'Adivinaste precio. Si el problema era el armazón, acabás de regalar margen y no resolviste nada.' },
        { t: 'Pero mire, este es un excelente lente, se lo aseguro.', tipo: 'mala', fb: 'Empujás sin saber contra qué. El cliente se cierra más.' }
      ],
      replica: 'Es que... siento que me veo raro con estos aros. No sé si me quedan.',
      opciones2: [
        { t: 'Ah, era eso. Se lo resuelvo fácil. Su cara es «forma» y ese modelo es muy «recto/redondo». Déjeme traerle dos que le van a favorecer más y los comparamos en el espejo.', tipo: 'ideal', fb: 'Perfecto. Nombrás el problema real, no lo minimizás y actuás de inmediato con una alternativa.' },
        { t: 'No, para nada, se le ven muy bien.', tipo: 'mala', fb: 'Le decís que su percepción está mal. Aunque tengas razón, el cliente no te va a creer y se va sin comprar.' },
        { t: 'Es cosa de acostumbrarse, en unos días ni los va a sentir.', tipo: 'regular', fb: 'Cierto para la graduación, falso para la estética. Nunca se va a acostumbrar a no gustarse.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 6 */
  {
    id: 'no-necesito-progresivos',
    cat: 'duda',
    meta: { paso: 'S · Salud Visual', perfil: 'Sabelotodo', tecnica: 'porque', tecnica2: 'boomerang', cierre: 'consultivo' },
    titulo: 'No creo que necesite progresivos / ¿de verdad los necesito?',
    variantes: [
      'no creo que necesite progresivos', 'de verdad los necesito', '¿tan mal estoy?',
      'yo veo bien', 'solo necesito para leer', 'con unos de lectura me basta'
    ],
    claves: ['no necesito','de verdad necesito','veo bien','solo para leer','lectura me basta','tan mal estoy','no estoy tan mal'],
    senal: 'Mezcla de negación (aceptar los progresivos es aceptar la edad) y desconfianza (cree que le están inflando la venta).',
    causas: [
      'Asocia el progresivo con "ya estoy viejo" y lo rechaza emocionalmente.',
      'Compensa la vista de cerca alejando el celular y cree que eso es "ver bien".',
      'Piensa que el optometrista y el asesor están de acuerdo para venderle más.'
    ],
    pregunta: '¿Le ha pasado que tiene que alejar el celular para leerlo, o que le cuesta más en la noche?',
    guion: {
      escuchar: 'Escuchá sin defender la receta. Si te ponés del lado del optometrista contra el cliente, perdés a los dos.',
     
      valida: 'Es una duda muy válida y me alegra que la haga en vez de quedarse callado.',
      pregunta: '¿Le ha pasado que aleja el celular para leer un mensaje, o que al final del día siente los ojos cansados?',
      reencuadra: 'Eso que hace de alejar el brazo es justamente lo que el progresivo le resuelve. No es que esté mal: es que su ojo ya no acomoda solo, y usted lo está compensando con el brazo y con esfuerzo. La receta que le dio el optometrista dice «datos». Si usamos solo lentes de lectura, va a tener que quitárselos y ponérselos todo el día.',
      cierra: 'Le propongo esto: se los armamos y usted tiene la garantía de adaptación. Si en «X días» no le funcionan, lo resolvemos. ¿Le parece justo?'
    },
    evitar: [
      'Mencionar la edad ("es normal a su edad"): es la forma más rápida de perder la venta.',
      'Contradecir al optometrista o dudar de la receta frente al cliente.',
      'Explicar el progresivo con términos técnicos (adición, corredor de progresión) sin traducirlos.'
    ],
    frase: 'No es que su vista esté mal; es que su ojo ya no hace solo el trabajo y usted lo está haciendo con el brazo.',
    tip: 'El síntoma que todos reconocen es alejar el celular. Úselo: el cliente se ve retratado y baja la defensa.',
    practica: {
      apertura: 'La verdad yo veo bastante bien, no sé si de verdad necesito progresivos o solo me están queriendo vender más.',
      opciones: [
        { t: 'Es una duda muy válida. Le hago una pregunta: ¿le ha pasado que tiene que alejar el celular para leer un mensaje?', tipo: 'ideal', fb: 'Perfecto. No te defendés de la acusación, la desactivás con una pregunta que él va a contestar que sí.' },
        { t: 'El optometrista fue quien lo recetó, yo solo sigo la receta.', tipo: 'mala', fb: 'Te lavás las manos. El cliente queda igual de dudoso y ahora además siente que nadie le explica.' },
        { t: 'Sí los necesita, su receta tiene una adición de «+2.00».', tipo: 'regular', fb: 'Es cierto y es técnico, pero para el cliente "adición +2.00" no significa absolutamente nada.' }
      ],
      replica: 'Bueno sí, últimamente sí alejo un poco el teléfono... pero eso le pasa a todo el mundo.',
      opciones2: [
        { t: 'Exacto, le pasa a mucha gente y por eso existe el progresivo. Con estos, el celular lo va a leer donde le quede cómodo, y de lejos y de la computadora también, sin andar cambiando de lentes. Un solo lente para todo el día.', tipo: 'ideal', fb: 'Muy bien. Normalizás sin señalarlo, y traducís el beneficio a su día concreto: un solo lente para todo.' },
        { t: 'Sí, es la presbicia, empieza como a los 40 años.', tipo: 'mala', fb: 'Le pusiste nombre clínico y edad. Acabás de convertir una venta en una mala noticia.' },
        { t: 'Por eso mismo, mejor prevenir desde ya.', tipo: 'regular', fb: 'Vago. No explica qué gana ni resuelve la duda de fondo.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 7 */
  {
    id: 'no-me-adapte',
    cat: 'duda',
    meta: { paso: 'S · Salud Visual', perfil: 'Tercera edad', tecnica: 'porque', tecnica2: 'balanza', cierre: 'consultivo' },
    titulo: 'Ya usé progresivos y no me adapté',
    variantes: [
      'ya usé progresivos y no me adapté', 'no me acostumbré', 'me mareaban',
      'los tuve que dejar', 'no me hallé con ellos', 'me dolía la cabeza con esos'
    ],
    claves: ['no me adapte','no me acostumbre','mareaban','marearon','me los quite','no me halle','me dolia la cabeza','mala experiencia'],
    senal: 'Objeción de RIESGO, no de precio. Ya pagó una vez por algo que no funcionó y no quiere repetir el error.',
    causas: [
      'Le vendieron un diseño de progresivo básico para una montura muy pequeña, sin campo suficiente.',
      'La toma de medidas no fue correcta o el armazón se le corrió y nadie se lo ajustó.',
      'Nadie lo acompañó en el período de adaptación y lo abandonó a los tres días.'
    ],
    pregunta: '¿Hace cuánto fue eso y recuerda si el armazón era pequeñito o si le tomaron medidas con el aro puesto?',
    guion: {
      escuchar: 'Dejalo contar toda la historia, aunque sea larga. Necesita desahogarse antes de escucharte, y ahí está la causa técnica.',
     
      valida: 'Le entiendo, y le voy a decir algo: eso no fue culpa suya. Es la falla más común y casi siempre tiene una causa técnica.',
      pregunta: '¿Hace cuánto fue? ¿Recuerda si el aro era pequeño o si le tomaron las medidas con el aro ya puesto en su cara?',
      reencuadra: 'Ahí está. Un progresivo necesita altura suficiente en el aro y medidas tomadas sobre su rostro, no sobre una tabla. Con el diseño «diseño» que le propongo, el campo intermedio es más amplio y la zona de adaptación mucho más corta. Y las medidas se las tomo yo, con el aro puesto.',
      cierra: 'Además lleva la garantía de adaptación: si en «X días» no se halla, lo resolvemos sin costo. Usted no está arriesgando dos veces. ¿Lo intentamos bien hecho esta vez?'
    },
    evitar: [
      'Decir "es que hay gente que no se adapta": lo condena y cierra la venta.',
      'Prometer que "esta vez sí, seguro" sin explicar QUÉ va a ser diferente.',
      'Saltar directo a venderle un lente más caro sin explicar la causa del fracaso anterior.'
    ],
    frase: 'No fue culpa suya y no fue mala suerte: fue una medida mal tomada. Eso sí se lo puedo garantizar diferente.',
    tip: 'Aquí la garantía de adaptación no es un extra, es el argumento central. Menciónela explícitamente.',
    practica: {
      apertura: 'Ya me pusieron progresivos una vez y nunca me hallé, me mareaban horrible. Los dejé en la gaveta.',
      opciones: [
        { t: 'Le entiendo, y eso no fue culpa suya. ¿Recuerda si el aro era pequeñito, o si le tomaron las medidas con el aro puesto en su cara?', tipo: 'ideal', fb: 'Excelente. Le quitás la culpa y buscás la causa técnica, que es lo que te va a permitir prometer algo distinto.' },
        { t: 'Es que hay personas que simplemente no se adaptan a los progresivos.', tipo: 'mala', fb: 'Acabás de decirle que él es el problema y que no tiene solución. Venta perdida.' },
        { t: 'Los de ahora son mucho mejores, ya no pasa eso.', tipo: 'regular', fb: 'Puede ser cierto pero suena a promesa de vendedor. Sin diagnóstico de qué falló, no te va a creer.' }
      ],
      replica: 'Ahora que lo dice, sí eran unos aros bien pequeños, de esos delgaditos.',
      opciones2: [
        { t: 'Ahí estuvo el problema. En un aro tan bajo el progresivo no tiene espacio para la zona intermedia, por eso el mareo. Elijamos un aro con altura suficiente y le tomo las medidas con él puesto. Y si aun así no se halla, la garantía de adaptación lo cubre.', tipo: 'ideal', fb: 'Impecable. Explicás la causa, la solución concreta y quitás el riesgo con la garantía. Ese es el cierre completo.' },
        { t: 'Perfecto, entonces con unos aros más grandes ya no va a tener problema.', tipo: 'regular', fb: 'Vas bien encaminado pero te faltó explicar el porqué y quitar el riesgo con la garantía.' },
        { t: 'Sí, esos aros no sirven para progresivos, ¿quién se los vendió?', tipo: 'mala', fb: 'Buscás culpables. No aporta nada y pone al cliente incómodo.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 8 */
  {
    id: 'y-si-no-sirven',
    cat: 'duda',
    meta: { paso: 'L · ¡Listo!', perfil: 'Primerizo', tecnica: 'sipero', tecnica2: null, cierre: 'iniciativa' },
    titulo: '¿Y si no me sirven? ¿Y si no me quedan bien?',
    variantes: [
      'y si no me sirven', 'y si no me quedan', 'y si no me gustan cuando estén listos',
      'y si veo mal con ellos', 'qué pasa si no funcionan'
    ],
    claves: ['y si no','no me sirven','no me quedan','que pasa si','garantia','devolucion','cambio'],
    senal: 'Miedo al riesgo. Está a un paso de decir que sí; solo necesita saber que tiene salida si algo sale mal.',
    causas: [
      'Es una compra a ciegas: paga hoy y recibe el producto días después.',
      'Ya le pasó antes con algún producto y quedó sin respaldo.',
      'Nadie le ha explicado la garantía, entonces asume que no hay.'
    ],
    pregunta: '¿Le explicaron ya cómo funciona nuestra garantía de adaptación?',
    guion: {
      escuchar: 'Escuchá el miedo, no la pregunta. Esta objeción es señal de compra: ya se imagina usándolos.',
     
      valida: 'Es la pregunta correcta y me gusta que la haga, porque la respuesta juega a su favor.',
      pregunta: '¿Le explicaron ya cómo funciona nuestra garantía de adaptación?',
      reencuadra: 'Funciona así: usted se los lleva y tiene «X días» para usarlos. Si en ese tiempo no ve bien o no se adapta, regresa y «lo revisamos, ajustamos o cambiamos según política». Además su receta y sus medidas quedan en el sistema con su nombre, así que cualquier ajuste posterior lo hacemos sin que usted tenga que explicar nada de nuevo.',
      cierra: 'O sea que el riesgo lo asumimos nosotros, no usted. ¿Procedemos?'
    },
    evitar: [
      'Contestar "no se preocupe, va a estar bien" sin dar el respaldo concreto.',
      'Inventar plazos o condiciones de garantía que no son las oficiales.',
      'Mostrar molestia por la pregunta.'
    ],
    frase: 'El riesgo lo asumimos nosotros, no usted. Para eso está la garantía.',
    tip: 'Esta objeción es señal de compra. El cliente ya se imagina usándolos. Cierre inmediatamente después de dar la garantía.',
    practica: {
      apertura: '¿Y si cuando estén listos no me sirven o no veo bien con ellos? Porque ya estaría pagado.',
      opciones: [
        { t: 'Es la pregunta correcta, y la respuesta juega a su favor. ¿Le explicaron cómo funciona nuestra garantía de adaptación?', tipo: 'ideal', fb: 'Perfecto. Reconocés la pregunta como legítima y llevás directo al respaldo, que es lo que le falta para decir que sí.' },
        { t: 'No se preocupe, todo va a salir bien, aquí trabajamos con mucho cuidado.', tipo: 'mala', fb: 'Tranquilizás sin respaldar. No le diste ni un hecho al que agarrarse.' },
        { t: 'Sí hay garantía, cualquier cosa regresa y vemos.', tipo: 'regular', fb: 'Correcto pero flojo. "Vemos" no es una promesa; especificá el plazo y qué se hace exactamente.' }
      ],
      replica: 'No, no me han explicado nada de garantía.',
      opciones2: [
        { t: 'Se la explico. Tiene «X días» desde que los recibe: si no ve bien o no se adapta, regresa y lo revisamos, ajustamos o cambiamos. Sus medidas quedan en el sistema a su nombre. El riesgo lo asumimos nosotros. ¿Procedemos?', tipo: 'ideal', fb: 'Excelente. Plazo concreto + qué pasa + por qué está respaldado + cierre en la misma respiración.' },
        { t: 'Ah, pues sí tenemos, cualquier problema me busca a mí directamente.', tipo: 'regular', fb: 'La intención es buena pero es una promesa personal, no institucional. Si vos no estás ese día, el cliente queda sin respaldo.' },
        { t: 'Está en el contrato que va a firmar, ahí puede leerlo.', tipo: 'mala', fb: 'Lo mandás a leer letra chica en el momento en que estaba listo para comprar. Enfría la venta por completo.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 9 */
  {
    id: 'lo-voy-a-pensar',
    cat: 'demora',
    meta: { paso: 'L · ¡Listo!', perfil: 'Todos los perfiles', tecnica: 'aplazamiento', tecnica2: null, cierre: 'eleccion' },
    titulo: 'Lo voy a pensar',
    variantes: [
      'lo voy a pensar', 'déjeme pensarlo', 'lo pienso y le aviso', 'déjeme ver',
      'después vengo', 'lo consulto y regreso'
    ],
    claves: ['lo voy a pensar','pensarlo','a pensar','déjeme pensar','dejeme ver','despues vengo','luego regreso','lo pienso'],
    senal: 'En el 90% de los casos no se va a pensar nada: hay una objeción específica que no se atrevió a decir. Su trabajo es sacarla antes de que salga por la puerta.',
    causas: [
      'El precio le incomoda pero no quiere negociar.',
      'Quedó una duda técnica que no entendió y le da pena preguntar de nuevo.',
      'De verdad necesita consultar con alguien o revisar su presupuesto (minoría real).'
    ],
    pregunta: 'Con toda confianza: ¿qué es lo que quiere pensar? ¿La inversión, el modelo, o algo que le expliqué?',
    guion: {
      escuchar: 'Escuchá sin apurarte a despedirlo. Tenés una frase para descubrir la duda real antes de que llegue a la puerta.',
     
      valida: 'Claro que sí, es su decisión y es correcto tomarse el tiempo.',
      pregunta: 'Solo permítame una cosa para no dejarlo con dudas: ¿qué es exactamente lo que quiere pensar? ¿La inversión, el modelo, o algo que le expliqué?',
      reencuadra: '(Si contesta) Perfecto, entonces resolvamos «X» ahorita mismo. (Si insiste en que solo quiere pensarlo) Con mucho gusto. Solo le comento que su receta es de «fecha» y mientras espera sigue forzando la vista todos los días. Le dejo la cotización impresa con su nombre y su graduación.',
      cierra: '¿Le parece si le escribo el «día» para saber si le quedó alguna duda? Sin compromiso, solo para que no tenga que empezar de cero cuando decida.'
    },
    evitar: [
      'Decir "ok, aquí lo esperamos" y dejarlo ir sin preguntar nada: es la venta que nunca vuelve.',
      'Presionar con "es solo por hoy" si no es verdad. La urgencia falsa quema la confianza.',
      'Perseguirlo hasta la puerta repitiendo argumentos.'
    ],
    frase: 'Claro que sí. Solo para no dejarlo con dudas: ¿qué es lo que quiere pensar?',
    tip: 'Pida permiso para el seguimiento y anote nombre, teléfono y la objeción real. Un "lo voy a pensar" bien registrado es una venta a 3 días.',
    practica: {
      apertura: 'Fíjese que déjeme pensarlo y cualquier cosa yo regreso.',
      opciones: [
        { t: 'Claro que sí. Solo permítame una cosa para no dejarlo con dudas: ¿qué es exactamente lo que quiere pensar, la inversión o algo que le expliqué?', tipo: 'ideal', fb: 'Correcto. Aceptás su derecho a pensarlo y en la misma frase abrís la puerta para que salga la objeción real.' },
        { t: 'Claro, aquí lo esperamos cuando guste.', tipo: 'mala', fb: 'Lo dejaste ir sin información. Esa venta no vuelve y ni siquiera sabés por qué se perdió.' },
        { t: 'Es que la promoción se vence hoy, mejor aprovéchela.', tipo: 'mala', fb: 'Presión y, si no es cierto, mentira. Quema la confianza y el cliente sale más rápido.' }
      ],
      replica: 'Es que la verdad sí se me hace bastante dinero para hoy.',
      opciones2: [
        { t: 'Le agradezco la sinceridad, con eso sí lo puedo ayudar. Tenemos «opciones de pago / otra configuración de lente» que le baja la cuota sin cambiarle la graduación. ¿Le muestro cómo quedaría?', tipo: 'ideal', fb: 'Perfecto. Agradecés la verdad y pasás de inmediato a una solución concreta. Ahí es donde se recupera la venta.' },
        { t: 'Le entiendo, entonces sí piénselo con calma.', tipo: 'mala', fb: 'Te dio la objeción real y la dejaste pasar. Era el momento exacto de ofrecer una alternativa.' },
        { t: 'Le puedo dar un «10%» de descuento si se decide ahorita.', tipo: 'regular', fb: 'Puede funcionar, pero regalás margen antes de probar alternativas de producto o financiamiento.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 10 */
  {
    id: 'cuando-me-paguen',
    cat: 'demora',
    meta: { paso: 'L · ¡Listo!', perfil: 'Busca precios', tecnica: 'aplazamiento', tecnica2: 'balanza', cierre: 'eleccion' },
    titulo: 'Regreso cuando me paguen / la próxima quincena',
    variantes: [
      'cuando me paguen', 'la próxima quincena', 'hasta fin de mes', 'ahorita no ando dinero',
      'cuando me caiga el pago', 'después de quincena vengo'
    ],
    claves: ['cuando me paguen','quincena','fin de mes','no ando dinero','no traigo','proximo pago','me pagan el'],
    senal: 'Puede ser real. Pero "regreso" sin fecha ni compromiso es una venta que se enfría y muere. Hay que anclarla hoy.',
    causas: [
      'Restricción real de flujo: llegó por el examen, no venía preparado a comprar.',
      'No sabe que existen formas de pago o de apartado.',
      'Es una salida cortés porque no le convenció el valor.'
    ],
    pregunta: '¿Cuándo sería eso, para dejarle todo listo desde ya?',
    guion: {
      escuchar: 'Escuchá y creele. Puede ser cierto: el error no es dudar de él, es dejarlo ir sin fecha.',
     
      valida: 'Le entiendo perfectamente y así lo hacemos.',
      pregunta: '¿Cuándo sería eso: el «15» o a fin de mes? Se lo pregunto para dejarle todo listo desde hoy.',
      reencuadra: 'Le propongo dos cosas. Una: le dejo la cotización congelada con su nombre, su graduación y el modelo apartado, para que cuando venga no tengamos que empezar de cero ni corra el riesgo de que ya no esté ese aro. Dos: tenemos «opciones de pago / apartado con abono» que le permiten dejar sus lentes en proceso desde hoy y terminar de pagarlos «al recibirlos».',
      cierra: '¿Cuál de las dos le sirve más? Porque si arrancamos hoy, para el «día» ya los tiene puestos.'
    },
    evitar: [
      'Dejarlo ir sin fecha, sin teléfono y sin cotización impresa.',
      'Asumir que no tiene dinero y bajarle la recomendación técnica.',
      'Ofrecer solo el "aquí lo esperamos".'
    ],
    frase: 'Perfecto. Dejemos todo listo hoy para que la quincena solo sea el trámite, no el reinicio.',
    tip: 'Anote la fecha exacta en el sistema y pida permiso para escribirle ese día. La venta se cierra en el seguimiento.',
    practica: {
      apertura: 'Me gustan, pero ahorita no ando dinero. Regreso cuando me paguen.',
      opciones: [
        { t: 'Le entiendo y así lo hacemos. ¿Cuándo sería eso, el «15» o a fin de mes? Se lo pregunto para dejarle todo listo desde hoy.', tipo: 'ideal', fb: 'Bien. Aceptás y de inmediato anclás una fecha, que es lo que convierte un "regreso" en una cita.' },
        { t: 'Claro, aquí vamos a estar. Que le vaya bien.', tipo: 'mala', fb: 'Venta perdida sin datos y sin fecha. Nadie va a hacer seguimiento porque no hay a qué darle seguimiento.' },
        { t: '¿Y no tiene tarjeta? Podemos pasarla hoy.', tipo: 'regular', fb: 'La opción es válida pero preguntada así de golpe suena a presión y puede incomodar.' }
      ],
      replica: 'El 30 me pagan. Pero igual mejor lo veo con calma después.',
      opciones2: [
        { t: 'Perfecto, el 30. Le dejo la cotización a su nombre con su graduación y el modelo reservado, y si me da permiso le escribo ese día para confirmar. Así el 30 solo pasa a dejar el abono y los tenemos listos para el «X».', tipo: 'ideal', fb: 'Excelente. Fecha, reserva, permiso de contacto y una promesa de entrega. Eso es cerrar una venta diferida.' },
        { t: 'Está bien, entonces nos vemos el 30.', tipo: 'regular', fb: 'Tenés la fecha pero no el compromiso ni el permiso para escribirle. Es 50% del trabajo.' },
        { t: 'Es que para el 30 ya puede que no tengamos ese modelo.', tipo: 'mala', fb: 'Amenaza de escasez sin ofrecer la solución (reservarlo). Suena a chantaje.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 11 */
  {
    id: 'lentes-todavia-sirven',
    cat: 'demora',
    meta: { paso: 'I · Indaga', perfil: 'Tercera edad', tecnica: 'boomerang', tecnica2: 'porque', cierre: 'consultivo' },
    titulo: 'Mis lentes actuales todavía me sirven',
    variantes: [
      'mis lentes todavía sirven', 'mis lentes todavia me sirven', 'todavía me sirven', 'con estos ando bien', 'todavía me funcionan',
      'no están tan malos', 'solo vine a saber cómo estoy'
    ],
    claves: ['todavia sirven','todavia me funcionan','ando bien con estos','no estan malos','solo vine a saber','estos me sirven'],
    senal: 'Comparación contra el statu quo. Mientras "lo que tiene" le parezca suficiente, cualquier precio le va a parecer caro.',
    causas: [
      'Se adaptó gradualmente a ver peor y ya no nota la diferencia.',
      'No sabe que su graduación cambió (por eso vino al examen).',
      'No quiere gastar y "todavía sirven" es la justificación más cómoda.'
    ],
    pregunta: '¿Le molesta si comparamos? Póngase los suyos y mire ese letrero, y ahora vea con la graduación nueva.',
    guion: {
      escuchar: 'Escuchá sin criticar los lentes que trae puestos. Criticarlos es criticar su decisión.',
     
      valida: 'Puede ser, y si de verdad le sirven yo se lo digo y no le vendo nada.',
      pregunta: 'Solo hagamos una prueba: mire ese letrero con sus lentes actuales. Ahora véalo con su graduación nueva. ¿Nota la diferencia?',
      reencuadra: 'Su receta cambió «X» desde la última vez. Sus lentes no están malos: están desactualizados. Lo que pasa es que el ojo se acostumbra poco a poco y usted compensa forzando, por eso siente que "todavía sirven" mientras termina el día con la vista cansada.',
      cierra: 'No le pido que bote los suyos: úselos de repuesto. Pero para el día a día, ¿le armamos los nuevos con su graduación correcta?'
    },
    evitar: [
      'Criticar sus lentes actuales o decir que están "horribles" o "viejísimos".',
      'Argumentar sin demostrar. Aquí la demostración vale más que diez frases.',
      'Insistir después de que la prueba muestre que efectivamente ve casi igual.'
    ],
    frase: 'Sus lentes no están malos, están desactualizados. Y usted no lo nota porque ha estado compensando.',
    tip: 'La comparación en vivo (lentes viejos vs. graduación nueva) cierra esta objeción sola. Hágala siempre.',
    practica: {
      apertura: 'Yo solo vine a chequearme, pero con estos lentes todavía ando bien la verdad.',
      opciones: [
        { t: 'Puede ser, y si de verdad le sirven yo se lo digo. Hagamos una prueba rápida: mire ese letrero con los suyos, y ahora con su graduación nueva.', tipo: 'ideal', fb: 'Perfecto. Le das credibilidad (estás dispuesto a no venderle) y proponés una demostración objetiva.' },
        { t: 'Pero su graduación cambió, ya no le sirven.', tipo: 'mala', fb: 'Lo contradecís de frente. Su experiencia le dice que ve bien y vos le decís que está equivocado.' },
        { t: 'Bueno, cualquier cosa aquí estamos cuando los necesite.', tipo: 'mala', fb: 'Te rendiste sin siquiera intentar demostrar la diferencia. El cliente se va sin saber lo que se pierde.' }
      ],
      replica: '(Después de la prueba) Ah caray... sí, con los nuevos se ve más nítido. Pero igual los míos no están rotos.',
      opciones2: [
        { t: 'Exacto, y no le pido que los bote: guárdelos de repuesto, siempre sirve tener un par. Pero para el día a día, sobre todo «manejando/en la compu», use la graduación correcta y va a terminar el día sin la vista cansada.', tipo: 'ideal', fb: 'Excelente. No lo obligás a renunciar a lo que tiene, reposicionás sus lentes viejos como repuesto y el nuevo par como el de uso diario.' },
        { t: 'Sí, pero usarlos así le puede dañar más la vista.', tipo: 'mala', fb: 'Es un argumento de miedo y técnicamente discutible. No lo uses.' },
        { t: 'Entonces ya vio, sí los necesita.', tipo: 'regular', fb: 'Ganaste el punto pero sonó a "te lo dije". Faltó traducirlo a un beneficio de su día.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 12 */
  {
    id: 'consultar-pareja',
    cat: 'tercero',
    meta: { paso: 'L · ¡Listo!', perfil: 'A la moda', tecnica: 'aplazamiento', tecnica2: null, cierre: 'eleccion' },
    titulo: 'Tengo que consultarlo con mi esposo/a / con mi familia',
    variantes: [
      'tengo que consultarlo con mi esposo', 'lo tengo que hablar con mi esposa',
      'déjeme preguntarle a mi hijo', 'tengo que consultarlo en la casa',
      'mi mamá es la que paga', 'sin mi esposo no decido'
    ],
    claves: ['consultar','esposo','esposa','mi hijo','mi hija','mi mama','mi papa','en la casa','preguntarle a','familia'],
    senal: 'Puede ser real (no decide o no paga) o una salida educada. La pregunta que lo revela es si el tercero decide el gasto o solo opina.',
    causas: [
      'Efectivamente no controla el presupuesto familiar.',
      'Quiere una segunda opinión sobre cómo se ve con el armazón.',
      'Es su forma amable de posponer sin decir que no le convence.'
    ],
    pregunta: '¿Es por la inversión o por cómo se ve? Porque si es cómo se ve, lo resolvemos en un minuto.',
    guion: {
      escuchar: 'Escuchá y respetá la consulta de inmediato. Cualquier gesto de fastidio se paga con la venta.',
     
      valida: 'Claro que sí, me parece muy bien, es una decisión de casa.',
      pregunta: '¿Y qué cree que le va a preguntar: por la inversión o por cómo se ve con los aros?',
      reencuadra: '(Si es estética) Se lo resuelvo ya: le tomo dos fotos con las dos opciones y se las manda por WhatsApp ahorita mismo, así decide con la opinión de él/ella sin tener que volver otro día. (Si es dinero) Le imprimo la cotización con el desglose y las formas de pago, para que la conversación en casa sea sobre datos y no sobre un número suelto.',
      cierra: 'Y si le da el visto bueno hoy mismo, me llama y yo dejo la orden ingresada sin que tenga que venir de nuevo. ¿Le parece?'
    },
    evitar: [
      'Insinuar que debería poder decidir solo. Es ofensivo y pierde la venta y al cliente.',
      'Dejarlo ir con un "pregúntele y me avisa" sin herramientas (fotos, cotización, su número).',
      'Intentar cerrar por encima del tercero.'
    ],
    frase: 'Perfecto. Vamos a darle a esa conversación toda la información para que sea rápida: fotos y cotización desglosada.',
    tip: 'Convierta al tercero en aliado: fotos por WhatsApp + cotización clara + su nombre y teléfono directo.',
    practica: {
      apertura: 'Me gustan, pero esto lo tengo que consultar con mi esposo primero.',
      opciones: [
        { t: 'Claro que sí, me parece bien. ¿Y qué cree que le va a preguntar: por la inversión o por cómo se ve con los aros?', tipo: 'ideal', fb: 'Muy bien. Respetás la consulta y averiguás cuál de los dos frenos es el real, que es lo que te deja actuar.' },
        { t: 'Pero al final los lentes son para usted, ¿no?', tipo: 'mala', fb: 'Cuestionás su dinámica de pareja. Se ofende y pierde toda la confianza que llevabas.' },
        { t: 'Está bien, consúltelo y aquí la esperamos.', tipo: 'mala', fb: 'La dejaste ir sin fotos, sin cotización y sin tu contacto. La conversación en casa va a ser sobre un número suelto.' }
      ],
      replica: 'Creo que las dos cosas, pero sobre todo quiere ver cómo me quedan.',
      opciones2: [
        { t: 'Eso lo resolvemos en un minuto. Le tomo dos fotos con las dos opciones y se las manda ahorita por WhatsApp. Si le da el visto bueno, me avisa y dejo la orden ingresada sin que tenga que volver.', tipo: 'ideal', fb: 'Perfecto. Convertís una espera de días en una decisión de minutos y eliminás el segundo viaje.' },
        { t: 'Perfecto, entonces llévese la cotización y lo platican en la casa.', tipo: 'regular', fb: 'Mejor que nada, pero perdiste la oportunidad de resolver hoy con dos fotos.' },
        { t: 'Le van a quedar muy bien, dígaselo así.', tipo: 'mala', fb: 'No resuelve nada y le pedís que venda por vos.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 13 */
  {
    id: 'seguro-empresa',
    cat: 'tercero',
    meta: { paso: 'L · ¡Listo!', perfil: 'Tecnológico', tecnica: 'porque', tecnica2: 'balanza', cierre: 'iniciativa' },
    titulo: 'Me lo cubre el seguro / la empresa',
    variantes: [
      'me lo cubre el seguro', 'la empresa me lo paga', 'tengo seguro médico',
      'con mi póliza', 'me dan ayuda en el trabajo', 'necesito factura para el seguro'
    ],
    claves: ['seguro','poliza','la empresa','me lo cubre','reembolso','factura para','convenio','planilla'],
    senal: 'No es una objeción de valor: es una objeción de PROCESO. Quiere saber si aquí le van a complicar el trámite.',
    causas: [
      'Tuvo una mala experiencia con papeleo en otro lugar.',
      'No sabe cuánto le cubre realmente y teme quedar con un saldo sorpresa.',
      'Necesita un documento específico (factura, cotización con detalle, código) y no sabe si se lo darán.'
    ],
    pregunta: '¿Sabe qué monto le cubre y qué documento le piden: factura, cotización detallada o algún formato de la empresa?',
    guion: {
      escuchar: 'Escuchá qué cobertura cree tener. Casi nunca la conoce bien, y ahí es donde vos aportás.',
     
      valida: 'Perfecto, eso lo manejamos con frecuencia y le ayudo con el trámite.',
      pregunta: '¿Sabe cuánto le cubre y qué documento le piden: factura, cotización con detalle o un formato de ellos?',
      reencuadra: 'Le explico cómo funciona aquí: le doy la cotización con el desglose «lente, tratamiento, armazón» que es lo que normalmente piden, y la factura a nombre de «quien corresponda». Si su cobertura es de «$X», la diferencia sería «$Y», y eso lo sabemos hoy, no cuando venga a recoger.',
      cierra: 'Le preparo el documento ahorita para que lo mande a autorizar. ¿A qué correo se lo envío?'
    },
    evitar: [
      'Decir "no sé cómo funciona eso, pregunte en su trabajo" y devolverle el problema.',
      'Prometer que el seguro cubre todo sin saberlo.',
      'Dejar la diferencia sin aclarar: es la queja número uno al momento de entregar.'
    ],
    frase: 'La diferencia la sabemos hoy, no el día que venga a recogerlos.',
    tip: 'Deje SIEMPRE por escrito el monto que cubre el tercero y el saldo del cliente. Evita el 100% de los reclamos en entrega.',
    practica: {
      apertura: 'Es que a mí la empresa me da una ayuda para lentes, ¿ustedes manejan eso?',
      opciones: [
        { t: 'Sí, lo manejamos seguido y le ayudo con el trámite. ¿Sabe cuánto le cubren y qué documento le piden?', tipo: 'ideal', fb: 'Bien. Das seguridad de inmediato y averiguás las dos variables que definen el cierre: monto y documento.' },
        { t: 'Eso tendría que consultarlo usted en su trabajo.', tipo: 'mala', fb: 'Le devolvés el problema. El cliente se va a "averiguar" y no vuelve.' },
        { t: 'Sí, no hay problema, le hacemos la factura y listo.', tipo: 'regular', fb: 'Suena bien pero no aclaraste monto ni diferencia. Ese es el reclamo del día de la entrega.' }
      ],
      replica: 'Me cubren hasta «$XX», de ahí para arriba lo pago yo.',
      opciones2: [
        { t: 'Perfecto, entonces con esta opción su diferencia sería «$Y» y se lo dejo por escrito en la cotización. Si quiere, le armo también una alternativa que quede más cerca de la cobertura, y usted decide con los dos números al frente.', tipo: 'ideal', fb: 'Excelente. Transparencia total y dos opciones. El cliente decide informado y no hay sorpresas en la entrega.' },
        { t: 'Ah bueno, entonces solo pagaría la diferencia, tranquilo.', tipo: 'regular', fb: 'Cierto pero vago. Decí el número exacto y dejalo por escrito.' },
        { t: 'Entonces mejor llevemos algo que quede justo en «$XX» para que no pague nada.', tipo: 'mala', fb: 'Ajustás el producto al monto en lugar de a la receta. Puede terminar con un lente que no le sirve.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 14 */
  {
    id: 'tiempo-entrega',
    cat: 'proceso',
    meta: { paso: 'L · ¡Listo!', perfil: 'Tecnológico', tecnica: 'balanza', tecnica2: null, cierre: 'iniciativa' },
    titulo: 'Es mucho tiempo de espera / los necesito ya',
    variantes: [
      'tanto tiempo', 'es mucha espera', 'mucho tiempo de entrega', 'tardan mucho en entregar', 'los necesito para mañana', 'no puede ser más rápido',
      'una semana es mucho', 'y no hay más rápido'
    ],
    claves: ['tiempo','espera','tardan','cuanto tardan','mas rapido','urgente','los necesito','para cuando'],
    senal: 'Tiene una fecha o una necesidad concreta en la cabeza (un viaje, un examen, el trabajo). Averigüe cuál antes de responder.',
    causas: [
      'Tiene un evento o una necesidad con fecha y nadie se la ha preguntado.',
      'Espera un plazo de óptica de centro comercial ("en una hora") que no aplica a lentes graduados.',
      'No entiende que su lente se fabrica a la medida, no se saca de una gaveta.'
    ],
    pregunta: '¿Para cuándo los necesita exactamente? ¿Tiene algo en puerta?',
    guion: {
      escuchar: 'Escuchá si detrás del reclamo hay una fecha concreta. Casi siempre la hay y nadie se la ha preguntado.',
     
      valida: 'Le entiendo, nadie quiere esperar. Déjeme ver qué podemos hacer.',
      pregunta: '¿Para cuándo los necesita exactamente? ¿Tiene algún viaje o compromiso?',
      reencuadra: 'Le explico por qué el tiempo: su lente no sale de una gaveta, se fabrica con SU graduación, se le aplica el tratamiento y se monta en SU aro con las medidas de su rostro. Ese proceso es lo que hace que vea bien. En «X días hábiles» los tiene, y le aviso apenas lleguen a sucursal.',
      cierra: 'Si es urgente, reviso si «su graduación aplica a un proceso más rápido / hay opción de lente en existencia». ¿Quiere que lo consulte ahorita?'
    },
    evitar: [
      'Prometer un plazo que el laboratorio no va a cumplir. Un día tarde destruye más que una semana avisada.',
      'Decir "es que así es el proceso" sin explicar por qué.',
      'No preguntar la fecha real de necesidad.'
    ],
    frase: 'Su lente no sale de una gaveta: se fabrica con su graduación y con las medidas de su rostro. Eso es lo que hace que vea bien.',
    tip: 'Siempre dé el plazo en días hábiles, comprometa un aviso al llegar, y prometa un día más de lo que espera. Cumplir antes es un regalo; cumplir tarde es un reclamo.',
    practica: {
      apertura: '¿Ocho días? Uy no, eso es mucho, yo los necesito antes.',
      opciones: [
        { t: 'Le entiendo. ¿Para cuándo los necesita exactamente? ¿Tiene algún viaje o compromiso?', tipo: 'ideal', fb: 'Correcto. Antes de defender el plazo averiguás cuál es la fecha real, que puede ser perfectamente compatible.' },
        { t: 'Es que así es el proceso, los lentes se mandan a laboratorio.', tipo: 'mala', fb: 'Te escudás en el procedimiento. El cliente no compró un procedimiento, compró ver bien para una fecha.' },
        { t: 'Déjeme ver si se los puedo apurar.', tipo: 'regular', fb: 'Prometés antes de saber si podés y sin saber para cuándo los necesita. Riesgo de incumplir.' }
      ],
      replica: 'Es que el viernes salgo de viaje y quiero llevármelos.',
      opciones2: [
        { t: 'Perfecto, eso sí lo puedo trabajar. Si ingresamos hoy la orden, «reviso el proceso más rápido / la opción en existencia» y le confirmo hoy mismo si llegan para el jueves. Si no llegan, se lo digo de una vez y buscamos otra alternativa para el viaje.', tipo: 'ideal', fb: 'Excelente. Actuás sobre la fecha real, te comprometés a confirmar y, sobre todo, prometés avisar si no se puede. Eso es confianza.' },
        { t: 'Uy, para el viernes va a estar difícil.', tipo: 'regular', fb: 'Honesto pero te quedaste ahí. Sin alternativa, la venta se cae.' },
        { t: 'Sí, para el viernes se los tengo, no se preocupe.', tipo: 'mala', fb: 'Prometiste sin verificar. Si no llegan, perdés al cliente y le arruinás el viaje.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 15 */
  {
    id: 'solo-vine-al-examen',
    cat: 'apertura',
    meta: { paso: 'S · Salud Visual', perfil: 'Busca precios', tecnica: 'aplazamiento', tecnica2: 'boomerang', cierre: 'consultivo' },
    titulo: 'Solo vine por el examen / solo quiero la receta',
    variantes: [
      'solo vine por el examen', 'solo quiero la receta', 'nada más el chequeo',
      'los voy a mandar a hacer a otro lado', 'deme la receta y ya'
    ],
    claves: ['solo el examen','solo la receta','nada mas el chequeo','deme la receta','solo vine a','no voy a comprar'],
    senal: 'No es un no: es que todavía no le ha dado ninguna razón para comprar aquí. La receta es suya y debe dársela; la venta se gana en los siguientes tres minutos.',
    causas: [
      'Planea cotizar en varios lugares (es normal y está en su derecho).',
      'Cree que aquí va a ser más caro sin haber preguntado.',
      'Nadie le ha mostrado nada todavía; solo lo pasaron del examen a la caja.'
    ],
    pregunta: 'Con mucho gusto. ¿Me permite dos minutos para mostrarle lo que su receta necesita? Así compara con criterio en donde vaya.',
    guion: {
      escuchar: 'Escuchá y entregá la receta sin fricción. La actitud de los primeros cinco segundos define si te da los dos minutos.',
     
      valida: 'Por supuesto, su receta es suya y se la entrego sin problema.',
      pregunta: 'Solo permítame dos minutos: ¿me deja mostrarle qué es lo que su receta pide? Así, vaya donde vaya, compara sabiendo qué le están ofreciendo.',
      reencuadra: 'Su graduación es «X» con «astigmatismo/adición». Eso significa que necesita «lente/diseño», y si le ofrecen algo distinto le va a quedar «grueso / con distorsión». Aquí ese lente le queda en «$X» ya con «tratamiento» y garantía de adaptación, y sus medidas se las tomo yo con el aro puesto.',
      cierra: 'Tiene toda la información para comparar. Y si le sirve, se los dejamos en proceso hoy y para el «día» los tiene. ¿Le muestro dos opciones?'
    },
    evitar: [
      'Negarle o retrasarle la receta. Es del cliente, siempre.',
      'Soltarle la receta en la mano sin decir una palabra.',
      'Sonar molesto porque "solo vino al examen".'
    ],
    frase: 'Su receta es suya y aquí la tiene. Permítame dos minutos para que sepa exactamente qué le tienen que ofrecer donde vaya.',
    tip: 'Educar al cliente que se va es la mejor inversión: vuelve porque nadie más le explicó nada.',
    practica: {
      apertura: 'Gracias, pero yo solo vine por el examen. Deme la receta y yo después veo dónde los mando a hacer.',
      opciones: [
        { t: 'Por supuesto, su receta es suya. Solo permítame dos minutos para mostrarle qué es lo que pide, así compara con criterio donde vaya.', tipo: 'ideal', fb: 'Impecable. Entregás sin fricción, ganás credibilidad y te comprás dos minutos para construir valor.' },
        { t: 'Claro, aquí tiene. Que le vaya bien.', tipo: 'mala', fb: 'Ni siquiera intentaste. El cliente se va sin saber nada de CV+ y compra donde le hablen.' },
        { t: 'Le recomiendo que los haga aquí, tenemos mejores precios.', tipo: 'mala', fb: 'Afirmación sin respaldo y suena desesperada. Además puede no ser cierta.' }
      ],
      replica: 'Bueno, dos minutos. Pero ya le adelanto que en otro lado me sale más barato.',
      opciones2: [
        { t: 'Con dos minutos me basta. Su receta pide «lente/diseño» por «el astigmatismo». Si le ofrecen un lente básico, se le va a ver grueso a los lados. Eso es lo que tiene que preguntar donde vaya. Aquí le queda en «$X» con tratamiento y garantía. ¿Le muestro cómo se vería?', tipo: 'ideal', fb: 'Excelente. Le das una pregunta concreta para hacer en la competencia. Eso vale más que cualquier descuento.' },
        { t: 'Puede ser, pero aquí la calidad es superior.', tipo: 'mala', fb: 'Genérico y no verificable. Desperdiciaste los dos minutos que te ganaste.' },
        { t: 'Compare y regrese, aquí lo esperamos.', tipo: 'regular', fb: 'Cortés pero pasivo. Te dio permiso de hablar y no dijiste nada de valor.' }
      ]
    }
  }
,

  /* ---------------------------------------------------------- 16 */
  {
    id: 'solo-estoy-viendo',
    cat: 'apertura',
    meta: { paso: 'V · Vincula', perfil: 'Primerizo', tecnica: 'aplazamiento', tecnica2: null, cierre: 'consultivo' },
    titulo: 'Solo estoy viendo / cliente llega distante',
    variantes: [
      'solo estoy viendo', 'solo vengo a ver', 'nada más estoy mirando', 'ahorita no gracias',
      'solo estoy dando una vuelta', 'después le aviso si necesito algo'
    ],
    claves: ['solo estoy viendo','solo vengo a ver','estoy mirando','dando una vuelta','ahorita no','no gracias','solo viendo'],
    senal: 'No es un rechazo a vos: es un escudo automático que trae de todas las tiendas. Nadie entra a una óptica por casualidad.',
    causas: [
      'Viene prevenido de que lo van a perseguir para venderle.',
      'Todavía no sabe si tiene un problema visual o solo curiosidad.',
      'Entró por una promoción o por el aire acondicionado y le da pena decirlo.'
    ],
    pregunta: '¿Y qué es lo que anda buscando: algo para el sol, para la computadora, o quiere aprovechar el examen de cortesía?',
    guion: {
      escuchar: 'Escuchá y dale espacio real. Perseguirlo confirma su sospecha; ignorarlo lo deja irse. El punto medio es una frase y distancia.',
      valida: 'Claro que sí, tómese su tiempo con toda confianza. Yo ando por aquí por si algo se le ofrece.',
      pregunta: '(Después de 30–60 segundos, acercándose sin invadir) Solo para orientarlo mejor: ¿anda buscando algo para el sol, para la computadora, o quiere aprovechar el examen visual de cortesía?',
      reencuadra: 'Le comento por si le sirve: el examen visual aquí es de cortesía y toma «pocos minutos». Aunque hoy no compre nada, sale sabiendo cómo está su vista. Mucha gente entra "solo viendo" y descubre que su graduación cambió.',
      cierra: '¿Le agendo el examen ahorita que hay campo, o prefiere ver aros primero mientras se desocupa el consultorio?'
    },
    evitar: [
      'Seguirlo por toda la tienda a dos pasos: es la queja número uno de los clientes.',
      'Contestar "está bien" y desaparecer. El cliente se va y nadie supo qué necesitaba.',
      'Preguntar "¿le puedo ayudar en algo?" — la respuesta automática siempre es no.'
    ],
    frase: 'Tómese su tiempo. Solo le comento que el examen visual es de cortesía, por si quiere aprovecharlo hoy.',
    tip: 'Nunca preguntes algo que se pueda contestar con "no". Preguntá entre opciones: sol, computadora o examen.',
    practica: {
      apertura: '(Entra, no hace contacto visual) No gracias, solo estoy viendo.',
      opciones: [
        { t: 'Claro que sí, tómese su tiempo con toda confianza. Yo ando por aquí por si algo se le ofrece.', tipo: 'ideal', fb: 'Correcto. Le das espacio, bajás el escudo y te quedás disponible. En 30 segundos podés acercarte con una pregunta abierta.' },
        { t: '¿Le puedo ayudar en algo?', tipo: 'mala', fb: 'Pregunta cerrada: la respuesta automática es "no". Acabás de cerrar la puerta vos mismo.' },
        { t: 'Mire, tenemos promoción en estos aros, se los dejo en «$XX».', tipo: 'mala', fb: 'Le confirmaste que sí lo iban a perseguir para venderle. Se va en dos minutos.' }
      ],
      replica: '(Un minuto después, se detiene frente a los aros de sol)',
      opciones2: [
        { t: 'Esos son polarizados. Solo para orientarlo: ¿los busca para manejar o para la playa? Y por cierto, si usa graduación, esos se pueden hacer con su receta.', tipo: 'ideal', fb: 'Excelente. Aportás un dato útil, preguntás entre opciones y abrís la puerta al examen sin presionar.' },
        { t: '¿Le gustan esos? Se los puedo bajar para que se los pruebe.', tipo: 'regular', fb: 'Va bien pero es reactivo. Con una pregunta de exploración habrías sabido para qué los quiere.' },
        { t: 'Esos están en promoción esta semana.', tipo: 'regular', fb: 'Empezás por el precio antes de saber la necesidad. Es el orden invertido del modelo.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 17 */
  {
    id: 'ya-se-mi-graduacion',
    cat: 'apertura',
    meta: { paso: 'I · Indaga', perfil: 'Sabelotodo', tecnica: 'sipero', tecnica2: 'porque', cierre: 'consultivo' },
    titulo: 'Ya sé mi graduación, no necesito examen',
    variantes: [
      'ya sé mi graduación', 'ya me hice el examen', 'traigo mi receta', 'no necesito examen',
      'solo cópiela de estos lentes', 'hágame los mismos que traigo'
    ],
    claves: ['ya se mi graduacion','ya me hice el examen','traigo mi receta','no necesito examen','copiela','los mismos que traigo','mi receta la tengo'],
    senal: 'Quiere ahorrar tiempo, no discutir. Pero una receta vieja o copiada de un lente es la causa número uno de "no me adapté".',
    causas: [
      'Se hizo un examen hace uno o dos años y cree que la graduación no cambia.',
      'Teme que el examen sea un pretexto para venderle más o para cobrarle.',
      'Anda apurado y quiere salir rápido.'
    ],
    pregunta: '¿Hace cuánto fue su último examen? ¿Y ha sentido algún cambio: dolor de cabeza, vista cansada, o que aleja el celular?',
    guion: {
      escuchar: 'Escuchá sin corregirlo de entrada. Decirle "su receta ya no sirve" en el primer minuto lo pone a la defensiva por el resto de la visita.',
      valida: 'Perfecto, eso nos ahorra tiempo y con gusto trabajamos con su receta.',
      pregunta: '¿Hace cuánto fue ese examen? ¿Y ha notado algún cambio: dolor de cabeza al final del día, vista cansada, o que aleja un poco el celular?',
      reencuadra: 'Sí, tiene toda la razón en que ya conoce su graduación. Pero las graduaciones cambian, y el examen aquí es de cortesía y toma «pocos minutos». Si sale igual, perfecto: hacemos sus lentes con esa misma receta y usted se va tranquilo. Si cambió, nos evitamos que gaste en unos lentes con los que no va a ver bien.',
      cierra: 'Se lo hacemos ahorita que hay campo y de una vez seguimos con los aros. ¿Le parece?'
    },
    evitar: [
      'Decir "esa receta ya no sirve" antes de haber preguntado nada.',
      'Copiar la graduación de sus lentes actuales sin advertirle el riesgo.',
      'Insistir tres veces. Si dice que no, se respeta y se anota en el expediente.'
    ],
    frase: 'Si el examen sale igual, hacemos sus lentes con su misma receta. Si cambió, nos evitamos que gaste dos veces.',
    tip: 'El examen de cortesía es el mejor argumento del modelo: no le cuesta nada y le quita a usted el riesgo de una receta vieja.',
    practica: {
      apertura: 'No, examen no necesito. Yo ya sé mi graduación, aquí traigo mis lentes, cópiela de ahí.',
      opciones: [
        { t: 'Perfecto, eso nos ahorra tiempo. ¿Hace cuánto fue su último examen y ha notado algún cambio, como vista cansada al final del día?', tipo: 'ideal', fb: 'Bien. Aceptás, no discutís, y con una pregunta abrís la posibilidad de que él mismo note que algo cambió.' },
        { t: 'Es que esa receta ya puede estar vencida, mejor hágase el examen.', tipo: 'mala', fb: 'Lo contradecís de entrada y suena a que querés cobrarle algo más. Se cierra.' },
        { t: 'Está bien, se la copio de sus lentes actuales.', tipo: 'mala', fb: 'Riesgo técnico grave. Si la graduación cambió, el cliente va a decir que CV+ le hizo unos lentes malos.' }
      ],
      replica: 'Como hace dos años. Bueno, sí me arde un poco la vista en la computadora, pero es por el trabajo.',
      opciones2: [
        { t: 'Puede ser el trabajo, y también puede ser que la graduación cambió en dos años. El examen es de cortesía y toma «pocos minutos»: si sale igual, hacemos sus lentes con su misma receta y listo. ¿Se lo hacemos ahorita que hay campo?', tipo: 'ideal', fb: 'Impecable. Sí… pero… en su forma más limpia: le das la razón, sumás información y cerrás con iniciativa.' },
        { t: 'Ahí está, eso es señal de que su graduación cambió.', tipo: 'regular', fb: 'Diagnosticás sin ser optometrista y suena a "te lo dije". Mejor dejar que el examen lo diga.' },
        { t: 'Sí, el trabajo en computadora cansa mucho la vista.', tipo: 'mala', fb: 'Le confirmás su propia explicación y perdés la única puerta que se te abrió hacia el examen.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 18 */
  {
    id: 'no-tengo-tiempo-examen',
    cat: 'proceso',
    meta: { paso: 'S · Salud Visual', perfil: 'Tecnológico', tecnica: 'balanza', tecnica2: null, cierre: 'iniciativa' },
    titulo: 'No tengo tiempo para el examen',
    variantes: [
      'no tengo tiempo', 'ando apurado', 'ando de paso', 'tengo prisa',
      'y cuánto se tarda el examen', 'no puedo esperar'
    ],
    claves: ['no tengo tiempo','ando apurado','de paso','tengo prisa','cuanto se tarda','no puedo esperar','ando corriendo'],
    senal: 'Objeción real y legítima. No hay que vencerla: hay que dimensionarla y darle una salida concreta.',
    causas: [
      'Sobreestima la duración del examen (cree que es media hora o más).',
      'Salió del trabajo en su hora de almuerzo o dejó el carro mal estacionado.',
      'Vio gente esperando y asumió que la fila es larga.'
    ],
    pregunta: '¿Cuánto tiempo tiene ahorita? Se lo pregunto para decirle con honestidad si alcanza o si mejor le agendo.',
    guion: {
      escuchar: 'Escuchá y mirá el reloj junto con él, no en contra de él. Este cliente necesita sentir que respetás su tiempo.',
      valida: 'Le entiendo perfectamente, y le voy a ser honesto con los tiempos.',
      pregunta: '¿Cuánto tiempo tiene ahorita? Se lo pregunto para decirle si alcanza o si mejor le agendo para no hacerlo esperar.',
      reencuadra: 'Es verdad que hay que sacar un rato, sin embargo el examen toma «pocos minutos» y ahorita «hay campo / hay una persona antes». Vale la pena confirmar su graduación: es de cortesía y de ahí sale todo lo demás. Si prefiere, le agendo para «día y hora» y lo atiendo apenas llegue, sin espera.',
      cierra: 'Le paso al consultorio ahorita mismo, o le dejo agendado para «día». ¿Cuál le funciona?'
    },
    evitar: [
      'Prometer "cinco minutitos" si en realidad hay tres personas esperando.',
      'Dejarlo ir sin agendar y sin tomarle el teléfono.',
      'Hacerlo sentir culpable por andar apurado.'
    ],
    frase: 'Toma «pocos minutos» y es de cortesía. Vale la pena confirmar su graduación antes de invertir en unos lentes.',
    tip: 'Si de verdad no alcanza, agendá con día y hora exacta y anotá el teléfono. Un examen agendado vale más que un cliente apurado y molesto.',
    practica: {
      apertura: 'Uy no, examen no, ando bien apurado, solo pasé a preguntar precios.',
      opciones: [
        { t: 'Le entiendo. ¿Cuánto tiempo tiene ahorita? Se lo pregunto para decirle con honestidad si alcanza o si mejor le agendo.', tipo: 'ideal', fb: 'Muy bien. Respetás su tiempo y ganás el dato que te permite ofrecer la salida correcta.' },
        { t: 'Son solo cinco minutitos, no se preocupe.', tipo: 'regular', fb: 'Si hay fila, esa promesa se rompe y perdés la confianza. No prometas tiempos que no controlás.' },
        { t: 'Está bien, le paso los precios entonces.', tipo: 'mala', fb: 'Cotizás sin graduación. Es el camino más rápido a una venta perdida o a un lente equivocado.' }
      ],
      replica: 'Como quince minutos, tengo que regresar al trabajo.',
      opciones2: [
        { t: 'Perfecto, en quince minutos alcanzamos: el examen toma «pocos minutos» y ahorita «hay campo». Le paso al consultorio ya mismo y salimos con su graduación confirmada; los aros los vemos hoy o cuando pueda volver.', tipo: 'ideal', fb: 'Excelente. Cerrás con iniciativa dentro del tiempo que él te dio y le quitás la presión de tener que comprar hoy.' },
        { t: 'Quince minutos es poco, mejor venga otro día con más calma.', tipo: 'mala', fb: 'Lo mandás a irse cuando su tiempo sí alcanzaba. Ese cliente no vuelve.' },
        { t: 'Vamos a intentarlo, a ver si alcanzamos.', tipo: 'regular', fb: '"A ver si alcanzamos" transmite desorden. Este cliente necesita certeza, no un intento.' }
      ]
    }
  },

  /* ---------------------------------------------------------- 19 */
  {
    id: 'no-me-gusta-ninguna',
    cat: 'duda',
    meta: { paso: 'U · Un aro para ti', perfil: 'A la moda', tecnica: 'porque', tecnica2: null, cierre: 'eleccion' },
    titulo: 'No me gusta ninguno de los aros',
    variantes: [
      'no me gusta ninguno', 'ninguno me convence', 'no me gustan estos aros',
      'no tienen algo más moderno', 'todos se ven iguales', 'no hallo ninguno que me guste'
    ],
    claves: ['no me gusta ninguno','ninguno me convence','no me gustan los aros','mas moderno','se ven iguales','no hallo ninguno','no tienen otros'],
    senal: 'Casi nunca es que no haya nada: es que le mostraste demasiado, o le mostraste lo que a vos te gusta. El cliente saturado dice que no a todo.',
    causas: [
      'Le pusieron diez aros enfrente y se saturó (la regla del modelo es máximo 3 opciones).',
      'Traía una idea o una foto de referencia que nadie le preguntó.',
      'Los que le gustan no le favorecen y él lo intuye, pero no sabe explicarlo.'
    ],
    pregunta: '¿Qué le cambiaría a estas opciones: el estilo, el color o el tamaño?',
    guion: {
      escuchar: 'Escuchá y retirá los aros de la mesa mientras habla. Despejar el mostrador baja la saturación y reinicia la conversación.',
      valida: 'Está bien, para eso estamos. Prefiero que se lleve el que sí le gusta y no uno que después no se ponga.',
      pregunta: 'Cuénteme, ¿qué le cambiaría a estas opciones: el estilo, el color o el tamaño? Y si vio alguno en redes o en alguien, muéstremelo o descríbamelo.',
      reencuadra: '(Con la respuesta) Perfecto, entonces buscamos «más delgado / menos ancho / en tono X». Le traigo máximo dos opciones nuevas con ese criterio, no diez: mi trabajo es ser su guía, no el catálogo. Y le digo con honestidad cuál le favorece más por la forma de su rostro y por su graduación.',
      cierra: 'De estos dos, ¿con cuál se ve mejor usted? Porque los dos le funcionan para su receta.'
    },
    evitar: [
      'Sacar más y más aros hasta llenar el mostrador: aumenta la saturación y la indecisión.',
      'Decir "todos le quedan bien": pierde credibilidad como asesor.',
      'Insistir con un modelo que a vos te gusta después de que él dijo que no.'
    ],
    frase: 'Mi trabajo es ser su guía, no el catálogo. Dígame qué le cambiaría y le traigo dos, no diez.',
    tip: 'Máximo 3 opciones a la vez, y máximo 2 nuevas después de una negativa. Menos opciones, más decisión.',
    practica: {
      apertura: '(Después de probarse varios) No, la verdad ninguno me gusta, no tienen algo más moderno.',
      opciones: [
        { t: 'Está bien, para eso estamos. ¿Qué le cambiaría a estos: el estilo, el color o el tamaño?', tipo: 'ideal', fb: 'Perfecto. No te ofendés, y con tres opciones concretas obtenés el criterio que necesitás para acertar.' },
        { t: 'Déjeme traerle otros, tenemos muchísimos modelos más.', tipo: 'mala', fb: 'Más opciones a un cliente saturado lo bloquea más. Primero el criterio, después los aros.' },
        { t: 'Pero este se le veía muy bien, ¿está seguro?', tipo: 'mala', fb: 'Insistís con tu gusto contra el suyo. Pierde confianza en tu criterio.' }
      ],
      replica: 'Es que los quiero más delgaditos, estos se ven muy gruesos en mi cara.',
      opciones2: [
        { t: 'Ahora sí sé qué buscar. Le traigo dos en metal delgado que le van a favorecer por la forma de su rostro. Y le adelanto algo: con su graduación, un aro más pequeño también hace que el lente se vea más delgado.', tipo: 'ideal', fb: 'Excelente. Dos opciones (no diez), criterio estético y un argumento técnico que suma valor. Eso es asesorar.' },
        { t: 'Perfecto, aquí tiene todos los de metal para que escoja.', tipo: 'mala', fb: 'Volviste al catálogo. La regla es máximo dos opciones nuevas.' },
        { t: 'Sí, esos gruesos ya no se usan mucho.', tipo: 'regular', fb: 'Comentario de moda sin acción. No le trajiste nada nuevo ni avanzaste el proceso.' }
      ]
    }
  }

  ];

  /* ============================================================
     MOTOR DE COINCIDENCIA (para el chatbot y para "Consultar")
     ============================================================ */

  function normalizar(txt) {
    return (txt || '')
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[¿?¡!.,;:"()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Devuelve las objeciones ordenadas por puntaje de coincidencia.
   * @param {string} texto  Lo que escribió el asesor.
   * @returns {Array<{obj:Object, score:number}>}
   */
  function evaluar(texto) {
    var q = normalizar(texto);
    if (!q) return [];
    var palabras = q.split(' ').filter(function (w) { return w.length > 3; });

    return OBJECIONES.map(function (o) {
      var score = 0;

      // Frase completa de una variante dentro del texto = señal fuerte
      o.variantes.forEach(function (v) {
        var nv = normalizar(v);
        if (q.indexOf(nv) !== -1) score += 10;
        else {
          // coincidencia parcial de variante (mitad de sus palabras)
          var pv = nv.split(' ').filter(function (w) { return w.length > 3; });
          // Se exigen al menos 2 palabras significativas: con una sola,
          // frases cortas como "como voy" dispararían falsos positivos.
          if (pv.length >= 2) {
            var hit = pv.filter(function (w) { return q.indexOf(w) !== -1; }).length;
            if (hit / pv.length >= 0.6) score += 4;
          }
        }
      });

      // Palabras clave
      o.claves.forEach(function (c) {
        var nc = normalizar(c);
        if (q.indexOf(nc) !== -1) score += nc.indexOf(' ') !== -1 ? 4 : 2;
      });

      // Coincidencia con el título
      var nt = normalizar(o.titulo);
      palabras.forEach(function (w) { if (nt.indexOf(w) !== -1) score += 1; });

      return { obj: o, score: score };
    })
    .filter(function (r) { return r.score > 0; })
    .sort(function (a, b) { return b.score - a.score; });
  }

  /**
   * Detecta la objeción más probable.
   * @returns {{objecion:Object|null, confianza:'alta'|'media'|'baja', alternativas:Array}}
   */
  function detectar(texto) {
    var r = evaluar(texto);
    if (!r.length) return { objecion: null, confianza: 'baja', alternativas: [] };
    var top = r[0];
    var conf = top.score >= 10 ? 'alta' : (top.score >= 4 ? 'media' : 'baja');
    return {
      objecion: top.obj,
      confianza: conf,
      alternativas: r.slice(1, 4).map(function (x) { return x.obj; })
    };
  }

  /**
   * Respuesta lista para el chatbot (texto plano con saltos de línea).
   */
  function respuestaChat(texto) {
    var d = detectar(texto);
    if (!d.objecion) {
      return 'No identifiqué esa objeción todavía. Escribila con las palabras exactas que usó el cliente, por ejemplo: "el precio está muy caro", "no me convence", "lo voy a pensar", "en otro lado me lo dan más barato".';
    }
    var o = d.objecion;
    var L = [];
    L.push('OBJECIÓN: ' + o.titulo.toUpperCase());
    L.push('');
    L.push('POR QUÉ TE LO DICE');
    L.push(o.senal);
    o.causas.forEach(function (c) { L.push('• ' + c); });
    L.push('');
    L.push('TÉCNICA OFICIAL CV+: ' + TECNICAS[o.meta.tecnica].nombre +
           (o.meta.tecnica2 ? ' + ' + TECNICAS[o.meta.tecnica2].nombre : '') +
           '  ·  Paso ' + o.meta.paso + '  ·  Perfil frecuente: ' + o.meta.perfil);
    L.push('');
    L.push('CÓMO RESPONDER (E.R.A.R. — escuchar, reconocer, analizar, responder)');
    L.push('1. ESCUCHÁ: ' + o.guion.escuchar);
    L.push('2. RECONOCÉ: ' + o.guion.valida);
    L.push('3. ANALIZÁ: ' + o.guion.pregunta);
    L.push('4. RESPONDÉ: ' + o.guion.reencuadra);
    L.push('5. CERRÁ (cierre ' + CIERRES[o.meta.cierre].nombre + '): ' + o.guion.cierra);
    L.push('');
    L.push('QUÉ NO DECIR');
    o.evitar.forEach(function (e) { L.push('✕ ' + e); });
    L.push('');
    L.push('FRASE CLAVE: "' + o.frase + '"');
    if (d.confianza !== 'alta' && d.alternativas.length) {
      L.push('');
      L.push('¿No era esa? También manejo: ' + d.alternativas.map(function (a) { return '"' + a.titulo + '"'; }).join(', ') + '.');
    }
    return L.join('\n');
  }

  global.CVP_OBJECIONES = {
    version: '2.0',
    categorias: CATEGORIAS,
    tecnicas: TECNICAS,
    cierres: CIERRES,
    lista: OBJECIONES,
    normalizar: normalizar,
    evaluar: evaluar,
    detectar: detectar,
    respuestaChat: respuestaChat,
    porId: function (id) {
      return OBJECIONES.filter(function (o) { return o.id === id; })[0] || null;
    }
  };

})(typeof window !== 'undefined' ? window : this);
