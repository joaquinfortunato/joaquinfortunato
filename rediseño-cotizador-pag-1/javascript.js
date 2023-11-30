document.addEventListener('DOMContentLoaded', function() {
    const hogarElement = document.querySelector('.hogar');
    const autoElement = document.querySelector('.auto');
    const motoElement = document.querySelector('.moto');
    const personalesElement = document.querySelector('.personales');

    const contenedorImgElement = document.querySelector('.contenedor_img');


    hogarElement.addEventListener('mouseover', function() {
        contenedorImgElement.style.backgroundImage = "url('IMG/hogar.png')";
    });

    autoElement.addEventListener('mouseover', function() {
        contenedorImgElement.style.backgroundImage = "url('IMG/auto.png')";
    });

    motoElement.addEventListener('mouseover', function() {
        contenedorImgElement.style.backgroundImage = "url('IMG/moto3.png')";
    });

    personalesElement.addEventListener('mouseover', function() {
        contenedorImgElement.style.backgroundImage = "url('IMG/personales_2.png')";
    });
});
