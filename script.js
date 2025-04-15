document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');
    const heroButtons = document.querySelector(".hero-buttons");
    const stepCards = document.querySelectorAll('.step-card');
    const exploreBtn = document.getElementById('exploreBtn');
    const contactForm = document.getElementById("contactForm");

    // Hamburger menu toggle
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Hero buttons click events
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

    // Step card toggle highlight
    stepCards.forEach(card => {
        card.addEventListener('click', function () {
            card.classList.toggle('highlight');
        });
    });

    // Explore button
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function () {
            alert('Thank you for exploring! Stay tuned for more features.');
        });
    }

    // CT3 buttons
    document.querySelectorAll('.ct3').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            alert("This would redirect to your shopping/selling page!");
        });
    });

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;

            if (name && email && phone && message) {
                alert("Thank you, " + name + "! Your message has been sent.");
                this.reset();
            } else {
                alert("Please fill out all fields.");
            }
        });
    }
});

// Story toggle function
function toggleStory(storyId) {
    const fullStory = document.getElementById(storyId + '-full');
    const button = document.querySelector(`#${storyId} button`);

    if (fullStory && button) {
        if (fullStory.style.display === "none" || fullStory.style.display === "") {
            fullStory.style.display = "block";
            button.textContent = "Read Less";
        } else {
            fullStory.style.display = "none";
            button.textContent = "Read More";
        }
    }
}

// Seller registration and shopping actions
function registerSeller() {
    alert("Redirecting to Seller Registration...");
}

function startShopping() {
    alert("Redirecting to Shopping Page...");
}

function registerNow() {
    alert("Redirecting to Seller Registration...");
}

// Toggle step details
function toggleStep(stepElement) {
    const detail = stepElement.querySelector('.step-details');
    const isVisible = detail && detail.style.display === 'block';

    // Collapse all
    document.querySelectorAll('.step-details').forEach(el => el.style.display = 'none');

    // Toggle current
    if (detail) {
        detail.style.display = isVisible ? 'none' : 'block';
    }
}
