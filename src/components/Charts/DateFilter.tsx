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
    setDateRange({ ...dateRange, [name]: value });
    if (dateRange.startDate !== '' && dateRange.endDate !== '') {
      handleSubmit(); // Appel de handleSubmit lorsque les deux dates sont saisies
    }
  };

  const handleSubmit = () => {
    onDateRangeSelect(dateRange);
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
