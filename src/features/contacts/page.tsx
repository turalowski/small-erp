import { Contact } from '@/features/contacts/type';
import { useEffect, useState } from 'react';
import { DataTable } from './table';
import { columns } from './data';
import { Button } from '@/common/components/ui/button';
import { BadgePlus, PlusSquare, UserRoundPlus } from 'lucide-react';

async function fetchContacts(): Promise<Contact[]> {
  const server = import.meta.env.VITE_JSON_SERVER;
  const response = await fetch(`${server}/contacts`);
  const contacts: Promise<Contact[]> = await response.json();
  return contacts;
}

function Contacts() {
  const [data, setData] = useState<Contact[]>([]);

  async function getContacts() {
    const contacts = await fetchContacts();
    setData(contacts);
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <main className="p-6 ">
      <div className="flex flex-row-reverse mb-3">
        <Button variant="outline">
          <UserRoundPlus className='h-4 w-4 mr-2' />
          New Contact
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </main>
  );
}

export default Contacts;
