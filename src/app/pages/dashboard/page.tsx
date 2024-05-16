
import { Suspense } from 'react';
import {
  LatestInvoicesSkeleton,
} from '@/app/ui/skeletons';
import InvoicesTable from "@/app/ui/invoices/table"
 
export default async function Page() {

  return (
    <main>
      <h1 className='mb-4 text-xl md:text-2xl'>
        Dashboard
      </h1>
      <div className="mt-6 grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <InvoicesTable />
        </Suspense>
      </div>
    </main>
  );
}