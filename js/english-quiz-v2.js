/* ═══════════════════════════════════════════════════════════════════════
   BANCOS DE PREGUNTAS · INGLÉS CV+  (v2 · 21 de agosto de 2026)
   ───────────────────────────────────────────────────────────────────────
   80 ítems por nivel, 400 en total. Cada ítem:
     t  tipo  → mc (selección) · audio (escucha y escoge) · audioW (dictado)
                write (escribir en inglés) · speak (pronunciación con micrófono)
     b  bloque→ uso · oido · prod · habla
     say      lo que dice la voz (si tiene las letras separadas, se deletrea)
     a / alt  respuesta esperada y variantes aceptadas
     c        índice correcto (las opciones se revuelven en cada intento,
              así que este índice NO delata nada al alumno)
     e        explicación que se muestra al corregir
   Para agregar preguntas basta empujar objetos con esta forma al array
   del nivel; el motor respeta las proporciones por bloque automáticamente.
   ═══════════════════════════════════════════════════════════════════════ */
window.BANCOS_INGLES = {
/* ───── NIVEL 0 ───── */
0:[
{"t":"mc","b":"uso","q":"Un cliente deletrea su apellido y oís: «ái – ar – dábol-iu – ái – en». ¿Cómo lo registrás?","opts":["AIRWIN","IRWEN","EARWIN","IRWIN"],"c":3,"e":"«ái» es la I, «ar» la R, «dábol-iu» la W y «en» la N: I-R-W-I-N. La E en inglés suena «i», así que oír «ái» y escribir E cambia el apellido."},
{"t":"mc","b":"uso","q":"Otro cliente te dicta su apellido: «di – i – éi – en». ¿Qué escribís en el sistema?","opts":["DIEN","DIAN","DEAN","DAEN"],"c":2,"e":"«i» es la letra E y «éi» es la letra A: D-E-A-N. El error número uno es escribir I cuando se oye «i»."},
{"t":"mc","b":"uso","q":"Anotás el correo de un cliente y te dice: «lli – i – óu». ¿Qué letras son?","opts":["J – E – O","G – E – O","G – I – O","J – I – O"],"c":1,"e":"«lli» es la G y «lléi» es la J; «i» es la E, no la I. Confundir G/J o E/I te deja un correo que no existe."},
{"t":"mc","b":"uso","q":"Un cliente dicta: «dábol-iu – éi – el – es – éich». Escribís:","opts":["WALSH","VALSH","WELSH","WALCH"],"c":0,"e":"«dábol-iu» es W, «éi» es A y «éich» es H: W-A-L-S-H. Ojo con oír la W como V y la A como E."},
{"t":"mc","b":"uso","q":"El cliente dijo su apellido de corrido y no lo captaste. ¿Cómo le pedís que lo deletree?","opts":["Could you spell that, please?","Could you spell me that, please?","How is written your name?","Can you repeat me your name?"],"c":0,"e":"«Could you spell that, please?» (cud iu SPEL dat plis). En inglés no existe «spell me», ni se traduce literal «¿cómo se escribe?» como «how is written»."},
{"t":"mc","b":"uso","q":"Un cliente lee su receta en voz alta. ¿Cómo suena la palabra «prescription» en su boca?","opts":["pres-crip-SIÓN","pres-CRIP-shon","PRES-crip-shon","pres-crip-shi-ÓN"],"c":1,"e":"La terminación -tion suena «shon» y jamás lleva la fuerza: pres-CRIP-shon. Decirla «-sión» a la española es lo que más delata el cognado."},
{"t":"mc","b":"uso","q":"Vas a hablarle al cliente de la calidad del lente. ¿Cómo se oye «quality»?","opts":["CUA-li-tei","cua-li-TI","KUÓ-li-ti","kua-LI-ti"],"c":2,"e":"«Quality» se oye KUÓ-li-ti: la fuerza en la primera sílaba y la a sonando «o». El español nos empuja a golpear el final."},
{"t":"mc","b":"uso","q":"Los lentes del cliente ya llegaron del laboratorio. ¿Cuál frase le decís?","opts":["Your lents are ready.","Your lentils are ready.","Your crystals are ready.","Your lenses are ready."],"c":3,"e":"Los lentes son «lenses» (o «glasses»). «Lentils» son lentejas y «crystals» es calco de cristales: en inglés no se usa para lentes."},
{"t":"mc","b":"uso","q":"Una clienta te dice: «Actually, I'm embarrassed — I lost my prescription.» ¿Qué te dijo?","opts":["Actualmente estoy embarazada: perdí mi receta.","De hecho, me da vergüenza: perdí mi receta.","En realidad estoy embarazada y perdí mi receta.","Actualmente me da vergüenza haber perdido mi receta."],"c":1,"e":"«Actually» es «de hecho / en realidad» (actualmente es currently) y «embarrassed» es avergonzado (embarazada es pregnant). Los dos falsos amigos van en la misma frase."},
{"t":"mc","b":"uso","q":"Querés decirle a un cliente: «Actualmente trabajamos con otro proveedor.» ¿Cuál es correcta?","opts":["Currently we work with another supplier.","Actually we work with another supplier.","Actualy we work with another supplier.","In actuality we work with another supplier."],"c":0,"e":"«Actualmente» es currently o right now. «Actually» significa «de hecho» y le cambia el sentido completo a la frase."},
{"t":"mc","b":"uso","q":"Un cliente pregunta dónde puede comprar un libro. ¿A dónde lo mandás?","opts":["To the book library on the second floor.","To the library on the second floor.","To the librery on the second floor.","To the bookstore on the second floor."],"c":3,"e":"Librería (donde se compran libros) es bookstore. «Library» es biblioteca: ahí no le venden nada."},
{"t":"mc","b":"uso","q":"Querés contarle a un cliente que la promoción fue un gran éxito. ¿Cuál es correcta?","opts":["The promotion had a lot of exit.","The promotion was a big exit.","The promotion was a big success.","The promotion was very exit."],"c":2,"e":"Éxito es success. «Exit» es la salida: es el letrero que el cliente ve en la puerta de la tienda."},
{"t":"mc","b":"uso","q":"Un cliente pide «a frame with long temples» y otro pide «a large frame». ¿Qué quiere cada uno?","opts":["El primero, patillas largas; el segundo, un aro grande.","El primero, un aro grande; el segundo, patillas largas.","El primero, patillas anchas; el segundo, un aro alargado.","El primero, un aro alargado; el segundo, patillas gruesas."],"c":0,"e":"«Long» es largo y «large» es grande. Confundirlos te hace sacar de la vitrina el aro equivocado."},
{"t":"mc","b":"uso","q":"Vas a anotar en la ficha que el cliente tiene ojos sensibles a la luz. ¿Cómo se escribe?","opts":["sensitives eyes","sensible eyes","sensibles eyes","sensitive eyes"],"c":3,"e":"Sensible (que siente mucho) es sensitive. «Sensible» en inglés significa sensato o razonable, y en inglés los adjetivos no llevan s de plural."},
{"t":"mc","b":"uso","q":"En una reunión el gerente dice: «We support the new team.» ¿Qué dijo?","opts":["Soportamos (toleramos) al equipo nuevo.","Apoyamos al equipo nuevo.","Suponemos que el equipo es nuevo.","Supervisamos al equipo nuevo."],"c":1,"e":"«Support» es apoyar o dar soporte. Soportar algo molesto es «to stand» o «to tolerate»."},
{"t":"mc","b":"uso","q":"Un cliente dice: «I didn't realize the store closes at six.» ¿Qué te dijo?","opts":["No alcancé a llegar antes de las seis.","No realicé la compra antes de las seis.","No me di cuenta de que cierran a las seis.","No revisé el horario de cierre."],"c":2,"e":"«Realize» es darse cuenta. Realizar una tarea es «to carry out» o simplemente «to do»."},
{"t":"mc","b":"uso","q":"Un cliente señala el estuche y pregunta: «What fabric is this?» ¿Qué quiere saber?","opts":["Si es de fábrica original.","En qué fábrica lo hicieron.","De qué tela es.","De qué material rígido es."],"c":2,"e":"«Fabric» es tela. Fábrica es factory, y el laboratorio de la óptica es «lab»."},
{"t":"mc","b":"uso","q":"Le pedís a tu compañera la carpeta con las facturas, delante de un cliente. ¿Cuál es correcta?","opts":["Can you bring me the file carpet, please?","Can you bring me the carpet with the invoices?","Can you bring me the carpeta with the invoices?","Can you bring me the folder with the invoices?"],"c":3,"e":"Carpeta es folder. «Carpet» es alfombra, así que estarías pidiendo la alfombra de las facturas."},
{"t":"mc","b":"uso","q":"Querés contar que un cliente estaba discutiendo (peleando) con otro en la sala. ¿Cuál es correcta?","opts":["A client was arguing with another client.","A client was discussing with another client.","A client was discussing to another client.","A client had a discuss with another client."],"c":0,"e":"Discutir en el sentido de pelear es «to argue». «Discuss» es hablar de un tema: Let's discuss the options."},
{"t":"mc","b":"uso","q":"Aplicando la regla de los adjetivos en -oso, ¿cuál conversión está bien escrita?","opts":["famoso → famouse","generoso → generous","nervioso → nervius","delicioso → deliciuos"],"c":1,"e":"El español -oso pasa a -ous: generous, famous, nervous, delicious. La regla es -ous, sin e final y sin invertir las vocales."},
{"t":"mc","b":"uso","q":"Aplicando la regla de los adverbios en -mente, ¿cuál conversión está bien escrita?","opts":["perfectamente → perfectely","normalmente → normaly","probablemente → probablely","exactamente → exactly"],"c":3,"e":"El español -mente pasa a -ly, sin agregar vocales: exactly, normally, probably, perfectly."},
{"t":"mc","b":"uso","q":"Vas a cobrar $30 y no querés que el cliente oiga $13. ¿Dónde va la fuerza de la voz?","opts":["THIR-ty, la fuerza al inicio","thir-TY, la fuerza al final","THIR-teen, la fuerza al inicio","thir-TEEN, la fuerza al final"],"c":0,"e":"Los -TY golpean al inicio (THIRty = 30) y los -TEEN al final (thirTEEN = 13). El acento es lo único que los distingue."},
{"t":"mc","b":"uso","q":"El total es $45.75. ¿Cuál es la forma corta que de verdad vas a oír en Estados Unidos?","opts":["forty-five point seventy-five","forty-five seventy-five","four five seventy five","forty-five with seventy-five"],"c":1,"e":"En caja el precio se dice en dos bloques: «forty-five seventy-five». El «point» se usa para decimales, no para dólares y centavos."},
{"t":"mc","b":"uso","q":"La tienda cierra a las 18:00 y el cliente pregunta la hora de cierre. ¿Qué le decís?","opts":["We close at eighteen hours.","We close at eighteen o'clock.","We close at six p.m.","We close at six o'clock in the afternoon p.m."],"c":2,"e":"En Estados Unidos no se usa el reloj de 24 horas: 18:00 es six p.m. Nadie dice «eighteen hours»."},
{"t":"mc","b":"uso","q":"El cliente quiere su cita el jueves. ¿Cómo se pronuncia «Thursday»?","opts":["ZÉRS-dei, con la lengua entre los dientes","TÚRS-dei, con t fuerte","SÉRS-dei, con s simple","ZÉR-di, sin la s"],"c":0,"e":"«Thursday» se oye ZÉRS-dei: el th se hace con la lengua entre los dientes, como en think. Si te sale «t», el cliente entiende Tuesday."},
{"t":"mc","b":"uso","q":"El cliente dice que puede venir el «TÚS-dei». ¿Qué día anotás?","opts":["Thursday (jueves)","Tuesday (martes)","Wednesday (miércoles)","Saturday (sábado)"],"c":1,"e":"TÚS-dei es Tuesday (martes); el jueves se oye ZÉRS-dei. Anotar el día equivocado le arruina la entrega al cliente."},
{"t":"mc","b":"uso","q":"Oís «UÉNS-dei» y tenés que escribir el día en el sistema. ¿Cómo se escribe?","opts":["Wednsday","Wensday","Wednesday","Wenesday"],"c":2,"e":"Se escribe Wednesday aunque la primera d no se pronuncie (UÉNS-dei). Es la palabra donde la escritura más engaña."},
{"t":"mc","b":"uso","q":"Un cliente dice que regresa de su viaje en «llu-LÁI». ¿Qué mes es?","opts":["August (agosto)","June (junio)","January (enero)","July (julio)"],"c":3,"e":"July se oye llu-LÁI, con la fuerza al final. June sonaría «llun» y January, LLÁ-niu-e-ri."},
{"t":"mc","b":"uso","q":"El cliente dice que su seguro vence en «Ó-gost». ¿Qué mes anotás?","opts":["October (octubre)","April (abril)","August (agosto)","September (septiembre)"],"c":2,"e":"August se oye Ó-gost, en dos sílabas y sin la u española. April es ÉI-prol y October, ok-TÓU-ber."},
{"t":"mc","b":"uso","q":"Los lentes estarán listos el 3 de septiembre. ¿Cuál frase es correcta?","opts":["They'll be ready on September third.","They'll be ready on September three.","They'll be ready in September third.","They'll be ready on the September third."],"c":0,"e":"Las fechas llevan ordinal y la preposición «on»: on September third. «September three» suena a número dictado, no a fecha."},
{"t":"mc","b":"uso","q":"Ya le dijiste «Sorry, I don't understand» y el cliente sigue esperando. ¿Qué decís antes de ir por ayuda?","opts":["A moment please, I will bring a help.","Wait a minute, I go for help.","One moment, please. I go to bring help.","One moment, please. I'll get help."],"c":3,"e":"«One moment, please. I'll get help.» Nunca te vayas en silencio; y «I go for help» es calco directo del español."},
{"t":"mc","b":"uso","q":"Un cliente arranca hablándote rápido en inglés. ¿Cuál es la mejor primera respuesta?","opts":["Sorry, I no speak English.","Sorry, I speak a little English.","Sorry, I don't speak the English.","Sorry, me speak little English."],"c":1,"e":"«I speak a little English», dicha con una sonrisa, desarma la tensión. «I no speak» y «the English» son calcos del español."},
{"t":"mc","b":"uso","q":"El cliente se va con su compra. ¿Cuál despedida es correcta?","opts":["Thank you! Have a nice day!","Thanks you! Have nice day!","Thank you! Have a good travel!","Thank you! Pass a nice day!"],"c":0,"e":"«Thank you! Have a nice day!» es el cierre estándar. «Pass a nice day» es calco de «que pase un buen día» y «thanks you» mezcla las dos formas."},
{"t":"mc","b":"uso","q":"Un cliente señala la montura y pregunta cómo se llama esa parte. ¿Qué palabra usás?","opts":["the glass","the frame","the lens","the mount"],"c":1,"e":"La montura o aro es «the frame». «The lens» es el lente, «glass» es el vidrio y «mount» es calco de montura."},
{"t":"audio","b":"oido","say":"thirteen","rate":0.9,"q":"Escucha el número que dijo el cliente. ¿Cuál es?","opts":["30","13","3","33"],"c":1,"e":"Dijo thirTEEN, con la fuerza al final: 13. THIRty (30) golpea al inicio."},
{"t":"audio","b":"oido","say":"Your total is thirty dollars.","rate":0.9,"q":"Escucha el total. ¿Cuánto tenés que cobrar?","opts":["$3.00","$13.00","$33.00","$30.00"],"c":3,"e":"THIRty dollars, fuerza al inicio: $30. Si hubiera dicho thirTEEN serían $13 y perderías $17."},
{"t":"audio","b":"oido","say":"I need fifteen frames for the display.","rate":0.9,"q":"Escucha. ¿Cuántos aros pidió?","opts":["5","50","15","55"],"c":2,"e":"fifTEEN, fuerza al final: 15. FIFty (50) golpea al inicio y cambia todo el pedido."},
{"t":"audio","b":"oido","say":"forty","rate":0.9,"q":"Escucha la cantidad que pidió. ¿Cuál es?","opts":["40","14","4","44"],"c":0,"e":"FORty, con la fuerza al inicio: 40. fourTEEN (14) termina fuerte."},
{"t":"audio","b":"oido","say":"Your total is fourteen fifty.","rate":0.85,"q":"Escucha el total. ¿Cuánto le cobrás?","opts":["$14.15","$40.15","$14.50","$40.50"],"c":2,"e":"fourTEEN FIFty = $14.50: el primer bloque son los dólares y el segundo los centavos."},
{"t":"audio","b":"oido","say":"nineteen ninety-nine","rate":0.85,"q":"Escucha el precio. ¿Cuál es?","opts":["$99.19","$90.19","$19.90","$19.99"],"c":3,"e":"nineTEEN NINEty-nine = $19.99. El 19 golpea al final y el 90 al inicio, en la misma frase."},
{"t":"audio","b":"oido","say":"Your total is one fifty fifty.","rate":0.85,"q":"Escucha el total. ¿Qué monto marcás en la caja?","opts":["$155.00","$150.50","$100.55","$151.50"],"c":1,"e":"«One fifty fifty» es la forma corta de $150.50: ciento cincuenta con cincuenta."},
{"t":"audio","b":"oido","say":"They'll be ready on Friday at nine forty-five.","rate":0.85,"q":"Escucha. ¿Cuándo estarán listos?","opts":["viernes a las 9:45","viernes a las 9:15","jueves a las 9:45","viernes a las 8:45"],"c":0,"e":"Friday at nine forty-five: viernes 9:45. La hora se dice con los números tal cual."},
{"t":"audio","b":"oido","say":"We open at nine and close at six thirty.","rate":0.85,"q":"Escucha. ¿A qué hora cierran?","opts":["6:00","6:30","6:13","6:15"],"c":1,"e":"Close at six thirty: 6:30. THIRty golpea al inicio; si fuera thirTEEN no sería una hora posible."},
{"t":"audio","b":"oido","say":"Thursday","rate":0.85,"q":"Escucha el día. ¿Cuál es?","opts":["jueves","martes","sábado","miércoles"],"c":0,"e":"ZÉRS-dei es Thursday (jueves). Martes es Tuesday (TÚS-dei) y son los dos días que más se confunden."},
{"t":"audio","b":"oido","say":"Your appointment is on Tuesday, July second.","rate":0.85,"q":"Escucha. ¿Qué día y fecha es la cita?","opts":["martes 12 de julio","jueves 2 de julio","martes 2 de junio","martes 2 de julio"],"c":3,"e":"Tuesday, July second: martes 2 de julio. July se oye llu-LÁI; June sonaría «llun»."},
{"t":"audio","b":"oido","say":"E","rate":0.8,"q":"Escucha la letra que dictó el cliente. ¿Cuál es?","opts":["A","I","E","Y"],"c":2,"e":"La letra E se llama «i» y la I se llama «ái»: están al revés del español. Es el error número uno al deletrear."},
{"t":"audio","b":"oido","say":"G","rate":0.8,"q":"Escucha la letra con la que empieza el apellido. ¿Cuál es?","opts":["I","J","Y","G"],"c":3,"e":"La G se llama «lli» y la J «lléi». Se parecen muchísimo, y confundirlas cambia el nombre del cliente."},
{"t":"audio","b":"oido","say":"Could you spell that, please?","rate":0.85,"q":"Escucha al cliente. ¿Qué te está pidiendo?","opts":["Que le escribas el dato","Que le repitas el precio","Que le deletrees algo","Que hables más despacio"],"c":2,"e":"«Could you spell that, please?» pide deletrear. Pedir que lo escriban sería «Can you write it, please?»."},
{"t":"audioW","b":"oido","say":"M I L L E R","rate":0.7,"q":"La voz deletrea un apellido, letra por letra. Escríbelo completo.","a":"MILLER","alt":["Miller"],"e":"em – ái – el – el – i – ar. Ojo: la penúltima, «i», es la letra E, no la I."},
{"t":"audioW","b":"oido","say":"W I L S O N","rate":0.7,"q":"El cliente deletrea su apellido, letra por letra. Escríbelo completo.","a":"WILSON","alt":["Wilson"],"e":"dábol-iu – ái – el – es – óu – en. «dábol-iu» es la W, el nombre de letra más largo del inglés."},
{"t":"audioW","b":"oido","say":"J O N E S","rate":0.7,"q":"Otro cliente deletrea su apellido. Escríbelo completo, letra por letra.","a":"JONES","alt":["Jones"],"e":"lléi – óu – en – i – es. Si la primera fuera «lli» sería G; la J es «lléi»."},
{"t":"audioW","b":"oido","say":"V I S I O N","rate":0.7,"q":"La voz deletrea una palabra de la óptica, letra por letra. Escríbela completa.","a":"VISION","alt":["Vision","visión"],"e":"vi – ái – es – ái – óu – en. Las dos I se oyen «ái»: si escribís E te queda VESEON."},
{"t":"audioW","b":"oido","say":"sixteen","rate":0.9,"q":"Escucha y escribe el número en cifras.","a":"16","alt":["sixteen"],"e":"sixTEEN, con la fuerza al final: 16. SIXty (60) golpea al inicio."},
{"t":"audioW","b":"oido","say":"Your total is thirty-nine ninety-nine.","rate":0.85,"q":"Escucha el total y escribilo en cifras.","a":"39.99","alt":["$39.99","39,99"],"e":"thirty-nine ninety-nine = $39.99, la forma corta: primero los dólares, después los centavos."},
{"t":"audioW","b":"oido","say":"nine thirty","rate":0.85,"q":"Escucha la hora y escribila en cifras.","a":"9:30","alt":["9.30","930"],"e":"nine thirty = 9:30. La forma fácil y siempre correcta es decir los números tal cual."},
{"t":"audioW","b":"oido","say":"forty-five seventy-five","rate":0.85,"q":"Escucha el precio y escribilo en cifras.","a":"45.75","alt":["$45.75","45,75"],"e":"forty-five seventy-five = $45.75. Los dos bloques son -TY, con la fuerza al inicio."},
{"t":"write","b":"prod","q":"Escribe en inglés: atención","a":"attention","e":"El español -ción pasa a -tion: atención → attention. Se oye a-TEN-shon."},
{"t":"write","b":"prod","q":"Escribe en inglés: oportunidad","a":"opportunity","e":"El español -dad / -tad pasa a -ty: oportunidad → opportunity. Cuidado con la doble p."},
{"t":"write","b":"prod","q":"Escribe en inglés: técnico (el adjetivo, como en «hoja técnica»)","a":"technical","e":"El español -ico pasa a -ic / -ical: técnico → technical, óptico → optical, médico → medical."},
{"t":"write","b":"prod","q":"Escribe en inglés: nervioso","a":"nervous","e":"El español -oso pasa a -ous: nervioso → nervous. No es «nervious» ni «nervous o»."},
{"t":"write","b":"prod","q":"Escribe en inglés: diferente","a":"different","e":"El español -ente / -ante pasa a -ent / -ant: diferente → different, paciente → patient, importante → important."},
{"t":"write","b":"prod","q":"Escribe en inglés: exactamente","a":"exactly","e":"El español -mente pasa a -ly, sin agregar vocales: exactamente → exactly."},
{"t":"write","b":"prod","q":"Escribe en inglés: Sus lentes estarán listos el viernes a las tres.","a":"They'll be ready on Friday at three.","alt":["They will be ready on Friday at three.","Your glasses will be ready on Friday at three.","Your glasses will be ready on Friday at three o'clock."],"e":"El día va con «on» y la hora con «at»: on Friday at three."},
{"t":"write","b":"prod","q":"Escribe en inglés: Su total es cuarenta y dos con cincuenta.","a":"Your total is forty-two fifty.","alt":["Your total is forty-two dollars and fifty cents.","It's forty-two fifty."],"e":"«Forty-two fifty» es la forma corta que se usa en caja; la larga también es correcta pero casi nadie la dice."},
{"t":"write","b":"prod","q":"Escribe en inglés: ¿Efectivo o tarjeta?","a":"Cash or card?","alt":["Cash or credit card?"],"e":"Efectivo es «cash». «Effective» es un calco de efectivo que en inglés significa otra cosa."},
{"t":"write","b":"prod","q":"Escribe en inglés: Aquí está su cambio.","a":"Here is your change.","alt":["Here's your change."],"e":"El vuelto es «change». «Here is your rest» es calco del español y no se entiende."},
{"t":"write","b":"prod","q":"Escribe en inglés: ¿Puede repetir el número, por favor?","a":"Can you repeat the number, please?","alt":["Could you repeat the number, please?"],"e":"Es la frase que te salva de cobrar mal cuando dudás entre 15 y 50. Nadie se molesta por que la digas."},
{"t":"write","b":"prod","q":"Escribe en inglés: Estarán listos el miércoles.","a":"They'll be ready on Wednesday.","alt":["They will be ready on Wednesday.","Your glasses will be ready on Wednesday."],"e":"Wednesday se escribe con la d que no se pronuncia (UÉNS-dei), y el día lleva «on»."},
{"t":"write","b":"prod","q":"Escribe en inglés: Sus lentes están listos.","a":"Your glasses are ready.","alt":["Your lenses are ready."],"e":"«Glasses» es plural en inglés: va con «are», nunca con «is»."},
{"t":"write","b":"prod","q":"Escribe en inglés: ¿Podría deletrear eso, por favor?","a":"Could you spell that, please?","alt":["Can you spell that, please?"],"e":"Deletrear es «to spell». No existe «spell me that»."},
{"t":"write","b":"prod","q":"Escribe en inglés: Un momento, por favor. Voy a traer ayuda.","a":"One moment, please. I'll get help.","alt":["One moment, please. I will get help.","One moment, please. I'll bring help."],"e":"«I'll get help» es la forma natural; «I go for help» es calco del español."},
{"t":"write","b":"prod","q":"Escribe en inglés: Cuesta veinticinco dólares.","a":"It's twenty-five dollars.","alt":["It is twenty-five dollars.","It's twenty five dollars."],"e":"El precio redondo sí lleva «dollars»: It's twenty-five dollars."},
{"t":"speak","b":"habla","say":"Thursday","q":"Decí el día jueves como lo oiría un cliente.","a":"Thursday","e":"Mide el th de Thursday (ZÉRS-dei), con la lengua entre los dientes. Si sale «t», el cliente entiende Tuesday."},
{"t":"speak","b":"habla","say":"Wednesday","q":"Decí el día miércoles.","a":"Wednesday","e":"Mide que digas UÉNS-dei, sin pronunciar la primera d aunque esté escrita."},
{"t":"speak","b":"habla","say":"Thirty, not thirteen.","q":"Decí la frase marcando la diferencia de fuerza entre los dos números.","a":"Thirty, not thirteen.","e":"Mide el acento: THIRty golpea al inicio y thirTEEN al final. Es lo que evita cobrar mal."},
{"t":"speak","b":"habla","say":"Your total is twelve fifty.","q":"Decile el total al cliente en la forma corta.","a":"Your total is twelve fifty.","e":"Mide la forma corta del precio y el acento de TUÉLV FÍF-ti, sin decir «dollars and cents»."},
{"t":"speak","b":"habla","say":"I speak a little English.","q":"Decí la frase con la que abrís cuando el cliente habla rápido.","a":"I speak a little English.","e":"Mide «ai spik a LÍ-tel ÍN-glish»: la fuerza en la primera sílaba de English, no en la última."},
{"t":"speak","b":"habla","say":"I'll get help.","q":"Decile que vas a traer ayuda.","a":"I'll get help.","e":"Mide «ail get JELP»: la h de help se sopla, no se calla como en español."},
{"t":"speak","b":"habla","say":"Could you spell that, please?","q":"Pedile al cliente que te deletree su apellido.","a":"Could you spell that, please?","e":"Mide «cud iu SPEL dat plis», con la fuerza en spell y sin agregar «me»."},
{"t":"speak","b":"habla","say":"They'll be ready on July tenth.","q":"Decile que estarán listos el 10 de julio.","a":"They'll be ready on July tenth.","e":"Mide llu-LÁI (July, fuerza al final) y el ordinal «tenth» con th."}
],
/* ───── NIVEL 1 ───── */
1:[
{"t":"mc","b":"uso","q":"Un cliente estadounidense te oye decir la palabra 'customer'. ¿Cuál de estas versiones es la que él espera oír?","opts":["KAS-te-mer","kas-TE-mer","kas-te-MER","KAS-TE-MER"],"c":0,"e":"El acento cae en la primera sílaba y las otras dos se apagan en schwa: KAS-te-mer. Pronunciar las tres sílabas parejas y con vocales claras es el error clásico del hispanohablante."},
{"t":"mc","b":"uso","q":"Le pides al cliente su receta. ¿Dónde golpea la voz en 'prescription'?","opts":["PRES-crip-shon","pres-CRIP-shon","pres-crip-SHÓN","PRES-CRIP-SHON"],"c":1,"e":"Es pre-SCRIP-tion: la sílaba fuerte es la del medio. Cargarla al final ('prescripSHÓN', calcado de 'prescripción') o darle fuerza a las tres deja la palabra irreconocible para un nativo."},
{"t":"mc","b":"uso","q":"Preguntas si el cliente tiene cita. ¿Cuál marca bien la sílaba fuerte de 'appointment'?","opts":["A-point-ment","a-point-MENT","a-POINT-ment","A-POINT-MENT"],"c":2,"e":"Es ap-POINT-ment, con la fuerza en el medio. 'A-point-ment' y 'a-point-MENT' mueven el acento y el cliente deja de reconocer la palabra aunque los sonidos estén bien."},
{"t":"mc","b":"uso","q":"Vas a decir 'I'll call my supervisor'. ¿Cómo suena 'supervisor' en boca de un nativo?","opts":["su-PER-vai-ser","su-per-vai-SÉR","su-per-VAI-ser","SU-per-vai-ser"],"c":3,"e":"La fuerza va al inicio: SU-per-vái-ser. En español decimos 'supervisOR' con el golpe al final, y ese traslado del acento es justo lo que vuelve la palabra confusa en inglés."},
{"t":"mc","b":"uso","q":"El cliente pregunta por la tienda. ¿Cuál es la pronunciación correcta de 'store'?","opts":["es-TÓR","STÓR","ez-TOR","es-TO-re"],"c":1,"e":"La S líquida arranca directa, sin la 'e' de apoyo del español. 'Estore' delata el acento igual que 'eschool' por 'school' o 'espanish' por 'Spanish'."},
{"t":"mc","b":"uso","q":"Le dices al cliente que tiene tres opciones, pero cambias el TH de 'three' por una T. ¿Qué palabra dijiste?","opts":["tree (árbol)","free (gratis)","there (allá)","thirty (treinta)"],"c":0,"e":"'Three' con T se convierte en 'tree', árbol. El TH pide la punta de la lengua entre los dientes soplando; cambiarlo por T o por S cambia la palabra."},
{"t":"mc","b":"uso","q":"Dices 'I sink these frames are perfect'. ¿Qué entendió el cliente?","opts":["Que hundes los aros","Que ves los aros","Que sientes los aros","Que piensas que los aros son perfectos, con acento marcado"],"c":3,"e":"'Sink' es lavamanos o hundir, no 'pensar'. El cliente probablemente adivina la intención por contexto, pero el TH cambiado por S es la marca #1 del acento extranjero."},
{"t":"mc","b":"uso","q":"¿En cuál de estas palabras la H NO se pronuncia en inglés?","opts":["help","here","hour","have"],"c":2,"e":"'Hour' es una de las tres excepciones donde la H es muda, junto con 'honest' y 'honor'. En 'help', 'here' y 'have' la H siempre suena, como aire tibio saliendo del pecho."},
{"t":"mc","b":"uso","q":"El cliente entra y dice 'I need a vest'. ¿Qué está pidiendo?","opts":["Lo mejor que tengas","Un chaleco","Una prueba de visión","Un descanso"],"c":1,"e":"'Vest' es chaleco y se hace con los dientes de arriba mordiendo el labio de abajo. Si lo oyes como 'best' (lo mejor), 'test' (prueba) o 'rest' (descanso) estás perdiendo la V labiodental."},
{"t":"mc","b":"uso","q":"El cliente levanta un aro y pregunta '¿Is this frame light?'. Quiere saber si el aro es:","opts":["Liviano","Correcto para su cara","Del lado derecho","Brillante"],"c":0,"e":"'Light' aquí es liviano. Confundirlo con 'right' (correcto/derecho) o 'bright' (brillante) viene de no distinguir la R americana, que no vibra, de la L."},
{"t":"mc","b":"uso","q":"¿Cuál es la contracción correcta de 'he is'?","opts":["he's","hes","he're","his"],"c":0,"e":"'He is' se contrae en 'he's'. 'His' es el posesivo (su) y 'he're' no existe: solo 'you're', 'we're' y 'they're' usan esa forma."},
{"t":"mc","b":"uso","q":"El pedido todavía no está listo. ¿Cuál oración es correcta?","opts":["It amn't ready.","It isn't ready.","It don't ready.","It not is ready."],"c":1,"e":"Con 'it' el verbo es 'is', y su negación contraída es 'isn't'. 'Don't' se usa con verbos de acción, no con 'to be', y en inglés el 'not' va después del verbo, no antes."},
{"t":"mc","b":"uso","q":"Quieres decirle al cliente 'usted no está en la lista de hoy'. ¿Qué forma negativa de 'to be' usas con 'you'?","opts":["you doesn't","you not are","you aren't","you isn't"],"c":2,"e":"'You are' niega como 'you aren't'. 'Isn't' es solo para he/she/it, y 'doesn't' no acompaña nunca al verbo 'to be'."},
{"t":"mc","b":"uso","q":"El cliente quiere saber si su lente ya está listo. ¿Cómo se pregunta?","opts":["My lens is ready?","Is ready my lens?","Does my lens ready?","Is my lens ready?"],"c":3,"e":"Con 'to be' la pregunta se forma invirtiendo sujeto y verbo: 'Is my lens ready?'. Subir la entonación sin invertir es un calco del español, y 'does' no se usa con 'to be'."},
{"t":"mc","b":"uso","q":"Quieres preguntar si él tiene cita. ¿Cuál oración es correcta?","opts":["Does he has an appointment?","Do he has an appointment?","Does he have an appointment?","Does he haves an appointment?"],"c":2,"e":"La -s de la tercera persona ya está en 'does', así que el verbo vuelve a su forma base: 'Does he have...?'. Poner 'has' después de 'does' duplica la marca."},
{"t":"mc","b":"uso","q":"Escribe la negación: 'Él no tiene su receta'.","opts":["He don't have his prescription.","He doesn't has his prescription.","He hasn't have his prescription.","He doesn't have his prescription."],"c":3,"e":"Con 'he' el auxiliar es 'doesn't' y el verbo queda en forma base: 'doesn't have'. 'Don't' es para I/you/we/they, y 'doesn't has' repite la tercera persona dos veces."},
{"t":"mc","b":"uso","q":"El cliente acaba de entrar. ¿Cuál es la forma correcta de ofrecerle ayuda?","opts":["Can I to help you?","Can I help you?","Can I helping you?","Do I can help you?"],"c":1,"e":"'Can' es modal: el verbo que le sigue va sin 'to' y sin -ing. Tampoco necesita el auxiliar 'do' para preguntar, basta con invertir: 'Can I help you?'."},
{"t":"mc","b":"uso","q":"Quieres decir que ella puede esperar aquí. ¿Cuál oración es correcta?","opts":["She cans wait here.","She can waits here.","She can wait here.","She can to wait here."],"c":2,"e":"Los modales nunca llevan -s, ni en 'can' ni en el verbo que le sigue: 'She can wait'. Y el infinitivo va sin 'to'."},
{"t":"mc","b":"uso","q":"El cliente te pide leer un número pequeño y no lo alcanzas a ver. ¿Cómo lo dices?","opts":["I don't can see the number.","I no can see the number.","I doesn't can see the number.","I can't see the number."],"c":3,"e":"La negación de 'can' es 'can't' (cannot): no necesita 'don't' ni 'doesn't'. Poner otro auxiliar delante del modal es un calco directo del español."},
{"t":"mc","b":"uso","q":"El cliente dice 'I only need new lenses, the frames are fine'. ¿Qué necesita?","opts":["Solo los cristales; los aros están bien","Solo los aros; los cristales están bien","Unos lentes completamente nuevos","Un estuche nuevo para sus lentes"],"c":0,"e":"'Lenses' son los cristales y 'frames' el armazón; 'glasses' es el conjunto armado. Confundir estas tres palabras cambia por completo la cotización."},
{"t":"mc","b":"uso","q":"El cliente dice 'I don't have my prescription with me'. ¿Qué es lo que no trae?","opts":["Su suscripción al plan","Su presupuesto","Su receta","Su seguro médico"],"c":2,"e":"'Prescription' es la receta. El falso amigo peligroso es 'subscription' (suscripción), que se parece al oído pero no tiene nada que ver."},
{"t":"mc","b":"uso","q":"'Do you have an appointment?' pregunta si el cliente tiene:","opts":["Un apuntamiento por escrito","Una cita","Un aparato para medir","Un acompañante"],"c":1,"e":"'Appointment' es cita. Traducirlo como 'apuntamiento' es un calco: apuntar algo se dice 'write it down'."},
{"t":"mc","b":"uso","q":"El cliente pregunta 'Do you carry progressive lenses?'. ¿Qué está preguntando?","opts":["Si los cargan hasta su carro","Si los llevan a domicilio","Si los cobran aparte","Si los manejan, es decir si los tienen en existencia"],"c":3,"e":"'To carry' en una tienda significa manejar o tener en existencia un producto, no cargarlo físicamente. La respuesta natural es 'Yes, we have them'."},
{"t":"mc","b":"uso","q":"El cliente quiere el aro café con manchas, el clásico de la óptica. ¿Cómo se llama ese color en inglés?","opts":["turtle","tortoise","gold","silver"],"c":1,"e":"El color se llama 'tortoise'. 'Turtle' también es tortuga, pero como animal de agua: nunca se usa para el acabado del armazón."},
{"t":"mc","b":"uso","q":"¿En qué momento se usa 'Here you go.'?","opts":["Al entregarle algo al cliente","Al despedirse del cliente","Al pedirle que espere","Al saludarlo cuando entra"],"c":0,"e":"'Here you go' es el 'aquí tiene' del momento de entregar algo. Para despedirse se usa 'Have a nice day' y para pedir que espere, 'Just a moment, please'."},
{"t":"mc","b":"uso","q":"El cliente te dice 'Thank you very much'. ¿Qué respondes?","opts":["Welcome to CV Plus.","You are welcomed.","Welcome, please.","You're welcome."],"c":3,"e":"'You're welcome' es 'de nada'. 'Welcome to CV Plus' es la bienvenida al entrar, y 'you are welcomed' es una forma pasiva que no se usa como respuesta a un agradecimiento."},
{"t":"mc","b":"uso","q":"Le dices al cliente 'Your glasses will be ready on Thursday'. ¿Qué día debe volver?","opts":["El martes","El jueves","El sábado","El domingo"],"c":1,"e":"'Thursday' es jueves; 'Tuesday' es martes. Los dos empiezan con T y se confunden constantemente, así que conviene confirmar la fecha además del nombre del día."},
{"t":"mc","b":"uso","q":"Son las cuatro de la tarde y entra un cliente. ¿Cuál es el saludo correcto?","opts":["Good night!","Good evening!","Good afternoon!","Good morning!"],"c":2,"e":"'Good afternoon' cubre desde el mediodía hasta cerca de las seis. 'Good evening' empieza al caer la tarde y 'good night' solo se usa al despedirse de noche, nunca al saludar."},
{"t":"mc","b":"uso","q":"El cliente habla rapidísimo y necesitas que baje la velocidad. ¿Cuál frase es la correcta?","opts":["Could you repeat that a little slower, please?","Could you speak more slow, please?","Can you repeat slowly it, please?","Please, repeat again more slow."],"c":0,"e":"'A little slower' es el comparativo correcto; 'more slow' no existe en inglés. Además el objeto ('that', 'it') va inmediatamente después del verbo, no después del adverbio."},
{"t":"mc","b":"uso","q":"Quieres avisarle al cliente, con una sonrisa, que tu inglés es básico. ¿Cuál frase es la correcta?","opts":["I speak English a little bit only.","I speak a little English.","I speak little of English.","I talk a little English."],"c":1,"e":"La fórmula fija es 'I speak a little English'. 'Talk' se usa para conversar con alguien, no para nombrar el idioma que uno domina, y 'little of English' es un calco del 'poco de'."},
{"t":"mc","b":"uso","q":"El cliente pregunta algo técnico que no sabes contestar. ¿Cuál es la salida profesional?","opts":["I don't know, sorry.","Wait me here, please.","One moment, I'll call my supervisor.","No English here, sorry."],"c":2,"e":"Derivar al supervisor mantiene la atención abierta en lugar de cerrarla. Además 'wait me' es un calco: en inglés es 'wait for me'."},
{"t":"mc","b":"uso","q":"Te presentas con un cliente nuevo: 'My name is Oscar.' ¿Qué sigue?","opts":["Nice to meet you.","Nice to know you.","Pleased to know you.","Glad to meet with you."],"c":0,"e":"La fórmula fija al conocer a alguien es 'Nice to meet you'. 'Know' se usa para conocimiento ya adquirido y 'meet with' es reunirse formalmente, no presentarse."},
{"t":"mc","b":"uso","q":"Los aros cuestan cuarenta dólares. ¿Cómo se escribe ese número?","opts":["fourty","forty","fourteen","fortty"],"c":1,"e":"40 se escribe 'forty', sin la U de 'four'. 'Fourteen' es 14, y confundir la decena con la unidad es justo el error que cambia un precio."},
{"t":"mc","b":"uso","q":"El cliente dice: 'No, I don't have my prescription. Can I get an exam here?' ¿Cuál es tu respuesta?","opts":["Yes, we can. Please, have a seat. One moment.","Yes, we do. Please, sit you here a moment.","Of course, we have. Wait a moment for me, please.","Yes, I can. Have a seat you, please."],"c":0,"e":"La respuesta a una pregunta con 'can' se contesta con 'can', y el sujeto correcto es 'we' porque contestas por la óptica. 'Sit you' y 'have a seat you' son calcos del reflexivo español."},
{"t":"audio","b":"oido","say":"think","rate":0.8,"q":"Escucha. ¿Cuál palabra dijo la voz?","opts":["think (pensar)","sink (lavamanos)","thing (cosa)","sing (cantar)"],"c":0,"e":"Se oyó el TH con la lengua entre los dientes: 'think'. Si tu oído lo archiva como 'sink' vas a repetirlo así con el cliente."},
{"t":"audio","b":"oido","say":"tree","rate":0.8,"q":"Escucha. ¿Cuál palabra dijo la voz?","opts":["three (tres)","free (gratis)","tree (árbol)","there (allá)"],"c":2,"e":"Fue 'tree', árbol: arranca con T pura, sin lengua entre los dientes. 'Three' sopla el TH antes de la R."},
{"t":"audio","b":"oido","say":"heat","rate":0.8,"q":"Escucha. ¿Cuál palabra dijo la voz?","opts":["eat (comer)","it (eso)","hit (golpear)","heat (calor)"],"c":3,"e":"Se oye el soplo de la H al inicio y la i larga: 'heat'. Sin la H aspirada quedaría 'eat', y con i corta 'hit'."},
{"t":"audio","b":"oido","say":"berry","rate":0.8,"q":"Escucha. ¿Cuál palabra dijo la voz?","opts":["very (muy)","ferry (barco de pasajeros)","merry (alegre)","berry (fruta)"],"c":3,"e":"Los dos labios se juntan y explotan: es 'berry'. En 'very' los dientes de arriba muerden el labio de abajo y vibran, algo que en español no distinguimos."},
{"t":"audio","b":"oido","say":"vest","rate":0.8,"q":"Escucha. ¿Cuál palabra dijo la voz?","opts":["best (lo mejor)","rest (descanso)","vest (chaleco)","test (prueba)"],"c":2,"e":"El inicio es la V labiodental vibrada: 'vest'. Con los labios juntos habría dicho 'best', que es lo que un hispanohablante suele oír por defecto."},
{"t":"audio","b":"oido","say":"light","rate":0.8,"q":"Escucha. ¿Cuál palabra dijo la voz?","opts":["right (correcto)","light (luz)","night (noche)","white (blanco)"],"c":1,"e":"La lengua toca el paladar en una L limpia: 'light'. La R americana no vibra y suena más redondeada, con los labios adelantados."},
{"t":"audio","b":"oido","say":"free","rate":0.8,"q":"Escucha. ¿Cuál palabra dijo la voz?","opts":["three (tres)","flee (huir)","fee (tarifa)","free (gratis)"],"c":3,"e":"Es 'free': F más R americana. 'Flee' cambia la R por L y 'fee' no lleva ninguna de las dos, así que el contraste está justo en esa consonante."},
{"t":"audio","b":"oido","say":"sit","rate":0.8,"q":"Escucha. ¿Cuál palabra dijo la voz?","opts":["see (ver)","seat (asiento)","sit (sentarse)","set (juego)"],"c":2,"e":"La vocal es corta y relajada, casi entre i y e: 'sit'. La i larga de 'see' y 'seat' se estira con la sonrisa amplia."},
{"t":"audio","b":"oido","say":"cheap","rate":0.8,"q":"Escucha. ¿Cuál palabra dijo la voz?","opts":["cheap (barato)","chip (pedacito)","ship (barco)","sheep (oveja)"],"c":0,"e":"La vocal larga estirada da 'cheap'. Con la i corta sería 'chip', y hablando de precios esa confusión deja al cliente sin entender nada."},
{"t":"audio","b":"oido","say":"The frames are thirty dollars.","rate":0.85,"q":"Escucha. ¿Cuánto cuestan los aros?","opts":["$13","$3","$30","$33"],"c":2,"e":"El acento cayó al inicio (THIR-ty), así que son 30. Si el golpe fuera al final (thir-TEEN) serían 13: esa sola sílaba cambia el precio."},
{"t":"audio","b":"oido","say":"Your appointment is at nine fifteen.","rate":0.85,"q":"Escucha. ¿A qué hora es la cita?","opts":["9:50","9:15","9:05","5:15"],"c":1,"e":"'Fifteen' lleva el acento al final y son los minutos: 9:15. 'Fifty' llevaría el golpe al inicio y daría 9:50."},
{"t":"audio","b":"oido","say":"It's fourteen dollars and fifty cents.","rate":0.85,"q":"Escucha. ¿Cuál es el precio?","opts":["$40.15","$14.15","$40.50","$14.50"],"c":3,"e":"'Fourteen' (acento al final) son los dólares y 'fifty' (acento al inicio) los centavos: $14.50. La trampa 14/40 y 15/50 se resuelve solo con el acento."},
{"t":"audio","b":"oido","say":"Your glasses will be ready on Tuesday.","rate":0.85,"q":"Escucha. ¿Qué día debe volver el cliente?","opts":["El jueves","El sábado","El domingo","El martes"],"c":3,"e":"Dijo 'Tuesday' (TIUS-dei), martes. 'Thursday' empieza con el TH soplado y es jueves: dos días distintos que se confunden todo el tiempo."},
{"t":"audio","b":"oido","say":"Could you repeat that a little slower, please?","rate":0.85,"q":"Escucha. ¿Qué te está pidiendo la voz?","opts":["Que repitas lo que dijiste, pero más despacio","Que escribas lo que acabas de decir","Que llames a tu supervisor","Que esperes un momento"],"c":0,"e":"'Repeat that a little slower' es repetir más despacio. Es la misma frase que tú vas a usar con el cliente, así que hay que reconocerla también cuando viene de vuelta."},
{"t":"audioW","b":"oido","say":"How can I help you?","rate":0.85,"q":"Dictado. Escribe exactamente lo que dice la voz.","a":"How can I help you?","alt":["how can i help you"],"e":"Los nativos lo pegan todo ('ca-nai-JEL-piu'), pero son cinco palabras separadas. Reconocer el corte entre 'can' y 'I' es lo que permite escribirla bien."},
{"t":"audioW","b":"oido","say":"Do you have your prescription?","rate":0.85,"q":"Dictado. Escribe exactamente lo que dice la voz.","a":"Do you have your prescription?","alt":["do you have your prescription"],"e":"'Your' suena casi como 'yer' porque la vocal se apaga en schwa, y 'prescription' lleva el golpe en la sílaba del medio."},
{"t":"audioW","b":"oido","say":"Your glasses will be ready tomorrow.","rate":0.85,"q":"Dictado. Escribe exactamente lo que dice la voz.","a":"Your glasses will be ready tomorrow.","alt":["your glasses will be ready tomorrow","Your glasses'll be ready tomorrow."],"e":"'Glasses' son los lentes armados y lleva dos sílabas (GLÁ-ses). 'Tomorrow' suena tu-MÓ-rou, con la primera y la última vocal apagadas."},
{"t":"audioW","b":"oido","say":"I'm sorry, could you repeat that, please?","rate":0.85,"q":"Dictado. Escribe exactamente lo que dice la voz.","a":"I'm sorry, could you repeat that, please?","alt":["I am sorry, could you repeat that, please?","im sorry could you repeat that please"],"e":"La frase más importante del nivel. 'Could you' se pega en un solo golpe ('cud-iu') y la 'd' final de 'that' casi desaparece antes de 'please'."},
{"t":"audioW","b":"oido","say":"The total is thirty five dollars.","rate":0.85,"q":"Dictado. Escribe en cifras el total que dijo la voz.","a":"35","alt":["$35","35.00","$35.00","35 dollars"],"e":"'Thirty five' es 35: la decena va primero y con el acento al inicio. Si hubiera dicho 'thirteen' el golpe caería al final y serían 13."},
{"t":"audioW","b":"oido","say":"Your appointment is at four thirty.","rate":0.85,"q":"Dictado. Escribe en cifras la hora que dijo la voz.","a":"4:30","alt":["4.30","430","4:30 pm"],"e":"En inglés la hora se dice hora y luego minutos, sin 'y': 'four thirty' es 4:30. 'Four thirteen' sería 4:13, y otra vez el acento es la única pista."},
{"t":"audioW","b":"oido","say":"Thank you very much!","rate":0.85,"q":"Dictado. Escribe exactamente lo que dice la voz.","a":"Thank you very much!","alt":["Thank you very much","thank you very much"],"e":"Aquí van juntos los dos sonidos duros del nivel: el TH de 'thank' y la V de 'very'. Al oído la frase suena 'zénk-iu-VÉ-ri-match', con el peso en 'very'."},
{"t":"audioW","b":"oido","say":"Please, have a seat.","rate":0.85,"q":"Dictado. Escribe exactamente lo que dice la voz.","a":"Please, have a seat.","alt":["Please have a seat.","please have a seat"],"e":"'Have a' se enlaza en un solo bloque ('ja-va') y 'seat' lleva la i larga. Con i corta sonaría 'sit', que es el verbo sentarse, no el asiento."},
{"t":"write","b":"prod","q":"Escribe en inglés: '¡Buenos días! Bienvenido a CV Plus.'","a":"Good morning! Welcome to CV Plus.","alt":["Good morning. Welcome to CV Plus.","Good morning! Welcome to CV Plus!"],"e":"'Welcome to' siempre lleva 'to' antes del lugar. Es el chunk de apertura y se dice completo, sin traducir palabra por palabra."},
{"t":"write","b":"prod","q":"Escribe en inglés: '¿Cómo puedo ayudarle?'","a":"How can I help you?","alt":["How may I help you?"],"e":"Va con 'how', no con 'what', y el verbo después de 'can' queda sin 'to'. Es la fórmula estándar de atención en inglés."},
{"t":"write","b":"prod","q":"Escribe en inglés: '¿Tiene una cita?'","a":"Do you have an appointment?","alt":["Do you have an appointment today?"],"e":"'To have' necesita el auxiliar 'do' para preguntar: 'Have you an appointment?' es una forma antigua que ya no se usa así. Y 'appointment' pide 'an' porque empieza con vocal."},
{"t":"write","b":"prod","q":"Escribe en inglés: 'Ella no tiene su receta.'","a":"She doesn't have her prescription.","alt":["She does not have her prescription.","She doesn't have the prescription."],"e":"Con 'she' el auxiliar es 'doesn't' y el verbo vuelve a la forma base 'have'. El posesivo concuerda con la dueña: 'her', no 'his'."},
{"t":"write","b":"prod","q":"Escribe en inglés: 'Sus lentes estarán listos mañana.'","a":"Your glasses will be ready tomorrow.","alt":["Your glasses are going to be ready tomorrow.","Your lenses will be ready tomorrow.","Your glasses'll be ready tomorrow."],"e":"'Glasses' es plural en inglés pero el verbo va con 'will be' sin cambios. 'Ready' es la palabra clave para avisar entregas."},
{"t":"write","b":"prod","q":"Escribe en inglés: 'Un momento, llamaré a mi supervisor.'","a":"One moment, I'll call my supervisor.","alt":["One moment, I will call my supervisor.","Just a moment, I'll call my supervisor.","One moment, I am going to call my supervisor."],"e":"'I'll' es la contracción de 'I will' y es lo que de verdad se escucha. Nótese que 'call' no lleva preposición: es 'call my supervisor', no 'call to my supervisor'."},
{"t":"write","b":"prod","q":"Escribe en inglés: 'No estoy seguro.'","a":"I'm not sure.","alt":["I am not sure.","I'm not sure about that."],"e":"Con 'to be' el 'not' va después del verbo: 'I'm not', nunca 'I don't be' ni 'I no am'. Es la forma honesta y aceptable de admitir una duda ante el cliente."},
{"t":"write","b":"prod","q":"Escribe en inglés: 'Todavía no está listo.'","a":"It isn't ready yet.","alt":["It is not ready yet.","It's not ready yet."],"e":"'Isn't' es la negación de 'is', y 'yet' cierra la idea de 'todavía' al final de la oración negativa."},
{"t":"write","b":"prod","q":"Escribe en inglés: '¿Está él aquí?'","a":"Is he here?","alt":["Is he here right now?"],"e":"Para preguntar con 'to be' solo se invierte el orden: 'Is he...?'. No se usa 'does' y no hace falta ningún auxiliar."},
{"t":"write","b":"prod","q":"Escribe en inglés: 'Disculpe, ¿podría repetir eso un poco más despacio, por favor?'","a":"I'm sorry, could you repeat that a little slower, please?","alt":["I am sorry, could you repeat that a little slower, please?","Sorry, could you repeat that a little slower, please?"],"e":"'A little slower' es el comparativo correcto; 'more slow' no existe. Pedir que repitan es profesionalismo, no vergüenza."},
{"t":"write","b":"prod","q":"Escribe en inglés: 'Hablo un poco de inglés.'","a":"I speak a little English.","alt":["I speak a little bit of English.","I only speak a little English."],"e":"Es un chunk fijo: 'a little' va directo antes del idioma, sin 'of'. Dicho con una sonrisa desarma la tensión del cliente."},
{"t":"write","b":"prod","q":"Escribe en inglés: 'Lo tenemos en negro y en plateado.'","a":"We have it in black and silver.","alt":["We have them in black and silver.","We have it in black and in silver."],"e":"Para hablar de colores disponibles se usa 'in' + color, no 'of'. 'Silver' es plateado y 'gold' dorado: los dos acabados más pedidos en armazones."},
{"t":"write","b":"prod","q":"En el laboratorio, el cliente dice: 'I need new glasses.' Escribe en inglés tu respuesta: 'Por supuesto. ¿Tiene su receta?'","a":"Of course. Do you have your prescription?","alt":["Of course! Do you have your prescription?","Sure. Do you have your prescription?"],"e":"'Of course' abre la respuesta con disposición y el 'do' es obligatorio para preguntar con 'have'. Es la línea exacta del diálogo de recepción."},
{"t":"write","b":"prod","q":"El cliente pregunta: 'Can I get an exam here?' Escribe en inglés tu respuesta: 'Sí, podemos. Por favor, tome asiento.'","a":"Yes, we can. Please, have a seat.","alt":["Yes, we can. Please have a seat.","Yes, we can! Please, have a seat."],"e":"Una pregunta con 'can' se responde con 'can', y el sujeto es 'we' porque hablas por la óptica. 'Have a seat' es el chunk de cortesía para invitar a sentarse."},
{"t":"write","b":"prod","q":"Escribe en inglés lo que le dices al cliente durante el examen: '¿Puede leer esta línea?'","a":"Can you read this line?","alt":["Could you read this line?","Can you read this line, please?"],"e":"Después de 'can' el verbo va sin 'to' y sin -s. 'This line' es singular: para varias sería 'these lines'."},
{"t":"write","b":"prod","q":"Escribe en inglés: 'Cubra su ojo izquierdo, por favor.'","a":"Cover your left eye, please.","alt":["Please cover your left eye.","Cover your left eye please."],"e":"En inglés el posesivo es obligatorio con partes del cuerpo: 'your eye', no 'the eye'. Y el adjetivo 'left' va antes del sustantivo."},
{"t":"speak","b":"habla","say":"Thank you very much for waiting.","q":"Grabá la frase. La voz califica el TH inicial y la V de 'very'.","a":"Thank you very much for waiting.","e":"Mide los dos sonidos que no existen en español juntos: el TH de 'thank' con la lengua entre los dientes soplando, y la V de 'very' con los dientes sobre el labio inferior vibrando."},
{"t":"speak","b":"habla","say":"Three customers are waiting for their glasses.","q":"Grabá la frase. La voz califica el TH y las vocales apagadas de 'customers'.","a":"Three customers are waiting for their glasses.","e":"Mide el TH sordo de 'three' (si sale 'tree' dijiste árbol), el TH sonoro de 'their' y el schwa de KAS-te-mers, donde solo la primera sílaba brilla."},
{"t":"speak","b":"habla","say":"Hello! How can I help you?","q":"Grabá la frase. La voz califica la H aspirada y el enlace de las palabras.","a":"Hello! How can I help you?","e":"Mide las tres H aspiradas seguidas: debés sentir el aire tibio en la mano. Además la segunda parte se pega en un solo bloque: 'ca-nai-JEL-piu'."},
{"t":"speak","b":"habla","say":"Here you go. Have a nice day!","q":"Grabá la frase. La voz califica la H aspirada al inicio de cada palabra.","a":"Here you go. Have a nice day!","e":"Mide la H de 'here' y de 'have' más el enlace 'ja-va' entre 'have' y 'a'. Con la H muda del español el cliente escucha 'ear' en vez de 'here'."},
{"t":"speak","b":"habla","say":"Spanish is my first language, but I speak a little English.","q":"Grabá la frase. La voz califica la S líquida al inicio de la frase.","a":"Spanish is my first language, but I speak a little English.","e":"Mide la S líquida sin la 'e' de apoyo: 'Spanish', no 'espanish'. También aparece en 'speak', el otro punto donde se cuela la vocal parásita."},
{"t":"speak","b":"habla","say":"Special lenses start at fifty dollars.","q":"Grabá la frase. La voz califica la S líquida y el acento de 'fifty'.","a":"Special lenses start at fifty dollars.","e":"Mide tres S líquidas seguidas ('special', 'start', y la S de 'lenses') y el acento inicial de FIF-ty, que es lo que lo diferencia de fif-TEEN en un precio."},
{"t":"speak","b":"habla","say":"Very good! Your vision is much better now.","q":"Grabá la frase. La voz califica la V labiodental frente a la B.","a":"Very good! Your vision is much better now.","e":"Mide el contraste V/B dentro de la misma frase: 'very' y 'vision' con los dientes sobre el labio, 'better' con los dos labios juntos. En español las dos suenan igual."},
{"t":"speak","b":"habla","say":"Visit us again. We have five frames in silver.","q":"Grabá la frase. La voz califica la V inicial y la V dentro de la palabra.","a":"Visit us again. We have five frames in silver.","e":"Mide la V al inicio ('visit') y en medio de palabra ('have', 'five'), donde el hispanohablante la relaja hasta convertirla en B. 'Again' además lleva schwa en la primera sílaba."}
],
/* ───── NIVEL 2 ───── */
2:[
{"t":"mc","b":"uso","q":"Un cliente pregunta si el doctor atiende los domingos. Querés decirle que el doctor no trabaja ese día. ¿Cuál frase está bien?","opts":["The doctor doesn't works on Sunday.","The doctor don't work on Sunday.","The doctor doesn't work on Sunday.","The doctor isn't work on Sunday."],"c":2,"e":"La marca de tercera persona se usa una sola vez por frase: si ya está en 'doesn't', el verbo vuelve a su forma simple ('work'). 'doesn't works' es el error número uno del hispanohablante."},
{"t":"mc","b":"uso","q":"Un compañero escribió en el chat de la tienda: 'Does she wears progressive lenses?'. ¿Cómo queda correcta la pregunta?","opts":["Does she wear progressive lenses?","Do she wear progressive lenses?","Does she wearing progressive lenses?","Is she wear progressive lenses?"],"c":0,"e":"En pregunta, la -s de tercera persona vive en 'does' y el verbo principal queda en forma simple: 'Does she wear...?'. Con he/she/it el auxiliar nunca es 'do'."},
{"t":"mc","b":"uso","q":"¿En cuál de estos verbos la terminación -s suena /s/ (sorda) y no /z/?","opts":["needs","wears","sees","wants"],"c":3,"e":"Después de sonido sordo (p, t, k, f) la -s suena /s/: 'wants' se oye 'uants', igual que 'works' y 'helps'. Needs, wears y sees terminan en sonido sonoro, así que suenan /z/."},
{"t":"mc","b":"uso","q":"¿Cuál de estas formas verbales suma una sílaba entera al pronunciar la -s?","opts":["wears","uses","helps","needs"],"c":1,"e":"Después de s, sh, ch, x o ge la terminación suena /ɪz/ y agrega sílaba: 'uses' es IÚ-sis, como 'washes' (UÁ-shis) y 'watches' (UÁ-chis)."},
{"t":"mc","b":"uso","q":"¿Cuál es la sílaba fuerte de la palabra 'customer'?","opts":["cus-TO-mer","CUS-to-mer","cus-to-MER","CUS-to-MER"],"c":1,"e":"Es CUS-to-mer: la fuerza va en la primera sílaba y las otras dos se apagan. Si acentuás 'TO', el cliente puede no reconocer la palabra aunque los sonidos sean correctos."},
{"t":"mc","b":"uso","q":"El cliente trae su receta. ¿Cómo se acentúa 'prescription'?","opts":["PRE-scrip-tion","pre-scrip-TION","PRE-scrip-TION","pre-SCRIP-tion"],"c":3,"e":"Es pre-SCRIP-tion, con la fuerza en la sílaba del medio. En inglés cada palabra tiene una sola sílaba fuerte: marcar dos (PRE-scrip-TION) suena tan raro como marcar la equivocada."},
{"t":"mc","b":"uso","q":"¿Cuál es la pronunciación correcta de 'appointment' cuando le ofrecés una cita al cliente?","opts":["ap-POINT-ment","AP-point-ment","ap-point-MENT","AP-point-MENT"],"c":0,"e":"Es ap-POINT-ment: fuerte en la segunda sílaba. El hispanohablante tiende a mandar el acento al final ('ap-point-MENT') porque en español las palabras largas suelen ser agudas."},
{"t":"mc","b":"uso","q":"Estás explicando lentes progresivos. ¿Dónde cae el acento de 'progressive'?","opts":["PRO-gre-ssive","pro-gre-SSIVE","pro-GRE-ssive","PRO-gre-SSIVE"],"c":2,"e":"Es pro-GRE-ssive, fuerte en la segunda sílaba. Decir PRO-gressive lo acerca al sustantivo 'PROgress' y confunde al cliente."},
{"t":"mc","b":"uso","q":"¿Cómo se acentúa 'insurance' al preguntar por la cobertura?","opts":["IN-shu-rance","in-shu-RANCE","IN-shu-RANCE","in-SHU-rance"],"c":3,"e":"Es in-SHÚ-rans: fuerte en la segunda sílaba y la primera casi no se oye. Acentuar 'IN' es el calco de 'seguro/inSUrance' que más cuesta corregir."},
{"t":"mc","b":"uso","q":"Le decís al cliente que el color está disponible. ¿Cuál es el acento de 'available'?","opts":["A-vai-la-ble","a-VAI-la-ble","a-vai-LA-ble","a-vai-la-BLE"],"c":1,"e":"Es a-VÉI-la-bel: la fuerza cae en la segunda de cuatro sílabas y el resto se apaga. Es la palabra que más vas a repetir cuando el cliente pregunta por colores."},
{"t":"mc","b":"uso","q":"Tu compañera atiende en el mostrador y le oís decir, de un solo tirón, 'ca-nai-JEL-piu'. ¿Cuál frase dijo?","opts":["Can I hold this?","Can it help you?","Can I hear you?","Can I help you?"],"c":3,"e":"'Can I help you' se enlaza en cadena: la 'n' se pega a la 'I' y la 'p' a 'you'. Reconocer la frase pegada es la única forma de entender a un nativo a velocidad normal."},
{"t":"mc","b":"uso","q":"Un cliente entra y te dice, todo pegado, 'jaua-riu'. ¿Qué te preguntó?","opts":["How are you?","How old are you?","Who are you?","How was it?"],"c":0,"e":"'How are you' suena 'jaua-riu' porque la consonante final de 'how...are' se enlaza con la vocal siguiente. No es una frase distinta: es la misma frase pegada."},
{"t":"mc","b":"uso","q":"El doctor atiende aquí todos los días, pero en este momento está ocupado con un paciente. ¿Qué opción dice bien las dos cosas?","opts":["The doctor works here, and he is with a patient right now.","The doctor is working here, and he works with a patient right now.","The doctor work here, and he is with a patient right now.","The doctor works here, and he working with a patient right now."],"c":0,"e":"Lo permanente va en presente simple ('works here') y el momento en presente continuo o con 'is + ...right now'. Invertir los dos tiempos cambia el mensaje."},
{"t":"mc","b":"uso","q":"Estás revisando el precio en el sistema mientras el cliente espera frente a vos. ¿Qué le decís para que sepa que lo estás haciendo en ese instante?","opts":["I check the price for you.","I'm check the price for you.","I'm checking the price for you.","I check the price right now for you."],"c":2,"e":"El presente continuo (am/is/are + verbo-ing) narra el momento: 'I'm checking the price for you'. 'I check' suena a rutina, como si lo hicieras todos los días."},
{"t":"mc","b":"uso","q":"Anotás en la bitácora que la tienda está cerrando y que estás tomando medidas. ¿Qué opción escribe bien las dos formas -ing?","opts":["We're closeing and I'm takeing measurements.","We're closing and I'm taking measurements.","We're closing and I'm takking measurements.","We're clossing and I'm taking measurements."],"c":1,"e":"Si el verbo termina en 'e' muda, la pierde al agregar -ing: close → closing, take → taking, make → making."},
{"t":"mc","b":"uso","q":"¿Cuál de estas frases escribe bien el -ing?","opts":["She is geting the frames from the back.","She is siting with the doctor.","She is puting the lenses in the case.","She is getting the frames from the back."],"c":3,"e":"En consonante-vocal-consonante acentuada la última consonante se duplica: get → getting, sit → sitting, put → putting."},
{"t":"mc","b":"uso","q":"Hay dos personas esperando y hay un espejo detrás del cliente. ¿Cuál opción usa bien 'there is' y 'there are'?","opts":["There are two people waiting and there are a mirror behind you.","There is two people waiting and there is a mirror behind you.","There are two people waiting and there is a mirror behind you.","There is two people waiting and there are a mirror behind you."],"c":2,"e":"El 'hay' del español no cambia, pero en inglés sí: 'there are' con plural (two people) y 'there is' con singular (a mirror)."},
{"t":"mc","b":"uso","q":"A customer asks: 'Are there other colors?' Which answer is correct?","opts":["Yes, there is three colors available.","Yes, it has three colors available.","Yes, there are three color available.","Yes, there are three colors available."],"c":3,"e":"Con plural va 'there are', y 'colors' tiene que llevar la -s. 'It has' es el calco de 'tiene tres colores' y no funciona para 'hay'."},
{"t":"mc","b":"uso","q":"Which question is correct at the front desk?","opts":["Is there a restroom on this floor?","Are there a restroom on this floor?","Is there restrooms on this floor?","There is a restroom on this floor?"],"c":0,"e":"En pregunta se invierte: 'Is there + singular?' / 'Are there + plural?'. Dejar el orden del afirmativo y solo subir la voz al final es un calco del español."},
{"t":"mc","b":"uso","q":"The customer wants to say in English that she likes the black frames. Which sentence is right?","opts":["The black frames like her.","She likes the black frames.","She like the black frames.","It likes her the black frames."],"c":1,"e":"En inglés el sujeto de 'like' es la persona, al revés del español: 'She likes the black frames', no 'me gustan / le gustan'. Y con she el verbo lleva -s."},
{"t":"mc","b":"uso","q":"Which sentence is correct?","opts":["I need check the price with my manager.","I need to check the price with my manager.","I need checking the price with my manager.","I need for check the price with my manager."],"c":1,"e":"Después de 'need' y 'want' el segundo verbo lleva 'to': I need to check, she wants to try them on."},
{"t":"mc","b":"uso","q":"The doctor is busy and the wait is about twenty minutes. Which sentence offers the customer the two options politely?","opts":["Would you like to wait or come back later?","Do you want wait or come back later?","You prefer to wait or coming back later?","Would you like waiting or come back later?"],"c":0,"e":"'Would you like to + verbo' es la forma cortés del servicio y es la que se usa en el diálogo del examen visual. Después de 'would you like' va 'to + verbo', no -ing."},
{"t":"mc","b":"uso","q":"A coworker asks you: 'My customer doesn't needs an appointment, right?' What is the correct sentence?","opts":["My customer don't needs an appointment.","My customer doesn't needs an appointment.","My customer isn't need an appointment.","My customer doesn't need an appointment."],"c":3,"e":"La -s se mudó al auxiliar: con 'doesn't' el verbo vuelve a 'need'. Poner la -s dos veces (doesn't needs) es el error que más delata al hispanohablante."},
{"t":"mc","b":"uso","q":"A customer asks if the warranty covers a broken frame. Which question do you ask your supervisor?","opts":["Do the warranty covers the frame?","Does the warranty covers the frame?","Does the warranty cover the frame?","Is the warranty cover the frame?"],"c":2,"e":"'The warranty' es tercera persona del singular, así que el auxiliar es 'does' y el verbo queda simple: 'Does the warranty cover the frame?'."},
{"t":"mc","b":"uso","q":"What does 'These frames are on sale this week' tell the customer?","opts":["The frames are the only ones for sale this week.","The frames arrive at the store this week.","The frames are out of stock this week.","The frames have a discount this week."],"c":3,"e":"'On sale' es en promoción, con descuento. Ojo con el falso amigo: 'for sale' solo significa que algo está a la venta, sin descuento."},
{"t":"mc","b":"uso","q":"The model the customer wants is not in the store today. What do you say?","opts":["We don't have that model on stock right now.","We aren't have that model in stock right now.","We don't have that model in stock right now.","We don't has that model in stock right now."],"c":2,"e":"La expresión fija es 'in stock' (en existencia), no 'on stock', y con 'don't' el verbo queda en forma simple ('have')."},
{"t":"mc","b":"uso","q":"The customer needs one distance only, not near and far in the same lens. Which lens do you offer?","opts":["progressive lenses","single vision lenses","contact lenses","anti-reflective lenses"],"c":1,"e":"'Single vision' es visión sencilla, una sola distancia. 'Progressive' son los progresivos, que combinan varias distancias en el mismo lente."},
{"t":"mc","b":"uso","q":"A customer spends eight hours a day at the computer and complains about the glare on her lenses. Which two products do you recommend, in English?","opts":["A blue light filter and an anti-reflective coating.","A blue light filter and a single vision frame.","A progressive lens and a titanium coating.","An anti-reflective filter and a lightweight vision."],"c":0,"e":"'Blue light filter' es el filtro de luz azul (pantallas) y 'anti-reflective coating' el antirreflejo (brillos). Los nombres no se mezclan: el 'coating' es tratamiento y el 'filter' es filtro."},
{"t":"mc","b":"uso","q":"A customer asks for something very light. Which sentence describes titanium frames correctly?","opts":["These frames are titanium, so they are very lightweight.","These frames are titanium, so they are very light weighted.","These frames have titanium, so they are very lighting.","These frames are of titanium, so they are very lightly."],"c":0,"e":"El material va directo, sin 'of': 'these frames are titanium'. Y 'lightweight' (LÁIT-uéit) es un adjetivo entero: no existe 'light weighted' ni 'lightly' con ese sentido."},
{"t":"mc","b":"uso","q":"The customer chose the frames and you are ready for the next step. Which sentence is correct?","opts":["Can I take your measures?","Can I take your measurements?","Can I take your measurement?","Can I make your measurements?"],"c":1,"e":"La palabra es 'measurements' (MÉ-sher-ments), en plural, y el verbo es 'take'. 'Measures' es el falso amigo de 'medidas' que aquí no aplica."},
{"t":"mc","b":"uso","q":"The customer wants to try the frames on. Which sentence do you use?","opts":["Of course. There are a mirror right behind you.","Of course. It has a mirror right behind you.","Of course. There is a mirror right behind you.","Of course. There is a mirror right behind of you."],"c":2,"e":"'A mirror' es singular, así que va 'there is'. Y 'behind' no lleva 'of': 'behind you', nunca 'behind of you'."},
{"t":"mc","b":"uso","q":"Which sentence tells the customer that the frame comes in three colors?","opts":["It's available on three colors.","It's availables in three colors.","It's available in three colors.","There is three colors availables."],"c":2,"e":"Se dice 'available in three colors', con 'in' y sin -s: los adjetivos en inglés no concuerdan en plural."},
{"t":"mc","b":"uso","q":"A second customer walks in while your coworker is busy with someone else. What do you say?","opts":["She helps another customer, please wait.","She is help another customer, please wait.","She is helping another customer. I can help you.","She helping another customer. I can help you."],"c":2,"e":"Lo que pasa en este momento va en presente continuo completo: is + helping. Sin el 'is' o sin el -ing la frase deja de existir en inglés."},
{"t":"mc","b":"uso","q":"A customer asks about the store hours. Which answer is correct?","opts":["We open at nine and close at six.","We opens at nine and closes at six.","We are open at nine and are close at six.","We open at nine and we are closing at six."],"c":0,"e":"Un horario es una rutina, así que va en presente simple; y con 'we' el verbo no lleva -s. 'We are closing' solo sirve para decir que están cerrando ahora mismo."},
{"t":"audio","b":"oido","say":"needs","rate":0.85,"q":"Escuchá el verbo. ¿Con cuál de estos verbos comparte exactamente el sonido de la terminación -s?","opts":["works","wears","washes","wants"],"c":1,"e":"'Needs' termina en sonido sonoro, así que la -s suena /z/: 'nidz', igual que 'wears'. Works y wants suenan /s/ y washes suena /ɪz/ con sílaba extra."},
{"t":"audio","b":"oido","say":"uses","rate":0.85,"q":"Escuchá. ¿Con cuál de estos verbos suena igual el final?","opts":["helps","sees","wants","watches"],"c":3,"e":"'Uses' se oye IÚ-sis: después de s, sh, ch, x o ge la terminación suena /ɪz/ y agrega una sílaba, igual que 'watches' (UÁ-chis)."},
{"t":"audio","b":"oido","say":"helps","rate":0.85,"q":"Escuchá el verbo. ¿Cuál de estos termina con el mismo sonido?","opts":["wants","needs","washes","wears"],"c":0,"e":"'Helps' termina después de la 'p', un sonido sordo, así que la -s suena /s/: 'jelps', igual que 'wants'."},
{"t":"audio","b":"oido","say":"needs","rate":0.8,"q":"Escuchá. La voz dice una sola palabra. ¿Cuál es?","opts":["nits","neat","needs","knees"],"c":2,"e":"'Needs' lleva vocal larga y termina en /dz/ sonoro: 'nidz'. 'Nits' es corta y termina en /ts/; si acortás la vocal o endurecés el final, el cliente oye otra palabra."},
{"t":"audio","b":"oido","say":"She watches the screen for eight hours.","rate":0.85,"q":"Escuchá la frase. ¿Cuál de estas oíste?","opts":["She watch the screen for eight hours.","She watches the screen for eight hours.","She watched the screen for eight hours.","She is watching the screen for eight hours."],"c":1,"e":"Se oye la sílaba extra UÁ-chis: eso es la -s de tercera persona con sonido /ɪz/, no un pasado ni un continuo."},
{"t":"audio","b":"oido","say":"Can I help you?","rate":0.85,"q":"Escuchá la frase dicha de un solo tirón. ¿Qué dijo la voz?","opts":["Can I hold you?","Can it help you?","Can I hear you?","Can I help you?"],"c":3,"e":"El linking pega las cuatro palabras en 'ca-nai-JEL-piu'. Reconocer la cadena completa es lo que te permite responder sin pedir que repitan."},
{"t":"audio","b":"oido","say":"What is it?","rate":0.85,"q":"Escuchá. ¿Cuál de estas preguntas dijo la voz?","opts":["What is it?","What did it?","Where is it?","What is he?"],"c":0,"e":"'What is it' se enlaza en 'uá-ti-sit': la 't' final se pega a la vocal de 'is'. Suena parecidísimo a 'where is it', y solo la primera consonante los separa."},
{"t":"audio","b":"oido","say":"There are three colors available.","rate":0.85,"q":"Listen. Which sentence did you hear?","opts":["There is three colors available.","There is a color available.","There are three colors available.","There are three colors on sale."],"c":2,"e":"Se oye 'there are' con plural y la palabra a-VÉI-la-bel. 'There is three colors' es la versión incorrecta que suena bien al oído hispanohablante justamente porque en español 'hay' no cambia."},
{"t":"audio","b":"oido","say":"The doctor is with a patient right now.","rate":0.85,"q":"Listen. What is the situation?","opts":["The doctor is on the phone with a patient.","The doctor is busy with a patient at this moment.","The doctor is coming back later today.","The doctor is waiting for a patient."],"c":1,"e":"'Right now' marca el momento: el doctor está ocupado en este instante, no que se fue ni que espera a alguien."},
{"t":"audio","b":"oido","say":"We open at nine and close at six.","rate":0.85,"q":"Listen. What are the store hours?","opts":["From nine to five.","From five to nine.","From nine to sixteen.","From nine to six."],"c":3,"e":"'Six' es una sílaba corta y 'sixteen' lleva el acento fuerte al final (six-TEEN). Confundirlos cambia el horario que le prometés al cliente."},
{"t":"audio","b":"oido","say":"Would you like to wait or come back later?","rate":0.85,"q":"Listen. What is the assistant offering?","opts":["Two choices: waiting now or returning later.","An appointment for tomorrow morning.","A discount if the customer waits.","A call when the doctor is free."],"c":0,"e":"'Would you like to wait or come back later?' ofrece exactamente dos opciones. Es la frase cortés del diálogo del examen visual."},
{"t":"audio","b":"oido","say":"Does your insurance cover the exam?","rate":0.85,"q":"Listen. What is the question about?","opts":["Whether the customer wants an exam today.","Whether the exam includes the lenses.","Whether the customer's insurance pays for the exam.","Whether the insurance covers the frames."],"c":2,"e":"'Cover' con seguro significa cubrir o pagar, y lo que se cubre aquí es 'the exam', no los aros ni los lentes."},
{"t":"audio","b":"oido","say":"appointment","rate":0.8,"q":"Listen to the word. Which syllable did the voice stress?","opts":["the first one: AP-point-ment","the second one: ap-POINT-ment","the third one: ap-point-MENT","the first and the third: AP-point-MENT"],"c":1,"e":"Se oye ap-POINT-ment: una sola sílaba fuerte, la segunda. Las otras dos se reducen casi hasta desaparecer."},
{"t":"audio","b":"oido","say":"insurance","rate":0.8,"q":"Listen to the word. Where is the strong syllable?","opts":["IN-su-rance","in-su-RANCE","IN-su-RANCE","in-SU-rance"],"c":3,"e":"Se oye in-SHÚ-rans, fuerte en la segunda sílaba. Acentuar la primera es el calco de 'seguro' y hace que el cliente tarde en reconocer la palabra."},
{"t":"audioW","b":"oido","say":"These frames are on sale this week.","rate":0.8,"q":"Dictado. Escuchá y escribí la frase completa en inglés.","a":"These frames are on sale this week.","alt":["These frames are on sale this week","This frames are on sale this week."],"e":"'On sale' es en promoción. Fijate en la -s de 'frames' y en 'these' (plural), no 'this'."},
{"t":"audioW","b":"oido","say":"There is a mirror right behind you.","rate":0.8,"q":"Dictado. Escuchá y escribí la frase completa en inglés.","a":"There is a mirror right behind you.","alt":["There's a mirror right behind you.","There is a mirror right behind you"],"e":"Singular 'a mirror' → 'there is'. 'Right' aquí no es 'derecha': refuerza el lugar, 'justo detrás'."},
{"t":"audioW","b":"oido","say":"She doesn't work on Saturday.","rate":0.8,"q":"Dictado. Escuchá y escribí la frase completa en inglés.","a":"She doesn't work on Saturday.","alt":["She does not work on Saturday.","She doesn't work on Saturdays.","She does not work on Saturdays."],"e":"Se oye 'doesn't work', sin -s en el verbo: la marca de tercera persona ya está en el auxiliar."},
{"t":"audioW","b":"oido","say":"The price includes the frame and the lenses.","rate":0.8,"q":"Dictado. Escuchá y escribí la frase completa en inglés.","a":"The price includes the frame and the lenses.","alt":["The price include the frame and the lenses.","The price includes the frame and the lens."],"e":"'The price' es tercera persona del singular, así que el verbo lleva -s: 'includes'. 'Lenses' es el plural de lens y se oye LEN-ses."},
{"t":"audioW","b":"oido","say":"How often do you use the computer?","rate":0.8,"q":"Dictation. Listen and write the full question in English.","a":"How often do you use the computer?","alt":["How often do you use a computer?","How often do you use the computer"],"e":"'How often' pregunta la frecuencia. Con 'you' el auxiliar es 'do' y el verbo va en forma simple."},
{"t":"audioW","b":"oido","say":"I'm checking the price for you.","rate":0.8,"q":"Dictation. Listen and write the full sentence in English.","a":"I'm checking the price for you.","alt":["I am checking the price for you.","Im checking the price for you."],"e":"Presente continuo: am + checking. Narrar lo que estás haciendo tranquiliza al cliente más que el silencio."},
{"t":"audioW","b":"oido","say":"There are two people waiting.","rate":0.8,"q":"Dictation. Listen and write the full sentence in English.","a":"There are two people waiting.","alt":["There're two people waiting.","There are two persons waiting."],"e":"Plural 'two people' → 'there are'. 'People' ya es plural: no existe 'peoples' ni 'there is two people'."},
{"t":"audioW","b":"oido","say":"Can I take your measurements?","rate":0.8,"q":"Dictation. Listen and write the full question in English.","a":"Can I take your measurements?","alt":["Can I take your measurements","May I take your measurements?"],"e":"'Measurements' va en plural y se oye MÉ-sher-ments; el verbo que la acompaña es 'take'."},
{"t":"write","b":"prod","q":"Un cliente busca algo liviano. Escribí en inglés: 'Estos aros son de titanio: son muy livianos y flexibles.'","a":"These frames are titanium. They are very lightweight and flexible.","alt":["These frames are titanium, they are very lightweight and flexible.","These frames are titanium. They are very light and flexible.","These are titanium frames. They are very lightweight and flexible."],"e":"El material va directo después de 'are', sin 'of'. 'Lightweight' es liviano y 'flexible' se escribe igual que en español pero se dice FLÉK-si-bel."},
{"t":"write","b":"prod","q":"Escribí en inglés: 'Hay tres colores disponibles.'","a":"There are three colors available.","alt":["There are three colours available.","There are three available colors."],"e":"Plural → 'there are'. 'Available' va después del sustantivo y nunca lleva -s."},
{"t":"write","b":"prod","q":"Escribí en inglés: 'El doctor no trabaja los domingos.'","a":"The doctor doesn't work on Sunday.","alt":["The doctor does not work on Sunday.","The doctor doesn't work on Sundays.","The doctor does not work on Sundays."],"e":"Con 'doesn't' el verbo vuelve a su forma simple: 'work', no 'works'. La marca de tercera persona se usa una sola vez por frase."},
{"t":"write","b":"prod","q":"El cliente quiere probarse los aros. Escribí en inglés: '¿Le gustaría probárselos? Hay un espejo justo detrás de usted.'","a":"Would you like to try them on? There is a mirror right behind you.","alt":["Would you like to try them on? There's a mirror right behind you.","Would you like to try them on? There is a mirror behind you."],"e":"'Try on' se separa cuando el objeto es un pronombre: 'try them on'. Y 'a mirror' es singular, así que va 'there is'."},
{"t":"write","b":"prod","q":"Escribí en inglés: 'Me gustan estos aros, pero necesito revisar el precio.'","a":"I like these frames, but I need to check the price.","alt":["I like these frames but I need to check the price.","I like these frames, but I have to check the price."],"e":"El sujeto de 'like' es la persona: 'I like these frames', nunca 'me like' ni 'these frames like me'. Y después de 'need' el segundo verbo lleva 'to'."},
{"t":"write","b":"prod","q":"Escribí en inglés la pregunta: '¿Su seguro cubre el examen?'","a":"Does your insurance cover the exam?","alt":["Does your insurance cover the eye exam?","Does your insurance cover the exam"],"e":"'Insurance' es tercera persona del singular: el auxiliar es 'does' y el verbo queda simple ('cover', no 'covers')."},
{"t":"write","b":"prod","q":"Escribí en inglés: 'No tenemos ese modelo en existencia en este momento.'","a":"We don't have that model in stock right now.","alt":["We do not have that model in stock right now.","We don't have that model in stock at the moment."],"e":"La expresión es 'in stock', con 'in'. Agregar 'right now' suaviza el no: deja abierta la posibilidad de conseguirlo después."},
{"t":"write","b":"prod","q":"Entra un segundo cliente. Escribí en inglés: 'Ella está atendiendo a otro cliente. ¿Puedo ayudarle?'","a":"She is helping another customer. Can I help you?","alt":["She's helping another customer. Can I help you?","She is helping another customer. May I help you?"],"e":"Presente continuo completo: is + helping. 'Another customer' va en singular y 'customer' se dice CAS-te-mer."},
{"t":"write","b":"prod","q":"Write in English the sentence that tells the customer the price includes the frame and the lenses.","a":"The price includes the frame and the lenses.","alt":["The price includes the frames and the lenses.","The price includes the frame and lenses."],"e":"'The price' es singular de tercera persona, así que el verbo lleva -s: 'includes'."},
{"t":"write","b":"prod","q":"You are looking up a price in the system while the customer waits in front of you. Write in English what you say so she knows you are doing it at this moment.","a":"I'm checking the price for you.","alt":["I am checking the price for you.","I'm checking the price for you right now.","I am checking the price for you right now."],"e":"El presente continuo narra el momento. 'I check the price' sonaría a rutina y dejaría al cliente sin saber qué está pasando."},
{"t":"write","b":"prod","q":"The customer chose her frames and you need to measure her. Write the polite question in English.","a":"Can I take your measurements?","alt":["May I take your measurements?","Could I take your measurements?"],"e":"El verbo correcto es 'take' y la palabra va en plural: 'measurements'. 'Measures' es un falso amigo que aquí no se usa."},
{"t":"write","b":"prod","q":"Two customers are waiting for the doctor. Write that fact in English, starting with 'There'.","a":"There are two people waiting.","alt":["There are two people waiting for the doctor.","There're two people waiting."],"e":"'Two people' es plural, así que 'there are'. 'People' ya es plural por sí solo."},
{"t":"write","b":"prod","q":"A customer spends the whole day at a screen. Write in English the question that asks how often she uses the computer.","a":"How often do you use the computer?","alt":["How often do you use a computer?","How often do you use the computer"],"e":"'How often' + do + you + verbo simple. Es la pregunta que abre la recomendación del filtro de luz azul."},
{"t":"write","b":"prod","q":"The frames the customer likes are light and have a discount this week. Write one English sentence with both ideas.","a":"These frames are lightweight and they are on sale this week.","alt":["These frames are lightweight and on sale this week.","These frames are lightweight and they're on sale this week.","These frames are lightweight and they are on sale."],"e":"'Lightweight' es liviano y 'on sale' es en promoción. Cuidado con 'for sale', que solo significa que está a la venta."},
{"t":"write","b":"prod","q":"Write in English what you tell a customer whose lenses have the treatment against glare and the filter for screens.","a":"It has an anti-reflective coating and a blue light filter.","alt":["They have an anti-reflective coating and a blue light filter.","It has a blue light filter and an anti-reflective coating.","They have a blue light filter and an anti-reflective coating."],"e":"El antirreflejo es un 'coating' (tratamiento) y el de pantallas es un 'filter'. Los dos términos no se intercambian."},
{"t":"write","b":"prod","q":"A customer asks if she needs an appointment for an eye exam. Answer in English that she does not always need one, but the doctor is with a patient right now.","a":"Not always, but the doctor is with a patient right now.","alt":["You don't always need one, but the doctor is with a patient right now.","Not always, but the doctor is with a patient at this moment."],"e":"Así das la información completa: la regla general en presente simple y la situación del momento con 'right now'."},
{"t":"speak","b":"habla","say":"He works, she needs, it watches.","q":"Grabá los tres verbos seguidos, sin pausas largas entre ellos.","a":"He works, she needs, it watches.","e":"Mide los tres sonidos de la -s en una sola toma: /s/ en 'works' (uerks), /z/ en 'needs' (nidz) y /ɪz/ con sílaba extra en 'watches' (UÁ-chis)."},
{"t":"speak","b":"habla","say":"Can I help you?","q":"Decilo pegado, de un solo tirón, como si fuera una sola palabra larga.","a":"Can I help you?","e":"Mide el linking: debe salir 'ca-nai-JEL-piu'. Si se oyen las cuatro palabras separadas, el saludo suena entrecortado y marcado."},
{"t":"speak","b":"habla","say":"There are three colors available.","q":"Grabá la frase cuidando el plural y el acento de la última palabra.","a":"There are three colors available.","e":"Mide 'there are' con plural y el acento a-VÉI-la-bel en la segunda sílaba, no en la última."},
{"t":"speak","b":"habla","say":"The doctor is with a patient right now.","q":"Grabá la frase completa como un solo bloque.","a":"The doctor is with a patient right now.","e":"Mide la frase automatizada del mostrador: 'right now' cerrando fuerte, y PÉI-shent con la fuerza en la primera sílaba."},
{"t":"speak","b":"habla","say":"Does your insurance cover the exam?","q":"Record this question. Keep the stress inside the long word.","a":"Does your insurance cover the exam?","e":"Mide in-SHÚ-rans (fuerte en la segunda sílaba) y que 'cover' salga sin -s, porque el 'does' ya marca la tercera persona."},
{"t":"speak","b":"habla","say":"I'm checking the price for you.","q":"Record the sentence you use while you look up a price.","a":"I'm checking the price for you.","e":"Mide la contracción 'I'm' y la terminación -ing clara: es la frase que sostiene la atención mientras el cliente espera."},
{"t":"speak","b":"habla","say":"Would you like to try them on?","q":"Record the polite invitation to try the frames on.","a":"Would you like to try them on?","e":"Mide el chunk cortés completo, con 'would you' enlazado y 'try them on' sin separar el 'on' del final."},
{"t":"speak","b":"habla","say":"This one looks great on you.","q":"Record the compliment you give when the frames suit the customer.","a":"This one looks great on you.","e":"Mide la -s de 'looks' con sonido /s/ y el énfasis en GRÉIT, que es lo que hace que el elogio suene sincero y no mecánico."}
],
/* ───── NIVEL 3 ───── */
3:[
{"t":"mc","b":"uso","q":"You tell a customer: \"The lab called this morning.\" How does the -ed in 'called' sound?","opts":["/ɪd/, adding a syllable: 'CALL-ed'","/t/, one syllable: 'colt'","/d/, one syllable: 'cold'","/ɪd/, one syllable: 'cald'"],"c":2,"e":"Después de sonido sonoro o vocal el -ed suena /d/ y no agrega sílaba: called = 'cold'. Decir 'CALL-ed' es el error que más marca el acento."},
{"t":"mc","b":"uso","q":"Four verbs in the past. In which one does the -ed add a whole extra syllable?","opts":["ordered","waited","helped","tried"],"c":1,"e":"Solo los verbos que terminan en t o d ganan sílaba: waited = 'UÉI-tid'. Ordered (ÓR-derd), helped (jelpt) y tried (traid) mantienen sus sílabas."},
{"t":"mc","b":"uso","q":"Three of these past verbs end in the /t/ sound. Which one does NOT?","opts":["looked","helped","worked","called"],"c":3,"e":"Looked (lukt), helped (jelpt) y worked (uerkt) terminan en sonido sordo, así que el -ed suena /t/. Called termina en /d/ porque la l es sonora."},
{"t":"mc","b":"uso","q":"You want to say \"We worked on your order all morning\" and sound native. Which pronunciation of 'worked' do you use?","opts":["'workt' — one syllable","'WOR-ked' — two syllables","'wor-KED' — stress at the end","'workd' — one syllable, ending in d"],"c":0,"e":"Worked se dice 'uerkt', una sola sílaba y con /t/ final. Las versiones de dos sílabas son la marca del que aprendió el inglés leyendo."},
{"t":"mc","b":"uso","q":"A customer insists that you promised to call him yesterday, and you did not call. Which line is correct?","opts":["I didn't called you yesterday, I'm sorry.","I don't called you yesterday, I'm sorry.","I didn't call you yesterday, I'm sorry.","I no called you yesterday, I'm sorry."],"c":2,"e":"El auxiliar 'did' ya marca el pasado, así que el verbo principal vuelve al infinitivo: 'I didn't call'. Poner el pasado dos veces es el error más frecuente."},
{"t":"mc","b":"uso","q":"A customer's frame is broken. Which question asks him about the day it happened?","opts":["When did your frame break?","When did your frame broke?","When your frame broke?","When did break your frame?"],"c":0,"e":"Con 'did' el verbo va en infinitivo: 'When did your frame break?'. Y la pregunta necesita el auxiliar: sin 'did' no es pregunta en inglés."},
{"t":"mc","b":"uso","q":"Complete: \"I ___ the doctor about your case this morning.\"","opts":["said","tell","telled","told"],"c":3,"e":"'Tell' es irregular: pasado 'told', y se usa cuando decís a quién le hablaste (tell + persona). 'Said' no acepta la persona directamente: sería 'I said it to the doctor'."},
{"t":"mc","b":"uso","q":"Complete: \"The customer ___ he needed them for a trip next week.\"","opts":["said","told","says","telled"],"c":0,"e":"'Say' se usa con lo que se dijo, sin persona intermedia: 'he said (that) he needed them'. Con 'told' habría que nombrar a quién: 'he told me that...'."},
{"t":"mc","b":"uso","q":"Complete: \"She ___ contact lenses for ten years before she switched to glasses.\"","opts":["weared","wore","worn","wear"],"c":1,"e":"'Wear' es irregular: pasado 'wore' (uor), participio 'worn' (uorn). 'Weared' no existe, y 'worn' solo va con have/has."},
{"t":"mc","b":"uso","q":"Complete: \"Good news — we ___ your frame in the second drawer.\"","opts":["find","founded","found","finded"],"c":2,"e":"El pasado de 'find' es 'found' (fáund), con cambio de vocal. 'Founded' existe pero significa 'fundó' (una empresa), no 'encontró'."},
{"t":"mc","b":"uso","q":"Complete: \"He ___ for them with his card last Friday.\"","opts":["payed","pays","paid","pay"],"c":2,"e":"'Pay' es irregular: pasado y participio 'paid' (peid). 'Payed' es un error de escritura muy común, incluso entre nativos."},
{"t":"mc","b":"uso","q":"Complete: \"The doctor ___ me your new prescription, and I ___ it in your file this morning.\"","opts":["gived / saw","gave / saw","gave / seen","give / saw"],"c":1,"e":"Give → gave (guéiv) y see → saw (so): los dos cambian la vocal. 'Seen' es el participio y necesita have/has delante."},
{"t":"mc","b":"uso","q":"Complete: \"Those frames ___ on sale last week, but the price ___ back to normal now.\"","opts":["was / is","were / is","were / are","was / are"],"c":1,"e":"'Frames' es plural, así que en pasado va 'were'. 'The price' es singular y está en presente: 'is'. Mezclar los dos tiempos aquí es lo que evalúa el ítem."},
{"t":"mc","b":"uso","q":"Complete: \"I ___ here yesterday, but you ___ with another advisor.\"","opts":["was / were","were / was","was / was","were / were"],"c":0,"e":"'Was' va con I, he, she, it; 'were' va con you, we, they. Es el único verbo del inglés que cambia de forma en el pasado según la persona."},
{"t":"mc","b":"uso","q":"A customer needs a small adjustment and you decide right there, on the spot, not to charge him. Which line fits that decision?","opts":["I don't charge you for this one.","I didn't charge you for this one.","I'm going to not charge you for this one.","I won't charge you for this one."],"c":3,"e":"'Will' (won't en negativo) es la decisión del momento y el ofrecimiento espontáneo: es el futuro del buen servicio. 'Going to' sonaría a un plan ya decidido antes de hablar."},
{"t":"mc","b":"uso","q":"This morning you and your manager already decided to order the lenses today. Which line reports that plan?","opts":["We order them today.","We'll order them today.","We're going to order them today.","We ordered them today."],"c":2,"e":"Un plan decidido antes de hablar se dice con 'going to': 'we're going to order them today'. 'We'll' daría a entender que lo decidiste en ese instante."},
{"t":"mc","b":"uso","q":"A coworker tells you \"áim GÁ-na chek uid de lab.\" Written out in full, that is:","opts":["I am going to check with the lab.","I have got to check with the lab.","I want to check with the lab.","I will go and check with the lab."],"c":0,"e":"'Going to' se reduce a 'gonna' en el habla real: 'I'm gonna check'. Entrenar el oído con esa reducción es lo que permite entender a un cliente de verdad."},
{"t":"mc","b":"uso","q":"How is 'won't' pronounced, and what does \"We won't charge you\" mean?","opts":["'wont', like 'want' — we do not want to charge you","'uóunt' — we are not going to charge you","'wo-NOT' — we did not charge you","'uónt', like 'want' — we usually charge you"],"c":1,"e":"'Won't' es la negación de 'will' y se pronuncia 'uóunt', con o larga. Si suena como 'want' el cliente entiende otra cosa: es un par mínimo peligroso."},
{"t":"mc","b":"uso","q":"You are promising a customer you will call him. Which line would a native advisor actually say?","opts":["I call you as soon as they arrive.","I will call you as soon as they arrive.","I am calling you as soon as they arrive.","I'll call you as soon as they arrive."],"c":3,"e":"Nadie dice 'I will' completo en el mostrador: se dice 'I'll' y suena casi como una sílaba, 'ail'. Pronunciar el 'will' entero suena formal o robótico."},
{"t":"mc","b":"uso","q":"Complete: \"I'll call you as soon as they ___.\"","opts":["will arrive","arrive","arrived","are arriving"],"c":1,"e":"Después de 'as soon as', 'when' o 'until' el futuro se expresa con presente simple. Poner 'will' dos veces en la misma frase es un calco del español."},
{"t":"mc","b":"uso","q":"Complete: \"I've ___ sent your measurements, but the lab hasn't confirmed them ___.\"","opts":["already / yet","yet / already","just / ever","ever / already"],"c":0,"e":"'Already' (ya) va en afirmativo; 'yet' (todavía) va en negativo y en pregunta. Cambiarlos de lugar es el error clásico con el presente perfecto."},
{"t":"mc","b":"uso","q":"A patient may or may not have tried contact lenses at some point in his life. Which question covers his whole life up to today?","opts":["Did you try contact lenses?","Do you try contact lenses?","Have you ever tried contact lenses?","Are you trying contact lenses?"],"c":2,"e":"Para experiencias de toda la vida hasta hoy se usa presente perfecto con 'ever'. El pasado simple ('did you try') preguntaría por un momento concreto y conocido."},
{"t":"mc","b":"uso","q":"Complete: \"I've had these glasses ___ 2022, and my wife has had hers ___ three years.\"","opts":["for / since","from / during","since / during","since / for"],"c":3,"e":"'Since' marca el punto de inicio (since 2022) y 'for' marca la duración (for three years). 'During' es el calco de 'durante' y no funciona con presente perfecto."},
{"t":"mc","b":"uso","q":"A patient has no experience at all with progressive lenses. Which line uses the present perfect to report that?","opts":["I never tried them.","I've never tried them.","I don't never try them.","I haven't never tried them."],"c":1,"e":"El presente perfecto de experiencia es have/has + participio: 'I've never tried them'. 'Never' ya es negativo, así que no se combina con haven't ni con don't."},
{"t":"mc","b":"uso","q":"A patient shows you a very old pair. Which question asks how long he has been using them?","opts":["How much time do you have these glasses?","How long do you have these glasses?","Since when you have these glasses?","How long have you had these glasses?"],"c":3,"e":"Para algo que empezó antes y sigue ahora va presente perfecto: 'How long have you had these glasses?'. Las otras tres son calcos directos del español con presente simple."},
{"t":"mc","b":"uso","q":"The lenses a customer paid for on Monday are late. Which of these four lines follows the professional structure for a delay?","opts":["I'm not sure what happened; maybe they will be here tomorrow, maybe on Friday.","We ordered them on Monday and the lab sent them today; they should be here tomorrow afternoon and I'll call you.","The lab is always late with this kind of lens, so there is really nothing that I can do for you.","You can come back any day next week and we will check together if your lenses are here."],"c":1,"e":"La estructura profesional es dato concreto en pasado → disculpa breve → fecha en futuro → compromiso personal. Las otras tres dejan al cliente sin fecha y sin responsable."},
{"t":"mc","b":"uso","q":"A customer asks when his lenses will be here and you are not 100% sure. Which answer keeps his trust?","opts":["I really don't know; the lab never gives us that kind of information.","Maybe tomorrow, or maybe Friday — it is always hard to say with these lenses.","They should be here by tomorrow afternoon, and I'll call you as soon as they arrive.","You can call us every morning to ask if your lenses have arrived from the lab."],"c":2,"e":"El cliente estadounidense tolera el retraso, no la vaguedad: 'should be here by...' da una fecha y 'I'll call you' pone un responsable. 'Maybe' y 'I don't know' destruyen la confianza."},
{"t":"mc","b":"uso","q":"Which word do you need from a customer before a warranty replacement, and how is it pronounced?","opts":["receipt — ri-SÍT, the p is silent","recipe — ri-SÍPT, with the p","receipt — RE-ceipt, stress on the first syllable","recipe — re-SÍP, with no t"],"c":0,"e":"Es 'receipt' (recibo) y se pronuncia ri-SÍT: la p es muda y la fuerza va en la segunda sílaba. 'Recipe' (RÉ-si-pi) es receta de cocina, un falso amigo peligroso."},
{"t":"mc","b":"uso","q":"A customer says \"My frame broke.\" Which reply opens the warranty conversation correctly?","opts":["Do you have your recipe? It has a one-year guarantee.","Do you have your bill? It has a one-year warrant.","Do you have your receipt? It has a one-year warranty.","Do you have your ticket? It has a one-year insurance."],"c":2,"e":"'Broke' es el pasado de 'break': el aro se rompió. Se pide el 'receipt' (recibo) y la cobertura del producto se llama 'warranty'; 'warrant' es una orden judicial."},
{"t":"mc","b":"uso","q":"The customer needs his frame tightened and it is free. Which line is correct?","opts":["The adjust is free of charge.","The adjustment is free — we won't charge you.","The adjustment is gratis — we don't charge.","The arrangement is free — there is no charge for it."],"c":1,"e":"El sustantivo es 'adjustment' (a-YÁST-ment), no 'adjust', que es verbo. Y cobrar es 'to charge'; 'arrangement' es un arreglo de otro tipo, no un ajuste de aro."},
{"t":"mc","b":"uso","q":"A customer's order is late and you want to apologize for it. Which sentence uses the right word?","opts":["I'm sorry for the retard in your order.","I'm sorry for the late of your order.","I'm sorry for the lateness in your order.","I'm sorry for the delay with your order."],"c":3,"e":"Retraso es 'delay' (di-LÉI). 'Retard' es un calco de 'retraso' y en inglés es un insulto, así que este error puede costarte el cliente."},
{"t":"mc","b":"uso","q":"Complete: \"You came in ___, and your last eye exam was two years ___.\"","opts":["last week / ago","ago / last week","the last week / before","last week / before"],"c":0,"e":"'Last week' es la semana pasada y 'ago' (a-GÓU) va DESPUÉS de la cantidad de tiempo: 'two years ago'. En inglés no se dice 'the last week' ni 'before' para 'hace'."},
{"t":"mc","b":"uso","q":"A customer asks where his glasses are right now. They are still being made. Which line is correct?","opts":["Your order is in the laboratory of the doctor right now.","Your order is in the lab and will be arrive on Friday.","Your order stays in the lab until arrive on Friday.","Your order is still at the lab; it will arrive on Friday."],"c":3,"e":"En la óptica el taller es 'the lab', y 'to arrive' es un verbo completo: 'it will arrive', nunca 'will be arrive'. 'Laboratory' entero suena a laboratorio clínico."},
{"t":"mc","b":"uso","q":"Complete: \"His eyes ___ tired at the computer, so he ___ reading glasses instead.\"","opts":["get / bought","got / buyed","got / bought","getted / bought"],"c":2,"e":"Get → got y buy → bought (se pronuncia 'bot'). Los dos son irregulares: 'buyed' y 'getted' no existen, y los dos verbos van en pasado porque hablan del mismo momento."},
{"t":"audio","b":"oido","say":"worked","rate":0.8,"q":"Listen to the past verb. How did the -ed ending sound?","opts":["/t/ — one syllable, 'uerkt'","/d/ — one syllable, 'uerkd'","/ɪd/ — two syllables, 'UÉR-kid'","/t/ — two syllables, 'uer-KÉT'"],"c":0,"e":"Después de un sonido sordo (k, p, f, s, sh, ch) el -ed suena /t/ y no agrega sílaba: worked = 'uerkt'."},
{"t":"audio","b":"oido","say":"worked, helped, called, wanted","rate":0.8,"q":"Listen to the four past verbs. In which one did the -ed add an extra syllable?","opts":["worked","helped","called","wanted"],"c":3,"e":"Solo 'wanted' gana sílaba, porque 'want' termina en t: UÁN-tid. Worked es 'uerkt', helped es 'jelpt' y called es 'cold', las tres de una sílaba."},
{"t":"audio","b":"oido","say":"ordered","rate":0.8,"q":"Listen to the past verb. How many syllables did it have, and how did the -ed sound?","opts":["Two syllables, -ed as /t/: 'OR-dert'","Three syllables, -ed as /ɪd/: 'OR-de-rid'","Two syllables, -ed as /d/: 'ÓR-derd'","Three syllables, -ed as /d/: 'or-DE-red'"],"c":2,"e":"'Order' termina en r, sonido sonoro, así que el -ed suena /d/ y no suma sílaba: ÓR-derd, con la fuerza al inicio."},
{"t":"audio","b":"oido","say":"needed","rate":0.8,"q":"Listen to the past verb. How many syllables did you hear?","opts":["One","Two","Three","Four"],"c":1,"e":"'Need' termina en d, así que el -ed suena /ɪd/ y suma una sílaba: NÍ-did, dos sílabas. Es el único caso en que el -ed se oye como 'id'."},
{"t":"audio","b":"oido","say":"waited","rate":0.8,"q":"Listen to the past verb. Which transcription matches what you heard?","opts":["/t/ — one syllable, 'ueit'","/d/ — one syllable, 'ueid'","/t/ — two syllables, 'UÉI-tet'","/ɪd/ — two syllables, 'UÉI-tid'"],"c":3,"e":"'Wait' termina en t, así que el -ed suena /ɪd/: UÉI-tid, dos sílabas. Sin esa sílaba extra el cliente oye 'wait', presente."},
{"t":"audio","b":"oido","say":"looked","rate":0.8,"q":"Listen. Which past verb did the voice say?","opts":["locked","looked","liked","lacked"],"c":1,"e":"Se oyó 'lukt' (looked, miró). 'Locked' (lakt) es cerró con llave y 'liked' (láikt) es le gustó: los tres terminan en /t/ y solo la vocal los distingue."},
{"t":"audio","b":"oido","say":"tried","rate":0.8,"q":"Listen. Which past verb did the voice say?","opts":["tired","tied","tried","treated"],"c":2,"e":"Se oyó 'traid' (tried, intentó/probó). 'Tired' (TÁI-erd) es cansado y tiene dos sílabas: confundirlos cambia por completo lo que el paciente te dijo."},
{"t":"audio","b":"oido","say":"I'll call you as soon as they arrive.","rate":0.85,"q":"Listen to the advisor's line. What is he doing?","opts":["Promising to call the customer when the lenses get here","Telling the customer that he called when the lenses got here","Asking the customer to call the store when the lenses get here","Explaining that he calls every customer when the lenses get here"],"c":0,"e":"'I'll' suena casi como una sílaba, 'ail', y es la promesa del momento. Si tu oído lo archiva como 'I called', entendés un reporte del pasado en lugar de un compromiso a futuro."},
{"t":"audio","b":"oido","say":"We'll order your lenses today.","rate":0.85,"q":"Listen. What is the advisor saying about the order?","opts":["The lenses were ordered earlier today.","The lenses are ordered every day at noon.","The lenses were ordered a few days ago.","The lenses are not ordered yet; that happens today."],"c":3,"e":"Se oyó 'we'll order' (uil ÓR-der), futuro: todavía no se pidieron. 'We ordered' (ui ÓR-derd) sería pasado, y la diferencia son esos dos sonidos."},
{"t":"audio","b":"oido","say":"came","rate":0.8,"q":"Listen to the verb. Which form is it, and what does it tell you?","opts":["come — he comes in often","came — he came in once, in the past","coming — he is on his way now","comes — he comes in every Monday"],"c":1,"e":"Se oyó 'kéim': came, pasado de come. El presente es 'kam': el irregular no cambia solo la escritura, cambia el sonido de la vocal."},
{"t":"audio","b":"oido","say":"bought","rate":0.8,"q":"Listen. Which verb did the voice say?","opts":["bought — past of 'buy'","brought — past of 'bring'","broke — past of 'break'","brings — present of 'bring'"],"c":0,"e":"Se oyó 'bot' (bought, compró). 'Brought' es 'brot', con r: es un par mínimo real y confundirlos cambia quién trajo o compró qué."},
{"t":"audio","b":"oido","say":"said","rate":0.8,"q":"Listen. Which word did the voice say?","opts":["sad — the opposite of happy","sat — past of 'sit'","said — past of 'say'","says — present of 'say'"],"c":2,"e":"Se oyó 'sed': said, pasado de say. No se pronuncia 'séid' aunque se escriba con ai, y 'sad' tiene otra vocal más abierta."},
{"t":"audio","b":"oido","say":"They haven't arrived yet.","rate":0.85,"q":"Listen. What is the situation with the customer's glasses?","opts":["They are still not in the store.","They got here a moment ago.","They arrived but they are not ready.","They were sent back to the lab."],"c":0,"e":"'Haven't arrived yet' es presente perfecto negativo con 'yet': todavía no llegan, y sigue importando ahora. 'Yet' solo aparece en negativos y preguntas."},
{"t":"audio","b":"oido","say":"I'm gonna check with the lab.","rate":0.85,"q":"Listen. Which full form did the voice reduce?","opts":["I have got to check with the lab.","I want to check with the lab.","I have already checked with the lab.","I am going to check with the lab."],"c":3,"e":"'Áim GÁ-na chek' es 'I'm going to check': going to se reduce a gonna en el habla real. No es que hablen rápido, es que hablan pegado."},
{"t":"audioW","b":"oido","say":"We ordered your lenses on Monday.","rate":0.85,"q":"Dictation. Write exactly what the voice says.","a":"We ordered your lenses on Monday.","alt":["we ordered your lenses on monday"],"e":"'Ordered' se oye ÓR-derd, con el -ed en /d/ y sin sílaba extra. Es el paso 1 de la explicación de un retraso: el dato concreto en pasado."},
{"t":"audioW","b":"oido","say":"The lab sent them this morning.","rate":0.85,"q":"Dictation. Write exactly what the voice says.","a":"The lab sent them this morning.","alt":["the lab sent them this morning"],"e":"'Sent' es el pasado irregular de 'send'; no lleva -ed. 'Them' se pega a 'sent' y suena 'sen-dem', pero son dos palabras."},
{"t":"audioW","b":"oido","say":"I'll call you as soon as they arrive.","rate":0.85,"q":"Dictation. Write exactly what the voice says.","a":"I'll call you as soon as they arrive.","alt":["I will call you as soon as they arrive.","ill call you as soon as they arrive"],"e":"'I'll' suena 'ail', una sola sílaba. Después de 'as soon as' el verbo va en presente ('arrive'), nunca con un segundo will."},
{"t":"audioW","b":"oido","say":"It took a little longer than expected.","rate":0.85,"q":"Dictation. Write exactly what the voice says.","a":"It took a little longer than expected.","alt":["it took a little longer than expected"],"e":"'Took' es el pasado de 'take' (tuk) y 'expected' termina en /ɪd/ (ex-PÉK-ted) porque la raíz acaba en t. Es la disculpa sin excusas largas."},
{"t":"audioW","b":"oido","say":"I've already sent your measurements to the lab.","rate":0.85,"q":"Dictation. Write exactly what the voice says.","a":"I've already sent your measurements to the lab.","alt":["I have already sent your measurements to the lab.","ive already sent your measurements to the lab"],"e":"'Already' (ol-RÉ-di) acompaña al presente perfecto en afirmativo. 'I've' se comprime a 'aiv' y es fácil perderla al escuchar."},
{"t":"audioW","b":"oido","say":"They haven't arrived yet.","rate":0.85,"q":"Dictation. Write exactly what the voice says.","a":"They haven't arrived yet.","alt":["They have not arrived yet.","they havent arrived yet"],"e":"'Yet' va al final en negativo, y 'arrived' lleva -ed en /d/. Es la frase que evita decir 'they didn't arrive yet', que suena a error de libro."},
{"t":"audioW","b":"oido","say":"We won't charge you for the adjustment.","rate":0.85,"q":"Dictation. Write exactly what the voice says.","a":"We won't charge you for the adjustment.","alt":["We will not charge you for the adjustment.","we wont charge you for the adjustment"],"e":"'Won't' se oye 'uóunt' con o larga, distinto de 'want' (uánt). 'Adjustment' es a-YÁST-ment, con la fuerza en la segunda sílaba."},
{"t":"audioW","b":"oido","say":"When did you get your last eye exam?","rate":0.85,"q":"Dictation. Write exactly what the voice says.","a":"When did you get your last eye exam?","alt":["when did you get your last eye exam"],"e":"'Did you' se pega y suena 'di-diu', pero el verbo queda en infinitivo: 'get', no 'got'. Es la pregunta que abre la historia visual del paciente."},
{"t":"write","b":"prod","q":"A customer asks if his glasses are ready. They are not in the store. Write the advisor's line in English, using the present perfect with 'yet'.","a":"They haven't arrived yet.","alt":["They have not arrived yet.","They haven't arrived yet, I'm sorry."],"e":"El presente perfecto con 'yet' dice que todavía no llegan y que eso sigue afectando ahora. 'They didn't arrive yet' es el calco que hay que evitar."},
{"t":"write","b":"prod","q":"Write in English: \"Pedimos sus lentes el lunes y el laboratorio los envió esta mañana.\"","a":"We ordered your lenses on Monday and the lab sent them this morning.","alt":["We ordered your lenses on Monday, and the lab sent them this morning."],"e":"Los dos verbos van en pasado: 'ordered' (regular, -ed en /d/) y 'sent' (irregular). Es el dato concreto que abre la explicación del retraso."},
{"t":"write","b":"prod","q":"Write in English the advisor's promise: \"Le llamaré en cuanto lleguen.\"","a":"I'll call you as soon as they arrive.","alt":["I will call you as soon as they arrive."],"e":"'I'll' para la promesa del momento y presente simple después de 'as soon as'. Nunca se pone 'will' dos veces en la misma frase."},
{"t":"write","b":"prod","q":"Write in English the question that opens the patient's visual history: \"¿Cuándo fue su último examen visual?\"","a":"When did you get your last eye exam?","alt":["When did you have your last eye exam?"],"e":"Con el auxiliar 'did' el verbo va en infinitivo: 'get', no 'got'. Los estadounidenses dicen 'eye exam', no 'visual exam'."},
{"t":"write","b":"prod","q":"You never called the customer yesterday. Write that in English in the first person, in the negative past.","a":"I didn't call you yesterday.","alt":["I did not call you yesterday.","I didn't call you yesterday, I'm sorry."],"e":"'Did' ya marca el pasado, así que el verbo vuelve al infinitivo: 'didn't call', no 'didn't called'."},
{"t":"write","b":"prod","q":"Turn this statement into the question you would ask the customer: \"You ordered the frame.\" Ask him if he ordered it.","a":"Did you order it?","alt":["Did you order the frame?"],"e":"La pregunta en pasado se arma con 'did' + infinitivo: 'Did you order it?'. 'Did you ordered it?' es el error que más se repite."},
{"t":"write","b":"prod","q":"Write in English: \"Tenía razón: el aro estaba defectuoso.\"","a":"You were right, the frame was defective.","alt":["You were right; the frame was defective.","You were right. The frame was defective."],"e":"'Were' va con you, we, they; 'was' con I, he, she, it. Aquí conviven las dos formas en una sola frase, y ahí está la trampa."},
{"t":"write","b":"prod","q":"Write in English the line that tells the customer the adjustment is free: \"No le cobraremos por el ajuste.\"","a":"We won't charge you for the adjustment.","alt":["We will not charge you for the adjustment."],"e":"'Won't' (uóunt) es la negación de will, y cobrar es 'to charge'. El sustantivo es 'adjustment', no 'adjust'."},
{"t":"write","b":"prod","q":"Write in English the plan you already decided with your manager: \"Vamos a verificar con el laboratorio.\"","a":"We're going to check with the lab.","alt":["We are going to check with the lab.","We're gonna check with the lab."],"e":"Un plan ya decidido antes de hablar se dice con 'going to'. En el habla real se comprime a 'gonna', pero por escrito va completo."},
{"t":"write","b":"prod","q":"Write in English the question about the patient's whole life up to today: \"¿Ha usado lentes progresivos antes?\"","a":"Have you ever worn progressive lenses?","alt":["Have you ever worn progressives?"],"e":"Presente perfecto con 'ever' para experiencias de toda la vida. El participio de 'wear' es 'worn' (uorn), no 'weared'."},
{"t":"write","b":"prod","q":"Write in English: \"Ya envié sus medidas al laboratorio.\"","a":"I've already sent your measurements to the lab.","alt":["I have already sent your measurements to the lab."],"e":"El español lo resuelve con pasado simple, pero en inglés va presente perfecto con 'already' porque explica la situación de ahora."},
{"t":"write","b":"prod","q":"A patient is wearing a very old pair. Write in English the question: \"¿Cuánto tiempo ha tenido estos lentes?\"","a":"How long have you had these glasses?","alt":["How long have you had those glasses?"],"e":"Algo que empezó antes y sigue hoy pide presente perfecto: 'How long have you had...'. 'How long do you have' es calco del español."},
{"t":"write","b":"prod","q":"Write in English the apology step of a delay: \"Disculpe, tomó un poco más de lo esperado.\"","a":"I'm sorry, it took a little longer than expected.","alt":["I am sorry, it took a little longer than expected.","I'm sorry - it took a little longer than expected."],"e":"Disculpa breve y sin excusas largas. 'Took' es el pasado de 'take', y 'expected' se pronuncia ex-PÉK-ted, con el -ed en /ɪd/."},
{"t":"write","b":"prod","q":"Write in English the line that gives the customer a date: \"Sus lentes estarán listos el viernes.\"","a":"Your glasses will be ready on Friday.","alt":["Your glasses are going to be ready on Friday.","Your glasses'll be ready on Friday."],"e":"'Will be ready' da la fecha con seguridad, y los días llevan 'on': on Friday. Dar fecha concreta es lo que sostiene la confianza del cliente."},
{"t":"write","b":"prod","q":"A customer says his frame broke. Write in English the question you ask before checking the warranty.","a":"Do you have your receipt?","alt":["Do you have the receipt?","Do you have your receipt with you?"],"e":"'Receipt' (ri-SÍT, la p es muda) es el recibo. Sin él no se puede aplicar la 'warranty', así que es la primera pregunta."},
{"t":"write","b":"prod","q":"Write in English: \"¿Trajo sus lentes viejos?\"","a":"Did you bring your old glasses?","alt":["Did you bring your old glasses with you?"],"e":"Con 'did' el verbo va en infinitivo: 'bring', no 'brought'. Cuidado al oírlo: 'brought' se pronuncia 'brot' y 'bought' es 'bot'."},
{"t":"speak","b":"habla","say":"We ordered your lenses on Monday.","q":"Record the line. The mic checks the -ed of 'ordered'.","a":"We ordered your lenses on Monday.","e":"Mide el -ed en /d/ sin sílaba extra: ÓR-derd, con la fuerza al inicio. Si sale 'or-DE-red' de tres sílabas, el acento te delata."},
{"t":"speak","b":"habla","say":"I'm sorry, it took a little longer than expected.","q":"Record the apology. The mic checks 'took' and the -ed of 'expected'.","a":"I'm sorry, it took a little longer than expected.","e":"Mide dos cosas: 'took' (tuk), pasado irregular con vocal corta, y 'expected' con el -ed en /ɪd/ (ex-PÉK-ted) porque la raíz termina en t."},
{"t":"speak","b":"habla","say":"I'll call you as soon as they arrive.","q":"Record the promise. The mic checks the 'll contraction.","a":"I'll call you as soon as they arrive.","e":"Mide la contracción del futuro: 'I'll' tiene que salir como una sola sílaba, 'ail'. Decir 'I will' completo suena robótico frente al cliente."},
{"t":"speak","b":"habla","say":"We won't charge you for the adjustment.","q":"Record the line. The mic checks 'won't' and 'adjustment'.","a":"We won't charge you for the adjustment.","e":"Mide 'won't' con o larga (uóunt), que no debe sonar como 'want', y 'adjustment' con la fuerza en la segunda sílaba: a-YÁST-ment."},
{"t":"speak","b":"habla","say":"Do you have your receipt?","q":"Record the question. The mic checks 'receipt'.","a":"Do you have your receipt?","e":"Mide 'receipt': ri-SÍT, con la p muda y el acento en la segunda sílaba. Pronunciar la p produce una palabra que no existe en inglés."},
{"t":"speak","b":"habla","say":"I bought them last week and brought them today.","q":"Record the line. The mic checks 'bought' and 'brought'.","a":"I bought them last week and brought them today.","e":"Mide el par mínimo bought (bot) vs brought (brot): la r es lo único que los separa, y confundirlos cambia quién compró y quién trajo."},
{"t":"speak","b":"habla","say":"Have you ever worn progressive lenses?","q":"Record the question. The mic checks 'ever' and the participle 'worn'.","a":"Have you ever worn progressive lenses?","e":"Mide 'worn' (uorn), participio de wear, y la entonación de pregunta de experiencia con 'ever' (É-ver)."},
{"t":"speak","b":"habla","say":"I'm gonna check with the lab.","q":"Record the line the way a native says it. The mic checks the 'gonna' reduction.","a":"I'm gonna check with the lab.","e":"Mide la reducción real del habla: 'áim GÁ-na chek'. Producirla es lo que después te permite reconocerla cuando el cliente la usa."}
],
/* ───── NIVEL 4 ───── */
4:[
{"t":"mc","b":"uso","q":"A customer says: \"I'm gonna hafta think about it.\" What is the customer telling you?","opts":["He is thinking about it at this very moment.","He already thought about it and decided.","He needs to think about it before he decides.","He wants you to think about it for him."],"c":2,"e":"'gonna hafta' es la forma reducida de 'going to have to' (voy a tener que). No es presente ni pasado: anuncia algo que todavía no ha hecho."},
{"t":"mc","b":"uso","q":"A customer says: \"They're kinda loose, and I've had that problem for a lotta months.\" Which full forms did he use?","opts":["kind of · a lot of","can of · a lot of","kind of · a couple of","could of · a little of"],"c":0,"e":"'kinda' = kind of (algo/un poco) y 'lotta' = a lot of (mucho). Son reducciones de palabras funcionales, no palabras distintas."},
{"t":"mc","b":"uso","q":"\"Whaddaya got in a lighter frame?\" What is the customer asking?","opts":["What did you get in a lighter frame?","What are you getting in a lighter frame?","Where do you get the lighter frames?","What do you have in a lighter frame?"],"c":3,"e":"'whaddaya' = what do you, y 'got' en habla informal equivale a 'have'. Es una pregunta en presente sobre lo que hay en existencia."},
{"t":"mc","b":"uso","q":"A customer says: \"I'll come back LÉI-der.\" Which word did he use?","opts":["ladder","later","letter","leader"],"c":1,"e":"Por el t-flapping, 'later' suena LÉI-der, con d suave. 'ladder' sería LÁ-der y 'letter' LÉ-der: la vocal es la que distingue, no la t."},
{"t":"mc","b":"uso","q":"On the phone you hear: \"This lens is BÉ-der for reading.\" Which word is it?","opts":["butter","bitter","better","batter"],"c":2,"e":"'better' = BÉ-der: la t entre vocales se relaja y suena como d suave. Confundirla con 'bitter' (BÍ-der) o 'butter' (BÁ-der) es un error de vocal, no de la t."},
{"t":"mc","b":"uso","q":"You want to say \"The center closes at twenty after nine\" the way an American would. Which transcription is right?","opts":["de SÉN-ter CLÓU-ses at TUÉN-ti ÁF-ter náin","de SÉ-ner CLÓU-ses at TUÉ-ni ÁF-ter náin","de sen-TÉR CLÓU-ses at tuen-TÍ ÁF-ter náin","de SÉ-ner CLÓU-ses at TUÉN-ti af-TÉR náin"],"c":1,"e":"Después de n la t casi desaparece: center = SÉ-ner, twenty = TUÉ-ni. Marcar todas las t suena extranjero, y mover el acento al final es calco del español."},
{"t":"mc","b":"uso","q":"In American English the t between two vowels sounds like a soft d. In which of these words does that NOT happen?","opts":["little","photo","matter","stop"],"c":3,"e":"En 'stop' la t no está entre vocales (va después de s y antes de vocal), así que se pronuncia t normal. En little, photo y matter sí aplica el flapping: LÍ-del, FÓU-dou, MÁ-der."},
{"t":"mc","b":"uso","q":"Which of these sentences should end with rising intonation ↗ so that it sounds friendly?","opts":["Your glasses are ready.","We close at seven today.","Is everything okay with them?","I'll call you tomorrow morning."],"c":2,"e":"La entonación sube al final en las preguntas de sí/no y para sonar amable. Las afirmaciones bajan al final (↘) para sonar seguras."},
{"t":"mc","b":"uso","q":"A customer says: \"Thanks so much for staying late to fix these.\" Which reply sounds warm and natural?","opts":["It's nothing, don't worry.","No worries at all — my pleasure.","Yes, of course, it is my work.","Okay. That's my job here."],"c":1,"e":"'No worries at all' y 'My pleasure' son las fórmulas naturales. 'It's nothing' es calco de 'no es nada' y 'it is my work' de 'es mi trabajo': se entienden, pero suenan planas o secas."},
{"t":"mc","b":"uso","q":"A customer is holding a frame and looking in the mirror. Which question sounds professional?","opts":["Do you want to try it?","Do you like to try it on?","You want try it on?","Would you like to try it on?"],"c":3,"e":"'Would you like...?' es la forma profesional; 'Do you want...?' es correcto pero directo. 'Do you like to...' significa 'te gusta hacerlo habitualmente', no es una oferta."},
{"t":"mc","b":"uso","q":"You need the customer's ID to open the order in the system. Which sentence do you use?","opts":["Give me your ID, please.","I need your ID for the order.","Could I see your ID, please?","You must show me your ID first."],"c":2,"e":"'Could I see...?' convierte la petición en solicitud. 'Give me' suena a orden aun con 'please', y 'you must' impone una obligación al cliente."},
{"t":"mc","b":"uso","q":"You have to check the price in the system before you answer. What do you say to the customer?","opts":["Could you give me a moment to check that?","I want to check that in the system first.","Wait, I check that in the system.","I'm going to check and I come back."],"c":0,"e":"'Could you give me a moment...?' pide permiso; con un cliente casi nunca se usa 'I want'. Las otras dos además tienen la estructura del español ('espere, reviso')."},
{"t":"mc","b":"uso","q":"The customer asks which lens you would choose. Which sentence is correct and professional?","opts":["Actually, I will want the thinner lens.","Actually, I'd recommend the thinner lens.","Actually, I'm recommending you the thinner lens.","Actually, I'd like you recommend the thinner lens."],"c":1,"e":"'I'd recommend' (I would recommend) suaviza el consejo. Ojo con 'actually': significa 'de hecho', no 'actualmente'."},
{"t":"mc","b":"uso","q":"You cannot hear the customer's last name clearly. Which request is correct and polite?","opts":["Can you write me your last name?","Would you spell me your last name?","Do you want to spell your last name?","Could you spell your last name, please?"],"c":3,"e":"La fórmula es 'Could you spell your last name, please?'. 'Spell me' es calco de 'deletréame': to spell no lleva objeto de persona."},
{"t":"mc","b":"uso","q":"The customer asks for a discount that you cannot approve alone. Which reply is professional?","opts":["I don't know. You have to ask my manager.","I'd like to check that with my manager, if that's okay.","I can't do that. That is the store policy.","I want to ask my manager about that first."],"c":1,"e":"'I'd like to check that with my manager' es honesto y cortés. Pasarle la tarea al cliente, escudarse en la política o decir 'I want' rompen el tono de servicio."},
{"t":"mc","b":"uso","q":"Which sentence is grammatically correct?","opts":["You should to wear them all day at first.","She musts sign the order too.","He might needs a stronger lens.","You shouldn't clean them with your shirt."],"c":3,"e":"Los modales (should, must, might) van sin 'to' después y nunca llevan -s, ni ellos ni el verbo que les sigue."},
{"t":"mc","b":"uso","q":"The lab has not confirmed the date yet. Which sentence informs the customer without promising?","opts":["They might be ready by Wednesday.","They will be ready on Wednesday.","They have to be ready on Wednesday.","They are ready on Wednesday."],"c":0,"e":"'Might' expresa posibilidad y te protege de prometer lo que no controlas. 'Will' es un compromiso y el presente afirma un hecho que todavía no existe."},
{"t":"mc","b":"uso","q":"The customer has to sign the order before you send it to the lab. Which sentence states that obligation?","opts":["You should sign here first.","You might sign here first.","You have to sign here first.","You would sign here first."],"c":2,"e":"'Have to' / 'must' es obligación; 'should' solo aconseja y 'might' plantea una posibilidad. Firmar no es opcional, así que el modal correcto es have to."},
{"t":"mc","b":"uso","q":"Which sentence is correct?","opts":["If you will bring the receipt, we can replace it.","If you bring the receipt, we can replace it.","If you would bring the receipt, we replace it.","If you bringing the receipt, we can replace it."],"c":1,"e":"Condicional tipo 1: if + presente simple, y en la otra mitad will o can. Después de 'if' nunca va 'will'."},
{"t":"mc","b":"uso","q":"Complete the warranty explanation: \"If the coating peels under normal use, ___\"","opts":["the warranty will covers it.","the warranty covered it.","the warranty will cover it.","the warranty is covering it."],"c":2,"e":"La mitad con 'will' lleva el verbo en infinitivo sin -s: will cover. El pasado y el presente continuo no describen una condición futura."},
{"t":"mc","b":"uso","q":"Which sentence correctly tells the customer that you will call him if there is a delay?","opts":["We'll call you if there's a delay.","We'll call you if there will be a delay.","We call you if there are a delay.","We'll call you if it has a delay."],"c":0,"e":"La condición va en presente ('if there's a delay') aunque el 'if' esté al final. 'There are a delay' falla en número y 'it has' es calco de 'si hay'."},
{"t":"mc","b":"uso","q":"The customer wants to see how the frame looks on his face. What do you offer?","opts":["Would you like to try it out?","Would you like to check it out?","Would you like to fill it out?","Would you like to try it on?"],"c":3,"e":"'Try on' es probarse algo puesto; 'try out' es probar cómo funciona algo, 'check out' pagar o revisar y 'fill out' llenar un formulario. La partícula cambia todo el significado."},
{"t":"mc","b":"uso","q":"The customer needs to complete the insurance form. What do you say?","opts":["Please fill up this form.","Please fill out this form.","Please full out this form.","Please fill in out this form."],"c":1,"e":"'Fill out' es llenar un formulario. 'Fill up' es llenar un recipiente o un tanque, y es el calco más común de 'llenar'."},
{"t":"mc","b":"uso","q":"On the phone you need the customer to wait while you look up the order. What do you say?","opts":["Hold up one second, please.","Wait me one second, please.","Hold on one second, please.","Hold you one second, please."],"c":2,"e":"'Hold on' es esperar en el teléfono. 'Hold up' significa retrasar o atracar, y 'wait me' es calco de 'espéreme' (en inglés sería 'wait for me')."},
{"t":"mc","b":"uso","q":"The advisor says: \"Don't worry, I'll figure it out and take care of it myself.\" What is he promising?","opts":["He will work out the problem and handle it personally.","He will imagine a solution and be careful with it.","He will calculate the cost and charge it to the store.","He will find out whose fault it was and report it."],"c":0,"e":"'Figure out' es resolver o descifrar y 'take care of' es encargarse de algo. Ojo con el falso amigo: 'figure' no es 'figurarse' y aquí no hay ningún cálculo."},
{"t":"mc","b":"uso","q":"You tell the customer: \"Feel free to call us if anything comes up.\" What does \"comes up\" mean here?","opts":["if the price goes up","if he comes back to the store","if a problem or a question appears","if someone comes in asking for him"],"c":2,"e":"'To come up' es surgir (un problema, una duda). No tiene relación con subir de precio ni con entrar a la tienda."},
{"t":"mc","b":"uso","q":"The customer is still looking for the frame he saw last week and you want him to return on Friday. Which sentence is correct?","opts":["I'll look for you the frame when you come back on Friday.","You can come back on Friday and we'll look for it together.","You can come back for Friday and look it for with me.","I'm looking the frame that you come back last week."],"c":1,"e":"'Look for' no se parte: se dice 'look for it', nunca 'look for you the frame' ni 'look it for'. Y 'come back on Friday' lleva on con los días."},
{"t":"mc","b":"uso","q":"A customer is upset and you have already apologized. Which open question is correct English?","opts":["Could you tell me exactly what's bothering you when you wear them?","Could you tell me exactly what is bother you when you use them?","What is the thing that bothers to you when you wear them?","Can you say me exactly what bothers you when you wear them?"],"c":0,"e":"El paso 2 de una queja es una pregunta abierta: 'Could you tell me exactly what's bothering you...?'. 'Bother' no lleva 'to' antes del objeto y 'say me' es calco de 'dígame' (se dice tell me)."},
{"t":"mc","b":"uso","q":"You want to promise the customer that you personally will follow up. Which sentence is correct?","opts":["I'll call to you myself to make sure it gets done.","I myself will call you to make sure it gets do.","I'll call you same to make sure it is done.","I'll call you myself to make sure it gets done."],"c":3,"e":"'Call you' va sin 'to' (llamar a alguien) y el compromiso personal se marca con 'myself' después del objeto. 'Gets done' es la forma pasiva correcta."},
{"t":"mc","b":"uso","q":"The customer just told you the price seems high. Which reply acknowledges him before you explain?","opts":["I listen you. Let me explain the price.","I hear you. Let me explain what's included in that price.","I understand you. The price is the price of the store.","That's the price. Let me explain what's included in it."],"c":1,"e":"'I hear you' es la frase puente para reconocer al cliente antes de explicar. 'I listen you' es calco de 'le escucho' (listen siempre lleva to), y empezar por 'that's the price' suena defensivo."},
{"t":"mc","b":"uso","q":"You wrote down the caller's last name and want to confirm it. Which sentence is correct?","opts":["Let me make sure I got that right: Miller, M-I-L-L-E-R.","Let me sure I get that right: Miller, M-I-L-L-E-R.","Let me make sure that I have get right: Miller.","Let me be sure I am getting right that: Miller."],"c":0,"e":"La fórmula fija es 'Let me make sure I got that right' y luego se repite deletreado. 'Make sure' no se puede recortar a 'let me sure'."},
{"t":"mc","b":"uso","q":"The line is bad and you can barely hear the caller. Which sentence is correct and polite?","opts":["Sorry, I can't listen you. Talk more strong, please.","Speak more high, please, I don't listen you well.","I'm sorry, we have a bad connection. Could you speak up a little?","Sorry, bad connection. Do you want to speak louder?"],"c":2,"e":"'Could you speak up a little?' es la fórmula. 'Listen you' y 'talk more strong / more high' son calcos de 'escucharle' y 'hablar más fuerte/alto'; y 'do you want' pide un deseo en vez de un favor."},
{"t":"mc","b":"uso","q":"Which sentence tells the caller that you are opening his order in the system?","opts":["Hold on one second while I pull it up.","Hold on one second while I pull it out.","Hold on one second while I pick it up.","Hold on one second while I fill it up."],"c":0,"e":"'Pull it up' es abrir o buscar algo en la computadora. 'Pull it out' es sacarlo, 'pick it up' recogerlo y 'fill it up' llenarlo."},
{"t":"mc","b":"uso","q":"You are closing the visit and want to offer more help. Which sentence is correct?","opts":["There is anything else I can do for you?","Is there something else that I can do you?","Do you have anything else I can do for you?","Is there anything else I can do for you?"],"c":3,"e":"La pregunta invierte el verbo: 'Is there...?', y en preguntas se usa 'anything'. Además 'do for you' necesita la preposición for."},
{"t":"audio","b":"oido","say":"I gotta ask my manager.","rate":0.95,"q":"Listen. Which sentence did the voice say?","opts":["I wanna ask my manager.","I'm gonna ask my manager.","I oughta ask my manager.","I gotta ask my manager."],"c":3,"e":"'gotta' = got to / have to (tengo que). 'wanna' es want to, 'gonna' es going to y 'oughta' es ought to: cuatro reducciones distintas que en habla rápida se confunden."},
{"t":"audio","b":"oido","say":"Do you wanna try it on?","rate":0.95,"q":"Listen. Which question did the voice ask?","opts":["Do you wanna try it on?","Do you wanna try it out?","Are you gonna try it on?","Did you wanna try it on?"],"c":0,"e":"'Do you wanna try it on?' = ¿quiere probárselo? El auxiliar (do/did/are) y la partícula (on/out) cambian por completo el sentido de la pregunta."},
{"t":"audio","b":"oido","say":"Whaddaya think?","rate":0.95,"q":"Listen. What is the voice actually asking?","opts":["What are you thinking?","What did you think?","What do you think?","What do you drink?"],"c":2,"e":"'Whaddaya' es la compresión de 'what do you', así que la pregunta es en presente simple: 'What do you think?' (¿qué le parece?)."},
{"t":"audio","b":"oido","say":"Lemme see what I can do for you.","rate":0.95,"q":"Listen. Which sentence did the voice say?","opts":["Let's see what I can do for you.","Let me see what I can do for you.","Let him see what I can do for you.","Let me say what I can do for you."],"c":1,"e":"'Lemme' es la reducción de 'let me'. Es la frase del paso 3 al manejar una queja: confirma que escuchaste antes de proponer la solución."},
{"t":"audio","b":"oido","say":"Gimme one second and I'll pull it up.","rate":0.95,"q":"Listen. Which sentence did the voice say?","opts":["Give me one second and I'll pull it up.","Give me one second and I'll pick it up.","Give him one second and I'll pull it up.","Give me one second and I'll fill it out."],"c":0,"e":"'Gimme' es 'give me'. 'Pull it up' es abrirlo en el sistema; 'pick it up' (recogerlo) y 'fill it out' (llenarlo) son otros phrasal verbs."},
{"t":"audio","b":"oido","say":"I'm sorry, we ran outta that color.","rate":0.95,"q":"Listen. What is the situation with that color?","opts":["They will run out of that color soon.","They do not have that color anymore.","That color costs more than the others.","That color only comes in one size."],"c":1,"e":"'Ran outta' = ran out of, en pasado: ya se quedaron sin ese color. Decir que 'se está agotando' cambia el tiempo verbal y la información que recibe el cliente."},
{"t":"audio","b":"oido","say":"The little one is better.","rate":0.85,"q":"Listen. Which sentence did the voice say?","opts":["The letter one is better.","A little one is bitter.","The little one is bigger.","The little one is better."],"c":3,"e":"Con el t-flapping, little = LÍ-del y better = BÉ-der. Lo que distingue estas palabras es la vocal (little/letter, better/bitter), no la t."},
{"t":"audio","b":"oido","say":"Come back at twenty after four.","rate":0.85,"q":"Listen. What time should the customer come back?","opts":["4:20","4:14","2:40","4:40"],"c":0,"e":"'Twenty after four' son las 4:20, y 'twenty' se oye TUÉ-ni porque la t después de n desaparece. Cuidado con la trampa 14/40 y con invertir las cifras."},
{"t":"audio","b":"oido","say":"I'm gonna have the doctor check the prescription again, at no cost.","rate":0.95,"q":"Listen. What is the advisor offering?","opts":["To send the glasses back to the lab for a refund.","To give the customer a discount on new lenses.","To have the doctor check the prescription again for free.","To have the doctor check the frame for a small fee."],"c":2,"e":"'I'm gonna have the doctor check' = voy a pedirle al doctor que revise, y 'at no cost' es sin costo. Es el paso 4 de una queja: solución concreta."},
{"t":"audio","b":"oido","say":"I'm sorry, we have a bad connection. Could you speak up a little?","rate":0.85,"q":"Listen. What does the advisor need the caller to do?","opts":["The caller should call back later.","The caller should spell the last name.","The caller should hold on one second.","The caller should talk louder."],"c":3,"e":"'Speak up' es hablar más fuerte, no volver a llamar ni esperar. Es la fórmula telefónica para la mala señal."},
{"t":"audio","b":"oido","say":"The last name is Wright: W-R-I-G-H-T.","rate":0.8,"q":"Listen. Which last name did the caller spell?","opts":["White","Wright","Right","Waite"],"c":1,"e":"'Wright' y 'right' suenan igual: solo el deletreo distingue. Por eso al teléfono se pide deletrear y luego se confirma repitiendo letra por letra."},
{"t":"audio","b":"oido","say":"If you bring the receipt, we can replace it at no cost.","rate":0.85,"q":"Listen. What condition did the advisor give?","opts":["The customer must come back within a year.","The customer must pay half of the cost.","The customer must bring the receipt.","The customer must call before coming."],"c":2,"e":"Condicional tipo 1: la condición está en la mitad con 'if' (if you bring the receipt) y el resultado en la mitad con can (we can replace it)."},
{"t":"audio","b":"oido","say":"You shouldn't clean them with your shirt. You should use the cloth.","rate":0.85,"q":"Listen. What is the advice?","opts":["He must never clean the lenses himself.","He should use his shirt if the cloth is dirty.","He might damage the lenses with the cloth.","He should not use his shirt; he should use the cloth."],"c":3,"e":"'Shouldn't' es un consejo en negativo, no una prohibición absoluta ('must not'). El contraste está entre la camisa y el paño."},
{"t":"audio","b":"oido","say":"I gotta warn you, it's kinda dark 'cause of the tint.","rate":0.95,"q":"Listen. The voice used three reductions. Which set of full forms is correct?","opts":["got to · kind of · because","going to · kind of · because","got to · can of · cost of","have to · a lot of · because"],"c":0,"e":"gotta = got to, kinda = kind of, 'cause = because. Reconocer estas tres formas en cadena es lo que permite seguir una conversación normal."},
{"t":"audioW","b":"oido","say":"I'm gonna check with the lab.","rate":0.9,"q":"Dictation. Write the sentence in English. You may write the reduced form or the full form.","a":"I'm gonna check with the lab.","alt":["I am gonna check with the lab.","I'm going to check with the lab.","I am going to check with the lab."],"e":"La voz dice la forma reducida 'gonna'; en escritura formal sería 'going to'. Fíjate en 'with the lab', no 'to the lab'."},
{"t":"audioW","b":"oido","say":"Would you like to try them on?","rate":0.85,"q":"Dictation. Write the question in English.","a":"Would you like to try them on?","alt":["Would you like to try them on"],"e":"'Would you like...?' es la oferta profesional y 'try on' se separa con el pronombre en medio: try them on."},
{"t":"audioW","b":"oido","say":"Could you spell your last name for me, please?","rate":0.85,"q":"Dictation. Write the question in English.","a":"Could you spell your last name for me, please?","alt":["Could you spell your last name for me please"],"e":"Fórmula telefónica indispensable. Es 'for me', no 'to me': to spell no lleva objeto de persona directo."},
{"t":"audioW","b":"oido","say":"Hold on one second while I pull it up.","rate":0.85,"q":"Dictation. Write the sentence in English.","a":"Hold on one second while I pull it up.","alt":["Hold on one second while I pull it up"],"e":"Dos piezas del inglés telefónico: 'hold on' (esperar en la línea) y 'pull it up' (abrirlo en el sistema)."},
{"t":"audioW","b":"oido","say":"If you bring the receipt, we can replace it.","rate":0.85,"q":"Dictation. Write the sentence in English.","a":"If you bring the receipt, we can replace it.","alt":["If you bring the receipt we can replace it"],"e":"Condicional tipo 1: after 'if' va presente simple ('you bring'), nunca 'will bring'."},
{"t":"audioW","b":"oido","say":"You can pick them up on Friday after four thirty.","rate":0.85,"q":"Dictation. Write the sentence in English and write the time in numbers.","a":"You can pick them up on Friday after 4:30.","alt":["You can pick them up on Friday after four thirty.","You can pick them up on Friday after 4.30."],"e":"'Pick up' se separa con el pronombre: pick them up. Y la hora 'four thirty' se anota 4:30."},
{"t":"audioW","b":"oido","say":"Please fill out this form and I'll take care of the rest.","rate":0.85,"q":"Dictation. Write the sentence in English.","a":"Please fill out this form and I'll take care of the rest.","alt":["Please fill out this form and I will take care of the rest."],"e":"'Fill out' es llenar un formulario y 'take care of' encargarse. Son los dos phrasal verbs del mostrador."},
{"t":"audioW","b":"oido","say":"I completely understand your frustration.","rate":0.85,"q":"Dictation. Write the sentence in English.","a":"I completely understand your frustration.","alt":["I completely understand your frustration"],"e":"Es la validación emocional del paso 1 al manejar una queja. 'Completely' va entre el sujeto y el verbo."},
{"t":"write","b":"prod","q":"A coworker tells the customer: \"Give me your receipt.\" Rewrite it as a polite request. Start with \"Could\".","a":"Could I see your receipt, please?","alt":["Could I see the receipt, please?","Could I please see your receipt?","Could I see your receipt please"],"e":"'Give me' suena a orden. Con could + please la orden se convierte en solicitud, que es el registro que espera un cliente estadounidense."},
{"t":"write","b":"prod","q":"Offer the customer to try the frame on. Use the professional form with \"would\".","a":"Would you like to try it on?","alt":["Would you like to try them on?","Would you like to try the frame on?","Would you like to try it on"],"e":"'Do you want...?' es correcto pero directo; 'Would you like...?' es la versión profesional. 'Try on' es el phrasal verb de probarse algo."},
{"t":"write","b":"prod","q":"You need to verify something with the lab. Rewrite \"I want to check with the lab\" so that it sounds professional.","a":"I'd like to check with the lab.","alt":["I would like to check with the lab.","I'd like to check that with the lab.","I would like to check that with the lab."],"e":"Con un cliente casi nunca se dice 'I want': se dice 'I'd like' (I would like). Es la misma idea con registro de servicio."},
{"t":"write","b":"prod","q":"A customer asks whether you can help him choose a frame for his son. Answer that you will gladly help him with that. Use \"happy\".","a":"I'd be happy to help you with that.","alt":["I would be happy to help you with that.","I'd be happy to help with that.","I would be happy to help with that."],"e":"'I'd be happy to help you with that' es la frase estrella de la cortesía profesional: acepta y suena entusiasta al mismo tiempo."},
{"t":"write","b":"prod","q":"Write a type-1 conditional: if the customer pays today, you will apply the discount.","a":"If you pay today, I'll apply the discount.","alt":["If you pay today, I will apply the discount.","If you pay today, we'll apply the discount.","If you pay today, we will apply the discount."],"e":"if + presente simple ('you pay') y will en la otra mitad. Escribir 'if you will pay' es el error más común de este nivel."},
{"t":"write","b":"prod","q":"Explain the warranty: if the coating peels under normal use, the store replaces it. Use \"we'll\".","a":"If the coating peels under normal use, we'll replace it.","alt":["If the coating peels under normal use, we will replace it."],"e":"El condicional tipo 1 es la fórmula para explicar políticas. 'Under normal use' es la frase que delimita qué cubre la garantía."},
{"t":"write","b":"prod","q":"Fix the mistake and write the correct sentence: \"If you will bring the receipt, we can replace it.\"","a":"If you bring the receipt, we can replace it.","alt":["If you bring the receipt we can replace it"],"e":"Después de 'if' nunca va 'will': la condición se expresa en presente simple aunque hable del futuro."},
{"t":"write","b":"prod","q":"Give advice to a first-time wearer: he should wear them all day at first.","a":"You should wear them all day at first.","alt":["You should wear them all day at the beginning.","You should wear them all day at first"],"e":"'Should' da consejo, no orden, y va sin 'to' después. Con 'must' o 'have to' la frase sonaría a imposición."},
{"t":"write","b":"prod","q":"The lab has not confirmed anything yet. Tell the customer that it may take two days, without promising. Use \"might\".","a":"It might take two days.","alt":["It might take a couple of days.","That might take two days.","They might take two days.","It might take two days"],"e":"'Might' plantea la posibilidad sin comprometerte. Si dices 'it will take two days' y el laboratorio se retrasa, la promesa era tuya."},
{"t":"write","b":"prod","q":"Warn the customer about hot water on the lenses. Use a modal of obligation in the negative.","a":"You must not use hot water on the lenses.","alt":["You mustn't use hot water on the lenses.","You must not use hot water on the lenses"],"e":"'Must not' es prohibición: aquí sí corresponde, porque el agua caliente daña los tratamientos. Con 'shouldn't' sonaría a sugerencia."},
{"t":"write","b":"prod","q":"You answer the store phone and your name is Oscar. Write the standard professional opening.","a":"CV Plus, this is Oscar speaking. How may I help you?","alt":["CV Plus, this is Oscar speaking. How can I help you?","CV Plus. This is Oscar speaking. How may I help you?"],"e":"La fórmula es empresa + 'this is [nombre] speaking' + 'How may I help you?'. 'May' es incluso más formal que 'can'."},
{"t":"write","b":"prod","q":"Ask the caller to wait a second while you look his order up in the system. Use \"hold on\" and \"pull it up\".","a":"Hold on one second while I pull it up.","alt":["Hold on one second while I pull it up, please.","Hold on one second, please, while I pull it up.","Hold on one second while I pull it up"],"e":"'Hold on' es esperar en la línea y 'pull it up' abrirlo en el sistema. Avisar qué estás haciendo evita que el cliente crea que lo cortaron."},
{"t":"write","b":"prod","q":"A customer comes back a second time with the wrong lenses. Write step 1 of the complaint sequence: apology plus emotional validation (two sentences).","a":"I'm really sorry about that. I completely understand your frustration.","alt":["I am really sorry about that. I completely understand your frustration.","I'm really sorry about that. I completely understand your frustration"],"e":"Nunca se empieza explicando la política ni defendiéndose: primero disculpa y validación. Eso baja la tensión antes de hablar de soluciones."},
{"t":"write","b":"prod","q":"Write the open question of step 2: ask the customer exactly what bothers him when he wears them.","a":"Could you tell me exactly what's bothering you when you wear them?","alt":["Could you tell me exactly what is bothering you when you wear them?","Could you tell me exactly what's bothering you when you wear them"],"e":"La pregunta abierta con 'could you tell me' es cortés y obliga a describir el problema real. 'Bother' no lleva preposición antes del objeto."},
{"t":"write","b":"prod","q":"Close the complaint with a personal commitment: you will call him yourself to make sure it gets done.","a":"I'll call you myself to make sure it gets done.","alt":["I will call you myself to make sure it gets done.","I'll call you myself to make sure it gets done"],"e":"El paso 5 es compromiso personal: 'myself' es lo que convierte una promesa de la tienda en una promesa tuya. Y 'call you' va sin 'to'."},
{"t":"write","b":"prod","q":"Tell the customer that he can collect his glasses on Friday, using the phrasal verb a native would use.","a":"You can pick them up on Friday.","alt":["You can pick them up Friday.","You can pick your glasses up on Friday.","You can pick them up on Friday"],"e":"Los nativos dicen 'pick up', no 'collect'. Con pronombre, la partícula va al final: pick them up."},
{"t":"speak","b":"habla","say":"I'll get you a little water, and we can do it later.","q":"Say this sentence with American t-flapping: little = LÍ-del, water = UÁ-der, later = LÉI-der.","a":"I'll get you a little water, and we can do it later.","e":"Mide el t-flapping: la t entre vocales debe sonar como d suave. Si marcas las tres t suenas extranjero."},
{"t":"speak","b":"habla","say":"It's twenty dollars, and the center opens at nine.","q":"Say this sentence the way an American would: twenty = TUÉ-ni, center = SÉ-ner.","a":"It's twenty dollars, and the center opens at nine.","e":"Mide la t que desaparece después de n. 'TUÉN-ti' y 'SÉN-ter' son inteligibles pero delatan acento de libro."},
{"t":"speak","b":"habla","say":"I'm gonna check with the lab, and I gotta ask my manager.","q":"Say this sentence with the real reductions: gonna (GÁ-na) and gotta (GÁ-ta).","a":"I'm gonna check with the lab, and I gotta ask my manager.","e":"Mide las reducciones en producción: comprimir 'going to' y 'got to' es lo que da ritmo natural a la frase."},
{"t":"speak","b":"habla","say":"Lemme see what I can do. Whaddaya think?","q":"Say these two lines with the reductions: lemme (LÉ-mi) and whaddaya (UÁ-da-ia).","a":"Lemme see what I can do. Whaddaya think?","e":"Mide 'let me' y 'what do you' comprimidos, que es como suenan en cualquier conversación de mostrador."},
{"t":"speak","b":"habla","say":"I'd be happy to help you with that.","q":"Say this warmly, with the intonation falling at the end so it sounds confident.","a":"I'd be happy to help you with that.","e":"Mide 'I'd' (no 'I would like it') y el tono cálido: la misma frase dicha plana suena a trámite."},
{"t":"speak","b":"habla","say":"Would you like me to check other options?","q":"Say this question with rising intonation ↗ at the end, the way you would offer it to a customer.","a":"Would you like me to check other options?","e":"Mide la entonación ascendente de las preguntas de sí/no y la estructura 'would you like me to + verbo', que es la oferta más profesional."},
{"t":"speak","b":"habla","say":"I'm really sorry about that. I completely understand your frustration.","q":"An angry customer just finished complaining. Say step 1 of the sequence out loud.","a":"I'm really sorry about that. I completely understand your frustration.","e":"Mide la línea completa de disculpa y validación, con 'frustration' acentuada en la segunda sílaba (fras-TRÉI-shon)."},
{"t":"speak","b":"habla","say":"CV Plus, this is Oscar speaking. How may I help you?","q":"The store phone is ringing. Answer it out loud with the standard opening.","a":"CV Plus, this is Oscar speaking. How may I help you?","e":"Mide la fórmula telefónica completa y su ritmo: nombre de la tienda, 'this is ... speaking' y la oferta de ayuda."}
]
};
/* ═══════════════════════════════════════════════════════════════════════
   ENGLISH QUIZ v2 · Academia CV+
   ───────────────────────────────────────────────────────────────────────
   Motor de examen SOLO para los módulos de inglés (category === 'ingles').
   El resto de los módulos siguen usando el quiz original sin cambio alguno.

   Qué corrige respecto del quiz anterior:
     · La respuesta correcta era la opción B en 87 de 102 preguntas y las
       opciones NO se revolvían: se aprobaba picando siempre la segunda.
       Aquí las opciones se revuelven en cada pregunta y en cada intento.
     · El banco era de 16 a 22 preguntas y se mostraban 12 a 15: se
       memorizaba en dos intentos. Ahora son 80 por nivel y se muestran 30.
     · Todas las preguntas eran en español y de reconocimiento. Ahora hay
       cuatro bloques: uso, oído (audio), producción escrita y pronunciación.

   Cómo se aprueba: 90% del total Y un mínimo en CADA bloque.

   Todo lo ajustable está en CFG, aquí abajo.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ══════════════ PARÁMETROS AJUSTABLES ══════════════ */
  var CFG = {
    aprobar: 90,          // % del total para aprobar
    minBloque: 70,        // % mínimo exigido en cada bloque
    // Cuántos ítems se sortean por intento (total 30)
    // Se recorre por TIPO de ítem (no por bloque): mc = las de selección.
    porIntento: { mc: 12, audio: 5, audioW: 3, write: 6, speak: 4 },
    // Puerta 1 · práctica mínima en el English Lab de ese nivel
    minPracticasLab: 20,
    minPromedioLab: 75,
    // Puerta 2 · espera después de fallar
    esperaFalloH: 24,
    esperaFalloSeguidoH: 48,   // a partir del 3er fallo seguido
    // Puerta 3 · repaso obligatorio para que el nivel cuente como dominado
    repasoDias: 21,
    // Un ítem de pronunciación se da por correcto desde este puntaje
    umbralHabla: 75
  };

  var BLOQUES = {
    uso:   { nombre: 'Uso y vocabulario', icono: '🧠' },
    oido:  { nombre: 'Comprensión auditiva', icono: '🎧' },
    prod:  { nombre: 'Producción escrita', icono: '✍️' },
    habla: { nombre: 'Pronunciación', icono: '🎤' }
  };

  var LS_ESTADO = 'cvp_eng_quiz_v2';
  var LS_LAB    = 'cvp_english_lab';

  /* ══════════════ ESTADO PROPIO (puertas de ritmo) ══════════════ */
  function leerEstado() {
    try { return JSON.parse(localStorage.getItem(LS_ESTADO) || '{}'); }
    catch (e) { return {}; }
  }
  function guardarEstado(e) {
    try { localStorage.setItem(LS_ESTADO, JSON.stringify(e)); } catch (x) {}
    try {
      if (window.firebaseReady && window.saveUserData) {
        window.saveUserData('english_quiz_v2', { estado: e });
      }
    } catch (x) {}
  }
  function estadoNivel(n) {
    var e = leerEstado();
    if (!e['n' + n]) {
      e['n' + n] = { fallos: 0, fallosSeguidos: 0, ultimoFallo: null, aprobadoEn: null, mejor: 0, intentos: 0 };
      guardarEstado(e);
    }
    return e['n' + n];
  }
  function escribirNivel(n, datos) {
    var e = leerEstado();
    e['n' + n] = datos;
    guardarEstado(e);
  }

  /* ══════════════ PRÁCTICA REGISTRADA EN EL ENGLISH LAB ══════════════ */
  /* El laboratorio guarda su progreso en la misma llave del navegador
     (mismo origen, aunque corra dentro del iframe), así que se puede leer. */
  function practicaLab(n) {
    try {
      var p = JSON.parse(localStorage.getItem(LS_LAB) || '{}')['n' + n];
      if (!p) return { intentos: 0, promedio: 0, mejor: 0 };
      return {
        intentos: p.intentos || 0,
        promedio: p.intentos ? Math.round(p.suma / p.intentos) : 0,
        mejor: p.mejor || 0
      };
    } catch (e) { return { intentos: 0, promedio: 0, mejor: 0 }; }
  }

  /* ══════════════ VOZ NATIVA ══════════════ */
  var VOZ = null;
  function elegirVoz() {
    if (!window.speechSynthesis) return;
    var vs = speechSynthesis.getVoices() || [];
    var pref = ['Google US English', 'Samantha', 'Microsoft Aria', 'Microsoft Jenny',
                'Microsoft Zira', 'Alex', 'Ava', 'Allison'];
    for (var i = 0; i < pref.length; i++) {
      for (var j = 0; j < vs.length; j++) {
        if ((vs[j].name || '').indexOf(pref[i]) > -1 && (vs[j].lang || '').indexOf('en') === 0) { VOZ = vs[j]; return; }
      }
    }
    for (var k = 0; k < vs.length; k++) { if ((vs[k].lang || '').indexOf('en') === 0) { VOZ = vs[k]; return; } }
  }
  if (window.speechSynthesis) { elegirVoz(); speechSynthesis.onvoiceschanged = elegirVoz; }

  function decir(txt, rate) {
    if (!window.speechSynthesis) return;
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(txt);
      u.lang = 'en-US';
      u.rate = rate || 0.9;
      if (VOZ) u.voice = VOZ;
      speechSynthesis.speak(u);
    } catch (e) {}
  }
  /* Deletrea letra por letra, con pausa (para los ítems de abecedario) */
  function decirDeletreado(txt) {
    if (!window.speechSynthesis) return;
    var letras = txt.toUpperCase().replace(/[^A-Z]/g, '').split(''), i = 0;
    try { speechSynthesis.cancel(); } catch (e) {}
    (function sig() {
      if (i >= letras.length) return;
      var L = letras[i]; i++;
      try {
        var u = new SpeechSynthesisUtterance(L);
        u.lang = 'en-US'; u.rate = 0.7; if (VOZ) u.voice = VOZ;
        u.onend = function () { setTimeout(sig, 260); };
        speechSynthesis.speak(u);
      } catch (e) {}
    })();
  }
  /* Si el `say` viene con las letras separadas ("M I L L E R") se deletrea */
  function esDeletreo(say) { return /^([A-Za-z]\s+){2,}[A-Za-z]$/.test((say || '').trim()); }
  function reproducir(item, rate) {
    var say = item.say || '';
    if (esDeletreo(say)) decirDeletreado(say);
    else decir(say, rate || item.rate || 0.9);
  }

  /* ══════════════ MICRÓFONO ══════════════ */
  var REC_OK = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  var rec = null;
  function escuchar(onListo, onError) {
    if (!REC_OK) { if (onError) onError('no-soporte'); return; }
    try {
      var R = window.SpeechRecognition || window.webkitSpeechRecognition;
      rec = new R();
      rec.lang = 'en-US'; rec.interimResults = false; rec.maxAlternatives = 3; rec.continuous = false;
      var listo = false;
      rec.onresult = function (ev) {
        listo = true;
        var alts = [];
        for (var i = 0; i < ev.results[0].length; i++) alts.push(ev.results[0][i].transcript);
        onListo(alts);
      };
      rec.onerror = function (ev) { if (onError) onError(ev.error || 'error'); };
      rec.onend = function () { if (!listo && onError) onError('silencio'); };
      rec.start();
    } catch (e) { if (onError) onError('error'); }
  }

  /* ══════════════ CALIFICACIÓN DE TEXTO Y DE VOZ ══════════════
     Mismo criterio que el English Lab: tolera tildes, mayúsculas,
     puntuación y contracciones, pero NO cambia de palabra. */
  function normal(s) {
    return (s || '').toLowerCase()
      .replace(/[áàä]/g, 'a').replace(/[éèë]/g, 'e').replace(/[íìï]/g, 'i')
      .replace(/[óòö]/g, 'o').replace(/[úùü]/g, 'u')
      .replace(/['’´]/g, '')
      .replace(/[.,!?;:"“”()\-—$]/g, ' ')
      .replace(/\s+/g, ' ').trim();
  }
  var EQUIV = {
    'gonna': 'going to', 'wanna': 'want to', 'gotta': 'got to', 'lemme': 'let me',
    'gimme': 'give me', 'whaddaya': 'what do you', 'cause': 'because', 'kinda': 'kind of',
    'lotta': 'lot of', 'hafta': 'have to', 'oughta': 'ought to',
    'ok': 'okay', 'yeah': 'yes', 'yep': 'yes', 'nope': 'no',
    'im': 'i am', 'ive': 'i have', 'ill': 'i will', 'id': 'i would',
    'youre': 'you are', 'youve': 'you have', 'youll': 'you will',
    'hes': 'he is', 'shes': 'she is', 'its': 'it is', 'were': 'we are',
    'weve': 'we have', 'well': 'we will', 'theyre': 'they are', 'theyve': 'they have',
    'theyll': 'they will', 'theres': 'there is', 'thats': 'that is', 'whats': 'what is',
    'lets': 'let us', 'dont': 'do not', 'doesnt': 'does not', 'didnt': 'did not',
    'isnt': 'is not', 'arent': 'are not', 'wasnt': 'was not', 'werent': 'were not',
    'cant': 'can not', 'cannot': 'can not', 'wont': 'will not', 'wouldnt': 'would not',
    'couldnt': 'could not', 'shouldnt': 'should not', 'havent': 'have not',
    'hasnt': 'has not', 'aint': 'is not', 'shouldve': 'should have'
  };
  function expandir(s) {
    var w = normal(s).split(' '), out = [];
    for (var i = 0; i < w.length; i++) out.push(EQUIV[w[i]] ? EQUIV[w[i]] : w[i]);
    return out.join(' ').split(' ').filter(function (x) { return x.length > 0; });
  }
  function lev(a, b) {
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) d[i] = [i];
    for (j = 0; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  }
  /* Estricto en palabras cortas a propósito: si aceptáramos "tree" como
     "three" el examen dejaría pasar el error que estamos enseñando. */
  function parecidas(a, b) {
    if (a === b) return true;
    var L = Math.max(a.length, b.length);
    if (L < 6) return false;
    var d = lev(a, b);
    return L >= 9 ? d <= 2 : d <= 1;
  }
  function calificar(esperado, dicho) {
    var A = expandir(esperado), B = expandir(dicho);
    var m = A.length, n = B.length, i, j;
    var T = []; for (i = 0; i <= m; i++) { T[i] = []; for (j = 0; j <= n; j++) T[i][j] = 0; }
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++)
      T[i][j] = parecidas(A[i - 1], B[j - 1]) ? T[i - 1][j - 1] + 1 : Math.max(T[i - 1][j], T[i][j - 1]);
    var ok = {}; i = m; j = n;
    while (i > 0 && j > 0) {
      if (parecidas(A[i - 1], B[j - 1]) && T[i][j] === T[i - 1][j - 1] + 1) { ok[i - 1] = true; i--; j--; }
      else if (T[i - 1][j] >= T[i][j - 1]) i--; else j--;
    }
    var pct = m ? Math.round(T[m][n] * 100 / m) : 0;
    if (n > m * 1.8) pct = Math.max(0, pct - 10);
    var marcas = []; for (i = 0; i < A.length; i++) marcas.push({ w: A[i], ok: !!ok[i] });
    return { pct: pct, marcas: marcas, dicho: B.join(' ') };
  }
  /* Para números y horas se compara solo lo numérico */
  function soloNum(s) { return (s || '').replace(/[^0-9:.]/g, '').replace(/\.00$/, ''); }
  function esRespuestaNumerica(a) { return /^[0-9][0-9:.\s]*$/.test((a || '').trim()); }

  function aciertaTexto(item, valor) {
    var esperados = [item.a].concat(item.alt || []);
    var i;
    if (esRespuestaNumerica(item.a)) {
      var mio = soloNum(valor);
      for (i = 0; i < esperados.length; i++) {
        var esp = soloNum(esperados[i]);
        if (mio === esp || mio.replace(/[.:]/g, '') === esp.replace(/[.:]/g, '')) return { ok: true, pct: 100 };
      }
      return { ok: false, pct: 0 };
    }
    var mejor = 0;
    for (i = 0; i < esperados.length; i++) {
      var r = calificar(esperados[i], valor);
      if (r.pct > mejor) mejor = r.pct;
    }
    return { ok: mejor >= 90, pct: mejor };
  }

  /* ══════════════ UTILIDADES ══════════════ */
  function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function q(id) { return document.getElementById(id); }
  function mezclar(a) {
    var arr = a.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }
  function tomar(arr, n) { return mezclar(arr).slice(0, n); }
  function horas(ms) { return ms / 3600000; }

  function nivelDe(mod) {
    var m = (mod && mod.title || '').match(/Nivel\s*(\d)/);
    return m ? parseInt(m[1], 10) : null;
  }
  function esIngles(mod) {
    if (!mod || mod.category !== 'ingles') return false;
    var n = nivelDe(mod);
    return n !== null && !!window.BANCOS_INGLES && !!window.BANCOS_INGLES[n];
  }

  /* ══════════════ ESTILOS PROPIOS ══════════════ */
  (function estilos() {
    var css = document.createElement('style');
    css.textContent =
      '.eq-bar{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px}' +
      '.eq-pill{background:var(--white);border:1px solid var(--gray-light);border-radius:20px;padding:5px 12px;font-size:11px;font-weight:600;color:var(--gray-text)}' +
      '.eq-pill b{color:var(--cyan-dark)}' +
      '.eq-tag{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;padding:3px 9px;border-radius:12px;background:var(--cyan-light);color:var(--cyan-dark);margin-bottom:10px}' +
      '.eq-tag.oido{background:#FFF6E5;color:#946200}.eq-tag.prod{background:#E8F8EE;color:#0a7d3c}' +
      '.eq-tag.habla{background:#FDECEA;color:#a02c1f}' +
      '.eq-audio{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 16px}' +
      '.eq-in{width:100%;font-family:inherit;font-size:15px;font-weight:600;padding:12px 14px;border:2px solid var(--gray-light);border-radius:10px;outline:none;text-align:center}' +
      '.eq-in:focus{border-color:var(--cyan)}' +
      '.eq-fb{margin-top:14px;padding:13px 16px;border-radius:10px;font-size:12.5px;line-height:1.6;display:none}' +
      '.eq-fb.ok{background:#E8F8EE;border:1px solid #A5E0BC;color:#0a5c2c}' +
      '.eq-fb.no{background:#FDECEA;border:1px solid #F5B7B1;color:#8a231a}' +
      '.eq-pal{display:inline-block;padding:2px 7px;margin:3px 3px 0 0;border-radius:6px;font-size:12px;font-weight:600}' +
      '.eq-pal.b{background:#C8ECD5;color:#0a6b34}.eq-pal.m{background:#F8D7DA;color:#8a231a}' +
      '.eq-gate{background:var(--white);border-radius:16px;padding:30px 28px;border:1px solid var(--gray-light);max-width:600px;margin:0 auto}' +
      '.eq-gate h3{font-size:17px;color:var(--dark);margin-bottom:8px}' +
      '.eq-gate p{font-size:13px;color:var(--gray-text);line-height:1.65;margin-bottom:14px}' +
      '.eq-req{display:flex;align-items:flex-start;gap:10px;padding:11px 14px;border-radius:10px;margin-bottom:8px;font-size:12.5px;line-height:1.5}' +
      '.eq-req.si{background:#E8F8EE;color:#0a5c2c}.eq-req.no{background:#FFF6E5;color:#7a5200}' +
      '.eq-req div>b:first-child{display:block;margin-bottom:2px}' +
      '.eq-res{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin:20px 0}' +
      '.eq-res .bl{border-radius:12px;padding:14px;text-align:center;border:1px solid var(--gray-light)}' +
      '.eq-res .bl.ok{background:#E8F8EE;border-color:#A5E0BC}.eq-res .bl.no{background:#FDECEA;border-color:#F5B7B1}' +
      '.eq-res .bl .n{font-size:22px;font-weight:800;color:var(--dark)}' +
      '.eq-res .bl .l{font-size:10.5px;color:var(--gray-text);text-transform:uppercase;letter-spacing:.5px;margin-top:2px}' +
      '.eq-rec{background:var(--bad,#F44336)!important;color:#fff!important;animation:eqlat 1s infinite}' +
      '@keyframes eqlat{50%{opacity:.55}}';
    document.head.appendChild(css);
  })();

  /* ══════════════ SORTEO DEL EXAMEN ══════════════ */
  function armarExamen(nivel) {
    var banco = window.BANCOS_INGLES[nivel] || [];
    var porTipo = {};
    banco.forEach(function (it) { (porTipo[it.t] = porTipo[it.t] || []).push(it); });

    var sel = [];
    Object.keys(CFG.porIntento).forEach(function (tipo) {
      var cuantos = CFG.porIntento[tipo];
      var pool = porTipo[tipo] || [];
      /* Si el navegador no evalúa micrófono, los ítems de voz se contestan
         escribiendo la frase: así el examen sigue siendo posible en iPad. */
      if (tipo === 'speak' && !REC_OK) {
        tomar(pool, cuantos).forEach(function (it) {
          var copia = {}; for (var k in it) copia[k] = it[k];
          copia.t = 'write'; copia.b = 'habla'; copia.sinMic = true;
          copia.q = 'Escribe en inglés la frase que se pide (tu navegador no evalúa micrófono): ' + (it.q || '');
          sel.push(copia);
        });
        return;
      }
      tomar(pool, cuantos).forEach(function (it) { sel.push(it); });
    });
    return mezclar(sel);
  }

  /* Revuelve las opciones y devuelve el nuevo índice correcto */
  function revolverOpts(item) {
    var pares = item.opts.map(function (o, i) { return { o: o, i: i }; });
    pares = mezclar(pares);
    var nuevoC = 0;
    pares.forEach(function (p, i) { if (p.i === item.c) nuevoC = i; });
    return { opts: pares.map(function (p) { return p.o; }), c: nuevoC };
  }

  /* ══════════════ ESTADO DEL EXAMEN EN CURSO ══════════════ */
  var EX = null;

  /* ══════════════ PUERTAS DE ACCESO ══════════════ */
  function revisarPuertas(nivel) {
    var st = estadoNivel(nivel);
    var lab = practicaLab(nivel);
    var reqs = [];
    var bloquea = false;

    if (!window.speechSynthesis) {
      return { bloquea: true, fatal: true, reqs: [{
        ok: false, t: 'Este navegador no tiene voz sintetizada',
        d: 'El examen tiene preguntas de escucha, así que necesita audio. Ábrelo en <b>Google Chrome</b> (computadora o Android).'
      }] };
    }

    /* 1 · práctica mínima en el laboratorio */
    var okLab = lab.intentos >= CFG.minPracticasLab && lab.promedio >= CFG.minPromedioLab;
    reqs.push({
      ok: okLab,
      t: 'Práctica en el English Lab del Nivel ' + nivel,
      d: okLab
        ? 'Llevas <b>' + lab.intentos + ' prácticas</b> con <b>' + lab.promedio + '% de promedio</b>. Listo.'
        : 'Llevas <b>' + lab.intentos + ' de ' + CFG.minPracticasLab + ' prácticas</b> y <b>' + lab.promedio +
          '% de promedio</b> (se pide ' + CFG.minPromedioLab + '%). Abre el laboratorio de este nivel y practica: cada frase que repites con micrófono cuenta.'
    });
    if (!okLab) bloquea = true;

    /* 2 · espera después de fallar */
    if (st.ultimoFallo) {
      var espera = st.fallosSeguidos >= 3 ? CFG.esperaFalloSeguidoH : CFG.esperaFalloH;
      var pasadas = horas(Date.now() - new Date(st.ultimoFallo).getTime());
      var okEspera = pasadas >= espera;
      if (!okEspera) {
        var faltan = Math.ceil(espera - pasadas);
        reqs.push({
          ok: false,
          t: 'Espera entre intentos',
          d: 'Reprobaste hace poco. Puedes volver a intentarlo en <b>' + faltan + ' hora' + (faltan === 1 ? '' : 's') +
             '</b>. Usa ese tiempo para practicar en el laboratorio, no para volver a adivinar.'
        });
        bloquea = true;
      }
    }

    /* 3 · repaso obligatorio (informativo, no bloquea) */
    if (st.aprobadoEn) {
      var dias = Math.floor((Date.now() - new Date(st.aprobadoEn).getTime()) / 86400000);
      if (dias >= CFG.repasoDias) {
        reqs.push({
          ok: false,
          t: 'Repaso vencido',
          d: 'Aprobaste este nivel hace <b>' + dias + ' días</b>. Para que siga contando como dominado hay que volver a aprobarlo. Este intento es tu repaso.'
        });
      } else {
        reqs.push({
          ok: true,
          t: 'Nivel aprobado',
          d: 'Aprobado hace ' + dias + ' día' + (dias === 1 ? '' : 's') + '. El repaso vence en <b>' +
             (CFG.repasoDias - dias) + ' días</b>.'
        });
      }
    }

    return { bloquea: bloquea, fatal: false, reqs: reqs, lab: lab, st: st };
  }

  function pintarPuerta(mod, nivel, chequeo) {
    var reqs = chequeo.reqs.map(function (r) {
      return '<div class="eq-req ' + (r.ok ? 'si' : 'no') + '">' +
             '<span>' + (r.ok ? '✅' : '⏳') + '</span><div><b>' + r.t + '</b>' + r.d + '</div></div>';
    }).join('');
    var botones = '<div class="controles" style="justify-content:flex-start;margin-top:18px">' +
      '<button class="btn btn-secondary" onclick="showModule(' + mod.id + ')">← Volver al módulo</button>' +
      (chequeo.fatal ? '' :
        '<button class="btn btn-gold" onclick="abrirEnglishLab(' + nivel + ')">🎧 Ir a practicar al laboratorio</button>') +
      '</div>';
    q('quiz-content').innerHTML =
      '<div class="eq-gate">' +
        '<h3>🔒 Todavía no puedes rendir la certificación del Nivel ' + nivel + '</h3>' +
        '<p>Este examen ya no es un cuestionario de repaso: es la <b>certificación</b> del nivel. ' +
        'Se aprueba con <b>' + CFG.aprobar + '%</b> y además hay que alcanzar el mínimo en cada uno de los cuatro bloques ' +
        '(uso, escucha, escritura y pronunciación). Por eso primero hay que practicar.</p>' +
        reqs + botones +
      '</div>';
    q('quiz-prog-fill').style.width = '0%';
  }

  /* ══════════════ PANTALLA DE INSTRUCCIONES ══════════════ */
  function pintarInicio(mod, nivel, chequeo) {
    var st = chequeo.st, lab = chequeo.lab;
    var total = 0;
    Object.keys(CFG.porIntento).forEach(function (k) { total += CFG.porIntento[k]; });
    var minU = Math.ceil(CFG.porIntento.mc * CFG.minBloque / 100);
    var minO = Math.ceil((CFG.porIntento.audio + CFG.porIntento.audioW) * CFG.minBloque / 100);
    var minP = Math.ceil(CFG.porIntento.write * CFG.minBloque / 100);
    var minH = Math.ceil(CFG.porIntento.speak * CFG.minBloque / 100);
    q('quiz-content').innerHTML =
      '<div class="eq-gate">' +
        '<h3>🎓 Certificación · Inglés Nivel ' + nivel + '</h3>' +
        '<p>Son <b>' + total + ' preguntas</b> sorteadas de un banco de <b>' +
          (window.BANCOS_INGLES[nivel] || []).length + '</b>, con las opciones revueltas. ' +
          'Se aprueba con <b>' + CFG.aprobar + '% del total</b> y con el mínimo en <b>cada bloque</b>:</p>' +
        '<div class="eq-req si"><span>🧠</span><div><b>Uso y vocabulario · ' + CFG.porIntento.mc + ' preguntas</b>Necesitas al menos ' + minU + ' correctas.</div></div>' +
        '<div class="eq-req si"><span>🎧</span><div><b>Comprensión auditiva · ' + (CFG.porIntento.audio + CFG.porIntento.audioW) + ' preguntas</b>La voz habla y tú respondes o escribes. Necesitas al menos ' + minO + '.</div></div>' +
        '<div class="eq-req si"><span>✍️</span><div><b>Producción escrita · ' + CFG.porIntento.write + ' preguntas</b>Escribir la frase en inglés. Necesitas al menos ' + minP + '.</div></div>' +
        '<div class="eq-req si"><span>' + (REC_OK ? '🎤' : '⌨️') + '</span><div><b>Pronunciación · ' + CFG.porIntento.speak + ' preguntas</b>' +
          (REC_OK
            ? 'Se contestan hablando; el micrófono te califica desde ' + CFG.umbralHabla + '%. Necesitas al menos ' + minH + '. Si el micrófono falla, podrás escribir la frase en su lugar.'
            : 'Tu navegador no evalúa micrófono, así que estas se contestan escribiendo. Para que te califiquen la voz usa Google Chrome.') +
          '</div></div>' +
        '<p style="margin-top:16px">Práctica registrada en el laboratorio: <b>' + lab.intentos + ' prácticas · ' + lab.promedio + '% promedio</b>. ' +
          'Intentos de certificación: <b>' + (st.intentos || 0) + '</b>' + (st.mejor ? ' · mejor nota <b>' + st.mejor + '%</b>' : '') + '. ' +
          'Si reprueban, hay que esperar <b>' + CFG.esperaFalloH + ' horas</b> antes de volver a intentarlo.</p>' +
        '<div class="controles" style="justify-content:flex-start;margin-top:6px">' +
          '<button class="btn btn-secondary" onclick="showModule(' + mod.id + ')">← Volver al módulo</button>' +
          '<button class="btn btn-gold" id="eq-empezar">Empezar la certificación →</button>' +
        '</div>' +
      '</div>';
    q('eq-empezar').onclick = function () { arrancar(mod, nivel); };
  }

  /* ══════════════ EXAMEN ══════════════ */
  function arrancar(mod, nivel) {
    EX = {
      mod: mod, nivel: nivel,
      items: armarExamen(nivel),
      i: 0, resp: [], contestada: false, opts: null
    };
    pintarPregunta();
  }

  function pintarPregunta() {
    var it = EX.items[EX.i];
    var total = EX.items.length;
    q('quiz-prog-fill').style.width = (EX.i / total * 100) + '%';
    var tag = '<span class="eq-tag ' + it.b + '">' + BLOQUES[it.b].icono + ' ' + BLOQUES[it.b].nombre + '</span>';
    var cab = '<div class="q-num">Pregunta ' + (EX.i + 1) + ' de ' + total + '</div>' + tag;
    var html = '';

    if (it.t === 'mc' || it.t === 'audio') {
      var mez = revolverOpts(it);
      EX.opts = mez;
      var letras = ['A', 'B', 'C', 'D'];
      var audio = it.t === 'audio'
        ? '<div class="eq-audio">' +
            '<button class="btn btn-c" id="eq-play" style="background:var(--cyan);color:#fff">▶ Escuchar</button>' +
            '<button class="btn btn-secondary" id="eq-slow">🐢 Más despacio</button>' +
          '</div>' : '';
      html = '<div class="question-card">' + cab +
        '<div class="q-text">' + esc(it.q) + '</div>' + audio +
        '<div class="q-options">' +
          mez.opts.map(function (o, i) {
            return '<div class="q-option" id="eq-o' + i + '"><span class="opt-letter">' + letras[i] + '</span><span>' + esc(o) + '</span></div>';
          }).join('') +
        '</div></div>';
      q('quiz-content').innerHTML = html;
      mez.opts.forEach(function (o, i) { q('eq-o' + i).onclick = function () { contestarOpcion(i); }; });
      if (it.t === 'audio') {
        q('eq-play').onclick = function () { reproducir(it); };
        q('eq-slow').onclick = function () { reproducir(it, 0.6); };
        setTimeout(function () { reproducir(it); }, 350);
      }
    } else if (it.t === 'audioW') {
      html = '<div class="question-card">' + cab +
        '<div class="q-text">' + esc(it.q) + '</div>' +
        '<div class="eq-audio">' +
          '<button class="btn btn-c" id="eq-play" style="background:var(--cyan);color:#fff">▶ Escuchar</button>' +
          '<button class="btn btn-secondary" id="eq-slow">🐢 Más despacio</button>' +
        '</div>' +
        '<input class="eq-in" id="eq-txt" type="text" autocomplete="off" placeholder="Escribe lo que escuchaste…">' +
        '<div class="controles" style="justify-content:flex-start"><button class="btn btn-gold" id="eq-ok">✔ Responder</button></div>' +
        '<div class="eq-fb" id="eq-fb"></div></div>';
      q('quiz-content').innerHTML = html;
      q('eq-play').onclick = function () { reproducir(it); };
      q('eq-slow').onclick = function () { reproducir(it, 0.6); };
      q('eq-ok').onclick = contestarTexto;
      q('eq-txt').onkeydown = function (e) { if (e.key === 'Enter') contestarTexto(); };
      setTimeout(function () { reproducir(it); q('eq-txt').focus(); }, 350);
    } else if (it.t === 'write') {
      html = '<div class="question-card">' + cab +
        '<div class="q-text">' + esc(it.q) + '</div>' +
        '<input class="eq-in" id="eq-txt" type="text" autocomplete="off" placeholder="Escribe tu respuesta en inglés…">' +
        '<div class="controles" style="justify-content:flex-start"><button class="btn btn-gold" id="eq-ok">✔ Responder</button></div>' +
        '<div class="eq-fb" id="eq-fb"></div></div>';
      q('quiz-content').innerHTML = html;
      q('eq-ok').onclick = contestarTexto;
      q('eq-txt').onkeydown = function (e) { if (e.key === 'Enter') contestarTexto(); };
      setTimeout(function () { q('eq-txt').focus(); }, 200);
    } else if (it.t === 'speak') {
      html = '<div class="question-card">' + cab +
        '<div class="q-text">' + esc(it.q) + '</div>' +
        '<div class="frase" style="text-align:center;padding:10px 0 4px">' +
          '<div style="font-size:1.35rem;font-weight:700;color:var(--dark);line-height:1.35">' + esc(it.say) + '</div>' +
        '</div>' +
        '<div class="eq-audio" style="justify-content:center">' +
          '<button class="btn btn-secondary" id="eq-play">👂 Escuchar el modelo</button>' +
          '<button class="btn btn-gold" id="eq-mic">🎤 Decirlo</button>' +
        '</div>' +
        '<div class="eq-fb" id="eq-fb"></div></div>';
      q('quiz-content').innerHTML = html;
      q('eq-play').onclick = function () { reproducir(it); };
      q('eq-mic').onclick = micResponder;
    }
    EX.contestada = false;
  }

  function bloquearOpciones(elegida, correcta) {
    EX.opts.opts.forEach(function (o, i) {
      var el = q('eq-o' + i);
      el.style.cursor = 'default';
      el.onclick = null;
      if (i === correcta) el.classList.add('correct');
      else if (i === elegida) el.classList.add('incorrect');
    });
  }

  function contestarOpcion(idx) {
    if (EX.contestada) return;
    EX.contestada = true;
    var it = EX.items[EX.i];
    var ok = idx === EX.opts.c;
    bloquearOpciones(idx, EX.opts.c);
    registrar(it, ok, EX.opts.opts[idx], EX.opts.opts[EX.opts.c]);
    explicar(it, ok, null);
  }

  function contestarTexto() {
    if (EX.contestada) return;
    var it = EX.items[EX.i];
    var val = (q('eq-txt') || {}).value || '';
    if (!val.trim()) { q('eq-txt').focus(); return; }
    EX.contestada = true;
    var r = aciertaTexto(it, val);
    q('eq-ok').disabled = true;
    q('eq-txt').disabled = true;
    registrar(it, r.ok, val, it.a);
    explicar(it, r.ok, r.pct);
  }

  function micResponder() {
    if (EX.contestada) return;
    var it = EX.items[EX.i];
    var b = q('eq-mic');
    b.className = 'btn eq-rec'; b.textContent = '🔴 Habla ahora…';
    escuchar(function (alts) {
      b.className = 'btn btn-gold'; b.textContent = '🎤 Decirlo';
      if (EX.contestada) return;
      EX.contestada = true;
      var mejor = null;
      alts.forEach(function (a) {
        var r = calificar(it.a, a);
        if (!mejor || r.pct > mejor.pct) mejor = r;
      });
      var ok = mejor.pct >= CFG.umbralHabla;
      registrar(it, ok, mejor.dicho, it.a);
      var pal = mejor.marcas.map(function (m) {
        return '<span class="eq-pal ' + (m.ok ? 'b' : 'm') + '">' + esc(m.w) + '</span>';
      }).join('');
      explicar(it, ok, mejor.pct, '<div style="margin:8px 0">' + pal + '</div>' +
        '<div style="font-size:11.5px;opacity:.85">El micrófono escuchó: <i>' + esc(mejor.dicho || '(nada)') + '</i></div>');
    }, function (err) {
      b.className = 'btn btn-gold'; b.textContent = '🎤 Decirlo';
      /* Si el micrófono falla (permiso denegado, iPad, sin micrófono, silencio)
         el alumno NO puede quedar atrapado en una pregunta: se le ofrece
         escribir la frase. Cuenta para el bloque de pronunciación, aunque
         mide la frase y no el sonido — es preferible a no poder certificar. */
      var it2 = EX.items[EX.i];
      var fb = q('eq-fb');
      fb.className = 'eq-fb no';
      fb.style.display = 'block';
      fb.innerHTML = '🎤 ' + (
        (err === 'not-allowed' || err === 'service-not-allowed')
          ? 'El navegador bloqueó el micrófono. Toca el candado 🔒 en la barra de direcciones y permite el micrófono.'
          : (err === 'silencio' || err === 'no-speech')
            ? 'No escuché nada. Habla más cerca y con voz clara.'
            : err === 'no-soporte'
              ? 'Este navegador no evalúa pronunciación. Para que te califiquen la voz usa Google Chrome.'
              : 'No pude escucharte.') +
        '<div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">' +
          '<button class="btn btn-secondary" id="eq-reintentar">🎤 Intentar otra vez</button>' +
          '<button class="btn btn-gold" id="eq-escribir">⌨️ Escribirla en su lugar</button>' +
        '</div>';
      q('eq-reintentar').onclick = micResponder;
      q('eq-escribir').onclick = function () {
        if (EX.contestada) return;
        fb.style.display = 'none';
        var mic = q('eq-mic'); if (mic) mic.style.display = 'none';
        var cont = document.querySelector('.question-card');
        var wrap = document.createElement('div');
        wrap.innerHTML =
          '<div style="font-size:12px;color:var(--gray-text);margin:4px 0 8px">Escríbela tal como se dice ' +
          '(esta vez no se califica el sonido, solo la frase):</div>' +
          '<input class="eq-in" id="eq-txt" type="text" autocomplete="off" placeholder="Escribe la frase en inglés…">' +
          '<div class="controles" style="justify-content:flex-start"><button class="btn btn-gold" id="eq-ok">✔ Responder</button></div>';
        cont.insertBefore(wrap, fb);
        q('eq-ok').onclick = contestarTexto;
        q('eq-txt').onkeydown = function (e) { if (e.key === 'Enter') contestarTexto(); };
        q('eq-txt').focus();
      };
    });
  }

  function registrar(it, ok, dado, esperado) {
    EX.resp.push({ b: it.b, t: it.t, ok: !!ok, q: it.q, dado: dado, esperado: esperado });
  }

  function explicar(it, ok, pct, extraHtml) {
    var card = document.querySelector('.question-card');
    var fb = q('eq-fb');
    var titulo = ok ? '✅ Correcto' : '❌ Incorrecto';
    if (pct !== null && pct !== undefined) titulo += ' · ' + pct + '%';
    var cuerpo = '<b>' + titulo + '</b>';
    if (!ok && (it.t === 'write' || it.t === 'audioW' || it.t === 'speak')) {
      cuerpo += '<div style="margin-top:6px">Se esperaba: <b>' + esc(it.a) + '</b></div>';
    }
    cuerpo += '<div style="margin-top:6px">💡 ' + it.e + '</div>' + (extraHtml || '');
    if (fb) {
      fb.className = 'eq-fb ' + (ok ? 'ok' : 'no');
      fb.style.display = 'block';
      fb.innerHTML = cuerpo;
    } else {
      var d = document.createElement('div');
      d.className = 'q-explanation';
      d.innerHTML = cuerpo;
      card.appendChild(d);
    }
    var nav = document.createElement('div');
    nav.style.cssText = 'text-align:right;margin-top:16px';
    var ultima = EX.i >= EX.items.length - 1;
    nav.innerHTML = '<button class="btn ' + (ultima ? 'btn-gold' : 'btn-primary') + '" id="eq-next">' +
      (ultima ? 'Ver resultado →' : 'Siguiente →') + '</button>';
    card.appendChild(nav);
    q('eq-next').onclick = function () {
      try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) {}
      if (ultima) terminar(); else { EX.i++; pintarPregunta(); }
    };
  }

  /* ══════════════ RESULTADO ══════════════ */
  function terminar() {
    var total = EX.resp.length;
    var correctas = EX.resp.filter(function (r) { return r.ok; }).length;
    var pct = Math.round(correctas * 100 / total);

    var porBloque = {};
    Object.keys(BLOQUES).forEach(function (b) { porBloque[b] = { n: 0, ok: 0 }; });
    EX.resp.forEach(function (r) { porBloque[r.b].n++; if (r.ok) porBloque[r.b].ok++; });

    var bloquesOk = true;
    Object.keys(porBloque).forEach(function (b) {
      var d = porBloque[b];
      if (!d.n) return;
      d.pct = Math.round(d.ok * 100 / d.n);
      d.min = Math.ceil(d.n * CFG.minBloque / 100);
      d.ok2 = d.ok >= d.min;
      if (!d.ok2) bloquesOk = false;
    });

    var aprobado = pct >= CFG.aprobar && bloquesOk;

    /* ── guardar ── */
    var st = estadoNivel(EX.nivel);
    st.intentos = (st.intentos || 0) + 1;
    if (pct > (st.mejor || 0)) st.mejor = pct;
    if (aprobado) {
      st.aprobadoEn = new Date().toISOString();
      st.fallosSeguidos = 0;
      st.ultimoFallo = null;
    } else {
      st.fallos = (st.fallos || 0) + 1;
      st.fallosSeguidos = (st.fallosSeguidos || 0) + 1;
      st.ultimoFallo = new Date().toISOString();
    }
    escribirNivel(EX.nivel, st);

    /* Se escribe en QUIZ_SCORES con la MISMA forma que el motor original,
       para que el panel de administrador y las estadísticas sigan igual. */
    try {
      var id = EX.mod.id;
      var prev = (typeof QUIZ_SCORES[id] === 'object' && QUIZ_SCORES[id] !== null)
        ? QUIZ_SCORES[id]
        : { attempts: 0, scores: [], average: 0, lastScore: 0, lastActivity: null };
      if (!Array.isArray(prev.scores)) prev.scores = [];
      if (typeof prev.attempts !== 'number') prev.attempts = 0;
      prev.attempts += 1;
      prev.scores.push(pct);
      prev.lastScore = pct;
      prev.average = Math.round(prev.scores.reduce(function (a, b) { return a + b; }, 0) / prev.scores.length);
      prev.lastActivity = new Date().toISOString();
      QUIZ_SCORES[id] = prev;
      saveQuizScores(QUIZ_SCORES);
    } catch (e) { console.error(e); }

    /* Histórico para el panel de admin, con el detalle por bloque */
    try {
      if (window.saveQuizHistory) {
        var falladas = EX.resp.filter(function (r) { return !r.ok; }).map(function (r) {
          return {
            q: '[' + BLOQUES[r.b].nombre + '] ' + r.q,
            tuRespuesta: String(r.dado || '(sin responder)'),
            correcta: String(r.esperado || '')
          };
        });
        window.saveQuizHistory(EX.mod.id, pct, st.intentos, falladas);
      }
    } catch (e) { console.error(e); }

    /* PROGRESS solo si de verdad certificó */
    try {
      if (aprobado && !PROGRESS[EX.mod.id]) { PROGRESS[EX.mod.id] = true; saveProgress(PROGRESS); }
    } catch (e) {}
    try { updateStats(); } catch (e) {}
    try { renderGrids(appState().search || ''); } catch (e) {}

    /* ── pintar ── */
    q('quiz-prog-fill').style.width = '100%';
    var cards = Object.keys(BLOQUES).map(function (b) {
      var d = porBloque[b];
      if (!d.n) return '';
      return '<div class="bl ' + (d.ok2 ? 'ok' : 'no') + '">' +
        '<div class="n">' + d.ok + '/' + d.n + '</div>' +
        '<div class="l">' + BLOQUES[b].icono + ' ' + BLOQUES[b].nombre + '</div>' +
        '<div class="l" style="margin-top:4px">' + (d.ok2 ? 'cumple' : 'mínimo ' + d.min) + '</div>' +
        '</div>';
    }).join('');

    var motivo = '';
    if (!aprobado) {
      var faltas = [];
      if (pct < CFG.aprobar) faltas.push('el total quedó en ' + pct + '% y se pide ' + CFG.aprobar + '%');
      Object.keys(porBloque).forEach(function (b) {
        var d = porBloque[b];
        if (d.n && !d.ok2) faltas.push('en ' + BLOQUES[b].nombre.toLowerCase() + ' llegaste a ' + d.ok + ' de ' + d.n + ' y se piden ' + d.min);
      });
      var espera = st.fallosSeguidos >= 3 ? CFG.esperaFalloSeguidoH : CFG.esperaFalloH;
      motivo = '<div class="eq-req no" style="text-align:left"><span>📌</span><div><b>Por qué no aprobó</b>' +
        faltas.join('; ') + '.<br><br>Puedes volver a intentarlo en <b>' + espera + ' horas</b>. ' +
        'Aprovecha ese tiempo en el laboratorio: repite en voz alta las frases del bloque que te falló.</div></div>';
    } else {
      motivo = '<div class="eq-req si" style="text-align:left"><span>🎓</span><div><b>Nivel ' + EX.nivel + ' certificado</b>' +
        'Para que siga contando como dominado tendrás que volver a aprobarlo en <b>' + CFG.repasoDias + ' días</b>. ' +
        'Mientras tanto, sigue practicando en el laboratorio para no perder el oído.</div></div>';
    }

    q('quiz-content').innerHTML =
      '<div class="quiz-results">' +
        '<div style="font-size:42px;margin-bottom:10px">' + (aprobado ? '🎓' : '📚') + '</div>' +
        '<div class="result-score ' + (aprobado ? 'great' : (pct >= 70 ? 'ok' : 'poor')) + '">' + pct + '%</div>' +
        '<div class="result-msg">' + (aprobado ? '¡Certificado! Aprobaste el Nivel ' + EX.nivel : 'Todavía no alcanza') + '</div>' +
        '<div class="result-sub">' + correctas + ' de ' + total + ' correctas · se aprueba con ' + CFG.aprobar + '% y el mínimo en cada bloque</div>' +
        '<div class="eq-res">' + cards + '</div>' +
        motivo +
        '<div class="controles" style="margin-top:18px">' +
          '<button class="btn btn-secondary" onclick="showModule(' + EX.mod.id + ')">← Volver al módulo</button>' +
          '<button class="btn btn-gold" onclick="abrirEnglishLab(' + EX.nivel + ')">🎧 Ir al laboratorio</button>' +
        '</div>' +
      '</div>';
    EX = null;
  }

  /* ══════════════ ENGANCHE CON EL MOTOR ORIGINAL ══════════════ */
  /* OJO: MODULES y STATE se declaran con let/const en el script principal, así
     que NO existen como window.MODULES ni window.STATE. Hay que leerlos por su
     nombre (el ámbito léxico global se comparte entre scripts clásicos). */
  function appModules() { try { return MODULES; } catch (e) { return []; } }
  function appState()   { try { return STATE; }   catch (e) { return {}; } }

  var startQuizOriginal = window.startQuiz;
  window.startQuiz = function () {
    var id = appState().currentModule;
    var mod = appModules().find(function (m) { return m.id === id; });
    if (!esIngles(mod)) return startQuizOriginal.apply(this, arguments);

    var nivel = nivelDe(mod);
    document.getElementById('quiz-module-title').textContent = 'Certificación: ' + mod.title;
    document.getElementById('quiz-subtitle').textContent =
      'Examen de certificación · se aprueba con ' + CFG.aprobar + '% y el mínimo en cada bloque';
    document.getElementById('topbar-title').textContent = 'Certificación — ' + mod.title;
    document.getElementById('topbar-breadcrumb').textContent = 'Inglés CV+ · English Lab';
    document.getElementById('topbar-actions').innerHTML =
      '<button class="btn btn-secondary" onclick="showModule(' + mod.id + ')">← Volver al módulo</button>';
    setView('quiz');

    var chequeo = revisarPuertas(nivel);
    if (chequeo.bloquea) pintarPuerta(mod, nivel, chequeo);
    else pintarInicio(mod, nivel, chequeo);
  };

  /* Las voces solo cargan después de la primera interacción en algunos navegadores */
  document.addEventListener('click', function una() {
    elegirVoz();
    document.removeEventListener('click', una);
  });

  window.ENGLISH_QUIZ_V2 = { CFG: CFG, practicaLab: practicaLab, estadoNivel: estadoNivel };
  console.log('English Quiz v2 cargado · ' +
    Object.keys(window.BANCOS_INGLES || {}).length + ' bancos de nivel');
})();
