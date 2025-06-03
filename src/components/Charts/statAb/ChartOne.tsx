import { ApexOptions } from 'apexcharts';
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';
import { useGetChartOneStats } from '@/hooks/api/stats.api.ts';
import { format, subDays } from 'date-fns';

interface ChartOneState {
  series: {
    name: string;
    data: { x: string; y: number }[];
  }[];
}

type ChartOneVariables = {
  start_date: string;
  end_date: string;
  service_id: string;
};

const ChartOne: React.FC = () => {
  const [options, setOptions] = useState<ApexOptions>({
   
    colors: ['#93c5fd', '#f0abfc'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      height: 335,
      type: 'area',
      dropShadow: {
        enabled: true,
        color: '#623CEA14',
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    stroke: {
      width: [2, 2],
      curve: 'straight',
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      labels: {
        datetimeFormatter: {
          year: 'yyyy',
          month: 'MMM yyyy',
          day: 'dd MMM',
        },
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: '0px',
        },
      },
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val.toFixed(2);
        }
      }
    },
    markers: {
      size: 0 // Set marker size to 0 to hide them
    },
  });

  const [queryParams, setQueryParams] = useState<ChartOneVariables>({
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
      end_date: formattedEndDate,
    });
  };

  const getChartOneData = useGetChartOneStats(queryParams);

  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Fréquence de facturation quotidienne',
        data: [],
      },
      {
        name: 'Fréquence de facturation hebdomadaire',
        data: [],
      },
    ],
  });

  useEffect(() => {
    if (getChartOneData?.isSuccess) {
      setState({
        series: [
          {
            name: 'Fréquence de facturation quotidienne',
            data: getChartOneData?.data?.daily_subscriptions || [],
          },
          {
            name: 'Fréquence de facturation hebdomadaire',
            data: getChartOneData?.data?.weekly_subscriptions || [],
          },
        ],
      });
    }
  }, [getChartOneData?.isSuccess]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            La répartition des abonnements par fréquence de facturation :
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block" style={{ top: '20px', left: '10px' }}>
            <DateFilter onDateRangeSelect={handleDateRangeSelect} />
          </div>
        </div>
      </div>
      
     
        <div id="chartOne" className="-ml-5">
          <ReactApexChart options={options} series={state.series} type="area" height={350} />
        </div>
      </div>
    
  );
};

export default ChartOne;
