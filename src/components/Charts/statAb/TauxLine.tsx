import React from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter'; // Importez le composant DateFilter

const LineChart = () => {
  const dates = [
    [1327359600000,30.95],
    [1327446000000,31.34],
    [1327532400000,31.18],
    [1327618800000,31.05],
    [1327878000000,32.04],
    [1327964400000,32.96],
    [1328050800000,33.28]
    // Ajoutez vos données ici
  ];
  
  
  const options = {
    series: [{
      name: 'Le taux de désabonnement:',
      data: dates
    }],
    colors: ['#fbcfe8'],
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
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val.toFixed(2)
        }
      }
    },
    
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">

<div className="relative">
  <h4 className="text-xl font-semibold text-black dark:text-white">
  L'évolution du taux de désabonnement au fil du temps :
  </h4>
  <div className="absolute top-5 right-0 mt-4 mr-4">
    <DateFilter />
  </div>
</div>

      <div id="chart">
        <ReactApexChart options={options} series={options.series} type="area" height={350} />
      </div>
    </div>
  );
};

export default LineChart;
