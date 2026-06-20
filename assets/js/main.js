const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".menu-overlay");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    mobileMenu.classList.toggle("active");

    overlay.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});

overlay.addEventListener("click", () => {

    hamburger.classList.remove("active");

    mobileMenu.classList.remove("active");

    overlay.classList.remove("active");

});

document.querySelectorAll(".mobile-menu a")
.forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");

        mobileMenu.classList.remove("active");

        overlay.classList.remove("active");

    });

});

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/* =========================
   FAQ ACCORDION
========================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});