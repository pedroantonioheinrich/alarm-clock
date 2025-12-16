
const btn25 = document.getElementById("btn-25")
const btn5 = document.getElementById("btn-5")
const btn15 = document.getElementById("btn-15")

let isClicked25 = false
let isClicked5 = false
let isClicked15 = false

const alarm = new Audio('alarm.wav')

btn25.addEventListener('click', ()=>{
    isClicked25 = true
    isClicked5 = false
    isClicked15 = false
    btn25.disabled = true
    btn5.disabled = true
    btn15.disabled = true

    if(isClicked25){
        btn25.style.border = '4px solid green'
        btn25.style.backgroundColor = 'green'
        btn5.style.border = '4px solid red'
        btn5.style.backgroundColor = 'red'
        btn15.style.border = '4px solid red'
        btn15.style.backgroundColor = 'red'
        const focusTime = document.querySelector("#minute")
        const seconds = document.querySelector("#second")
        let minute25 = 24
        let second = 59
           
        const secondInterval = setInterval(() => {
            second--
            if (minute25 >= 0 && minute25 < 10) {
                focusTime.textContent = `0${minute25}`
            } else {
                focusTime.textContent = minute25
            }
            if (second >= 0 && second < 10) {
                seconds.textContent = `0${second}`
            } else {
                seconds.textContent = second
            }
            if (second === 0) {
                if (second === 0 && minute25 === 0) {
                    alarm.play()
                    focusTime.textContent = '00'
                    seconds.textContent = '00'
                    clearInterval(secondInterval)
                    btn25.disabled = false
                    btn5.disabled = false
                    btn15.disabled = false
                    isClicked5 = false
                    isClicked25 = false
                    isClicked15 = false
                }
                minute25--
                second = 60
            }
        }, 1000)
    }
})

btn5.addEventListener('click', ()=>{
    isClicked25 = false
    isClicked5 = true
    isClicked15 = false
    btn25.disabled = true
    btn5.disabled = true
    btn15.disabled = true

    if(isClicked5){
        btn25.style.border = '4px solid red'
        btn25.style.backgroundColor = 'red'
        btn5.style.border = '4px solid green'
        btn5.style.backgroundColor = 'green'
        btn15.style.border = '4px solid red'
        btn15.style.backgroundColor = 'red'
        const focusTime = document.querySelector("#minute")
        const seconds = document.querySelector("#second")
        let minute5 = 4
        let second = 59
    
        const secondInterval = setInterval(() => {
            second--
            if (minute5 >= 0 && minute5 < 10) {
                focusTime.textContent = `0${minute5}`
            } else {
                focusTime.textContent = minute5
            }
            if (second >= 0 && second < 10) {
                seconds.textContent = `0${second}`
            } else {
                seconds.textContent = second
            }
            if (second === 0) {
                if (second === 0 && minute5 === 0) {
                    alarm.play()
                    focusTime.textContent = '00'
                    seconds.textContent = '00'
                    clearInterval(secondInterval)
                    btn25.disabled = false
                    btn5.disabled = false
                    btn15.disabled = false
                    isClicked5 = false
                    isClicked25 = false
                    isClicked15 = false
                }
                minute5--
                second = 60
            }
        }, 1000)
    }
})

// 15 MINUTOS

btn15.addEventListener('click', ()=>{
    isClicked25 = false
    isClicked5 = false
    isClicked15 = true
    btn25.disabled = true
    btn5.disabled = true
    btn15.disabled = true

    if(isClicked15){
        btn25.style.border = '4px solid red'
        btn25.style.backgroundColor = 'red'
        btn5.style.border = '4px solid red'
        btn5.style.backgroundColor = 'red'
        btn15.style.border = '4px solid green'
        btn15.style.backgroundColor = 'green'
        const focusTime = document.querySelector("#minute")
        const seconds = document.querySelector("#second")
        let minute15 = 14
        let second = 59
    
        const secondInterval = setInterval(() => {
            second--
            if (minute15 >= 0 && minute15 < 10) {
                focusTime.textContent = `0${minute15}`
            } else {
                focusTime.textContent = minute15
            }
            if (second >= 0 && second < 10) {
                seconds.textContent = `0${second}`
            } else {
                seconds.textContent = second
            }
            if (second === 0) {
                if (second === 0 && minute15 === 0) {
                    alarm.play()
                    focusTime.textContent = '00'
                    seconds.textContent = '00'
                    clearInterval(secondInterval)
                    btn25.disabled = false
                    btn5.disabled = false
                    btn15.disabled = false
                    isClicked5 = false
                    isClicked25 = false
                    isClicked15 = false
                }
                minute15--
                second = 60
            }
        }, 1000)
    }
})



