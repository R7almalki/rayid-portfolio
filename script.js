const body = document.body;
const navbar = document.querySelector(".navbar");
const themeSections = document.querySelectorAll(".theme-section");
const revealElements = document.querySelectorAll(".reveal");

const themeObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            const sectionTheme = entry.target.dataset.theme;

            if (sectionTheme) {
                body.dataset.theme = sectionTheme;
            }
        });
    },
    {
        threshold: 0.45
    }
);

themeSections.forEach((section) => {
    themeObserver.observe(section);
});

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/*========================================
=            Parallax Images             =
========================================*/
const parallaxImages = document.querySelectorAll(".parallax-image");
function updateParallax() {
parallaxImages.forEach((image) => {
const speed = 0.15;

const rect = image.getBoundingClientRect();

const offset = rect.top * speed;
image.style.transform = `translateY(${offset}px) scale(1.03)`;
});
}
window.addEventListener("scroll", updateParallax);
updateParallax();

