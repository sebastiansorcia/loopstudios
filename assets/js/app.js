let btnMenu = document.querySelector(".btn__menu img");
let menuHeader = document.querySelector(".header__menu");
let links = document.querySelectorAll(".link__item");

let clicks = 0;

function toggleMenu(){
    menuHeader.classList.toggle("active");
    clicks = clicks + 1;

    if (clicks % 2 != 0) {
        btnMenu.setAttribute("src", "images/icon-close.svg");
    }else{
        btnMenu.setAttribute("src", "images/icon-hamburger.svg");
    }

}

btnMenu.addEventListener("click",toggleMenu);

links.forEach((linkItem)=>{
    linkItem.addEventListener("click",toggleMenu);
});