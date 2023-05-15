var likes = document.querySelector(".likes");
var likeCount = 3;
function addLike(){
    likeCount++;
    likes.innerText = likeCount + " like(s)"
}