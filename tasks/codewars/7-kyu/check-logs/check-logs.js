/*
You will be given an array of events, which are represented by strings. The strings are dates in HH:MM:SS format.
It is known that all events are recorded in chronological order and two events can't occur in the same second.
Return the minimum number of days during which the log is written.

Вам будет предоставлен массив событий, которые представлены строками. Строки представляют собой даты в формате ЧЧ:ММ:СС.
Известно, что все события записываются в хронологическом порядке, и два события не могут произойти в одну и ту же секунду.
Возвращает минимальное количество дней, в течение которых ведется запись в журнал.

 ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"] ==> 1
 ["12:12:12"] ==> 1
 ["12:00:00", "23:59:59", "00:00:00"] ==> 2
*/
const checkLogs = logs => {
    const days = logs.length === 0 ? 0 : logs.reduce((result, log, index) => {

        let seconds = 0;

        log.split(':').forEach((element, index) => {
            const numberElement = Number(element);

            if (index === 0 && numberElement > 0) {
                seconds += numberElement * 60 * 60;
            }

            if (index === 1 && numberElement > 0) {
                seconds += numberElement * 60;
            }

            if (index === 2 && numberElement > 0) {
                seconds += numberElement;
            }
        });

        if (result.lastLog !== null) {
            if (result.lastLog >= seconds) {
                result.days += 1;
            }
        }

        result.lastLog = seconds;

        return result;
    }, { days: 1, lastLog: null }).days;

    return days;
}

console.log(checkLogs(["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]));
console.log(checkLogs(["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59", "00:01:11"]));
console.log(checkLogs([
    '00:00:00', '00:00:00', '00:00:00',
    '00:00:00', '00:00:00', '00:00:00',
    '00:00:00', '00:00:00', '00:00:00',
    '00:00:00', '00:00:00', '00:00:00',
    '00:00:00', '00:00:00', '00:00:00',
    '00:00:00', '00:00:00', '00:00:00',
    '00:00:00', '00:00:00', '00:00:00',
    '00:00:00', '00:00:00', '00:00:00',
    '00:00:00', '00:00:00', '00:00:00',
    '00:00:00', '00:00:00', '00:00:00'
]));
console.log(checkLogs([]));