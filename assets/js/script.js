
// Punto 3, Se tiene como base el siguiente ejercicio que cambia el color de un elemento de HTML al hacerle click 
/*Function original
function pintar() {
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
}
ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);
*/
function pintar(card, color = 'green') {
    card.style.backgroundColor = color;
}

ele = document.getElementById("ele1")
ele.addEventListener("click", function () {
    pintar(ele, 'yellow');
});





