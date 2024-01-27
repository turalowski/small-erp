
type BusinessRole = 'buyer' | 'seller' | 'manufacturer' | 'supplier';
type BusinessRoles = BusinessRole[];

export type Contact = {
  id: string;
  fullName: string;
  companyName: string;
  email: string;
  businessRole: BusinessRoles;
};