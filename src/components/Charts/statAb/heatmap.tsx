import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';

const HeatMap = () => {
  const [series, setSeries] = useState([
    { name: 'Les nouveaux abonnements', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Le nombre des abonnés ', data: generateData(18, { min: 0, max: 90 }) },
    { name: ' Les annulations', data: generateData(18, { min: 0, max: 90 }) },
   
  ]);

  const options = {
    chart: {
      height: 350,
      type: 'heatmap',
     
    },
    
    dataLabels: {
      enabled: false
    },
    colors: ["#a5b4fc","#fca5a5","#a3e635"],
    
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
          Les tendances des abonnements au fil du temps:
          </h4>
        </div>
        <div>
        <div className="relative z-20 inline-block" style={{ top: '20px',left: '10px' }}>
        
        <DateFilter/>
     
          
         </div>
        </div>
      </div>
      <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-100">
            
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#a5b4fc]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#a5b4fc]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#a5b4fc]">Les nouveaux abonnements</p>
           
            </div>
          </div>
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#fca5a5]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#fca5a5]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#fca5a5]">Le nombre des abonnés  </p>
           
            </div>
          </div>
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#a3e635]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#a3e635]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#a3e635]">  Les annulations</p>
           
            </div>
          </div>
          </div>
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart options={options} series={series} type="heatmap" height={350} />
        </div>
      </div>
    </div>
  );
};

const generateData = (count, yrange) => {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = 'w' + (i + 1).toString();
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({ x, y });
    i++;
  }
  return series;
};

export default HeatMap;
