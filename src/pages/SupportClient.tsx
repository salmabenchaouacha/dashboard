import React from 'react';



import DefaultLayout from '../layout/DefaultLayout';
import PageTitle from '@/components/PageTitle';
import TableThree from '@/components/Tables/TableThree';





const SupportClient = () => {
  return (
    <>
   <PageTitle title="Support Client| TailAdmin - Tailwind CSS Admin Dashboard Template" />

    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
       
        
       
       
      </div>

      <div className="flex flex-col gap-10">
     
<TableThree/>
       
      

      </div>
    </DefaultLayout>
    </>
  );
};

export default SupportClient;
