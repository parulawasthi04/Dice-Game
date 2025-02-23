let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomImg1 = "dice" + randomNumber1 + ".png";
document.getElementById("left").setAttribute("src", randomImg1);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomImg2 = "dice" + randomNumber2 + ".png";
document.getElementById("right").setAttribute("src", randomImg2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Won";
} else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Won";
}
else{
    document.querySelector("h1").innerHTML = "Draw!!";
}
