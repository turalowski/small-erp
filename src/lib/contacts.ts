import { ColumnDef } from '@tanstack/react-table';

type BusinessRole = 'buyer' | 'seller' | 'manufacturer' | 'supplier';
type BusinessRoles = BusinessRole[];

export type Contact = {
  id: string;
  fullName: string;
  companyName: string;
  email: string;
  businessRole: BusinessRoles;
};

export const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: 'fullName',
    header: 'Full name',
  },
  {
    accessorKey: 'companyName',
    header: 'Company name',
  },
  {
    accessorKey: 'Email',
    header: 'email',
  },
  {
    accessorKey: 'businessRole',
    header: 'Business Role',
  },
];

