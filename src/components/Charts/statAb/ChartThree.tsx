import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut',
  },
  colors: ['#a5f3fc', '#bbf7d0'],
  labels: ['Desktop', 'Unknown'],
  legend: {
    show: false,
    position: 'bottom',
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [60, 40],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [60, 40],
    }));
  };
  handleReset;

  return (
    <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-14">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
          Décomposition des abonnements par fréquence de facturation :
          </h5>
        </div>
        <div>
          <div className="relative z-20 inline-block">
          
            <DateFilter/>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-green-200"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span>  fréquence de facturation hebdomadaire </span>
            
            </p>
          </div>
        </div>
        
        
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-cyan-200"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span>  fréquence de facturation quotidienne </span>
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
