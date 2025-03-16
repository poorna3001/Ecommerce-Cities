document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Hero Buttons Alert Actions
    document.querySelector(".hero-buttons button:first-child").addEventListener("click", () => {
        alert("Redirecting to Seller Registration");
    });

    document.querySelector(".hero-buttons button:last-child").addEventListener("click", () => {
        alert("Exploring Products");
    });

    // Mobile Menu Toggle (Hamburger Menu)
   // JavaScript to toggle the menu on click
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

});
