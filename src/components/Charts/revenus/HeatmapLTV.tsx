import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


const HeatmapLTV = () => {
  const [series, setSeries] = useState([
    { name: 'ARPU', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'LTV', data: generateData(18, { min: 0, max: 90 }) },
  
   
  ]);

  const options = {
    chart: {
      height: 350,
      type: 'heatmap',
     
    },
    
    dataLabels: {
      enabled: false
    },
    colors: ["#a5b4fc","#fca5a5"],
    
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            La répartition des abonnements par fréquence de facturation :
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            
          </div>
        </div>
      </div>
     
        <div id="chartOne" className="-ml-5">
          <ReactApexChart options={options} series={series} type="heatmap" height={350} />
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

export default HeatmapLTV;
