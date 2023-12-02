const header =document.querySelector("header")
window.addEventListener("scroll",function () {
    hader.classList.toggle("sticky",window.scrollY > 120);
});