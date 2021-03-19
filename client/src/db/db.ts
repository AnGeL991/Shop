import { SortOption } from "store/inventory/types";

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
    name: "select all",
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
export const brands = [
  {
    id: 1,
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Brand-3.png",
  },
  {
    id: 2,
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Brand-4.png",
  },
  {
    id: 3,
    image:
      " http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Brand-2.png",
  },
  {
    id: 4,
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Brand-1.png",
  },
];
