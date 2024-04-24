import React from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';
import FacturationFilter from '../FacturationFilter';
const ScatterJ = () => {
  const generateDayWiseTimeSeries = (baseval, count, yrange) => {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = baseval;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  };

  const options = {
    series: [
      { name: 'Tawer', data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 }) },
      { name: 'Mou7a9i9 ', data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 }) },
      { name: 'Esports ', data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 }) },
      { name: ' Rafi9ni', data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, { min: 10, max: 60 }) }
  
    ],
    chart: {
      height: 350,
      type: 'scatter',
      zoom: { type: 'xy' }
    },
    dataLabels: { enabled: false },
    grid: {
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: true } },
    },
    xaxis: { type: 'datetime' },
    yaxis: { max: 70 },
    colors: ["#d946ef","#a3e635","#67e8f9","#fda4af"]
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
       <div className="mb-4 justify-between gap-4 sm:flex items-center">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
          Comparaison des revenus entre les différents plans d'abonnement: 
          </h4>
         
          
      
        </div>
        
       
        <div className="relative z-20 inline-block" style={{ top: '20px', left: '10px' }}>
        <DateFilter />
</div>

      </div>
      <FacturationFilter />
      <div id="chart">
        <ReactApexChart options={options} series={options.series} type="scatter" height={350} />
      </div>
    </div>
  );
};

export default ScatterJ;
