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
let card6 = document.getElementById("card6");
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = 'pink';
        pintar(card5, 'purple');
    } else if (event.key === 's') {
        color = 'orange';
        pintar(card5, 'gray');
    } else if (event.key === 'd') {
        color = 'skyblue';
        pintar(card5, 'pink');
    } else if (event.key === 'q') {
        pintar(card6, 'skyblue');
    } else if (event.key === 'w') {
        pintar(card6, 'orange');
    } else if (event.key === 'e') {
        pintar(card6, 'brown');
    }
})