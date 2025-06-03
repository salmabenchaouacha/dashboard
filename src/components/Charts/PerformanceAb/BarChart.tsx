import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
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

const BarChart = () => {
  const [series, setSeries] = useState([]); // Initial empty data

  const handleDateRangeSelect = (dateRange) => {
    // Replace this with your logic to fetch or compute data based on the date range
    console.log('Selected date range:', dateRange);
    
    const newData = [
      {
        name: 'Tawer ',
        data: [44, 56, 80]
      },
      {
        name: 'Mou7a9i9',
        data: [76, 100, 40]
      },
      {
        name: 'Esports',
        data: [76, 30, 96]
      },
      {
        name: 'Rafi9ni',
        data: [76, 26, 67]
      }
    ];

    // Update the series state with the new data
    setSeries(newData);
  };

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      width: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '80%',
        endingShape: 'rounded',
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 5,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Nombre des abonnements', 'Les revenus', 'Les taux de rétention'],
    },
    yaxis: {
      title: {
        text: ''
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "" + val + " DT";
        }
      }
    },
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#c4b5fd', "#fecdd3", "#a5f3fc", "#f0abfc"],
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Comparaison des mesures d’abonnement entre les services:
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block" style={{ top: '20px', left: '10px' }}>
            <DateFilter onDateRangeSelect={handleDateRangeSelect} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#c4b5fd]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#c4b5fd]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#c4b5fd]"> Tawer </p>
            </div>
          </div>
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#fecdd3]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#fecdd3]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#fecdd3]"> Mou7a9i9 </p>
            </div>
          </div>
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#a5f3fc]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#a5f3fc]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#a5f3fc]"> Esports</p>
            </div>
          </div>
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#f0abfc]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#f0abfc]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#f0abfc]"> Rafi9ni</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div style={{ width: '120%' }}>
          <div id="chartTwo" className="-ml-1">
            <ReactApexChart
              options={options}
              series={series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
