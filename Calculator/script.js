const clicksound = document.getElementById('clicksound');


const buttons = document.querySelectorAll('input[type = "button"]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
    
        console.log('button clicked');
        clicksound.currentTime = 0;
        clicksound.volume = 1;
        clicksound.play();   


})
})