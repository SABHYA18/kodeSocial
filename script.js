"use-strict";
//////////////////////

const likeicon = document.querySelectorAll(".like");
const favoriteicon = document.querySelectorAll(".favorite");
const commenticon = document.querySelectorAll(".comments");
const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".close-btn");

likeicon.forEach((likeIcon) => {
  likeIcon.addEventListener("click", function (e) {
    e.preventDefault();
    if (likeIcon.classList.contains("far")) {
      likeIcon.classList.remove("far");
      likeIcon.style.color = "#ff0000";
      likeIcon.classList.add("fas");
    } else {
      likeIcon.classList.remove("fas");
      likeIcon.style.color = "#ffff";
      likeIcon.classList.add("far");
    }
  });
});

favoriteicon.forEach((favoriteIcon) => {
  favoriteIcon.addEventListener("click", function (e) {
    e.preventDefault();
    if (favoriteIcon.classList.contains("far")) {
      favoriteIcon.classList.remove("far");
      favoriteIcon.style.color = "#FFD93D";
      favoriteIcon.classList.add("fas");
    } else {
      favoriteIcon.classList.remove("fas");
      favoriteIcon.style.color = "#ffff";
      favoriteIcon.classList.add("far");
    }
  });
});
commenticon.forEach((commentIcon) => {
  commentIcon.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.remove("hidden");
  });
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.add("hidden");
});
