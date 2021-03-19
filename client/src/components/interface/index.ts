import { ChangeEvent, Ref } from "react";

export interface IFieldIndput {
  name: string;
  type: string;
  required?: boolean;
  auto?: string;
  title?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  keyUp?: () => void;
  reference?: Ref<HTMLInputElement>;
  error?: { message: string; type: string };
}

export interface IUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  regulations?: boolean;
  newsletter?: boolean;
}

export interface IBanner {
  image: string;
  title: string;
  description: string;
  button?: string;
}

export interface Inventory {
  _id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  star: number;
  amount: number;
  time?: string;
  discount: number;
  description?: string;
  tags?: Array<string>;
}
