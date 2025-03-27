document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Hero Buttons Alert Actions
    const heroButtons = document.querySelector(".hero-buttons");
    if (heroButtons) {
        const firstButton = heroButtons.querySelector("button:first-child");
        const lastButton = heroButtons.querySelector("button:last-child");

        if (firstButton) {
            firstButton.addEventListener("click", () => {
                alert("Redirecting to Seller Registration");
            });
        }

        if (lastButton) {
            lastButton.addEventListener("click", () => {
                alert("Exploring Products");
            });
        }
    }

    document.getElementById("hamburger-menu").addEventListener("click", function() {
        // Toggle the 'active' class to show/hide the navigation menu
        document.getElementById("nav-links").classList.toggle("active");
    });
});
