import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import YearFilter from '../YearFilter'; // Assurez-vous de fournir le bon chemin d'importation

const BarEmplie = () => {
  const [selectedYear, setSelectedYear] = useState(""); // État pour stocker l'année sélectionnée

  // Fonction de gestionnaire pour gérer le changement d'année sélectionnée
  const handleYearChange = (year) => {
    setSelectedYear(year);
    // Vous pouvez effectuer d'autres actions en fonction de l'année sélectionnée si nécessaire
  };

  // Supposons que vous avez un tableau d'années à passer comme prop à YearFilter
  const years = [ 2021, 2022, 2023, 2024,2025]; // Exemple de tableau d'années

  const [series, setSeries] = useState([
    {
      name: ' Les nouveaux abonnements ',
      data: [44, 55, 41, 37, 22, 43, 21, 37, 22, 43, 21,12]
    },
    {
      name: ' Les annulations',
      data: [53, 32, 33, 52, 13, 43, 32, 41, 37, 22, 43, 21]
    },
  ]);

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true
    },
    plotOptions: {
      bar: {
        horizontal: true,
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
      categories: [ 
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
    },
    fill: {
      opacity: 1
    },
    legend: {
      show: false,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#ddd6fe', '#d9f99d'],
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            La répartition des désabonnements :
          </h4>
        </div>
        {/* Intégration du composant YearFilter */}
        <YearFilter years={years} selectedYear={selectedYear} onChange={handleYearChange} />
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#ddd6fe]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#ddd6fe]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#ddd6fe]"> Les annulations </p>
            </div>
          </div>
          <div className="flex min-w-100">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#d9f99d]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#d9f99d]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#d9f99d]">Les nouveaux abonnements</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div>
          <div style={{ width: '300%' }}>
            <div id="chartTwo" className="-ml-1">
              <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarEmplie;
