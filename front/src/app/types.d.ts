export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string | undefined;
  categoryId: number;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IOrderUser {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: "admin" | "user";
}

export interface IOrder {
  id: number;
  status: "approved" | "pending" | "rejected";
  date: string;
  products: IProduct[];
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
}

export interface IProfile {
  email: string;
  password: string;
}

export interface RegisterProps {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
}

export interface LoginProps {
  email: string;
  password: string;
}
