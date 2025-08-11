// Professional Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function setTheme(theme) {
    if (theme === 'light') {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    }
}

function toggleTheme() {
    if (root.getAttribute('data-theme') === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Load theme from localStorage
if (localStorage.getItem('theme') === 'light') {
    setTheme('light');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});