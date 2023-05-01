let  daysEl  =   document.getElementById("days-p");
let hoursEl   =    document.getElementById("hours-p");
let minEl   =document.getElementById("min-p");
let secEl   =document.getElementById("sec-p");
 

const newYears="1 Jan 2024";

function countdown(){
    const newYeardate= new Date (newYears);
     const currentDate = new Date();
    const totalSeconds =(newYeardate-currentDate)/1000

    const  days =Math.floor(totalSeconds/3600/24)
    const hours=Math.floor(totalSeconds/3600)%24
    const min =Math.floor(totalSeconds/60)%60
    const sec =Math.floor(totalSeconds)%60


    daysEl .innerHTML =days
    hoursEl.innerHTML = hours
    minEl .innerHTML =min
    secEl.innerHTML =sec

}
countdown()

setInterval(countdown,1000)