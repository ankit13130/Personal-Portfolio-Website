// toggling for switch btn to open from side
const container = document.querySelector('.switch-toggler')
const switchBtn = document.querySelector('.switch-toggler-style')

var toggleTheme = false

switchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleTheme = !toggleTheme;
    container.style.transform = toggleTheme ? "translateX(0%)" : "translateX(100%)";
});

// hide style -switcher on scroll or click in window
window.addEventListener('scroll', () => {
    if (toggleTheme){
        toggleTheme = !toggleTheme;
        container.style.transform = "translateX(100%)";
    }
})

window.addEventListener('click', () => {
    if (toggleTheme){
        toggleTheme = !toggleTheme;
        container.style.transform = "translateX(100%)";
    }
})

// changing theme color 
const alternateStyle = document.querySelectorAll('.alternate-style')

function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled")
        }
        else {
            style.setAttribute("disabled", "true")
        }
    });
}

// theme change to light and dark
// additionally by default it checks system theme, if system is at dark mode then it applies dark theme and vice versa.
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const dayNight = document.querySelector('.day-night')

if (prefersDarkMode) {
    dayNight.querySelector('i').classList.add('ri-sun-fill')
    document.body.classList.add('dark')
} else {
    dayNight.querySelector('i').classList.add('ri-moon-fill')
    document.body.classList.remove('dark')
}

dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('ri-sun-fill')
    dayNight.querySelector('i').classList.toggle('ri-moon-fill')
    document.body.classList.toggle('dark')
})

window.addEventListener('load', () => {
    if (document.body.classList.contains('dark'))
        dayNight.querySelector('i').classList.add("ri-sun-fill")
    else {
        dayNight.querySelector('i').classList.add("ri-moon-fill")
    }
})