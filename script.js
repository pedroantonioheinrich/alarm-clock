const BTN25 = document.getElementById("btn-25")
const BTN5 = document.getElementById("btn-5")
const BTN15 = document.getElementById("btn-15")
const BTN_PAUSE = document.getElementById("pause")
const MINUTES = document.querySelector("#minute")
const SECONDS = document.querySelector("#second")
const ALARM = new Audio('alarm.wav')
const ZERAR = document.getElementById('zerar')
let pausedMin = 0
let pausedSec = 0
let isPaused = false

ZERAR.addEventListener('click', ()=>{
    window.location.reload()
})

BTN_PAUSE.textContent = 'Pause'


BTN_PAUSE.addEventListener('click', ()=>{
    if(pausedMin != 0 && pausedSec != 0){
        if(isPaused){
            isPaused = false
            BTN_PAUSE.textContent = 'Pause'
            BTN_PAUSE.style.backgroundColor = '#fff'
            BTN_PAUSE.style.fontWeight = 'bold'
            clockRun(MINUTES, SECONDS, BTN25, BTN5, BTN15, pausedMin, pausedSec, ALARM)
        }else{
            isPaused = true
            BTN_PAUSE.style.backgroundColor = '#ffe75d'
            BTN_PAUSE.style.color = 'rgb(29, 29, 29)'
            BTN_PAUSE.style.fontWeight = 'bold'
            BTN_PAUSE.textContent = 'Run'
            MINUTES.textContent = minPause
            SECONDS.textContent = secPause
        }
    }
})

function isReallyPaused(bool){
    return bool
}

function clockRun(dispMin, dispSec, btn, btn2, btn3, min, sec, alarm){
    btn.disabled = true
    btn2.disabled = true
    btn3.disabled = true

    btn.style.color = 'rgb(29, 29, 29)'
    btn.style.fontWeight = 'bold'
    btn.style.backgroundColor = '#82ff63'

    btn2.style.color = 'rgb(29, 29, 29)'
    btn2.style.fontWeight = 'bold'
    btn2.style.backgroundColor = '#ff6363'

    btn3.style.backgroundColor = '#ff6363'
    btn3.style.color = 'rgb(29, 29, 29)'
    btn3.style.fontWeight = 'bold'
    
    const secondInterval = setInterval(() => {
        if(isReallyPaused(isPaused)){
            clearInterval(secondInterval)
        }else{
            sec--
            if (min >= 0 && min < 10) {
                dispMin.textContent = `0${min}`
            } else {
                dispMin.textContent = min
            }
            if (sec >= 0 && sec < 10) {
                dispSec.textContent = `0${sec}`
            } else {
                dispSec.textContent = sec
            }
            if (sec === 0) {
                if (sec === 0 && min === 0) {
                    alarm.play()
                    dispMin.textContent = '00'
                    dispSec.textContent = '00'
                    clearInterval(secondInterval)
                    btn.disabled = false
                    btn2.disabled = false
                    btn3.disabled = false
                }
                min--
                sec = 60
            }
            pausedMin = min
            pausedSec = sec
            console.log(`${sec} TRABALHA, VAGABUNDO!`)
        }  
    }, 1000)  
}

BTN25.addEventListener('click', ()=>{
    clockRun(MINUTES, SECONDS, BTN25, BTN5, BTN15, 24, 59, ALARM)
})
BTN15.addEventListener('click', ()=>{
    clockRun(MINUTES, SECONDS, BTN15, BTN25, BTN5, 14, 59, ALARM)
})
BTN5.addEventListener('click', ()=>{
    clockRun(MINUTES, SECONDS, BTN5, BTN25, BTN15, 4, 59, ALARM)
})
