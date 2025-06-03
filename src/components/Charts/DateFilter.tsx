import React, { useState } from 'react';
import styled from 'styled-components';

const DatePickerWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const DateRangePickerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DateInput = styled.input`
  padding: 2px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 2px;
  font-size: 12px;
`;

const DateFilter = ({ onDateRangeSelect }) => {
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const newDateRange = { ...dateRange, [name]: value };
    setDateRange(newDateRange);
    
    // Vérifiez si les deux dates sont présentes
    if (newDateRange.startDate !== '' && newDateRange.endDate !== '') {
      onDateRangeSelect(newDateRange);
    }
  };

  return (
    <DatePickerWrapper>
      <DateRangePickerContainer>
        <DateInput
          type="date"
          name="startDate"
          value={dateRange.startDate}
          onChange={handleDateChange}
        />
        <DateInput
          type="date"
          name="endDate"
          value={dateRange.endDate}
          onChange={handleDateChange}
        />
      </DateRangePickerContainer>
    </DatePickerWrapper>
  );
};

export default DateFilter;
