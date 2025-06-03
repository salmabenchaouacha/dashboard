import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';
import FacturationFilter from '../FacturationFilter'; // Importez le composant FacturationFilter

const LineE = () => {
  const [series, setSeries] = useState([]);

  const generateRandomData = () => {
    const dates = [
      [1327359600000, Math.random() * 100],
      [1327446000000, Math.random() * 100],
      [1327532400000, Math.random() * 100],
      [1327618800000, Math.random() * 100],
      [1327878000000, Math.random() * 100],
      [1327964400000, Math.random() * 100],
      [1328050800000, Math.random() * 100]
      // Ajoutez vos données ici
    ];
    return dates;
  };

  const handleDateRangeSelect = () => {
    const newSeries = [{
      name: 'Le nombre des connections',
      data: generateRandomData()
    }];
    setSeries(newSeries);
  };

  const options = {
    series: series,
    colors: ['#a5f3fc'],
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: 'zoom'
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        }
      }
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val.toFixed(2);
        }
      }
    },
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
      <div className="relative">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          les tendances de l'engagement des utilisateurs au fil du temps :
        </h4>
        <div className="absolute top-5 right-0 mt-4 mr-4">
          <DateFilter onDateRangeSelect={handleDateRangeSelect} />
        </div>
      </div>
      <FacturationFilter /> {/* Utilisez le composant FacturationFilter ici */}
      <div id="chart">
        <ReactApexChart options={options} series={series} type="area" height={350} />
      </div>
    </div>
  );
};

export default LineE;
