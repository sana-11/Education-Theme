burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');




burger.addEventListener('click', ()=>){
    rightNavnav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');
}