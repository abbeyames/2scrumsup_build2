let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function createMonth() {
    let month = document.getElementById("month");
    let nameDiv = document.createElement("div");
    nameDiv.className = "dayHeader";
    let names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let d = 0; d < 7; d++) {
        let dayName = document.createElement("div");
        dayName.className = "dayName";
        dayName.innerHTML = '<h1>' + names[d] + '</h1>';       
        nameDiv.appendChild(dayName); 
    }

    month.appendChild(nameDiv);

    for (let r = 0; r < 4; r++) {
        let week = document.createElement("div");
        week.className = "week";
        week.id = `week${r}`;

        for (let c = 0; c < 7; c++) {
            let day = document.createElement("button");
            day.className = "day";
            day.type = "button";
            day.id = `week${r}_day${c}`;
            day.innerHTML = `&nbsp`;
            week.appendChild(day);            
        }

        month.appendChild(week)
    }
}

function createWeek() {
    let week = document.getElementById("week");

    for (let weekday = 0; weekday < 5; weekday++) {
        let day = document.createElement("div");
        day.className = "weekday";
        day.innerHTML = `&nbsp`;
        week.appendChild(day);
    }

}