import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};
 
export default async function Page() {
  // const searchParams = await props.searchParams;
	// const query = searchParams?.query || '';
	// const currentPage = Number(searchParams?.page) || 1;
  const customers = await fetchCustomers();
  console.log(customers);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        
      </div>
       <Suspense key={customers} fallback={<CustomersTableSkeleton />}>
          <Table customers={customers} />
        </Suspense>
    </div>
  );
}