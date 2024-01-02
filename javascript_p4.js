const fomulario_1_cuarta_pagina = document.querySelector(
  ".fomulario_1_cuarta_pagina"
);

const fomulario_2_cuarta_pagina = document.querySelector(
  ".fomulario_2_cuarta_pagina"
);

const boton_formulario_1_cuarta_pagina = document.getElementById("boton_formulario_1_cuarta_pagina");
const boton_formulario_2_cuarta_pagina = document.getElementById("boton_formulario_2_cuarta_pagina");
const boton_formulario_3_cuarta_pagina = document.getElementById("boton_formulario_3_cuarta_pagina");


boton_formulario_1_cuarta_pagina.addEventListener("click", () => {
  fomulario_1_cuarta_pagina.style.display = "none";
  fomulario_2_cuarta_pagina.classList.remove("d-none");
  console.log("pasa");
});

boton_formulario_2_cuarta_pagina.addEventListener("click", () => {
  fomulario_2_cuarta_pagina.classList.add("d-none");
  fomulario_1_cuarta_pagina.style.display = "block";
  console.log("pasa2");
});

boton_formulario_3_cuarta_pagina.addEventListener("click", () => {
  fomulario_2_cuarta_pagina.style.display = "none";
  fomulario_3_cuarta_pagina.classList.remove("d-none");
  console.log("pasa");
});

boton_formulario_3_cuarta_pagina.addEventListener("click", () => {
  fomulario_2_cuarta_pagina.style.display = "none";
  fomulario_3_cuarta_pagina.classList.remove("d-none");
  console.log("pasa");
});

boton_pagina_anterior_formulario_3.addEventListener("click", ()=> {
  fomulario_3_cuarta_pagina.classList.add("d-none");
  fomulario_2_cuarta_pagina.style.display = "block";
})