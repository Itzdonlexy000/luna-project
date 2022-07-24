 //animate_navigation_bar

 window.addEventListener('scroll', function (){
    let header = document.querySelector('nav');
    let windowPosition = window.scrollY>0;
    header.classList.toggle('animate-nav', windowPosition);
});

 
// mediaa-navigation
const  navSlide = () => {
    const burger =document.querySelector('.burger');
    const navLink =document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLink.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navSlide()

