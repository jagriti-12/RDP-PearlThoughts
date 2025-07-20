import { useAtom } from 'jotai';
import {
  frequencyAtom,
  intervalAtom,
  daysOfWeekAtom,
  nthWeekdayAtom,
} from '../store/atom';

const weekdays = [
  'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday', 'Sunday',
];

export default function CustomizationOptions() {
  const [frequency] = useAtom(frequencyAtom);
  const [interval, setInterval] = useAtom(intervalAtom);
  const [daysOfWeek, setDaysOfWeek] = useAtom(daysOfWeekAtom);
  const [nthWeekday, setNthWeekday] = useAtom(nthWeekdayAtom);

  const toggleDay = (day) => {
    if (daysOfWeek.includes(day)) {
      setDaysOfWeek(daysOfWeek.filter((d) => d !== day));
    } else {
      setDaysOfWeek([...daysOfWeek, day]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-600">Every</label>
        <input
          type="number"
          min="1"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1 w-20 text-sm"
        />
        <span className="capitalize text-sm text-gray-700">{frequency}</span>
      </div>

      {frequency === 'weekly' && (
        <div>
          <p className="text-xs uppercase text-gray-500 font-medium mb-2">
            Days of the Week
          </p>
          <div className="flex flex-wrap gap-2">
            {weekdays.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`px-3 py-1.5 rounded-full border text-sm transition
                  ${
                    daysOfWeek.includes(day)
                      ? 'bg-blue-100 text-blue-700 border-blue-400'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {day.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>
      )}

      {frequency === 'monthly' && (
        <div className="space-y-2">
          <p className="text-xs uppercase text-gray-500 font-medium">
            Nth Weekday Pattern
          </p>
          <div className="flex gap-2">
            <select
              value={nthWeekday?.week || ''}
              onChange={(e) =>
                setNthWeekday({
                  ...nthWeekday,
                  week: Number(e.target.value),
                })
              }
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="">Week</option>
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>

            <select
              value={nthWeekday?.day || ''}
              onChange={(e) =>
                setNthWeekday({
                  ...nthWeekday,
                  day: e.target.value,
                })
              }
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="">Day</option>
              {weekdays.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
