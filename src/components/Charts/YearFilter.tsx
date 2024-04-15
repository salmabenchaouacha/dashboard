import React, { useState } from 'react';

const YearFilter = ({ years, selectedYear, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="year">Choisir une année :</label>
      <select id="year" value={selectedYear} onChange={handleChange}>
        <option value="">Toutes les années</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearFilter;
