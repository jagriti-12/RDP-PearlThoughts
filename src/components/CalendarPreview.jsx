import { useAtom } from 'jotai';
import {
  frequencyAtom,
  intervalAtom,
  daysOfWeekAtom,
  nthWeekdayAtom,
  startDateAtom,
  endDateAtom,
} from '../store/atom';

import { generateRecurringDates } from '../utils/generateDates';

export default function CalendarPreview() {
  const [frequency] = useAtom(frequencyAtom);
  const [interval] = useAtom(intervalAtom);
  const [daysOfWeek] = useAtom(daysOfWeekAtom);
  const [nthWeekday] = useAtom(nthWeekdayAtom);
  const [startDate] = useAtom(startDateAtom);
  const [endDate] = useAtom(endDateAtom);

  const dates = generateRecurringDates({
    frequency,
    interval,
    daysOfWeek,
    nthWeekday,
    startDate,
    endDate,
  });

  return (
    <div className="p-4 border-t border-gray-300">
      <h2 className="text-lg font-bold mb-2">Preview:</h2>
      {dates.length === 0 ? (
        <p className="text-gray-500">No dates to display yet.</p>
      ) : (
        <ul className="list-disc list-inside">
          {dates.map((date) => (
            <li key={date}>{date}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
