// the select the  img tag and adding the src value to dice6.png
document.firstElementChild.lastElementChild.querySelector(".img1").setAttribute("src","./images/dice6.png");
document.firstElementChild.lastElementChild.querySelector(".img2").setAttribute("src","./images/dice6.png");

// creating a random number using math.random function
var randomNumber1 = Math.floor(Math.random()* 6)+1;

//storing the dice image
var randomDiceImage = "dice"+ randomNumber1 + ".png";
//storing the folder where the dice image present
var randomImageSource1 = "images/"+ randomDiceImage;
//selecting the image tag
var image1 = document.querySelectorAll("img")[0];
//storing the image path to image tag 1
image1.setAttribute("src", randomImageSource1);

//creating the 2 random number
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//storing the dice image
var randomDiceImage2 = "dice"+ randomNumber2 + ".png";

//selecting the image folder
var randomImageSource2 = "images/"+ randomDiceImage2;

//selecting the image tag 2
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// if the number1 is greater than number 2
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML=("🚩🚩 Player 1 Win!");
}
//if the number 2 is greater than number 1
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = ("🚩🚩 Player 2 Win!");
}
//if both number are equal
else{
    document.querySelector("h1").innerHTML = ("📍Draw!")
}