document.addEventListener('DOMContentLoaded', function() {
    const hogarElement = document.querySelector('.hogar');
    const autoElement = document.querySelector('.auto');
    const motoElement = document.querySelector('.moto');
    const personalesElement = document.querySelector('.personales');

    const contenedorImgElement = document.querySelector('.contenedor_img');


    hogarElement.addEventListener('mouseover', function() {
        contenedorImgElement.style.backgroundImage = "url('hogar.png')";
    });

    autoElement.addEventListener('mouseover', function() {
        contenedorImgElement.style.backgroundImage = "url('auto.png')";
    });

    motoElement.addEventListener('mouseover', function() {
        contenedorImgElement.style.backgroundImage = "url('moto3.png')";
    });

    personalesElement.addEventListener('mouseover', function() {
        contenedorImgElement.style.backgroundImage = "url('personales_2.png')";
    });
});
