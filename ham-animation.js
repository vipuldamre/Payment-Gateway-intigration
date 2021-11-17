const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar-nav");
const links = document.querySelectorAll(".navbar li");
const headtext = document.querySelector(".headText");
const section1 = document.querySelector(".container-sm")

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("open");
    headtext.classList.toggle("hidden");
    headtext
    links.forEach(link => {
        link.classList.toggle("fade")
    })
})