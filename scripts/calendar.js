// ***
// Code adapted from https://www.youtube.com/watch?v=krOTeX1DqHI&ab_channel=JadJoubran
// ***

const calendar = document.getElementById("app-calendar");
console.log("Calendar: " + calendar);


// import {isWeekend, getDayName} from "./date-helpers.js";
const isWeekend = day => {
    // 6 is Saturday, 0 is Sunday
    return day % 7 === 6 || day % 7 === 0;
}

const getDayName = day => {
    const date =  new Date(2018, 0, day);
    console.log("Date: " + date);

    
    console.log(date.toLocaleDateString("en-US", {weekday: 'long'}))
    return date.toLocaleDateString("en-US", {weekday: 'long'});

    // let dayName = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date)
    // console.log("Day Name: " + dayName);

    // return dayName;
}


for (let day = 1; day <= 31; day++) {
    console.log("Day: " + day);

    const weekend = isWeekend(day);
    console.log("Weekend: " + weekend ? "weekend" : "")

    let name = "";
    if (day <= 7) {
        const dayName = getDayName(day);
        name = `<div class="name">${dayName}</div>`;
    }

    let html = `<div class="day ${weekend ? "weekend" : ""}">${name}${day}</div>`;

    calendar.insertAdjacentHTML("beforeend", html);
}

document.querySelectorAll("#app-calendar .day").forEach(day => {
    day.addEventListener("click", event => {
        event.currentTarget.classList.toggle("selected");
    })
})