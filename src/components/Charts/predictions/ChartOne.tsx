import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ChartOne = () => {
  const [chartState] = useState({
    series: [
      {
        name: 'Les annulations',
        type: 'column',
        data: [20, 29, 37, 36, 44, 45]
      },
      {
        name: 'Les renouvellements',
        type: 'column',
        data: [26, 54, 31, 40, 80, 65]
      },
      {
        name: 'Le nombre total des abonnés ',
        type: 'line',
        data: [100, 130, 180, 240, 330,400]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'line', // Combined chart type should be 'line' or 'bar'
        stacked: false,
        background: '#ffffff', // Set the chart background to white
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true
          },
          autoSelected: 'zoom'
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350
          }
        }
      },
      plotOptions: {
        bar: {
          horizontal: false, // Ensure bars are vertical
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 1, 4]
      },
      title: {
        text: "Prédiction des indicateurs clés d'abonnement :",
       
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
        
          marginTop: '30px'  // Tentative d'ajouter du margin via les options (non supporté directement par ApexCharts)
        }},
      xaxis: {
        categories: ["Juillet'24", "Aout'24","Sep'24", "Oct'24","Nov'24", "Dec'24"],
        labels: {
          rotate: 0 // Ensure x-axis labels are not rotated
        }
      },
      yaxis: [
        {
          seriesName: 'Income',
          axisTicks: {
            show: true,
           
          },
          axisBorder: {
            show: true,
            color: '#f0abfc'
          },
          labels: {
            style: {
              colors: '#f0abfc'
            }
          },
          title: {
            text: 'Les annulations',
            style: {
              color: '#f0abfc'
            }
          },
          tooltip: {
            enabled: true
          }
        },
        {
          seriesName: 'Cashflow',
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: '#d9f99d'
          },
          labels: {
            style: {
              colors: '#d9f99d'
            }
          },
          title: {
            text: 'Les renouvellements',
            style: {
              color: '#d9f99d'
            }
          }
        },
        {
          seriesName: 'Revenue',
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: '#67e8f9'
          },
          labels: {
            style: {
              colors: '#67e8f9'
            }
          },
          title: {
            text: 'Le nombre total des abonnés ',
            style: {
              color: '#67e8f9'
            }
          }
        }
      ],
      colors: ['#f0abfc', '#d9f99d', '#67e8f9'], 
      tooltip: {
        fixed: {
          enabled: true,
          position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60
        }
      },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40
      }
    }
  });

  return (
    <div style={{ width: '1700%' }}>
      <div id="chart" className="-ml-1">
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default ChartOne;
