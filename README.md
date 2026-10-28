# Camino de la privacidad

Guía interactiva sobre privacidad digital para la expo del instituto. Es un recorrido de preguntas sobre permisos de las apps, datos personales, cuentas y estafas. Si elegís una respuesta incorrecta, la página te explica por qué y te muestra la correcta.

Página online: https://enzotamayo865.github.io/Privacidad-y-seguridad-digital/

## Cómo se usa

- Abrí `index.html` en cualquier navegador. No hace falta instalar nada.
- Hay dos recorridos: el rápido (8 preguntas) y el completo (20 preguntas).
- Al final aparece una "licencia de navegante" con el nivel y consejos según lo que se respondió mal.
- Para una compu o tablet del stand, activá **Modo stand** abajo de todo: no guarda el avance y vuelve al inicio si nadie la usa por 2 minutos.

## Archivos

```
index.html            estructura de la página
style.css             diseño y colores
img/candado.svg       la mascota (también es el ícono de la pestaña)
scripts/
  preguntas.js        preguntas, explicaciones, glosario y niveles
  escenas.js          los celulares dibujados de cada pregunta
  utilidades.js       funciones para crear elementos y dar formato a los textos
  camino.js           el mapa del camino y la tira de progreso
  juego.js            la lógica del juego (pantallas, respuestas, modo stand)
```

Para cambiar una pregunta o una explicación, alcanza con editar `scripts/preguntas.js`.

## Hecho con

HTML, CSS y JavaScript, sin librerías.
