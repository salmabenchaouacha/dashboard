import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import FacturationFilter from '../FacturationFilter';
import DateFilter from '../DateFilter';

const options: ApexOptions = {
  // ... (mêmes options qu'avant)
 
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

const LineR: React.FC = () => {

  const [state, setState] = useState<LineChartState>({
    series: [
      
      
      {
        name: ' Les revenus',
        data: [51, 30, 68, 31, 62, 120, 10],
      },
    
    ],
  });

  // ... (même fonction handleReset qu'avant)

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
      {/* Titre et filtres */}
      <div className="mb-4 justify-between gap-4 sm:flex items-center">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Les tendances des revenus générés par les abonnements : 
          </h4>
         
          <FacturationFilter />
      
        </div>
        <div className="relative z-40 inline-block">
            <DateFilter/>
          </div>
      </div>
      {/* Chart */}
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        {/* ... (même légende de graphique qu'avant) */}
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

export default LineR;
