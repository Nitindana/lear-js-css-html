
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightNav = document.querySelector('.rightNav')




burger.addEventListerner('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
