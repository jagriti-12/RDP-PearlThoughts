import './App.css';
import './index.css';
import RecurrenceOptions from './components/RecurrenceOptions';
import CustomizationOptions from './components/CustomizationOptions';
import DateRangePicker from './components/DateRangePicker';

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recurring Date Picker</h1>
      <RecurrenceOptions />
      <CustomizationOptions />
      <DateRangePicker />
    </div>
  );
}
export default App;