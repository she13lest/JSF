export function shmoment(date) {
    const result = new Date(date);

    const changingDate = {

    add(type, value) {
        if (type === 'years') {
            result.setFullYear(result.getFullYear() + value);
        } else if (type === 'months') {
            result.setMonth(result.getMonth() + value);
        } else if (type === 'days') {
            result.setDate(result.getDate() + value);
        } else if (type === 'hours') {
          result.setHours(result.getHours() + value);
        } else if (type === 'minutes') {
          result.setMinutes(result.getMinutes() + value);
        } else if (type === 'seconds') {
          result.setSeconds(result.getSeconds() + value);
        } else if (type === 'milliseconds') {
          result.setMilliseconds(result.getMilliseconds() + value);
        } return this;
    },
    subtract(type, value) {
        if (type === 'years') {
            result.setFullYear(result.getFullYear() + value);
        } else if (type === 'months') {
            result.setMonth(result.getMonth() + value);
        } else if (type === 'days') {
            result.setDate(result.getDate() + value);
        } else if (type === 'hours') {
          result.setHours(result.getHours() + value);
        } else if (type === 'minutes') {
          result.setMinutes(result.getMinutes() + value);
        } else if (type === 'seconds') {
          result.setSeconds(result.getSeconds() + value);
        } else if (type === 'milliseconds') {
          result.setMilliseconds(result.getMilliseconds() + value);
        } return this;
        }, 
        result() {
            return result;
        }
    }
    return changingDate;
}

const newCount = shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result();

console.log(newCount)