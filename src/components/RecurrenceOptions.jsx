import { useAtom } from 'jotai';
import { frequencyAtom } from '../store/atom';

export default function RecurrenceOptions() {
  const [frequency, setFrequency] = useAtom(frequencyAtom);

  const options = ['daily', 'weekly', 'monthly', 'yearly'];

  return (
    <div className="flex gap-4 p-4">
      {options.map((option) => (
        <label key={option} className="flex items-center space-x-2">
          <input
            type="radio"
            name="frequency"
            value={option}
            checked={frequency === option}
            onChange={() => setFrequency(option)}
          />
          <span className="capitalize">{option}</span>
        </label>
      ))}
    </div>
  );
}
