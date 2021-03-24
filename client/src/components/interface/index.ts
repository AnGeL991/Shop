import { ChangeEvent, Ref } from "react";
import { RouteComponentProps } from "react-router-dom";

export interface MatchProps
  extends RouteComponentProps<{
    token: string;
    id: string;
  }> {}

export interface IFieldIndput {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  auto?: string;
  title?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  keyUp?: () => void;
  reference?: Ref<HTMLInputElement>;
  error?: { message: string; type?: string };
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
  images: Array<string>;
  price: number;
  category: string;
  star: number;
  amount: number;
  time?: string;
  discount: number;
  description?: string;
  tags?: Array<string>;
}
export interface Option {
  name: string;
  text: string;
}

export interface CarouselState {
  activeIndex: number;
  translate: number;
  transition: number;
  _slides: Array<{}>;
}

type Iname = {
  payment: "payment";
  courier: "courier";
  own: "own";
};

export interface IDelivery {
  name: keyof Iname;
  price: number;
  description: string;
}
export type IPayName = {
  transfer: "transfer";
  masterpass: "masterpass";
  dotpay: "dotpay";
};
export interface IPayment {
  name: keyof IPayName;
  description: string;
  icon?: string;
}
type IRuleName = {
  select: "select";
  regulations: "regulations";
  personal: "personal";
};
export interface IRule {
  name: keyof IRuleName;
  type: string;
  description?: string;
}
