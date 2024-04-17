import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart: React.FC = () => {
  const [series, setSeries] = useState([
    {
      name: 'Le taux de rétention des abonnés quotidiens ',
      data: [44]
    },
    {
      name: '  Le taux de rétention des abonnés hebdomadaires',
      data: [76]
    },
   
  ]);

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
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
      categories: [''],
    },
    yaxis: {
      title: {
        text: 'DT'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return "" + val + " DT"
        }
      }
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
          Les taux de rétention des abonnés quotidiens et hebdomadaires:
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
              <p className="font-semibold text-rose-300"> Fréquence de facturation quotidienne </p>
            </div>
          </div>
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-violet-300">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-violet-300"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-violet-300">Fréquence de facturation hebdomadaire</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div style={{ width: '120%' }}> {/* Utilisation des styles inline pour étirer le graphique */}
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
