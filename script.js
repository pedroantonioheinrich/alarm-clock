
const btn25 = document.getElementById("btn-25")
const btn5 = document.getElementById("btn-5")
const btn15 = document.getElementById("btn-15")
const btnPause = document.getElementById("pause")
const minutes = document.querySelector("#minute")
const seconds = document.querySelector("#second")

let isPaused = false

btnPause.textContent = 'Pause'

const alarm = new Audio('alarm.wav')

btnPause.addEventListener('click', ()=>{
    if(isPaused){
        isPaused = false
        btnPause.textContent = 'Pause'

    }else{
        isPaused = true
        btnPause.textContent = 'Play'
    }
})

function clockRun(dispMin, dispSec, btn, btn2, btn3, min, sec, clicked, alarm){
    btn.disabled = true
    btn2.disabled = true
    btn3.disabled = true

    if(clicked){
        btn.style.border = '4px solid green'
        btn.style.backgroundColor = 'green'
        btn2.style.border = '4px solid red'
        btn2.style.backgroundColor = 'red'
        btn3.style.border = '4px solid red'
        btn3.style.backgroundColor = 'red'

        const secondInterval = setInterval(() => {
            sec--
            if (min >= 0 && min < 10) {
                dispMin.textContent = `0${min}`
            } else {
                dispMin.textContent = min
            }
            if (sec >= 0 && second < 10) {
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
        }, 1000)
    }
}

btn25.addEventListener('click', ()=>{
    clockRun(minutes, seconds, btn25, btn5, btn15, 24, 59, true, alarm)
})
btn15.addEventListener('click', ()=>{
    clockRun(minutes, seconds, btn15, btn25, btn5, 14, 59, true, alarm)
})
btn5.addEventListener('click', ()=>{
    clockRun(minutes, seconds, btn5, btn25, btn15, 4, 59, true, alarm)
})
