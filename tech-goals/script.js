//display current time and day of the week in UTC using arrow function

const currentTimeAndDay = () => {
    const now = new Date();
    const timeUTC = now.toUTCString().split(' ')[4];
    const dayUTC = now.toUTCString().split(' ')[0];

    document.getElementById('currentTimeUTC').textContent = timeUTC;
    document.getElementById('currentDay').textContent = dayUTC;
};

currentTimeAndDay();
setInterval(currentTimeAndDay, 1000);