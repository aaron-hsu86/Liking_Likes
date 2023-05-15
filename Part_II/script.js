var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");
var card3 = document.querySelector(".card3");

var card1Likes = document.querySelector(".card1 > .top-half > .likes");
var card2Likes = document.querySelector(".card2 > .top-half > .likes");
var card3Likes = document.querySelector(".card3 > .top-half > .likes");

var likes1 = 9;
var likes2 = 12;
var likes3 = 9;

function addLike(element1){
    console.log(element1);
    if(element1 === card1){
        likes1++;
        card1Likes.innerText = likes1 + " like(s)";
    } else if (element1 === card2){
        likes2++;
        card2Likes.innerText = likes2 + " like(s)";
    } else if (element1 === card3){
        likes3++;
        card3Likes.innerText = likes3 + " like(s)";
    }
}