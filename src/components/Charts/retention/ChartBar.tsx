import { ApexOptions } from 'apexcharts';
import React, { useState,useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';
import {useGetChartBarStats} from '@/hooks/api/stats.api.ts';
import { format, subDays } from 'date-fns';


interface ChartBarState {
  series: {
    name: string;
    data: number[];
  }[];
}

type ChartBarVariables = {
  start_date: string;
  end_date: string;
  service_id: string;
};


const BarChart: React.FC = () => {
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: [''],
    },
    yaxis: {
      title: {
        text: ''
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return "" + val + ""
        }
      }
    },
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#fbcfe8', '#a5f3fc'],
  })
  const [queryParams, setQueryParams] = useState<ChartBarVariables>({
    start_date: format(subDays(new Date(), 7), 'yyyy-MM-dd'),
    end_date: format(new Date(), 'yyyy-MM-dd'),
    service_id: '7',
});
  
const handleDateRangeSelect = (dateRange: any) => {
  const formattedStartDate = format(new Date(dateRange.startDate), 'yyyy-MM-dd');
  const formattedEndDate = format(new Date(dateRange.endDate), 'yyyy-MM-dd');
  setQueryParams({
    ...queryParams,
    start_date: formattedStartDate,
    end_date: formattedEndDate
  });
};
const getChartBarData = useGetChartBarStats(
  queryParams
);

const [state, setState] = useState<ChartBarState>({
  series: [
    {
      name: ' ',
      data: []
    },
  
    {
      name: '  ',
      data: [],
    },
  ],});
const handleReset = () => {
  setState((prevState) => ({
    ...prevState,
  }));
};
handleReset; 

useEffect(() => {
  if (getChartBarData?.isSuccess && getChartBarData?.data) {
    const T = getChartBarData.data.data['T'];
    const Ta = getChartBarData.data.data['Ta'];
   
      const formattedData = [
        { name: 'T', data:[T]  }, // Assurez-vous que T est un tableau
        { name: 'Ta', data: [Ta] } // Assurez-vous que Ta est un tableau
      ];

      setState({
        series: formattedData,
      });

      setOptions(prevOptions => ({
        ...prevOptions,
        xaxis: {
          categories: [''], 
        },
        colors: ['#fbcfe8', '#a5f3fc'],
      }));
    }
  
  }, [getChartBarData?.isSuccess, getChartBarData?.data]);



  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
          Les taux de rétention des abonnés quotidiens et hebdomadaires:
          </h4>
        </div>
        <div>
        <div className="relative z-20 inline-block" style={{ top: '20px',left: '10px' }}>
        
        
        <DateFilter onDateRangeSelect={handleDateRangeSelect} />
     
          
         </div>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#f472b6]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#f472b6]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#f472b6]"> Fréquence de facturation quotidienne </p>
            </div>
          </div>
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#67e8f9]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#67e8f9]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#67e8f9]">Fréquence de facturation hebdomadaire</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div style={{ width: '120%' }}> {/* Utilisation des styles inline pour étirer le graphique */}
          <div id="chartTwo" className="-ml-1">
            <ReactApexChart
              options={options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
