// Punto 4, agreggan evento click para cambiar color de fondo de 4 divs

function pintar(ele, color = 'green') {
    ele.style.backgroundColor = color;
}

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
card1.addEventListener("click", function () {
    pintar(card1, 'black');
});
card2.addEventListener("click", function () {
    pintar(card2, 'black');
});
card3.addEventListener("click", function () {
    pintar(card3, 'black');
});
card4.addEventListener("click", function () {
    pintar(card4, 'black');
});

// Punto 4, Crea un script que guarde dentro de una variable global un color dependiendo de la letra del teclado presionada
let color = ''; //Variable global para guardar color
let card5 = document.getElementById("key");
let card7 = document.getElementById("div-oculto");
let divOculto = '<div id="key1" style="height: 200px; width: 200px;"></div>';
let mensajeOculto = '<p class="mensaje">Al presionar las teclas q, w ó e , se deberá cambiar el color del div a amarillo, azul o café respectivamente. </p>';
document.addEventListener('keydown', function (event) {

    if (event.key.toLowerCase() === 'a') {
        color = 'pink';//Variable global para guardar color
        pintar(card5, 'pink');
    } else if (event.key.toLowerCase() === 's') {
        color = 'orange';//Variable global para guardar color
        pintar(card5, 'orange');
    } else if (event.key.toLowerCase() === 'd') {
        color = 'skyblue';//Variable global para guardar color
        pintar(card5, 'skyblue');
    } else if (event.key.toLowerCase() === 'q') {
        card7.innerHTML = divOculto + mensajeOculto;
        let card6 = document.getElementById("key1");
        pintar(card6, 'yellow');
    } else if (event.key.toLowerCase() === 'w') {
        card7.innerHTML = divOculto + mensajeOculto;
        let card6 = document.getElementById("key1");
        pintar(card6, 'blue');
    } else if (event.key.toLowerCase() === 'e') {
        card7.innerHTML = divOculto + mensajeOculto;
        let card6 = document.getElementById("key1");
        pintar(card6, 'saddlebrown');
    }
})