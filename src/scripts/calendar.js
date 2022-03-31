let today           = new Date();
let dayNames        = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDay      = dayNames[today.getDay()];
let monthNames      = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let currentMonth    = monthNames[today.getMonth()];
let currentYear     = today.getFullYear();

function initialize() {
    console.log('Page is being initialized');

    let dateHeader          = document.getElementById("dateHeader");
    dateHeader.innerHTML    = today.toDateString();
    let weekDate            = document.getElementById("weekDate");
    weekDate.innerHTML      = generateWeek(today);
    let monthName           = document.getElementById("monthName");
    monthName.innerHTML     = currentMonth;

    buildDay();
    buildWeek();

    changeView('day');
}

function changeView(view) {
    // Hide all calendars
    let day     = document.getElementById("dayCalendar");
    let week    = document.getElementById("weekCalendar");
    let month   = document.getElementById("monthCalendar");

    day.style.display       = "none";
    week.style.display      = "none";
    month.style.display     = "none";

    // Enable selected calendar
    switch(view) {
        case 'day': 
            console.log('Day calendar is being shown');
            day.style.display   = "block";
            break;
        case 'week': 
            console.log('Week calendar is being shown');
            week.style.display  = "block";
            break;
        case 'month': 
            console.log('Month calendar is being shown');
            month.style.display = "block";
            buildMonth();
            generateMonth(today);
            break;
    }
}

function buildDay() {
    // Builds the day calendar with a time schedule

    let day                 = document.getElementById("dayCalendar");
    let daySchedule         = document.createElement("table");
    daySchedule.className   = "daySchedule";
    let dayEnd              = 18;

    for (let dayStart = 9; dayStart < dayEnd; dayStart++) {
        let tableRow            = document.createElement("tr");

        let timeCol             = document.createElement("td");
        if (dayStart > 12) {
            timeCol.innerHTML = (dayStart - 12) + ':00 PM';
        } else {
            timeCol.innerHTML = dayStart + ':00 AM';
        }
        timeCol.className       = "time";
        let entry               = document.createElement("td");
        // entry.innerHTML      = `&nbsp;`;
        entry.className         = "entry";

        tableRow.appendChild(timeCol);
        tableRow.appendChild(entry);
        daySchedule.appendChild(tableRow);
    }
    day.appendChild(daySchedule);
}

function buildWeek() {
    // Builds the week calendar with a time schedule

    let weeks = document.getElementsByClassName("timeSchedule");

    for (let weekday = 0; weekday < 7; weekday++) {
        let schedule                = document.createElement("table");
        schedule.className          = "weekSchedule";
        let dayEnd                  = 18;

        for (let dayStart = 9; dayStart < dayEnd; dayStart++) {
            let tableRow            = document.createElement("tr");

            let timeCol             = document.createElement("td");
            if (dayStart > 12) {
                timeCol.innerHTML   = (dayStart - 12) + ':00 PM';
            } else {
                timeCol.innerHTML   = dayStart + ':00 AM';
            }
            timeCol.className       = "time";
            let entry               = document.createElement("td");
            // entry.innerHTML      = `&nbsp;`;
            entry.className         = "entry";

            tableRow.appendChild(timeCol);
            tableRow.appendChild(entry);
            schedule.appendChild(tableRow);
        }
        
        weeks[weekday].appendChild(schedule);
    }

}

function generateWeek(givenDate) {
    // Generates the date for the week calendar

    // Get dates for the current week
    let givenDateDay = dayNames[givenDate.getDay()];
    let sun;
    let sat;
    let sunDate;
    let satDate;

    // Start with given date: which day of the week is it?
    switch (givenDateDay) {
        case 'Sunday':
            sun     = givenDate.toLocaleDateString();
            satDate = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate()+6);
            sat     = satDate.toLocaleDateString();
            break;
        case 'Monday':
            sunDate = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate()-1);
            sun     = sunDate.toLocaleDateString();
            satDate = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate()+5);
            sat     = satDate.toLocaleDateString();
            break;
        case 'Tuesday':
            sunDate = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate()-2);
            sun     = sunDate.toLocaleDateString();
            satDate = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate()+4);
            sat     = satDate.toLocaleDateString();
            break;
        case 'Wednesday':
            sunDate = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate()-3);
            sun     = sunDate.toLocaleDateString();
            satDate = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate()+3);
            sat     = satDate.toLocaleDateString();
            break;
        case 'Thursday':
            sunDate = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate()-4);
            sun     = sunDate.toLocaleDateString();
            satDate = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate()+2);
            sat     = satDate.toLocaleDateString();
            break;
        case 'Friday':
            sunDate = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate()-5);
            sun     = sunDate.toLocaleDateString();
            satDate = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate()+1);
            sat     = satDate.toLocaleDateString();
            break;
        case 'Saturday':
            sunDate = new Date(givenDate.getFullYear(), givenDate.getMonth(), givenDate.getDate()-6);
            sun     = sunDate.toLocaleDateString();
            sat     = givenDate.toLocaleDateString();
            break;
    }

    // Return week date to Sunday's date - Saturday's date
    return `${sun} - ${sat}`;
}

function buildMonth() {
    // Builds the month table with the ids for the boxes

    let monthTable          = document.getElementById("monthTable");

    for (let r = 0; r < 5; r++) {
        let row             = document.createElement("tr");
        row.className       = `r${r}`;

        for (let c = 0; c < 7; c++) {
            let box         = document.createElement("td");
            box.id          = `box_r${r}c${c}`;
            box.className   = "monthBox";
            box.innerHTML   = `<div id="div_r${r}c${c}" class="boxDiv"></div>`;

            row.appendChild(box);
        }

        monthTable.appendChild(row);
    }
}

function generateMonth(givenDate) {
    // Populates the month table with dates

    let startDay        = givenDate.getDate();
    let givenMonth      = givenDate.getMonth() + 1;
    let givenYear       = givenDate.getFullYear();

    // What day of the week does the 1st day of the month start?
    let firstDay        = new Date(`${givenYear}-${givenMonth}-01`);
    // console.log(firstDay);
    let firstDayBoxCol  = firstDay.getDay();
    // console.log(firstDayBoxCol);

    // How many days are in the current month?
    let monthDays       = getDaysInMonth(givenYear, givenMonth);
    // console.log(monthDays);

    // Populate day numbers in month table
    let days = 0;
    
    while (days < monthDays) {
        rowNum = 0;

        for (let colNum = firstDayBoxCol; colNum < 7; colNum++) {
            let box         = document.getElementById(`box_r${rowNum}c${colNum}`);
            box.innerHTML   = `<h3>${days}</h3>`;
        }

        rowNum++;
    }

    // Link each box to the day view
}

function getDaysInMonth(year, month) {
    // Returns the number of days in a given month during a given year
    return new Date(year, month, 0).getDate();
}