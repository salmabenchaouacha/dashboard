import { ApexOptions } from 'apexcharts';
import React, { useState,useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';
import {useGetChartTwoStats} from '@/hooks/api/stats.api.ts';
import { format,subDays  } from 'date-fns';



interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}
type ChartTwoVariables = {
  start_date: string;
  end_date: string;
  service_id: string;
};

const ChartTwo: React.FC = () => {
  const [options, setOptions] = useState<ApexOptions>({
  colors: ['#93c5fd','#ccfbf1'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'bar',
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
      
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: '25%',
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: '20%',
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: [],
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    
    fontWeight: 500,
    fontSize: '14px',

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
})
  const [queryParams, setQueryParams] = useState<ChartTwoVariables>({
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
  const getChartTwoData = useGetChartTwoStats(
    queryParams
  );
 
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: '',
        data: [],
      },
    ],
  });
  
  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;  

   useEffect(() => {
    if (getChartTwoData?.isSuccess) {
      setState(prevState => ({
        ...prevState,
        series: [
          {
            name: '',
            data: getChartTwoData?.data?.data,
          },
        ]
      }));
      setOptions(prevOptions => ({
        ...prevOptions,
        xaxis: {
          categories: getChartTwoData?.data.label,
        },
      }));
    }
  }, [queryParams,getChartTwoData?.isSuccess]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-14">
      
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
          Les indicateurs clés d'abonnement : 
          </h4>
        </div>
        <div>
        <div className="relative z-20 inline-block" style={{ top: '20px',left: '10px' }}>
        
        <DateFilter onDateRangeSelect={handleDateRangeSelect} />
     
          
         </div>
         
        </div>
      </div>

      <div>
      
        <div id="chartTwo" className="-ml-5 -mb-9">
        <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={350}
          />
        
          </div>
        </div>
      
    </div>
    
  );
};


export default ChartTwo;