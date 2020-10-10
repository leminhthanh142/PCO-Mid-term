
let fillBar = document.querySelector(".fill-bar");
let loadingSection = document.querySelector(".loading")
let loadingText = document.querySelector(".loading-text");
let fill = document.querySelector(".fill");
let sideBar = document.querySelector(".side-bar");
let heading = document.querySelector(".header");
let bar2 = document.querySelector(".bar-2");
let readMoresBtn = document.querySelectorAll(".btn");
let contentBoxes = Array.from(document.querySelectorAll(".content-box"));
console.log(contentBoxes);
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
        bar2.style.opacity = "0";
        bar2.classList.remove("animate-bar");
    }
    else {
        sideBar.style.right = "-300px";
        bar2.style.opacity = "1";
        bar2.classList.add("animate-bar");
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