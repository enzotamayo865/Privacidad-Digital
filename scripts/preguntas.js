/*
  Camino de la privacidad: contenido del juego.
  Acá están las secciones, las 20 preguntas con sus explicaciones,
  el glosario y los niveles de la licencia final.

  Marcas que se pueden usar en los textos:
    <<palabra>> o <<palabra|clave>>  palabra del glosario (se toca para ver qué significa)
    [[A > B]]                         ruta de menú del celular
    `x`                               texto técnico
    {{x}}                             enlace falso
*/

const SECCIONES = {
  1: "Permisos de las apps",
  2: "Tus datos",
  3: "Navegación y cuentas",
  4: "Situaciones de riesgo",
};

// Cada pregunta tiene su número (n), la sección, la letra correcta,
// un consejo para recordar y las opciones con el porqué de cada una.
// Las opciones "No sé" llevan nose: true.
const PREGUNTAS = [
  {
    n: 1, seccion: 1, correcta: "d",
    consejo: "Dale a cada app solo los permisos que necesita para funcionar.",
    texto: "Una app para editar fotos te pide fotos, cámara, contactos y ubicación. ¿Qué hacés?",
    opciones: {
      a: { texto: "Acepto todo; si no, no funciona.", porque: "Podés rechazar <<permisos>> de a uno, y en general la app sigue funcionando." },
      b: { texto: "Acepto todo; si está en la tienda, es segura.", porque: "Estar en la tienda oficial no impide que pida datos de más." },
      c: { texto: "Toco “Permitir” sin leer.", porque: "Tocar “Permitir” sin leer es regalar datos sin darte cuenta." },
      d: { texto: "Doy fotos y cámara; contactos y ubicación, no.", porque: "Un editor de fotos solo necesita tus fotos y la cámara; tus contactos y tu ubicación no tienen nada que ver." },
    },
  },
  {
    n: 2, seccion: 1, correcta: "b",
    consejo: "Elegí la ubicación “solo mientras se usa la app”.",
    texto: "Ubicación “todo el tiempo” o “solo mientras se usa la app”: ¿qué diferencia hay?",
    opciones: {
      a: { texto: "Ninguna, es lo mismo.", porque: "No es lo mismo: uno es solo mientras la usás; el otro, las 24 horas." },
      b: { texto: "“Todo el tiempo” te ubica aunque no la uses.", porque: "Con ese permiso, la app puede seguir dónde estás todo el día. Conviene elegir “solo mientras se usa la app”." },
      c: { texto: "“Todo el tiempo” solo la hace más rápida.", porque: "No tiene nada que ver con la velocidad." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 3, seccion: 1, correcta: "a",
    consejo: "Antes de darle tus contactos a una app, pensá si de verdad los necesita.",
    texto: "Si una app tiene acceso a tus contactos, ¿qué puede ver?",
    opciones: {
      a: { texto: "Toda tu agenda, y puede copiarla.", porque: "La app puede leer nombres, números y mails de tus contactos, y muchas los suben a sus servidores. Tus contactos nunca dieron permiso para eso." },
      b: { texto: "Solo los nombres, no los números.", porque: "También ve los números y cualquier otro dato guardado." },
      c: { texto: "Nada, solo los muestra.", porque: "Muchas apps copian la agenda, y después no controlás qué hacen con ella." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 4, seccion: 1, correcta: "b",
    consejo: "Si ves el puntito de color sin estar usando la cámara o el micrófono, fijate qué app es.",
    texto: "¿Cómo sabés si una app está usando la cámara o el micrófono?",
    opciones: {
      a: { texto: "No hay forma de saberlo.", porque: "Sí hay forma: ese aviso aparece cada vez que una app los usa." },
      b: { texto: "Aparece un punto de color arriba en la pantalla.", porque: "En iPhone es verde (cámara) o naranja (micrófono); en Android, desde la versión 12, un ícono verde. Si aparece sin que los uses, fijate qué app es." },
      c: { texto: "El celular vibra o suena.", porque: "No vibra ni suena: el aviso es solo visual." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 5, seccion: 1, correcta: "a",
    consejo: "Revisá cada tanto qué apps tienen permiso de ubicación, cámara y micrófono.",
    texto: "¿Revisaste alguna vez qué apps tienen <<permiso|permisos>> de ubicación, cámara o micrófono?",
    opciones: {
      a: { texto: "Sí, cada tanto.", porque: "Las apps se actualizan y piden permisos nuevos, así que conviene revisarlos seguido." },
      b: { texto: "Una vez, hace mucho.", porque: "Probablemente tengas apps con permisos que ya no necesitan." },
      c: { texto: "Nunca.", porque: "Probablemente tengas apps con permisos que ya no necesitan." },
      d: { texto: "No sé dónde se ve.", nose: true, rotulo: "Dónde se ve", porque: "En Android, buscá [[Administrador de permisos]] en Configuración; en iPhone, entrá a [[Configuración > Privacidad y seguridad]]." },
    },
  },
  {
    n: 6, seccion: 2, correcta: "c",
    consejo: "Tus datos valen, aunque no tengas nada que ocultar.",
    mensaje: "No me importan mis datos, no tengo nada que ocultar.",
    texto: "¿Tiene razón?",
    opciones: {
      a: { texto: "Sí: si no hacés nada malo, no hay riesgo.", porque: "El riesgo no depende de hacer algo malo: tus datos valen igual." },
      b: { texto: "Sí: solo les importan los datos de famosos.", porque: "Les interesan los datos de todos; por eso muchas apps son gratis." },
      c: { texto: "No: arman un <<perfil>> tuyo que se vende o <<se filtra|filtración>>.", porque: "No se trata de ocultar algo malo. Con lo que hacés en el celular se arma un <<perfil>> que se usa para publicidad y, si <<se filtra|filtración>>, para estafas." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 7, seccion: 2, correcta: "b",
    consejo: "En los carteles de cookies, tocá “Rechazar” o “Solo necesarias”.",
    texto: "Aparece un cartel de <<cookies>>. ¿Qué hacés?",
    opciones: {
      a: { texto: "“Aceptar todas”, para que se vaya.", porque: "“Aceptar todas” incluye las cookies que te siguen de página en página." },
      b: { texto: "“Rechazar” o “Solo necesarias”, si está.", porque: "La página sigue funcionando y les das menos datos a las empresas de publicidad." },
      c: { texto: "Acepto; si no, la página no anda.", porque: "En general la página funciona igual: las cookies necesarias se mantienen." },
      d: { texto: "No sé qué son las cookies.", nose: true, rotulo: "Qué son las cookies", porque: "Son archivos que guardan las páginas: algunas las hacen funcionar y otras te rastrean." },
    },
  },
  {
    n: 8, seccion: 2, correcta: "c",
    consejo: "Si no querés que tus fotos digan dónde las sacaste, desactivá la ubicación en la cámara.",
    texto: "¿Una foto puede guardar el lugar donde la sacaste?",
    opciones: {
      a: { texto: "No, es solo la imagen.", porque: "Además de la imagen, la foto guarda esos datos." },
      b: { texto: "Solo si le agrego la ubicación al publicarla.", porque: "La ubicación puede ir dentro del archivo aunque no la agregues; si la mandás como documento o por mail, viaja con la foto." },
      c: { texto: "Sí, si la cámara tenía la ubicación activada.", porque: "Las fotos guardan datos ocultos (<<metadatos>>): fecha, modelo de celular y, a veces, el lugar exacto. Se puede desactivar en la configuración de la cámara." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 9, seccion: 2, correcta: "a",
    consejo: "Si no querés que una foto circule, no la mandes.",
    texto: "Mandás una foto de “ver una vez”. ¿Puede quedar guardada?",
    opciones: {
      a: { texto: "Sí, si le sacan foto a la pantalla con otro celular.", porque: "Aunque la app la borre o bloquee las capturas, nada impide fotografiar la pantalla. Si no querés que circule, no la mandes." },
      b: { texto: "No, se borra para siempre.", porque: "Se borra de la app, pero alguien pudo guardarla antes." },
      c: { texto: "No, la app bloquea las capturas.", porque: "Bloquear <<capturas|captura>> no impide sacarle una foto con otro celular." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 10, seccion: 3, correcta: "b",
    consejo: "El candado no alcanza. Mirá bien la dirección de la página.",
    texto: "Si una página tiene <<https>> o el candado, significa que…",
    opciones: {
      a: { texto: "Es confiable: no es una estafa.", porque: "Muchas páginas de estafa tienen candado." },
      b: { texto: "La conexión está <<cifrada>>, pero puede ser falsa.", porque: "El candado solo protege los datos en el camino, y las páginas falsas también lo tienen. Para saber si es la real, mirá bien la dirección." },
      c: { texto: "No guarda tus datos.", porque: "La página recibe todo lo que le mandes y puede guardarlo." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 11, seccion: 3, correcta: "c",
    consejo: "El modo incógnito no te hace invisible.",
    texto: "¿Qué hace el <<modo incógnito>>?",
    opciones: {
      a: { texto: "Nadie puede ver qué páginas visitás.", porque: "Solo evita que quede guardado en tu celular o compu." },
      b: { texto: "Te protege de virus.", porque: "No te protege de virus ni de páginas falsas." },
      c: { texto: "No guarda el historial en tu dispositivo.", porque: "Pero no te hace anónimo: el wifi, tu compañía de internet y las páginas donde iniciás sesión igual ven lo que hacés." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 12, seccion: 3, correcta: "a",
    consejo: "Usá contraseñas largas, por ejemplo cuatro palabras al azar.",
    texto: "¿Cuál de estas contraseñas es más difícil de adivinar?",
    opciones: {
      a: { texto: "mate-lluvia-tren-azul", mono: true, porque: "Lo que más cuenta es la longitud: cuatro palabras al azar suman más de 20 caracteres y se recuerdan fácil." },
      b: { texto: "Juan2005!", mono: true, porque: "Nombre y año es lo primero que se prueba, y está en tus redes." },
      c: { texto: "P@ssw0rd", mono: true, porque: "Cambiar letras por símbolos es un truco que los programas ya prueban." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 13, seccion: 3, correcta: "d",
    consejo: "Usá una contraseña distinta en cada cuenta importante.",
    texto: "¿Usás la misma contraseña en varias cuentas?",
    opciones: {
      a: { texto: "Sí, la misma en casi todas.", porque: "Una sola <<filtración>> puede abrir todas tus cuentas." },
      b: { texto: "La misma, con pequeños cambios.", porque: "Los programas también prueban las variaciones obvias." },
      c: { texto: "Una para las importantes y otra para el resto.", porque: "Si la “importante” se repite en tu mail y tus redes, una filtración las expone a todas." },
      d: { texto: "No, cada cuenta importante tiene la suya.", porque: "Si se filtra una contraseña, la prueban en tus otras cuentas. Un <<gestor de contraseñas>>, como el de Google o el de iPhone, las recuerda por vos." },
    },
  },
  {
    n: 14, seccion: 3, correcta: "a",
    consejo: "Activá la verificación en dos pasos, empezando por tu mail.",
    texto: "¿Tenés la <<verificación en dos pasos>> en tus cuentas importantes?",
    opciones: {
      a: { texto: "Sí, en las importantes.", porque: "Aunque alguien consiga tu contraseña, necesita un código o <<PIN|pin>> que solo tenés vos. En WhatsApp: [[Ajustes > Cuenta > Verificación en dos pasos]]." },
      b: { texto: "Solo en alguna.", porque: "Activala en las demás, empezando por el mail: con él se recuperan las otras cuentas." },
      c: { texto: "No.", porque: "Es de las protecciones más efectivas y se activa en un minuto." },
      d: { texto: "No sé qué es.", nose: true, rotulo: "Qué es", porque: "Es un segundo paso al iniciar sesión: además de la contraseña, te piden un código." },
    },
  },
  {
    n: 15, seccion: 4, correcta: "d",
    consejo: "Nunca pases un código que te llega por SMS, aunque te lo pida un conocido.",
    contexto: "Un contacto te escribe:",
    mensaje: "Te llegó un código por SMS por error, ¿me lo pasás?",
    texto: "¿Qué hacés?",
    opciones: {
      a: { texto: "Se lo paso, es un conocido.", porque: "Que sea un conocido no importa: su cuenta puede estar robada." },
      b: { texto: "Le pregunto para qué y, si me convence, se lo paso.", porque: "Te van a dar una excusa creíble; ese código no se pasa nunca." },
      c: { texto: "Se lo paso, total vence en minutos.", porque: "Lo usan en esos minutos: activan tu cuenta al instante." },
      d: { texto: "No se lo paso y lo llamo para avisarle.", porque: "Ese código activa tu WhatsApp en otro celular: si lo pasás, te roban la cuenta. Probablemente a tu contacto ya le robaron la suya." },
    },
  },
  {
    n: 16, seccion: 4, correcta: "c",
    consejo: "Si un mensaje te apura con un link, no lo toques y revisá tu cuenta desde la app.",
    contexto: "Te escriben por Instagram:",
    mensaje: "Tu cuenta será eliminada en 24 horas. Apelá acá: {{enlace}}",
    texto: "¿Qué hacés?",
    opciones: {
      a: { texto: "Entro rápido al link para no perderla.", porque: "El link lleva a una página falsa que te roba la contraseña." },
      b: { texto: "Me fijo si la cuenta tiene el logo oficial.", porque: "Cualquiera puede poner un logo oficial de foto de perfil." },
      c: { texto: "No toco el link y reviso mi cuenta desde la app.", porque: "El apuro de “24 horas” es la trampa clásica. Si hay un problema real, aparece en la configuración de la app, no en un mensaje con un link." },
      d: { texto: "Respondo pidiendo más información.", porque: "Del otro lado hay un estafador que te va a presionar más." },
    },
  },
  {
    n: 17, seccion: 4, correcta: "d",
    consejo: "Ningún sorteo de verdad necesita la foto de tu DNI.",
    texto: "Un sorteo en redes pide tu nombre, DNI, dirección y una foto del DNI. ¿Qué hacés?",
    opciones: {
      a: { texto: "Participo, es solo un sorteo.", porque: "“Es solo un sorteo” es justo lo que quieren que pienses." },
      b: { texto: "Participo si la cuenta tiene muchos seguidores.", porque: "Los seguidores se compran y las cuentas se roban." },
      c: { texto: "Mando los datos, pero no la foto.", porque: "Nombre, DNI y dirección juntos igual sirven para estafas." },
      d: { texto: "No participo: no necesita la foto de mi DNI.", porque: "Muchos sorteos falsos existen para juntar datos. Con la foto de tu DNI pueden intentar abrir cuentas o sacar créditos a tu nombre." },
    },
  },
  {
    n: 18, seccion: 4, correcta: "b",
    consejo: "Bajá apps solo de la tienda oficial.",
    texto: "Un amigo te pasa una app paga “gratis” para instalar (un archivo <<.apk|apk>>). ¿Qué puede pasar?",
    opciones: {
      a: { texto: "Nada, es la misma app sin pagar.", porque: "No es la misma app: está modificada." },
      b: { texto: "Puede traer un programa que robe tus datos.", porque: "Para “liberarla”, alguien modificó la app y nadie sabe qué más le agregó. Bajá apps solo de la <<tienda oficial>>." },
      c: { texto: "Solo es riesgoso si viene de un desconocido.", porque: "Tu amigo probablemente no sabe qué tiene adentro." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 19, seccion: 4, correcta: "c",
    consejo: "Si publican una foto tuya sin permiso, pedí que la borren y, si no, denunciala.",
    texto: "Alguien publica una foto tuya sin tu permiso. ¿Qué podés hacer?",
    opciones: {
      a: { texto: "Nada: la sacó él, puede publicarla.", porque: "Que la haya sacado él no le da derecho a publicarla." },
      b: { texto: "Nada: una vez publicada, no se puede sacar.", porque: "Las redes permiten denunciar fotos publicadas sin permiso y bajarlas." },
      c: { texto: "Pedirle que la borre y, si no, denunciarla.", porque: "Tu imagen es tuya: en Argentina, publicarla requiere tu <<consentimiento>>, salvo pocas excepciones (artículo 53 del Código Civil y Comercial). Si es grave, pedí ayuda a un docente o a alguien de confianza." },
      d: { texto: "Subir una foto suya, en venganza.", porque: "Así el problema crece, y vos harías lo mismo que él." },
    },
  },
  {
    n: 20, seccion: 4, correcta: "d",
    consejo: "Si circula un chat privado, no lo reenvíes y pedí que lo borren.",
    texto: "En el grupo del curso comparten la <<captura>> de un chat privado de un compañero. ¿Qué hacés?",
    opciones: {
      a: { texto: "Nada, yo no la compartí.", porque: "Quedarte callado deja que siga circulando." },
      b: { texto: "No la reenvío, pero reacciono como el resto.", porque: "Reaccionar o comentar también la difunde." },
      c: { texto: "La reenvío solo a un amigo.", porque: "Cada “solo a uno” la multiplica." },
      d: { texto: "Pido que la borren y, si sigue, aviso a un docente.", porque: "Frenar la difusión protege a tu compañero. Difundir un chat privado puede ser delito si perjudica o puede perjudicar a alguien (artículo 155 del Código Penal)." },
    },
  },
];

// Preguntas del recorrido rápido (dos por sección)
const RAPIDO = [1, 4, 6, 9, 10, 12, 15, 20];

// Resultados de la encuesta (completar cuando cierre).
// Porcentaje de encuestados que eligió cada opción, por número de pregunta:
//   1: { a: 12, b: 8, c: 15, d: 65 },
// Con los datos cargados, cada explicación muestra cuántos eligieron esa opción.
const RESULTADOS = {
};

// "encuesta": orden original. "errores": primero las preguntas con más errores
// (solo funciona si todas las preguntas del recorrido tienen resultados).
const ORDEN = "encuesta";

const GLOSARIO = {
  "permisos": { termino: "Permisos", def: "Lo que una app te pide para usar partes de tu celular, como la cámara, el micrófono, tus fotos, tus contactos o tu ubicación. Podés aceptarlos o rechazarlos de a uno." },
  "perfil": { termino: "Perfil", def: "Todo lo que se puede saber de vos juntando tus datos: qué mirás, qué te gusta, por dónde andás y con quién hablás." },
  "filtración": { termino: "Filtración", def: "Cuando datos que tenían que ser privados quedan expuestos, por ejemplo si hackean a una empresa y se publica lo que tenía guardado." },
  "cookies": { termino: "Cookies", def: "Archivos chiquitos que las páginas guardan en tu navegador. Algunas hacen que la página funcione y otras registran lo que mirás para mostrarte publicidad." },
  "metadatos": { termino: "Metadatos", def: "Datos escondidos dentro de un archivo. En una foto pueden ser la fecha, el modelo de celular y el lugar donde la sacaste." },
  "captura": { termino: "Captura de pantalla", def: "Una foto de lo que se ve en la pantalla del celular o de la compu." },
  "https": { termino: "https", def: "Aparece al principio de la dirección de una página, junto al candado. Quiere decir que lo que mandás viaja cifrado, pero no dice si la página es honesta." },
  "cifrada": { termino: "Conexión cifrada", def: "Lo que mandás viaja codificado, como en un idioma secreto que solo entienden tu dispositivo y la página." },
  "modo incógnito": { termino: "Modo incógnito", def: "Una forma de usar el navegador sin que guarde el historial en tu dispositivo. No te vuelve invisible en internet." },
  "gestor de contraseñas": { termino: "Gestor de contraseñas", def: "Una app o función del celular que guarda tus contraseñas de forma segura y las completa por vos." },
  "verificación en dos pasos": { termino: "Verificación en dos pasos", def: "Un segundo control para entrar a tu cuenta. Además de la contraseña, te piden un código o un PIN." },
  "pin": { termino: "PIN", def: "Un número secreto corto que elegís vos." },
  "apk": { termino: "Archivo .apk", def: "El tipo de archivo con el que se instalan apps en Android. Si lo bajás de afuera de la tienda oficial, no sabés quién lo armó ni qué tiene adentro." },
  "tienda oficial": { termino: "Tienda oficial", def: "La tienda de apps que viene con tu celular, como Google Play en Android o App Store en iPhone." },
  "consentimiento": { termino: "Consentimiento", def: "Tu permiso. Que vos digas que sí." },
};

// Niveles de la licencia final, según el porcentaje de aciertos
const NIVELES = [
  { min: 0.9, nombre: "Escudo total", frase: "Casi ninguna trampa te toma por sorpresa." },
  { min: 0.7, nombre: "Radar encendido", frase: "Detectás la mayoría de las trampas. Repasá las que se te escaparon." },
  { min: 0.4, nombre: "En práctica", frase: "Vas bien, pero algunas trampas todavía te pueden sorprender." },
  { min: 0, nombre: "Permiso de aprendiz", frase: "Hay varias cosas nuevas para aprender. Para eso está el camino." },
];

// Consejos que se muestran si alguien no tuvo ningún error
const CONSEJOS_BASE = [15, 14, 12];
