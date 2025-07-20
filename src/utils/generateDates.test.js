import { describe, it, expect } from 'vitest';
import { generateRecurringDates } from './generateDates';

describe('generateRecurringDates', () => {
  it('generates daily dates correctly', () => {
    const dates = generateRecurringDates({
      frequency: 'daily',
      interval: 1,
      daysOfWeek: [],
      nthWeekday: null,
      startDate: '2025-07-20',
      endDate: '2025-07-23',
    });

    expect(dates).toEqual([
      '2025-07-20',
      '2025-07-21',
      '2025-07-22',
      '2025-07-23',
    ]);
  });
});
