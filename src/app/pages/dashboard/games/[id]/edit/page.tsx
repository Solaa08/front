import Form from '@/app/ui/invoices/edit-form';
import { getGames } from '@/app/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    // const game = getGameById(id);

      if (!game) {
        notFound();
      }
      
  return (
    <main>
      <Form game={game} />
    </main>
  );
}