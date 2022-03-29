const isWeekend = day => {
    // 6 is Saturday, 0 is Sunday
    return day % 7 === 6 || day % 7 === 0;
}

const getDayName = day => {
    const date =  new Date(2018, 0, day);

    return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
}

export {isWeekend, getDayName}