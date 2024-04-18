import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';
const options: ApexOptions = {
  // ... (same options as before)
 
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#99f6e4'],
   
   
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
        name: ' le taux de désabonnement  :',
        data: [51, 30, 68, 31, 62, 120, 10],
      },
    
    ],
  });

  // ... (same handleReset function as before)

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
      {/* ... (same header as before) */}
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
          Les variations des taux de désabonnement au fil du temps :

          </h4>
        </div>
        <div>
        <div className="relative z-20 inline-block" style={{ top: '20px',left: '10px' }}>
        
        <DateFilter/>
     
          
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