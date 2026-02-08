const firColor = document.querySelector('#first')
const secColor = document.querySelector('#second')
const thdColor = document.querySelector('#third')
const fouthColor = document.querySelector('#fourth')
const fifColor =document.querySelector('#fifth')
// const board = document.querySelector('.divS')
// const startBtn = document.querySelector('.startBtn')
// const startInp = document.querySelector('.startInp')
const setBtn = document.querySelector('.settingsBtn')
const setMenu = document.querySelector('.settingsMenu')
const setInput = document.querySelector('#setInput')
const body = document.querySelector('body')
const makerBtn = document.querySelector('.maker')
function OpenSettingsMenu() {
    setMenu.classList.toggle('active')
}

function bgColorChange() {
    const example = document.querySelector('.square')
    let inpValue = setInput.value || 120
    let bgColor = {
        one :firColor.value,
        two :secColor.value,
        three: thdColor.value,
        four: fouthColor.value,
        five: fifColor.value,
    }
    body.style.background = `linear-gradient(${inpValue}deg, ${bgColor.one} 0%, ${bgColor.two} 25%,  ${bgColor.three} 50%,  ${bgColor.four} 75%,  ${bgColor.five} 100%)`

    example.style.background =  `linear-gradient(${inpValue}deg, ${bgColor.one} 0%, ${bgColor.two} 25%,  ${bgColor.three} 50%,  ${bgColor.four} 75%,  ${bgColor.five} 100%)`;
    
}
document.addEventListener('mousemove', e => {
    const settingsImg = document.querySelector('.settingsImg')
    const setBtn = document.querySelector('.settingsBtn')
    const rect = settingsImg.getBoundingClientRect(); // координата
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    if(mouseX > rect.left -100 && mouseX < rect.right + 100 && mouseY > rect.top - 100 && mouseY < rect.bottom + 100) {
        settingsImg.style.paddingLeft = '40px'
        setBtn.style.animation = 'none'
        settingsImg.style.opacity = '.85'
    }  else {
        settingsImg.style.paddingLeft = '25px'
        setBtn.style.animation = 'waitMe 10s ease infinite'
        settingsImg.style.opacity = '1'    
    }
})
function addEventListener() {
    setBtn.addEventListener('click', OpenSettingsMenu) // старт-закрытие меню

    firColor.addEventListener('input', bgColorChange) // ColorInput
    secColor.addEventListener('input', bgColorChange) // ColorInput
    thdColor.addEventListener('input', bgColorChange) // ColorInput
    fouthColor.addEventListener('input', bgColorChange) // ColorInput
    fifColor.addEventListener('input', bgColorChange) // ColorInput
    setInput.addEventListener('input', bgColorChange) // ColorInput
}
addEventListener()