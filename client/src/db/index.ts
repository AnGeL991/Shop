import { SortOption } from "store/inventory";
import { IDelivery, IPayment, IRule } from "components/interface";

export const option = [
  { name: SortOption.DEFAULT, text: "Default sorting" },
  { name: SortOption.TO_HIGHT_PRICE, text: "Sort by price: low to hight" },
  { name: SortOption.TO_LOW_PRICE, text: " Sort by price: hight to low" },
  { name: SortOption.POPULAR_SORT, text: "Sort by popularity" },
  { name: SortOption.NEW_PRODUCTS, text: "Sort by news" },
];
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  regulations: boolean;
  newsletter: boolean;
}

export const securityInfo = [
  {
    title: "Gwarancja",
    text: "Na wszystkie meble obowiązuje gwarancja ważna 24 miesiące.",
  },
  {
    title: "zwroty",
    text:
      "Pamietaj, ze masz pełne prawo do zwrotu mebli w ciągu 14 dni. kupuj bez presji.",
  },
  {
    title: "Reklamacja",
    text: "Jeśli coś z meblami będzie nie tak wymienimy je na nasz koszt.",
  },
];

export const contactField = [
  {
    title: "Your name",
    name: "firstName",
    required: true,
    type: "text",
  },
  {
    title: "Your Email",
    name: "email",
    required: true,
    type: "text",
  },
  {
    title: "Subject",
    name: "subject",
    required: false,
    type: "text",
  },
  {
    title: "Message",
    name: "message",
    reguired: false,
    type: "textarea",
  },
];

export const registerField = [
  {
    title: "name",
    name: "firstName",
    required: true,
    type: "text",
  },
  {
    title: "surname",
    name: "lastName",
    required: true,
    type: "text",
  },
  {
    title: "email",
    name: "email",
    required: true,
    type: "email",
  },
  {
    title: "password",
    name: "password",
    required: true,
    type: "password",
  },
  {
    title: "confirm password",
    name: "passwordConfirmation",
    required: true,
    type: "password",
  },
  {
    name: "select",
    type: "checkbox",
  },
  {
    name: "regulations",
    type: "checkbox",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,sed eveniet! Facilis, eius. Quo suscipit reprehenderit accusantium, iusto similique eaque animi at neque ad delectus consequuntur laborum aliquid dolorem? Dolorem.",
  },
  {
    name: "newsletter",
    type: "checkbox",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,sed eveniet! Facilis, eius. Quo suscipit reprehenderitaccusantium, iusto similique eaque animi at neque ad delectus consequuntur laborum aliquid dolorem? Dolorem.",
  },
];
export const privatePerson = [
  {
    title: "email",
    name: "email",
    required: true,
    type: "text",
  },
  {
    title: "name",
    name: "firstName",
    required: true,
    type: "text",
  },
  {
    title: "surname",
    name: "surName",
    required: true,
    type: "text",
  },
  {
    title: "Street and number ",
    name: "street",
    required: true,
    type: "text",
  },
  {
    title: "Post code",
    name: "postCode",
    required: true,
    type: "text",
  },
  {
    title: "City",
    name: "city",
    required: true,
    type: "text",
  },
  {
    title: "Phone",
    name: "phone",
    required: true,
    type: "text",
  },
];
export const business = [
  {
    title: "email",
    name: "email",
    required: true,
    type: "text",
  },
  {
    title: "Name",
    name: "name",
    required: false,
    type: "text",
  },
  {
    title: "Surname",
    name: "surname",
    required: false,
    type: "text",
  },
  {
    title: "Business",
    name: "Business",
    required: true,
    type: "text",
  },
  {
    title: "NIP",
    name: "nip",
    required: true,
    type: "text",
  },
  {
    title: "Street and number",
    name: "street",
    required: true,
    type: "text",
  },
  {
    title: "Post Code",
    name: "postCode",
    required: true,
    type: "text",
  },
  {
    title: "City",
    name: "city",
    required: true,
    type: "text",
  },
  {
    title: "Phone",
    name: "phone",
    required: true,
    type: "text",
  },
];

export const delivery: Array<IDelivery> = [
  {
    price: 29,
    name: "payment",
    description: "Zamowienie przedpłata na konto",
  },
  {
    price: 39,
    name: "courier",
    description: "Zamówienie pobranie za pośrednictwem kuriera",
  },
  {
    price: 0,
    name: "own",
    description: "Odbiór osobisty w naszym salonie (ul.przyklad 15, warszawa)",
  },
];

export const paymentMethod: Array<IPayment> = [
  {
    name: "transfer",
    description: "Traditional transfer",
  },
  {
    name: "masterpass",
    description: "Pay Masterpass",
    icon:
      "https://www.kontomaniak.pl/artykuly/image-thumb__227__body-primary/masterpass@2x.webp",
  },
  {
    name: "dotpay",
    description: "Dotpay",
    icon:
      "https://lh3.googleusercontent.com/proxy/ghqV2xF_kjwtUmSv_XxhQo8t0GeV_wjc19Djw_H6oyN1pSwKcbZ2RK9E-BOT96O4MJ7Xg4Sa8s0Aao7RrwV9S1D0_fSlEabBN3gFlvRGe-Fd7PkFi2PyAB3YKivyj6u5_wo_",
  },
];
export const paymentRule: Array<IRule> = [
  {
    name: "select",
    type: "checkbox",
    description: "Select all",
  },
  {
    name: "regulations",
    type: "checkbox",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,sed eveniet! Facilis, eius. Quo suscipit reprehenderit accusantium, iusto similique eaque animi at neque ad delectus consequuntur laborum aliquid dolorem? Dolorem.",
  },
  {
    name: "personal",
    type: "checkbox",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,sed eveniet! Facilis, eius. Quo suscipit reprehenderit accusantium, iusto similique eaque animi at neque ad delectus consequuntur laborum aliquid dolorem? Dolorem.",
  },
];
export const brands = [
  "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Brand-3.png",

  "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Brand-4.png",

  " http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Brand-2.png",

  "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Brand-1.png",
];
