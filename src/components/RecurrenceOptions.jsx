import { useAtom } from 'jotai';
import { frequencyAtom } from '../store/atom';

export default function RecurrenceOptions() {
  const [frequency, setFrequency] = useAtom(frequencyAtom);

  const options = ['daily', 'weekly', 'monthly', 'yearly'];

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setFrequency(option)}
          className={`px-4 py-2 rounded-full border text-sm capitalize transition-colors mb-4
            ${
              frequency === option
                ? 'bg-blue-100 text-blue-700 border-blue-400'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }
          `}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
