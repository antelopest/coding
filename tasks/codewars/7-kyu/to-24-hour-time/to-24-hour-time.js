/*
Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!
You will have to define a function, which will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either "am" or "pm") as input.
Your task is to return a four-digit string that encodes that time in 24-hour time.

12:15 am => 0015

padStart method
*/

const to24hourtime = (hour, minute, period) => {

    if (period === 'am') {
        hour = hour === 12 ? 0 : hour;
    }

    if (period === 'pm') {
        hour = hour < 12 ? hour + 12 : hour;
    }

    const fillFormat = value => String(value).length === 2 ? `${value}` : `0${value}`;

    return Array(2).fill(0).map((e, i) => {
        if (i === 0) return fillFormat(hour);

        return fillFormat(minute);
    }).join('');
}

console.log(to24hourtime(12, 0, 'pm'));

/*
* Best Practices
* */

function to24hourTime(hour, minute, period) {
    if (period === "am" && hour === 12) {
        hour = 0;
    } else if (period === "pm" && hour !== 12) {
        hour += 12;
    }
    return hour.toString().padStart(2, "0") + minute.toString().padStart(2, "0");
}