let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    nav.classList.toggle('active')
}