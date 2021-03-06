
let fillBar = document.querySelector(".fill-bar");
let loadingSection = document.querySelector(".loading")
let loadingText = document.querySelector(".loading-text");
let fill = document.querySelector(".fill");
let sideBar = document.querySelector(".side-bar");
let heading = document.querySelector(".header");
let header = document.querySelector(".heading");
let bar1 = document.querySelector(".bar-1")
let bar2 = document.querySelector(".bar-2");
let bar3 = document.querySelector(".bar-3");
let readMoresBtn = document.querySelectorAll(".btn");
let contentBoxes = Array.from(document.querySelectorAll(".content-box"));
let flag = false;

window.onload = progressBar;
function progressBar () {
    loadingText.style.transform = "translateY(-15px)";
    loadingText.style.opacity = "1";
    fillBar.style.opacity = "1";
    fill.style.width = "100%";
    contentBoxes.forEach(contentBox => contentBox.classList.add("wrap-text"));
}

fill.addEventListener("transitionend", function () {
    loadingSection.style.top = "-100vh";
    heading.style.transform = "scale(1)";
    heading.style.opacity = "1";
})

const toggleMainNav = () => {
    flag = !flag;
    if (flag === true) {
        sideBar.style.right = "0";
        bar1.style.transform = "rotate(45deg) translate(5px, 4px)";
        bar3.style.transform = "rotate(-45deg) translate(6px, -5px)";
        bar2.style.opacity = "0";
        bar2.classList.remove("animate-bar");
    }
    else {
        sideBar.style.right = "-300px";
        bar1.style.transform = "rotate(0deg) translate(0px, 0px)";
        bar3.style.transform = "rotate(0deg) translate(0px, 0px)";
        bar2.style.opacity = "1";
        bar2.classList.add("animate-bar");
    }
}

const menu = document.querySelector(".main-nav");
const lines = document.querySelector(".lines");
const toggleMenu = () => {
    flag = !flag;
    if (flag === true) {
        lines.style.transform = "rotate(180deg)";
        menu.style.top = "0";
    }
    else {
        lines.style.transform = "rotate(0deg)";
        menu.style.top = "-100vh";
    }
}

readMoresBtn.forEach((btn, index) => btn.addEventListener("click", function () {
    flag = !flag;
    if (flag === true) {
        contentBoxes[index].classList.remove("wrap-text");
        btn.innerHTML = "Hide";
    }
    else {
        contentBoxes[index].classList.add("wrap-text");
        btn.innerHTML = "Read More";
    }
}))

let checkThemeBtn = document.querySelector("#check");
function setTheme (themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}

function toggleTheme () {
    if (localStorage.getItem("theme") === "dark-theme") {
        setTheme("light-theme");
        header.classList.add("change-background");
    }
    else {
        setTheme("dark-theme");
        header.classList.remove("change-background");
    }
}

function changTheme () {
    if (localStorage.getItem("theme") === "dark-theme") {
        setTheme("dark-theme");
        checkThemeBtn.checked = true;
        header.classList.remove("change-background");
    }
    else {
        setTheme("light-theme");
        checkThemeBtn.checked = false;
        header.classList.add("change-background");
    }
}
changTheme();