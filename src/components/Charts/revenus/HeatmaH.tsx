import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';

const HeatmapH = () => {
  const [series, setSeries] = useState([
    { name: 'Tawer ', data: generateData(18, { min: 0, max: 90 }) },
    { name: 'Mou7a9i9', data: generateData(18, { min: 0, max: 90 }) },

    { name: 'Rafi9ni', data: generateData(18, { min: 0, max: 90 }) },
  ]);


  const options = {
    chart: {
      height: 350,
      type: 'heatmap',
     
    },
    
    dataLabels: {
      enabled: false
    },
    colors: ["#fecdd3","#a5f3fc","#f0abfc"],
    
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Comparaison des revenus des services suivant le plan d'abonnement hebdomadaire :
          </h4>
        </div>
        <div>
        <div className="relative z-20 inline-block" style={{ top: '60px',left: '10px' }}>
        
        <DateFilter/>
     
          
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
    const x =   (i + 1).toString();
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({ x, y });
    i++;
  }
  return series;
};

export default HeatmapH;
