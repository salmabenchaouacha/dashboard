import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';

const options: ApexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#93c5fd', '#f0abfc'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  xaxis: {
    type: 'datetime',
    labels: {
      datetimeFormatter: {
        year: 'yyyy',
        month: 'MMM yyyy',
        day: 'dd MMM',
      },
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: [Date, number][];
  }[];
}

const ChartOne: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Le total des abonnements',
        data: [
          [new Date('2023-09-01'), 23],
          [new Date('2023-10-01'), 11],
          // Ajoutez d'autres données avec des dates
        ],
      },
      {
        name: 'Le total des abonnements',
        data: [
          [new Date('2023-09-01'), 30],
          [new Date('2023-10-01'), 25],
          // Ajoutez d'autres données avec des dates
        ],
      },
    ],
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            La répartition des abonnements par fréquence de facturation :
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block" style={{ top: '20px', left: '10px' }}>
            <DateFilter />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-indigo-300">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-indigo-300"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-indigo-300">Fréquence de facturation quotidienne</p>
            </div>
          </div>
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-fuchsia-300">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-fuchsia-300"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-fuchsia-300">Fréquence de facturation hebdomadaire</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
