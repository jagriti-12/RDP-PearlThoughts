import { useAtom } from 'jotai';
import { startDateAtom, endDateAtom } from '../store/atom';

export default function DateRangePicker() {
  const [startDate, setStartDate] = useAtom(startDateAtom);
  const [endDate, setEndDate] = useAtom(endDateAtom);

  return (
    <div className="p-4 border-t border-gray-300">
      <div className="mb-4">
        <label className="block mb-1 font-medium">Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">End Date (optional):</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2"
        />
      </div>
    </div>
  );
}
