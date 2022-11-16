
let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.navbar')
menu.onclick = () => {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle('move')
}
window.onscroll = () => {
    navbar.classList.remove('open-menu')
    menu.classList.remove('move')
}

// Header Background Dynamic
let header = document.querySelector("header")
window.addEventListener("scroll", () => {
    header.classList.toggle("header-active",window.scrollY > 0)
})
//Scroll Top
let scrollTop = document.querySelector(".scroll-top")
window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active",window.scrollY >= 400)
})

//project-github-links
let b1 = document.getElementById("project-1")
let b2 = document.getElementById("project-2")
let b3 = document.getElementById("project-3")
b1.onclick = () => {
    window.open("https://github.com/mohammedyasserattwa/sightscapes", '_blank').focus();
}
b2.onclick = () => {
    window.open("https://github.com/mohammedyasserattwa/TimsRawHoney", '_blank').focus();
}
b3.onclick = () => {
    window.open("https://github.com/mohammedyasserattwa/WeatherApplication", '_blank').focus();
}