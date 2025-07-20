import { useAtom } from 'jotai';
import { startDateAtom, endDateAtom } from '../store/atom';

export default function DateRangePicker() {
  const [startDate, setStartDate] = useAtom(startDateAtom);
  const [endDate, setEndDate] = useAtom(endDateAtom);

  return (
    <div className='border border-gray-200 rounded-md bg-gray-50 p-4 mt-6'>
      <div className="space-y-4">
      <div className="flex flex-col">
        <label className="text-xs uppercase text-gray-500 mb-1">
          Start Date
        </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-xs uppercase text-gray-500 mb-1">
          End Date (Optional)
        </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm"
        />
      </div>
    </div>
    </div>
    
  );
}
