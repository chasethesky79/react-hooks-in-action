function addDays(date, daysToAdd) {
    const clone = new Date(date.getTime());
    clone.setDate(clone.getDate() + daysToAdd);
    return clone;
}
export default function getWeek(date, daysToOffset = 0) {
    const dayOfTheWeek = addDays(date.getDay(), daysToOffset);
    const start = addDays(date, -dayOfTheWeek);
    const end = addDays(date, 6 - dayOfTheWeek);
    return {
      date,
      start,
      end
    }
}