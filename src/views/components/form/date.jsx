import { useState } from "react";

export const DateSelect = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const generateYears = (startYear) => {
    const years = [];
    for (let i = startYear; i <= startYear + 10; i++) {
      years.push(i);
    }
    return years;
  };

  const generateMonths = (year) => {
    const months = [];
    const startMonth = year === currentYear ? currentMonth : 1;
    for (let i = startMonth; i <= 12; i++) {
      months.push(i.toString().padStart(2, '0'));
    }
    return months;
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  return (
    <div className="flex gap-2">
      <label>
        Ano:
      </label>
      <select value={selectedYear} onChange={handleYearChange}>
        {generateYears(currentYear).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <label>
        Mês:
      </label>
      <select>
        {generateMonths(selectedYear).map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};
