import { atom } from 'jotai';

// Frequency: 'daily', 'weekly', 'monthly', 'yearly'
export const frequencyAtom = atom('daily');

// Interval: every X units (starts at 1, never 0)
export const intervalAtom = atom(1);

// Selected days of week for 'weekly'
export const daysOfWeekAtom = atom([]);

// Nth weekday pattern for 'monthly'
export const nthWeekdayAtom = atom({
  week: '',
  day: '',
});

// Date range
export const startDateAtom = atom('');
export const endDateAtom = atom('');
