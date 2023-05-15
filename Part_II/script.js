var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");
var card3 = document.querySelector(".card3");

var likes1 = 9;
var likes2 = 12;
var likes3 = 9;

function addLike(element1){
    console.log(element1);
    if(element1 === card1){
        likes1++;
        document.querySelector(".card1 > .top-half > .likes").innerText = likes1 + " like(s)";
    } else if (element1 === card2){
        likes2++;
        document.querySelector(".card2 > .top-half > .likes").innerText = likes2 + " like(s)";
    } else if (element1 === card3){
        likes3++;
        document.querySelector(".card3 > .top-half > .likes").innerText = likes3 + " like(s)";
    }
}