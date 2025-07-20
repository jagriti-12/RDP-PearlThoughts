import { atom } from 'jotai';

// Frequency: daily, weekly, monthly, yearly
export const frequencyAtom = atom('daily');

// Interval: every X units
export const intervalAtom = atom(0);

// Selected days of week
export const daysOfWeekAtom = atom([]);

// Nth weekday pattern (like 2nd Tuesday)
export const nthWeekdayAtom = atom(null);

// Date range
export const startDateAtom = atom('');
export const endDateAtom = atom('');
