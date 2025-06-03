import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';
import FacturationFilter from '../FacturationFilter';
import { useGetScatterStats } from '../../../hooks/api/stats.api';
import { format, subDays } from 'date-fns';

type ScatterVariables = {
  start_date: string;
  end_date: string;
  service_id: string;
  period: string;
};

const Scatter = () => {
  const [selectedFrequency, setSelectedFrequency] = useState('1');
  const [queryParams, setQueryParams] = useState<ScatterVariables>({
    start_date: format(subDays(new Date(), 90), 'yyyy-MM-dd'),
    end_date: format(new Date(), 'yyyy-MM-dd'),
    service_id: '1',
    period: selectedFrequency,
  });
  const { data, isLoading, isError, refetch: refetchScatterStats } = useGetScatterStats(queryParams);

  useEffect(() => {
    refetchScatterStats();
    setQueryParams((prev) => ({ ...prev, period: selectedFrequency }));
  }, [selectedFrequency]);

  useEffect(() => {
    const updatedOptions = {
      ...options,
      series: data?.data ?? [],
    };
    setOptions(updatedOptions);
  }, [data]);

  const handleDateRangeSelect = (dateRange: any) => {
    const formattedStartDate = format(new Date(dateRange.startDate), 'yyyy-MM-dd');
    const formattedEndDate = format(new Date(dateRange.endDate), 'yyyy-MM-dd');
    setQueryParams({
      ...queryParams,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
    });
  };

  const [options, setOptions] = useState({
    series: [],
    chart: {
      height: 350,
      type: 'scatter',
      zoom: { type: 'xy' },
    },
    dataLabels: { enabled: false },
    grid: {
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: true } },
    },
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val.toFixed(2);
        }
      }
    },
    colors: ['#d946ef', '#a3e635', '#67e8f9'],
  });
console.log('selectedFrequency',selectedFrequency)
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
      <div className="mb-4 justify-between gap-4 sm:flex items-center">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">Les tendances des abonnements : </h4>
        </div>
        <div className="relative z-20 inline-block" style={{ top: '20px', left: '10px' }}>
          <DateFilter onDateRangeSelect={handleDateRangeSelect} />
        </div>
      </div>
      <FacturationFilter onOptionSelected={setSelectedFrequency} />
      <div >
        <ReactApexChart options={options} series={options.series} type="scatter" height={350} />
      </div>
    </div>
  );
};

export default Scatter;
