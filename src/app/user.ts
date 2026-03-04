export interface User {
    name: string;
    position: string;
    department: string;
    details: {
      role: string;
    } | null;
  }
  
  export interface Employee {
    id: number;
    name: string;
    department: string;
    position: string;
    role: string;
  }