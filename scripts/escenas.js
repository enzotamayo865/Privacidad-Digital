/*
  Escenas: los celulares dibujados que muestran cada situación.
    antes   → se ve junto a la pregunta
    despues → se ve en la explicación, después de responder
    pie     → texto que va debajo del celular
    cubre   → la escena ya muestra el mensaje de la pregunta, así que no se repite
*/

// Íconos de línea (24 × 24) que se usan dentro de los celulares
const ICONOS = {
  foto: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.7"/><path d="M4.5 17.5l5-5 4 4 2.5-2.5 3.5 3.5"/></svg>',
  camara: '<svg viewBox="0 0 24 24"><path d="M4 8.5h3.2L9 6h6l1.8 2.5H20V19H4z"/><circle cx="12" cy="13.2" r="3.4"/></svg>',
  contacto: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.6"/><path d="M5 19.5c1.2-3.6 4-5.5 7-5.5s5.8 1.9 7 5.5"/></svg>',
  grupo: '<svg viewBox="0 0 24 24"><circle cx="9" cy="9" r="3"/><circle cx="16.5" cy="10" r="2.5"/><path d="M3.5 19c.8-3 3-4.5 5.5-4.5s4.7 1.5 5.5 4.5M14.5 15c2.6-.4 4.6.8 5.5 3.5"/></svg>',
  ubicacion: '<svg viewBox="0 0 24 24"><path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>',
  candado: '<svg viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/></svg>',
  incognito: '<svg viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M5.6 10.4 7.3 5.4c.3-.9 1.2-1.3 2.1-1l2.6.9 2.6-.9c.9-.3 1.8.1 2.1 1l1.7 5z"/><rect x="2.5" y="10.4" width="19" height="2.3" rx="1.15" fill="currentColor" stroke="none"/><circle cx="7.6" cy="17.2" r="2.9"/><circle cx="16.4" cy="17.2" r="2.9"/><path d="M10.5 16.8c1-.7 2-.7 3 0"/></svg>',
  regalo: '<svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="10" rx="1.5"/><path d="M3 7h18v3H3zM12 7v13"/><path d="M12 7c-1.4-2.8-5-3.2-5-1.2S10 7 12 7c2 0 5-.2 5-1.2S13.4 4.2 12 7"/></svg>',
  archivo: '<svg viewBox="0 0 24 24"><path d="M6.5 3h7.5l4 4v14h-11.5z"/><path d="M14 3v4h4"/></svg>',
  unaVez: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" stroke-dasharray="3.2 2.2"/><path d="M10.6 9.2l2-1.4V16"/></svg>',
  mensaje: '<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-4 3.5V16H4z"/></svg>',
  sol: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/></svg>',
  linterna: '<svg viewBox="0 0 24 24"><path d="M8 3h8v4l-2 3v11h-4V10L8 7z"/><path d="M11 14h2"/></svg>',
  ajustes: '<svg viewBox="0 0 24 24"><path d="M10.36 4.89 L10.61 2.10 L13.39 2.10 L13.64 4.89 L15.87 5.81 L18.02 4.01 L19.99 5.98 L18.19 8.13 L19.11 10.36 L21.90 10.61 L21.90 13.39 L19.11 13.64 L18.19 15.87 L19.99 18.02 L18.02 19.99 L15.87 18.19 L13.64 19.11 L13.39 21.90 L10.61 21.90 L10.36 19.11 L8.13 18.19 L5.98 19.99 L4.01 18.02 L5.81 15.87 L4.89 13.64 L2.10 13.39 L2.10 10.61 L4.89 10.36 L5.81 8.13 L4.01 5.98 L5.98 4.01 L8.13 5.81 Z"/><circle cx="12" cy="12" r="3.2"/></svg>',
  musica: '<svg viewBox="0 0 24 24"><path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/></svg>',
  reloj: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/></svg>',
  corazon: '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',
  enviar: '<svg viewBox="0 0 24 24"><path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/></svg>',
};

// Partes que se repiten en varias pantallas
const BARRA_ESTADO = `<div class="barra-estado"><span>10:24</span><span class="iconos-estado"><i class="senal"></i><i class="bat"></i></span></div>`;
const BARRA_ESTADO_CAMARA = `<div class="barra-estado"><span>10:24</span><span class="iconos-estado"><i class="punto-camara"></i><i class="senal"></i><i class="bat"></i></span></div>`;
const CAJA_MENSAJE = `<div class="app-entrada"><span>Mensaje</span><i></i></div>`;

// Arma el celular (marco, parlante, cámara y botones) con el contenido de la pantalla
function telefono(contenido, clase = "") {
  return `
    <div class="telefono">
      <div class="tel-arriba"><span class="tel-parlante"></span><span class="tel-camara"></span></div>
      <div class="pantalla ${clase}">${contenido}</div>
      <span class="tel-inicio"></span>
    </div>`;
}

// Parte de arriba de un chat: flecha para volver, foto y nombre
function cabeceraChat(avatar, nombre, detalle) {
  return `
    <div class="app-barra">
      <span class="atras">‹</span>
      <span class="avatar">${avatar}</span>
      <span><b>${nombre}</b><small>${detalle}</small></span>
    </div>`;
}

const ESCENAS = {
  // 1. La galería pide permisos de más
  1: {
    antes: telefono(`
      ${BARRA_ESTADO}
      <div class="fondo-app">
        <div class="app-titulo">Galería</div>
        <div class="grilla-fotos">${"<i></i>".repeat(12)}</div>
      </div>
      <div class="velo"></div>
      <div class="dialogo">
        <span class="app-icono">${ICONOS.foto}</span>
        <p class="dialogo-titulo"><b>Galería</b> quiere acceder a:</p>
        <ul class="dialogo-lista">
          <li>${ICONOS.foto}Fotos</li>
          <li>${ICONOS.camara}Cámara</li>
          <li>${ICONOS.contacto}Contactos</li>
          <li>${ICONOS.ubicacion}Ubicación</li>
        </ul>
        <div class="dialogo-botones"><span>No permitir</span><span class="primario">Permitir</span></div>
      </div>`, "con-dialogo"),
  },

  // 2. El clima pide la ubicación
  2: {
    antes: telefono(`
      ${BARRA_ESTADO}
      <div class="fondo-app">
        <div class="app-titulo">Clima</div>
        <div class="clima-grande">${ICONOS.sol}<span>24°</span></div>
        <div class="clima-dias"><span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span></div>
      </div>
      <div class="velo"></div>
      <div class="dialogo">
        <span class="app-icono">${ICONOS.ubicacion}</span>
        <p class="dialogo-titulo">¿Permitir que <b>Clima</b> acceda a tu ubicación?</p>
        <div class="dialogo-opciones">
          <span>Todo el tiempo</span>
          <span>Solo mientras se usa la app</span>
          <span>No permitir</span>
        </div>
      </div>`, "con-dialogo"),
  },

  // 3. La linterna pide los contactos
  3: {
    antes: telefono(`
      ${BARRA_ESTADO}
      <div class="fondo-app">
        <div class="app-titulo">Linterna</div>
        <div class="linterna-boton">${ICONOS.linterna}</div>
      </div>
      <div class="velo"></div>
      <div class="dialogo">
        <span class="app-icono">${ICONOS.contacto}</span>
        <p class="dialogo-titulo">¿Permitir que <b>Linterna</b> acceda a tus contactos?</p>
        <div class="dialogo-botones"><span>No permitir</span><span class="primario">Permitir</span></div>
      </div>`, "con-dialogo"),
  },

  // 4. El punto de color que avisa que se está usando la cámara
  4: {
    despues: telefono(`
      ${BARRA_ESTADO_CAMARA}
      <div class="inicio-apps">
        <span><i class="ap ap-camara">${ICONOS.camara}</i>Cámara</span>
        <span><i class="ap ap-galeria">${ICONOS.foto}</i>Galería</span>
        <span><i class="ap ap-mensajes">${ICONOS.mensaje}</i>Mensajes</span>
        <span><i class="ap ap-clima">${ICONOS.sol}</i>Clima</span>
        <span><i class="ap ap-mapas">${ICONOS.ubicacion}</i>Mapas</span>
        <span><i class="ap ap-ajustes">${ICONOS.ajustes}</i>Ajustes</span>
        <span><i class="ap ap-musica">${ICONOS.musica}</i>Música</span>
        <span><i class="ap ap-reloj">${ICONOS.reloj}</i>Reloj</span>
      </div>`, "inicio"),
    pie: "El punto de color aparece arriba, junto a la batería, cuando una app usa la cámara o el micrófono.",
  },

  // 7. El cartel de cookies
  7: {
    antes: telefono(`
      ${BARRA_ESTADO}
      <div class="nav-barra">${ICONOS.candado}<span>noticias-del-dia.com.ar</span></div>
      <div class="nav-pagina"><i class="titulo"></i><i class="imagen"></i><i></i><i></i><i class="corta"></i></div>
      <div class="banner-cookies">
        <p><b>Cookies</b><br>Usamos cookies para que la página funcione y para mostrarte publicidad.</p>
        <div class="banner-botones"><span class="primario">Aceptar todas</span><span>Solo necesarias</span></div>
      </div>`, "navegador"),
  },

  // 8. Los datos escondidos de una foto
  8: {
    despues: telefono(`
      ${BARRA_ESTADO}
      <div class="app-barra">
        <span class="atras">‹</span>
        <span><b>Galería</b><small>Detalles de la foto</small></span>
      </div>
      <div class="foto-grande"></div>
      <dl class="foto-datos">
        <div><dt>Fecha</dt><dd>14/09 · 18:32</dd></div>
        <div><dt>Celular</dt><dd>Modelo T-2045</dd></div>
        <div class="resaltado"><dt>Lugar</dt><dd>${ICONOS.ubicacion}Calle San Martín 1250</dd></div>
      </dl>`),
    pie: "Datos que pueden viajar escondidos dentro de una foto.",
  },

  // 9. La foto de "ver una vez"
  9: {
    antes: telefono(`
      ${BARRA_ESTADO}
      ${cabeceraChat("S", "Sofi", "en línea")}
      <div class="chat">
        <div class="burbuja sale foto-una-vez">${ICONOS.unaVez}<span>Foto<small>Se ve una sola vez</small></span></div>
        <div class="burbuja">Ya la vi</div>
      </div>
      ${CAJA_MENSAJE}`, "app-chat"),
  },

  // 10. Una página con candado
  10: {
    antes: telefono(`
      ${BARRA_ESTADO}
      <div class="nav-barra resaltada">${ICONOS.candado}<span><b>https://</b>compras-ya.com.ar</span></div>
      <div class="nav-pagina"><i class="titulo"></i><i class="producto"></i><i></i><i class="corta"></i><i class="boton-falso"></i></div>`, "navegador"),
  },

  // 11. Una pestaña de incógnito
  11: {
    antes: telefono(`
      ${BARRA_ESTADO}
      <div class="nav-barra oscura">${ICONOS.incognito}<span>Buscá o escribí una dirección</span></div>
      <div class="incognito">${ICONOS.incognito}<p><b>Pestaña de incógnito</b></p></div>`, "oscura"),
  },

  // 14. El código de la verificación en dos pasos
  14: {
    despues: telefono(`
      ${BARRA_ESTADO}
      <div class="app-barra">
        <span class="atras">‹</span>
        <span><b>Iniciar sesión</b><small>Verificación en dos pasos</small></span>
      </div>
      <p class="escena-titulo">Ingresá el código que te llegó</p>
      <div class="codigo"><span>4</span><span>8</span><span>2</span><span>9</span><span>1</span><span class="cursor"></span></div>
      <div class="teclado"><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i><i></i><i>0</i><i></i></div>`),
    pie: "Además de la contraseña, te piden un código.",
  },

  // 15. Te piden el código que llegó por SMS
  15: {
    cubre: true,
    antes: telefono(`
      ${BARRA_ESTADO}
      <div class="notificacion">
        <span class="notif-app">${ICONOS.mensaje}Mensajes · ahora</span>
        <p>Tu código de verificación es <b>482-913</b>. No lo compartas con nadie.</p>
      </div>
      ${cabeceraChat("C", "Contacto", "en línea")}
      <div class="chat">
        <div class="burbuja">Te llegó un código por SMS por error, ¿me lo pasás?</div>
      </div>
      ${CAJA_MENSAJE}`, "app-chat"),
  },

  // 16. Un mensaje que apura con un link
  16: {
    cubre: true,
    antes: telefono(`
      ${BARRA_ESTADO}
      ${cabeceraChat("S", "soporte.cuentas", "Mensaje directo")}
      <div class="chat">
        <div class="burbuja">Tu cuenta será eliminada en 24 horas. Apelá acá: <span class="enlace-falso">enlace</span></div>
      </div>
      ${CAJA_MENSAJE}`, "app-chat"),
  },

  // 17. Un sorteo que pide la foto del DNI
  17: {
    antes: telefono(`
      ${BARRA_ESTADO}
      <div class="post-cabecera">
        <span class="avatar regalo">${ICONOS.regalo}</span>
        <b>sorteos.premios.ya</b>
        <span class="mas">···</span>
      </div>
      <div class="post-imagen">${ICONOS.regalo}<span>Sorteo</span></div>
      <div class="post-acciones">${ICONOS.corazon}${ICONOS.mensaje}${ICONOS.enviar}</div>
      <p><b>sorteos.premios.ya</b> ¡Ganate un celular nuevo! Para participar, mandanos tu nombre, DNI, dirección y una foto del DNI.</p>`, "red-social"),
  },

  // 18. Una app paga "gratis"
  18: {
    antes: telefono(`
      ${BARRA_ESTADO}
      ${cabeceraChat("F", "Fede", "en línea")}
      <div class="chat">
        <div class="burbuja">Te paso la app paga, gratis. Instalala.</div>
        <div class="burbuja archivo">${ICONOS.archivo}<span><b>app-premium-gratis.apk</b><small>48 MB · Instalar</small></span></div>
      </div>
      ${CAJA_MENSAJE}`, "app-chat"),
  },

  // 20. Comparten un chat privado en el grupo
  20: {
    antes: telefono(`
      ${BARRA_ESTADO}
      ${cabeceraChat(ICONOS.grupo, "Grupo del curso", "28 participantes")}
      <div class="chat">
        <div class="burbuja"><small class="de">Juli</small>Miren este chat jajaja</div>
        <div class="burbuja captura"><span class="captura-mini"><i></i><i></i><i></i><i></i></span><small>Captura de pantalla</small></div>
        <div class="burbuja"><small class="de">Tomi</small>JAJAJA no puede ser</div>
      </div>
      ${CAJA_MENSAJE}`, "app-chat"),
  },
};
