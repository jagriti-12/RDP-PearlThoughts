import { useAtom } from 'jotai';
import {
  frequencyAtom,
  intervalAtom,
  daysOfWeekAtom,
  nthWeekdayAtom,
} from '../store/atom';

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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
    <div className="p-4 border-t border-gray-300">
      <div className="mb-4">
        <label className="mr-2">Every</label>
        <input
          type="number"
          min="1"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="border p-1 w-16"
        />
        <span className="ml-2 capitalize">{frequency}</span>
      </div>

      {frequency === 'weekly' && (
        <div className="mb-4">
          <label className="block mb-2">Select Days:</label>
          <div className="flex flex-wrap gap-2">
            {weekdays.map((day) => (
              <label key={day} className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  checked={daysOfWeek.includes(day)}
                  onChange={() => toggleDay(day)}
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {frequency === 'monthly' && (
        <div className="mb-4">
          <label className="block mb-2">Nth Weekday Pattern:</label>
          <div className="flex gap-2">
            <select
              value={nthWeekday?.week || ''}
              onChange={(e) =>
                setNthWeekday({
                  ...nthWeekday,
                  week: Number(e.target.value),
                })
              }
              className="border p-1"
            >
              <option value="">Select week</option>
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
              className="border p-1"
            >
              <option value="">Select day</option>
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
