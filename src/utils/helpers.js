export function convertMillisecondsToDateString(ms) {
    const dateObj = new Date(ms);
    const month = dateObj.toLocaleString('en-us', { month: 'short' });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const hour = dateObj.getHours();
    const hour_12 = hour > 12 ? hour - 12 : hour;
    const minutes = dateObj.getMinutes();
    const ampm = hour >= 12 ? 'pm' : 'am';

    return `${month} ${day}, ${year} @ ${hour_12}:${minutes}${ampm}`
}