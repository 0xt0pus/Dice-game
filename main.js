var buttonClicked=document.querySelector("input");

buttonClicked.addEventListener("click",ListWinner);

function ListWinner()
{
var randomeNumber1=Math.random();
 randomeNumber1*=6;
 randomeNumber1=Math.floor(randomeNumber1);
randomeNumber1++;


var image1="images/dice"+randomeNumber1+".png";


var randomeNumber2=Math.random();
 randomeNumber2*=6;
 randomeNumber2=Math.floor(randomeNumber2);
randomeNumber2++;
var image2="images/dice"+randomeNumber2+".png";


document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);


if(randomeNumber1>randomeNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 won";
}

else if(randomeNumber2>randomeNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 won";
}

else{
    document.querySelector("h1").innerHTML="Drawn";
}
}