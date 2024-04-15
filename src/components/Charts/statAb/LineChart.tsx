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
    colors: ['#c4b5fd','#fda4af' ,'#a3e635'],
   
   
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
        name: 'Le nombre des abonnés',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Les nouveaux abonnements',
        data: [101, 40, 28, 31, 22, 180, 120],
      },
      {
        name: ' Les annulations',
        data: [51, 30, 68, 31, 62, 120, 10],
      },
    
    ],
  });

  // ... (same handleReset function as before)

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
      {/* ... (same header as before) */}
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
          Les tendances des abonnements au fil du temps : 
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block">
           
           
          </div>
        </div>
        
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
     
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div  className="flex min-w-100">
            
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-rose-300"  >
              <span   className="block h-2.5 w-full max-w-2.5 rounded-full bg-rose-300"   ></span>
            </span>
            <div className="w-full">
              <p   className="font-semibold text-rose-300 ">Le nombre des abonnés </p>
              
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
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-100">
            
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-lime-400">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-lime-400"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-lime-400"> Les annulations</p>
             
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