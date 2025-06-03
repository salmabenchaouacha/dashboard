import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';  // Assurez-vous que le chemin est correct
import FacturationFilter from '../FacturationFilter';  // Assurez-vous que le chemin est correct

const ScatterJ = () => {
  const baseTime = new Date('11 Feb 2017 GMT').getTime();
  const yrange = { min: 10, max: 60 };

  // Generate series data
  const generateDayWiseTimeSeries = (baseval, count, yrange) => {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = baseval;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push([x, y]);
      baseval += 86400000; // Increment by one day
      i++;
    }
    return series;
  };

  // Define all series data
  const allSeries = {
    daily: [
      { name: 'Tawer', data: generateDayWiseTimeSeries(baseTime, 30, yrange) },
      { name: 'Mou7a9i9', data: generateDayWiseTimeSeries(baseTime, 30, yrange) },
      { name: 'Esports', data: generateDayWiseTimeSeries(baseTime, 30, yrange) },
      { name: 'Rafi9ni', data: generateDayWiseTimeSeries(baseTime, 30, yrange) }
    ],
    weekly: [
      { name: 'Tawer', data: generateDayWiseTimeSeries(baseTime, 30, yrange) },
      { name: 'Mou7a9i9', data: generateDayWiseTimeSeries(baseTime, 30, yrange) },
      { name: 'Rafi9ni', data: generateDayWiseTimeSeries(baseTime, 30, yrange) }
    ]
  };

  const [selectedFrequency, setSelectedFrequency] = useState('1'); // Default to daily
  const [series, setSeries] = useState([]);

  const handleFrequencyChange = (option) => {
    setSelectedFrequency(option);
    updateSeries(option);
  };

  const handleDateRangeSelect = () => {
    // Just updating the series without filtering by date
    updateSeries(selectedFrequency);
  };

  const updateSeries = (frequency) => {
    if (frequency === '1') {
      setSeries(allSeries.daily);
    } else if (frequency === '7') {
      setSeries(allSeries.weekly);
    }
  };

  const options = {
    chart: {
      height: 350,
      type: 'scatter',
      zoom: { type: 'xy' }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: true } },
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      max: 70
    },
    colors: ["#d946ef", "#a3e635", "#67e8f9", "#fda4af"]
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
      <div className="mb-4 justify-between gap-4 sm:flex items-center">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Comparaison des revenus entre les différents plans d'abonnement:
        </h4>
        <div className="relative z-20 inline-block" style={{ top: '20px', left: '10px' }}>
          <DateFilter onDateRangeSelect={handleDateRangeSelect} />
        </div>
      </div>
      <FacturationFilter onOptionSelected={handleFrequencyChange} />
      <div id="chart">
        <ReactApexChart options={options} series={series} type="scatter" height={350} />
      </div>
    </div>
  );
};

export default ScatterJ;
