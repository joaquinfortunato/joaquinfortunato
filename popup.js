//PRIMER POP UP
const ver_mas = document.getElementById("boton_ver_mas1");
const capa_popup = document.getElementById("capa_popup");
const cerrarPopUp = document.getElementById("cerrar_popup");
const popup_contenido = document.getElementById("popup_contenido");

ver_mas.addEventListener("click", function(){
    capa_popup.classList.add("active")
    popup_contenido.classList.add("active")
})

cerrarPopUp.addEventListener("click", function(){
    capa_popup.classList.remove("active")
    popup_contenido.classList.remove("active")
})

const ver_mas2 = document.getElementById("boton_ver_mas2");
const capa_popup2 = document.getElementById("capa_popup2");
const cerrarPopUp2 = document.getElementById("cerrar_popup2");
const popup_contenido2 = document.getElementById("popup_contenid2");

ver_mas2.addEventListener("click",function(){
    capa_popup2.classList.add("active")
    popup_contenido2.classList("active")
})

cerrarPopUp2.addEventListener("click",function(){
    capa_popup2.classList.remove("active")
    popup_contenido2.classList("active")
})

const ver_mas3 = document.getElementById("boton_ver_mas3");
const capa_popup3 = document.getElementById("capa_popup3");
const cerrarPopUp3 = document.getElementById("cerrar_popup3");
const popup_contenido3 = document.getElementById("popup_contenid3");

ver_mas3.addEventListener("click",function(){
    capa_popup3.classList.add("active")
    popup_contenido3.classList("active")
})

cerrarPopUp3.addEventListener("click",function(){
    capa_popup3.classList.remove("active")
    popup_contenido3.classList("active")
})