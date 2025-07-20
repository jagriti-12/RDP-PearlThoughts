# 📅 Recurring Date Picker — React + Vite + Tailwind + Jotai

A **reusable recurring date picker** inspired by the TickTick app.  
Users can pick recurring schedules like daily, weekly, monthly, or yearly — with flexible custom rules and a live preview of generated dates.

---

## 🚀 Tech Stack

- **React** — modern component-based UI
- **Vite** — fast dev + build tooling
- **Tailwind CSS** — utility-first styling
- **Jotai** — simple atomic state management
- **date-fns** — date calculation helpers
- **Vitest** — unit testing

---

## ✅ Features

- **Frequencies:** Daily, Weekly, Monthly, Yearly
- **Custom Rules:** Every X days/weeks/months/years, multiple weekdays, nth weekday patterns
- **Date Range:** Start date & optional end date
- **Mini Calendar Preview:** Displays upcoming generated dates in real time
- **Reusable Structure:** Split into clean, reusable React components
- **Tested Logic:** Core date generator covered with unit tests

---

## 📂 Project Structure

src/
├── components/
│ ├── RecurrenceOptions.jsx
│ ├── CustomizationOptions.jsx
│ ├── DateRangePicker.jsx
│ └── CalendarPreview.jsx
├── store/
│ └── atom.js
├── utils/
│ ├── generateDates.js
│ └── generateDates.test.js
├── App.jsx


---

## ⚡️ Getting Started


1️⃣ **Install dependencies**
```bash
npm install

npm run dev

npm run test

## 👋 Author- Jagriti Sachdeva
**This is part of a frontend assignment.**