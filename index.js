var n = Math.floor(Math.random()*6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + n + ".png");

var m = Math.floor(Math.random()*6) + 1;
if (n == m){
    document.querySelector("h1").innerHTML = "Draw!";
    }
else if (n > m){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
    }
else{
    document.querySelector("h1").innerHTML = "Player 2 wins!";
    }
document.querySelector(".img2").setAttribute("src", "images/dice" + m + ".png");
