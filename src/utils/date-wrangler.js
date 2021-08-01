function addDays(date, daysToAdd) {
    const clone = new Date(date.getTime());
    clone.setDate(clone.getDate() + daysToAdd);
    return clone;
}
export default function getWeek(date, daysToOffset = 0) {
    const calculatedDate = addDays(date, daysToOffset);
    const dayOfTheWeek = calculatedDate?.getDay();
    const start = addDays(calculatedDate, -dayOfTheWeek);
    const end = addDays(calculatedDate, 6 - dayOfTheWeek);
    return {
        date,
        start,
        end
      };
}