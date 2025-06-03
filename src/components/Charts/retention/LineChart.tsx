import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';
import FacturationFilter from '../FacturationFilter';
import { useGetLineChartStats } from '../../../hooks/api/stats.api';
import { format, subDays } from 'date-fns';

type LineChartVariables = {
  start_date: string;
  end_date: string;
  service_id: string;
  periode: string;
};

const LineChart = () => {
  const [selectedFrequency, setSelectedFrequency] = useState('1');
  const [queryParams, setQueryParams] = useState<LineChartVariables>({
    start_date: format(subDays(new Date(), 90), 'yyyy-MM-dd'),
    end_date: format(new Date(), 'yyyy-MM-dd'),
    service_id: '8',
    periode: selectedFrequency,
  });

  const { data, isLoading, isError, refetch: refetchLineRStats } = useGetLineChartStats(queryParams);

  useEffect(() => {
    setQueryParams((prev) => ({ ...prev, periode: selectedFrequency }));
  }, [selectedFrequency]);

  useEffect(() => {
    if (queryParams.periode !== selectedFrequency) {
      refetchLineRStats();
    }
  }, [queryParams, refetchLineRStats]);

  useEffect(() => {
    if (data) {
      const formattedData = data.data.map((item) => ({
        x: new Date(item.date).getTime(),
        y: item.unsubscribe_rate,
      }));
      setOptions((prevOptions) => ({
        ...prevOptions,
        series: [{
          name: 'Le taux de désabonnement',
          data: formattedData,
        }],
      }));
    }
  }, [data]);

  const handleDateRangeSelect = (dateRange: any) => {
    const formattedStartDate = format(new Date(dateRange.startDate), 'yyyy-MM-dd');
    const formattedEndDate = format(new Date(dateRange.endDate), 'yyyy-MM-dd');
    setQueryParams((prev) => ({
      ...prev,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
    }));
    refetchLineRStats();
  };

  const [options, setOptions] = useState({
    series: [{
      name: 'Le taux de désabonnement',
      data: [],
    }],
    colors: ['#f0abfc'],
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: 'zoom',
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val.toFixed(2);
        },
      },
    },
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
      <div className="relative">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Les variations des taux de désabonnement au fil du temps :
        </h4>
        <div className="absolute top-5 right-0 mt-4 mr-4">
          <DateFilter onDateRangeSelect={handleDateRangeSelect} />
        </div>
      </div>

      <FacturationFilter onOptionSelected={setSelectedFrequency} />

      <div id="chart">
        <ReactApexChart options={options} series={options.series} type="area" height={350} />
      </div>
    </div>
  );
};

export default LineChart;
