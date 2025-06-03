import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Line = () => {
  // Générer des données pour chaque jour de la période
  const generateDailyData = (start, end) => {
    const data = [];
    let date = new Date(start);

    while (date <= end) {
      // Exemple de valeur aléatoire pour chaque jour
      const value = 40 + Math.random() * 10; // Valeur entre 30 et 40
      data.push([date.getTime(), value]);
      date.setDate(date.getDate() + 1);
    }

    return data;
  };

  const startDate = new Date('2024-07-01');
  const endDate = new Date('2024-12-31');

  const [chartState, setChartState] = useState({
    series: [{
      data: generateDailyData(startDate, endDate)  // Générer les données quotidiennes
    }],
    options: {
      chart: {
        id: 'area-datetime',
        type: 'area',
        height: 350,
        background: '#ffffff',
        zoom: {
          autoScaleYaxis: true
        }
      },
      xaxis: {
        type: 'datetime',
        min: startDate.getTime(),
        max: endDate.getTime(),
        tickAmount: 6,
        labels: {
          format: 'dd MMM yyyy',
          rotate: -45,
          style: {
            fontSize: '10px'
          }
        }
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value.toFixed(2); // Formater avec 2 décimales
          },
          style: {
            fontSize: '12px'
          }
        }
      },
      annotations: {
        yaxis: [{
          y: 30,
          borderColor: '#999',
          label: {
            show: true,
           
            style: {
              color: "#fff",
              background: '#00E396'
            }
          }
        }],
        xaxis: [{
          x: new Date('2024-09-01').getTime(),
          borderColor: '#999',
          yAxisIndex: 0,
          label: {
            show: true,
           
            style: {
              color: "#fff",
              background: '#dbeafe'
            }
          }
        }]
      },
      title: {
        text: "Prédiction des durées d'abonnements:",
       
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
        
          marginTop: '30px'  // Tentative d'ajouter du margin via les options (non supporté directement par ApexCharts)
        }},
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
        style: 'hollow',
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      },
      colors: ['#a5b4fc'],
    },
  });

  return (
    <div>
      <div id="chart">
        <div className="toolbar"></div>
        <div id="chart-timeline">
          <ReactApexChart options={chartState.options} series={chartState.series} type="area" height={350} />
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Line;
