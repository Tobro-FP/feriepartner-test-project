export type Employee = {
  id: string | number; // json-server behavior varies - handle both types
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  image: string;
};
