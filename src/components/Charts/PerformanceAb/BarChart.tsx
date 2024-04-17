import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const BarChart = () => {
  const [series, setSeries] = useState([
    {
      name: 'Tawer ',
      data: [44,56,80]
    },
    {
      name: 'Mou7a9i9',
      data: [76,100,40]
    },
    {
        name: 'Esports',
        data: [76,30,96]
      },
      {
        name: 'Rafi9ni',
        data: [76,26,67]
      }
      
  ]);

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
      categories: ['Nombre des abonnements','Les revenus','Les taux de rétention'],
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
    colors: ['#c4b5fd',"#fecdd3","#a5f3fc","#f0abfc"],
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
      <div className="mb-4 justify-between gap-4 sm:flex ">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
          Comparaison   des mesures d’abonnement entre les services:
:
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
              <p className="font-semibold text-[#f0abfc]">  Rafi9ni</p>
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
