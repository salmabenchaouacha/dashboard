import React from 'react';

import LineChart from '../components/Charts/statAb/LineChart';
import ChartTwo from '../components/Charts/statAb/ChartTwo';
import BarEmplie from '../components/Charts/statAb/BarEmplie';
import DefaultLayout from '../layout/DefaultLayout';

import HeatMap from '../components/Charts/statAb/heatmap';
import TauxLine from '../components/Charts/statAb/TauxLine';

import ChartOne from '../components/Charts/statAb/ChartOne';


const StatAb: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
       
        
       
       
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
       
        <ChartTwo />
        < TauxLine/>
        <BarEmplie/>
        <ChartOne/>
      
        <LineChart />
        <HeatMap/>
      
        
      </div>
    </DefaultLayout>
  );
};

export default StatAb;
