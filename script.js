
function toggleUnit(id, btn) {
    const content = document.getElementById(id);
    const all = document.querySelectorAll('.noteContent');
    const allButtons = document.querySelectorAll('.unit button');

    // close all other sections
    all.forEach(el => {
        if (el.id !== id) {
            el.classList.remove('show');
        }
    });

    // reset other buttons
    allButtons.forEach(b => {
        if (b !== btn) {
            b.innerText = "View Notes";
        }
    });

    // toggle current section
    const isOpen = content.classList.contains('show');

    if (isOpen) {
        content.classList.remove('show');
        btn.innerText = "View Notes";
    } else {
        content.classList.add('show');
        btn.innerText = "Hide Notes";
    }
}


// Scroll to top button
const scroll = document.getElementById('scrollToTop');
if (scroll) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scroll.style.display = 'block';
        } else {
            scroll.style.display = 'none';
        }
    });

    scroll.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

const darkModeToggle = document.getElementById('darkModeToggle');
const sunIcon = darkModeToggle.querySelector('svg.tabler-icon-sun');
const moonIcon = darkModeToggle.querySelector('svg.icon-moon');

function setDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
        darkModeToggle.classList.remove('light');
        darkModeToggle.classList.add('dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
        darkModeToggle.classList.remove('dark');
        darkModeToggle.classList.add('light');
    }
}

darkModeToggle.addEventListener('click', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        setDarkMode(true);
    } else {
        setDarkMode(false);
    }
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        setDarkMode(true);
    } else {
        setDarkMode(false);
    }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

/*
function toggle(id) {
    const content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block"
    }
    else {
        content.style.display = "none"
        content.scrollIntoView({ behavior: "smooth" });
    }
}

function toggle(id) {
    const content = document.getElementById(id);
    content.style.display = (content.style.display === "none") ? "block" : "none";
}
*/


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Stop the default "jump" behavior

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth animation
                block: 'center'     // Vertically centers the element
            });
        }
    });
});
