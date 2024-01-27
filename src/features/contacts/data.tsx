import { ColumnDef } from "@tanstack/react-table";
import { Contact } from "./type";
import { Badge } from "@/common/components/ui/badge";

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
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'businessRole',
      header: 'Business Role',
      cell: ({ row }) => {
        const businessRoles: string[] = row.getValue('businessRole');
  
        return (
          <div className='flex gap-3'>
            {businessRoles.map(businessRole => (
              <Badge key={businessRole}>{businessRole}</Badge>
            ))}
          </div>
        );
      },
    },
  ];