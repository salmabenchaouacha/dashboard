import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  // ... (same options as before)
 
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ["#fecdd3","#a5f3fc","#f0abfc"],
   
   
  }
 

interface LineChartState {
  series: {
    name: string;
    data: number[];
  }[];
}

const LineChart: React.FC = () => {

  const [state, setState] = useState<LineChartState>({
    series: [
      
      
      {
        name: ' Le nombre des abonnement  :',
        data: [51, 30, 68, 31, 62, 120, 10],
      },
      {
        name: ' Les revenus  :',
        data: [60, 80, 18, 51, 32, 90, 100],
      },
      {
        name: ' Le taux de rétention  :',
        data: [31, 60, 78, 21, 32, 120, 60],
      },
    
    ],
  });

  // ... (same handleReset function as before)

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
    <div className="mb-4 justify-between gap-4 sm:flex ">
      <div>
        <h4 className="text-xl font-semibold text-black dark:text-white">
        Les variations  des mesures d’abonnement:
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
          <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#fecdd3]">
            <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#fecdd3]"></span>
          </span>
          <div className="w-full">
            <p className="font-semibold text-[#fecdd3]"> Nombre des abonnements </p>
          </div>
        </div>
        <div className="flex min-w-100">
          <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#a5f3fc]">
            <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#a5f3fc]"></span>
          </span>
          <div className="w-full">
            <p className="font-semibold text-[#a5f3fc]">  Les revenus</p>
          </div>
        </div>
        <div className="flex min-w-100">
          <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#f0abfc]">
            <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#f0abfc]"></span>
          </span>
          <div className="w-full">
            <p className="font-semibold text-[#f0abfc]">   Les taux de rétention</p>
          </div>
        </div>
      </div>
    </div>
    
        
      
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        {/* ... (same chart legend as before) */}
      </div>
      <div>
        <div id="chartTwo" className="-ml-5">
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

export default LineChart;