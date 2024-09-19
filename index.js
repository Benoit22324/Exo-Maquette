let menu;
let nav;

document.addEventListener('DOMContentLoaded', () => {
    menu = document.getElementById('mobile_menu');
    nav = document.getElementById('nav_bar');

    menu.addEventListener('click', () => {
        handleMenu(nav);
    })
})

const handleMenu = (element) => {
    element.classList.toggle('d-flex-hidden');
    element.classList.toggle('mobile_nav_menu');
}