import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import DateFilter from '../DateFilter';
import FacturationFilter from '../FacturationFilter';
import { useGetMixedStats } from '../../../hooks/api/stats.api';
import { format, subDays } from 'date-fns';

const Mixed = () => {
  const [selectedFrequency, setSelectedFrequency] = useState('1');
  const [queryParams, setQueryParams] = useState({
    start_date: format(subDays(new Date(), 90), 'yyyy-MM-dd'),
    end_date: format(new Date(), 'yyyy-MM-dd'),
    service_id: '8',
    periode: selectedFrequency,
  });

  const { data, isLoading, isError, refetch: refetchMixedStats } = useGetMixedStats(queryParams);

  useEffect(() => {
    setQueryParams((prev) => ({ ...prev, periode: selectedFrequency }));
  }, [selectedFrequency]);

  const fetchInitialData = () => {
    refetchMixedStats();
  };

  useEffect(() => {
    fetchInitialData();
  }, [queryParams]);

  useEffect(() => {
    if (data) {
      const formattedData = Object.keys(data).map((date) => ({
        date: new Date(date).getTime(),
        ...data[date]
      }));

      const updatedOptions = {
        ...options,
        series: [
          {
            name: 'Nombre des abonnements',
            type: 'column',
            data: formattedData.map(item => ({ x: item.date, y: item.subscription_count }))
          },
          {
            name: 'Les revenus',
            type: 'area',
            data: formattedData.map(item => ({ x: item.date, y: item.daily_revenue || item.weekly_revenue }))
          },
          {
            name: 'Les taux de rétention',
            type: 'line',
            data: formattedData.map(item => ({ x: item.date, y: item.retention_rate }))
          }
        ]
      };
      setOptions(updatedOptions);
    }
  }, [data]);

  const handleDateRangeSelect = (dateRange) => {
    const formattedStartDate = format(new Date(dateRange.startDate), 'yyyy-MM-dd');
    const formattedEndDate = format(new Date(dateRange.endDate), 'yyyy-MM-dd');
    setQueryParams((prev) => ({
      ...prev,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
    }));
  };

  const [options, setOptions] = useState({
    series: [
      {
        name: 'Nombre des abonnements',
        type: 'column',
        data: []
      },
      {
        name: 'Les revenus',
        type: 'area',
        data: []
      },
      {
        name: 'Les taux de rétention',
        type: 'line',
        data: []
      },
    ],
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
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
    colors: ["#f5d0fe", "#a5f3fc", "#e879f9"],
    labels: [''],
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
            return y.toFixed(0) + " ";
          }
          return y;
        }
      }
    }
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-14">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Décomposition des mesures d’abonnement:
          </h4>
        </div>
        <div>
          <div className="relative z-20 inline-block" style={{ top: '20px', left: '10px' }}>
            <DateFilter onDateRangeSelect={handleDateRangeSelect} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <FacturationFilter onOptionSelected={setSelectedFrequency} />
        </div>
      </div>
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={options.series}
            type="line"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Mixed;
