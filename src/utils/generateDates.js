import {
  addDays,
  addWeeks,
  addMonths,
  addYears,
  format,
  isAfter,
  isBefore,
  isEqual,
  getDay,
  getDate,
} from 'date-fns';

const weekdayIndex = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

export function generateRecurringDates({
  frequency,
  interval,
  daysOfWeek,
  nthWeekday,
  startDate,
  endDate,
}) {
  if (!startDate) return [];

  let result = [];
  let current = new Date(startDate);
  const end = endDate ? new Date(endDate) : addYears(current, 1); // default 1 year max

  while (isBefore(current, end) || isEqual(current, end)) {
    switch (frequency) {
      case 'daily': {
        result.push(format(current, 'yyyy-MM-dd'));
        current = addDays(current, interval);
        break;
      }

      case 'weekly': {
        if (daysOfWeek.length === 0) {
          result.push(format(current, 'yyyy-MM-dd'));
          current = addWeeks(current, interval);
        } else {
          // Find all matching days in this week:
          daysOfWeek.forEach((day) => {
            const dayNum = weekdayIndex[day];
            const candidate = addDays(current, (7 + dayNum - getDay(current)) % 7);
            if (
              (isAfter(candidate, new Date(startDate)) || isEqual(candidate, new Date(startDate))) &&
              (isBefore(candidate, end) || isEqual(candidate, end)) &&
              !result.includes(format(candidate, 'yyyy-MM-dd'))
            ) {
              result.push(format(candidate, 'yyyy-MM-dd'));
            }
          });
          current = addWeeks(current, interval);
        }
        break;
      }

      case 'monthly': {
        if (nthWeekday && nthWeekday.week && nthWeekday.day) {
          const dayNum = weekdayIndex[nthWeekday.day];
          const year = current.getFullYear();
          const month = current.getMonth();

          let date = new Date(year, month, 1);
          let count = 0;

          while (date.getMonth() === month) {
            if (date.getDay() === dayNum) {
              count++;
              if (count === nthWeekday.week) {
                break;
              }
            }
            date = addDays(date, 1);
          }

          if (
            (isAfter(date, new Date(startDate)) || isEqual(date, new Date(startDate))) &&
            (isBefore(date, end) || isEqual(date, end))
          ) {
            result.push(format(date, 'yyyy-MM-dd'));
          }

          current = addMonths(current, interval);
        } else {
          result.push(format(current, 'yyyy-MM-dd'));
          current = addMonths(current, interval);
        }
        break;
      }

      case 'yearly': {
        result.push(format(current, 'yyyy-MM-dd'));
        current = addYears(current, interval);
        break;
      }

      default:
        return [];
    }

    // Safety limit to avoid infinite loops
    if (result.length >= 50) break;
  }

  result.sort();
  return result;
}
