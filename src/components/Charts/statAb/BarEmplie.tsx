import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import YearFilter from '../YearFilter';

const BarEmplie = () => {
  const [series, setSeries] = useState([
    {
      name: ' Les nouveaux abonnements ',
      data: [44, 55, 41, 37, 22, 43, 21, 37, 22, 43, 21,12]
    },
    {
      name: ' Les annulations',
      data: [53, 32, 33, 52, 13, 43, 32, 41, 37, 22, 43, 21]
    },
    // {
    //   name: 'Tank Picture',
    //   data: [12, 17, 11, 9, 15, 11, 20]
    // },
    // {
    //   name: 'Bucket Slope',
    //   data: [9, 7, 5, 8, 6, 9, 4]
    // },
    // {
    //   name: 'Reborn Kid',
    //   data: [25, 12, 19, 32, 25, 24, 10]
    // }
  ]);

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: [ 
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',],
    },
  

    fill: {
      opacity: 1
    },
   
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#c4b5fd', '#fda4af', '#a3e635'],
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
          La répartition des désabonnements :
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-rose-300">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-rose-300"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-rose-300"> Les annulations </p>
            </div>
          </div>
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-violet-300">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-violet-300"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-violet-300">Les nouveaux abonnements</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div>
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

export default BarEmplie;
