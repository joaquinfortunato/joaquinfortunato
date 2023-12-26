const boton_mostrar = document.getElementById("boton_mostrar");
const boton_chau = document.getElementById("boton_chau");

const fomulario_2_cuarta_pagina = document.getElementById(
  "fomulario_2_cuarta_pagina"
);

boton_mostrar.addEventListener('click', () => {
    let estado_display = boton_chau.style.display;

    if (estado_display === 'none' || estado_display === '') {
        boton_chau.style.display = 'block';
        console.log("hola");
    } else {
        boton_chau.style.display = 'none';
    }
});

boton_chau.addEventListener('click', () => {
    let estado_display = boton_mostrar.style.display;

    if (estado_display === 'none' || estado_display === '') {
        boton_mostrar.style.display = 'block';
    } else {
        boton_mostrar.style.display = 'none';
    }
});
