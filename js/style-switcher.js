// toggling for switch btn to open from side
const container = document.querySelector('.switch-toggler')
const switchBtn = document.querySelector('.switch-toggler-style')

var switchFlag = 0

switchBtn.addEventListener('click',()=>{
    if(switchFlag === 0){
        switchFlag = 1
        container.style.transform = "translateX(0%)"
    }
    else{
        switchFlag = 0
        container.style.transform = "translateX(100%)"
    }
})

// hide style -switcher on scroll or click in window
window.addEventListener('scroll',()=>{
    switchFlag = 1
    container.style.transform = "translateX(100%)"
})

// changing theme color 
const alternateStyle = document.querySelectorAll('.alternate-style')

function setActiveStyle (color){
    alternateStyle.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute("disabled","true")
        }
    });
}

// theme change to light and dark
const dayNight = document.querySelector('.day-night')

dayNight.addEventListener('click',()=>{
    dayNight.querySelector('i').classList.toggle('ri-sun-fill')
    dayNight.querySelector('i').classList.toggle('ri-moon-fill')
    document.body.classList.toggle('dark')
})

window.addEventListener('load',()=>{
    if(document.body.classList.contains('dark'))
        dayNight.querySelector('i').classList.add("ri-sun-fill")
    else{
        dayNight.querySelector('i').classList.add("ri-moon-fill")
    }
})