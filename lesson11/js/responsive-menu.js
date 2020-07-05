const navBtn = document.getElementById("navBtn");
const toggleMenu = () => {
    document.getElementsByTagName("nav")[0].classList.toggle("expand-menu");
}
navBtn.addEventListener("click", toggleMenu, false);

