let menu = document.querySelector(".menu");
let menuText = document.querySelector(".menu p");
let socialLists = document.querySelector(".social-lists");
let lists = document.querySelectorAll(".social-lists li");

menu.addEventListener("click", () => {
    socialLists.classList.toggle("hide");
    menu.classList.toggle("rotate");
});

lists.forEach((listt) => {
    listt.addEventListener("click", () => {
        menuText.innerHTML = listt.innerHTML;
        socialLists.classList.add("hide");
        menu.classList.toggle("rotate");
    });
});