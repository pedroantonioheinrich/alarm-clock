const btn = [...document.querySelectorAll(".btn")]

// TODO ARRUMAR O PROBLEMA DE DUPLO CLICK NO BOTÃO
// ADICIONAR ALARMES

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', ()=>{
        if(btn[i].value === '25'){
            const focusTime = document.querySelector("#minute")
            const seconds = document.querySelector("#second")
            let minute25 = 24
            let second = 59

            const secondInterval = setInterval(()=>{
                second--
                if(minute25 >= 0 && minute25 < 10){
                        focusTime.textContent = `0${minute25}`
                    }else{
                        focusTime.textContent = minute25
                    }
                if(second >= 0 && second < 10){
                        seconds.textContent = `0${second}`
                    }else{
                        seconds.textContent = second
                    }
                if(second === 0){
                    minute25--
                    second = 60
                    if(minute25 >= 0 && minute25 < 10){
                        focusTime.textContent = `0${minute25}`
                    }else{
                        focusTime.textContent = minute25
                    }
                    if(minute25 < 0){
                        focusTime.textContent = '00'
                        clearInterval(secondInterval)
                    }
                }
            }, 1000)
        }else if(btn[i].value === '5'){
            const shortBrake = document.querySelector("#minute")
            const seconds = document.querySelector("#second")
            let minute5 = 4
            let second = 59

            const secondInterval = setInterval(()=>{
                second--
                if(minute5 >= 0 && minute5 < 10){
                        shortBrake.textContent = `0${minute5}`
                    }else{
                        shortBrake.textContent = minute5
                    }
                if(second >= 0 && second < 10){
                        seconds.textContent = `0${second}`
                    }else{
                        seconds.textContent = second
                    }
                if(second === 0){
                    minute5--
                    second = 60
                    if(minute5 >= 0 && minute5 < 10){
                        shortBrake.textContent = `0${minute5}`
                    }else{
                        shortBrake.textContent = minute5
                    }
                    if(minute5 < 0){
                        shortBrake.textContent = '00'
                        clearInterval(secondInterval)
                    }
                }
            }, 1000)
        }else if(btn[i].value === '15'){
            const longBrake = document.querySelector("#minute")
            const seconds = document.querySelector("#second")
            let minute15 = 14
            let second = 59

            const secondInterval = setInterval(()=>{
                second--
                if(minute15 >= 0 && minute15 < 10){
                        longBrake.textContent = `0${minute15}`
                    }else{
                        longBrake.textContent = minute15
                    }
                if(second >= 0 && second < 10){
                        seconds.textContent = `0${second}`
                    }else{
                        seconds.textContent = second
                    }
                if(second === 0){
                    minute15--
                    second = 60
                    if(minute15 >= 0 && minute15 < 10){
                        longBrake.textContent = `0${minute15}`
                    }else{
                        longBrake.textContent = minute15
                    }
                    if(minute15 < 0){
                        longBrake.textContent = '00'
                        clearInterval(secondInterval)
                    }
                }
            }, 1000)
        }
    })
}



