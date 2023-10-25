// random number generator
var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1)+1;
console.log(randomNumber1);

var randomDiceImage = "dice"+ randomNumber1 +".png";
var randomImageSource = "images/"+randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// random number generator
var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2)+1;
console.log(randomNumber2);

var randomDiceImage2 = "dice"+ randomNumber2 +".png";
var randomImageSource2 = "images/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// winner checking
if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerText = "Draw";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 Won";
}
else{
    document.querySelector("h1").innerText = "Player 2 Won";
}