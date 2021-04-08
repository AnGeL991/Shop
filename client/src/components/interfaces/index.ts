import { ChangeEvent, Ref } from "react";
import { RouteComponentProps } from "react-router-dom";

// Match Props token and id
export interface MatchProps
  extends RouteComponentProps<{
    token: string;
    id: string;
  }> {}

// inputs
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
export interface IPaymentInputs {
  transfer: boolean;
  delivery: boolean;
}

export interface IDeliveryOption {
  courier: boolean;
  own: boolean;
  payment: boolean;
}

//acount
export interface IUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  regulations?: boolean;
  newsletter?: boolean;
}

export interface Account {
  email: string;
  password: string;
  to?: string;
}
export interface Forget {
  email: string;
}
export interface Password {
  password: string;
}
// Banner
export interface IBanner {
  image: string;
  title: string;
  description: string;
  button?: string;
}

//Carousel
export interface CarouselState {
  activeIndex: number;
  translate: number;
  transition: number;
  _slides: Array<{}>;
}

//Inventury
export interface Inventory {
  _id: string;
  title: string;
  image: string;
  images: Array<string>;
  price: number;
  category: string;
  amount: number;
  time?: string;
  discount: number;
  description?: string;
  tags?: Array<string>;
  comment: Array<IComment>;
}
export interface IComment {
  name: string;
  body: string;
  star: number;
  email: string;
  date: Date;
}

//Payment option
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
  delivery: "delivery";
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

export enum deliveryCost {
  payment = 29,
  courier = 39,
}
