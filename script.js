// ===============================
// Typing Animation
// ===============================

const typing = document.querySelector(".typing");

if (typing) {

    const words = [
        "Hardware Engineer",
        "IoT Enthusiast",
        "Embedded Systems",
        "EEE Student"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typing.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }

        } else {

            typing.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

        }

        setTimeout(typeEffect, deleting ? 70 : 120);

    }

    typeEffect();

}


// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);

        }, 1000);

    }

});


// ===============================
// Scroll To Top
// ===============================

const scrollBtn = document.getElementById("scrollTop");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            scrollBtn.style.display = "block";

        } else {

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


// ===============================
// Active Navbar
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

if (sections.length && navLinks.length) {

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}


// ===============================
// Theme Toggle
// ===============================

const toggle = document.getElementById("themeToggle");

if (toggle) {

    toggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const icon = toggle.querySelector("i");

        if (icon) {

            if (document.body.classList.contains("light-mode")) {

                icon.classList.replace("fa-moon", "fa-sun");

            } else {

                icon.classList.replace("fa-sun", "fa-moon");

            }

        }

    });

}


// ===============================
// Scroll Reveal
// ===============================

const revealElements = document.querySelectorAll(
".card,.box,.project,.skill,.contact-info,.contact-form"
);

function reveal() {

    const trigger = window.innerHeight - 100;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "0.8s";

        }

    });

}

window.addEventListener("scroll", reveal);
reveal();


// ===============================
// Header Shadow
// ===============================

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow =
            "0 8px 20px rgba(0,0,0,.25)";

        } else {

            header.style.boxShadow = "none";

        }

    });

}


// ===============================
// Contact Form
// ===============================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}


// ===============================
// Footer Year
// ===============================

const year = document.querySelector(".copyright");

if (year) {

    year.textContent =
    `© ${new Date().getFullYear()} All Rights Reserved.`;

}