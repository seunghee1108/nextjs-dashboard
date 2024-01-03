import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, xseunghee@bangseunghuiui-MacBookAir nextjs-dashboard % git add app/dashboard/invoices/id/eidt/pagre.ts 
warning: could not open directory 'app/dashboard/invoices/id/eidt/': No such file or directory
fatal: pathspec 'app/dashboard/invoices/id/eidt/pagre.ts' did not match any filesseunghee@bangseunghuiui-MacBookAir nextjs-dashboard % git add app/dashboard/invoices/id/eidt/pagre.ts 
warning: could not open directory 'app/dashboard/invoices/id/eidt/': No such file or directory
fatal: pathspec 'app/dashboard/invoices/id/eidt/pagre.ts' did not match any filesseunghee@bangseunghuiui-MacBookAir nextjs-dashboard % git add app/dashboard/invoices/id/eidt/pagre.ts 
warning: could not open directory 'app/dashboard/invoices/id/eidt/': No such file or directory
fatal: pathspec 'app/dashboard/invoices/id/eidt/pagre.ts' did not match any filesseunghee@bangseunghuiui-MacBookAir nextjs-dashboard % git add app/dashboard/invoices/id/eidt/pagre.ts 
warning: could not open directory 'app/dashboard/invoices/id/eidt/': No such file or directory
fatal: pathspec 'app/dashboard/invoices/id/eidt/pagre.ts' did not match any filesfetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  
  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}