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
    <div className="space-y-2">
      <p className="text-xs uppercase text-gray-500 font-medium">
        Upcoming Dates
      </p>

      <div className="border border-gray-200 rounded-md bg-gray-50 p-3 max-h-40 overflow-y-auto text-sm">
        {dates.length === 0 ? (
          <p className="text-gray-400 italic">No dates to display yet.</p>
        ) : (
          <ul className="space-y-1">
            {dates.map((date) => (
              <li key={date} className="text-gray-700">
                {date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
