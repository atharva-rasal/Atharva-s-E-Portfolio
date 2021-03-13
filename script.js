$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        // scroll up button
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // scroll up button
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop : 0});
    });

    // typing animation
    var typed = new Typed(".typing", {
        strings: ["Youtuber", "Coder", "Programmer", "Learner"],
        typeSpeed: 100,
        backSpeed: 60, 
        loop: true
    })

});

// 'skills', 'acheivement', 'education' tabs in about section
(() => {
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        if(event.target.classList.contains("tab-item") &&
            !event.target.classList.contains("active")){
                const target = event.target.getAttribute("data-target");
                tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
                event.target.classList.add("active", "outer-shadow")
                aboutSection.querySelector(".tab-content.active").classList.remove("active");
                aboutSection.querySelector(target).classList.add("active");
            }
    })
})();

// responsive navigation bar for small screens 
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav_link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

//preloader
window.addEventListener("load", () => {
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 600)
})