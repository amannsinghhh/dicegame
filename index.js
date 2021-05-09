var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6+1);
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomDiceImage;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource);

var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6+1);
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImageSource2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS!"
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS!"
}
else{
    document.querySelector("h1").innerHTML="DRAW!"
}



