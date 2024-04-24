import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';

const Mixed = () => {
  const [series, setSeries] = useState([
    {
      name: ' Nombre des abonnements ',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    },
    {
      name: 'Les revenus',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    },
    {
      name: 'Les taux de rétention',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    },
    
  ]);

  const [options] = useState({
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2,5],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    colors: ["#fde047","#e879f9","#a3e635"], // Changer les couleurs ici
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      title: {
        text: '',
      },
      min: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        }
      }
    }
  });

  useEffect(() => {
    // Simulation de la mise à jour des données
    const handleReset = () => {
      setSeries(prevSeries => [
        {
          ...prevSeries[0],
          data: prevSeries[0].data.map(() => Math.floor(Math.random() * 100)),
        },
        {
          ...prevSeries[1],
          data: prevSeries[1].data.map(() => Math.floor(Math.random() * 100)),
        },
        {
          ...prevSeries[2],
          data: prevSeries[2].data.map(() => Math.floor(Math.random() * 100)),
        }
      ]);
    };
    handleReset();
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            La répartition des abonnements par fréquence de facturation :
          </h4>
        </div>
        <div>
        <div className="relative z-20 inline-block" style={{ top: '20px',left: '10px' }}>
        
        <DateFilter/>
     
          
         </div>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
         
         
        </div>
      </div>
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Mixed;
