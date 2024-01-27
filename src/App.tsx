import { Contact, columns } from '@/lib/contacts';
import { useEffect, useState } from 'react';
import { DataTable } from './components/users-table';

async function getContacts(): Promise<Contact[]> {
  const server = import.meta.env.REACT_APP_JSON_SERVER
  // Fetch data from your API here.
  const response = await fetch(`${server}/contacts`)
  console.log('asds', response)
  const contacts: Promise<Contact[]> = await response.json();
  console.log('response', contacts)

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
