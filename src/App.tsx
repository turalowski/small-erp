import { Contact } from '@/features/contacts/type';
import { useEffect, useState } from 'react';
import { DataTable, columns } from './features/contacts/table';

async function getContacts(): Promise<Contact[]> {
  const server = import.meta.env.VITE_JSON_SERVER
  const response = await fetch(`${server}/contacts`)
  const contacts: Promise<Contact[]> = await response.json();
  return contacts;
}

function App() {
  const [data, setData] = useState<Contact[]>([])


  async function fetchContacts() {
    const contacts = await getContacts();
    setData(contacts)
  }
  useEffect(() => {
    fetchContacts()
  }, [])

  return <main className='p-6'>
    <DataTable columns={columns} data={data} />
  </main>;
}

export default App;
