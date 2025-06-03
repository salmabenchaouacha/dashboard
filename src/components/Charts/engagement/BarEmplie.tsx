import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';

const BarEmplie = () => {
  const [series, setSeries] = useState([]);

  const handleDateRangeSelect = (dateRange) => {
    console.log('Selected date range:', dateRange);

    // Mettre à jour les données en fonction de la plage de dates sélectionnée
    const newSeries = [
      {
        name: 'Le nombre de connections quotidiennes',
        data: [440, 550, 410, 370]
      },
      {
        name: 'Le nombre de connections hebdomadaires',
        data: [530, 320, 330, 520]
      },
    ];

    setSeries(newSeries);
  };

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
      categories: ['Tawer', 'Mouhakik', 'Esports', 'RafikniPlus'],
    },
    fill: {
      opacity: 1
    },
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#a5f3fc', '#fecdd3'],
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            La répartition de l'utilisation des services par les abonnés quotidiens et hebdomadaires :
          </h4>
        </div>
        <div className="relative z-20 inline-block" style={{ top: '20px', left: '10px' }}>
          <DateFilter onDateRangeSelect={handleDateRangeSelect} />
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#a5f3fc]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#a5f3fc]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#a5f3fc]">La mesure d'engagement quotidienne</p>
            </div>
          </div>
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#fecdd3]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#fecdd3]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#fecdd3]">La mesure d'engagement hebdomadaire</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div>
          <div style={{ width: '300%' }}>
            <div id="chartTwo" className="-ml-1">
              <ReactApexChart options={options} series={series} type="bar" height={350} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarEmplie;
