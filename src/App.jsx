import './App.css';
import './index.css';
import { Analytics } from "@vercel/analytics/next"
import RecurrenceOptions from './components/RecurrenceOptions';
import CustomizationOptions from './components/CustomizationOptions';
import DateRangePicker from './components/DateRangePicker';
import CalendarPreview from './components/CalendarPreview';

function App() {
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center justify-center">
            Recurring Date Picker
          </h1>
          <h2 className="text-sm uppercase text-gray-500 font-semibold mb-1 flex items-center justify-center">
            RDP SYSTEM
          </h2>
        </div>

        <RecurrenceOptions />
        <CustomizationOptions />
        <DateRangePicker />
        <CalendarPreview />
      </div>
    </div>
  );
}

export default App;
