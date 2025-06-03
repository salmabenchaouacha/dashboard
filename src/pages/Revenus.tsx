import React from 'react';

import LineR from '../components/Charts/revenus/LineR';


import DefaultLayout from '../layout/DefaultLayout';
import BarChart from '../components/Charts/revenus/BarChart';

import ScatterJ from '../components/Charts/revenus/ScatterJ';
import TableOne from '../components/Tables/TableOne';
import PageTitle from '@/components/PageTitle';



const ECommerce = () => {
  return (
    <>
    <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />

    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
       
        
       
       
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
     
       
       <LineR/>
       <BarChart/>
       <ScatterJ/>
       <div className="col-span-12 xl:col-span-8">
         
        </div>
      

      </div>
    </DefaultLayout>
    </>
  );
};

export default ECommerce;
