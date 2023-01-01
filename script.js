let date = document.querySelector(".hour")
let minute = document.querySelector(".min")
let second = document.querySelector(".s")


setInterval(function timer() {
    const newDate = new Date();
    
    date.textContent = newDate.getHours();
    minute.textContent = newDate.getMinutes();
    second.textContent = newDate.getSeconds();

    if (date.textContent < 10 ) {
        date.textContent = "0" + date.textContent;
    }if (minute.textContent < 10) {
        minute.textContent = "0" + minute.textContent;
    }if (second.textContent < 10) {
        second.textContent = "0" + second.textContent;
    }
        
    
})