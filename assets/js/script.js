function pintar(ele, color = 'green') {
    ele.style.backgroundColor = color;
}






card1 = document.getElementById("card1")
card1.addEventListener("click", pintar(card1, 'black'));
card2 = document.getElementById("card2")
card2.addEventListener("click", pintar(card2, 'black'));
card3 = document.getElementById("card3")
card3.addEventListener("click", pintar(card3, 'black'));
card4 = document.getElementById("card4")
card4.addEventListener("click", pintar(card4, 'black'));