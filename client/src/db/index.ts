import { SortOption } from "store/inventory";
import { IDelivery, IPayment, IRule } from "components/interfaces";

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
    name: "delivery",
    description: "Cash on delivery",
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

export const nav = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Blog", path: "/Blog" },
  { name: "Media", path: "/media" },
  { name: "About Us", path: "/aboutUs" },
  { name: "Contact Us", path: "/contact" },
];

export const categoryNav = [
  { name: "Appliances", path: "/shop" },
  { name: "Bakeware", path: "/shop" },
  { name: "Coffee maker", path: "/shop" },
  { name: "Cooktops", path: "/shop" },
  { name: "Cookware", path: "/shop" },
  { name: "Cotlery", path: "/shop" },
  { name: "Dishwasher", path: "/shop" },
  { name: "Drawer", path: "/shop" },
  { name: "Fryer", path: "/shop" },
];

export const mainBaner = [
  {
    id: 1,
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/main-banner-2.jpg",
    title: "Summer Sale!",
    subTitle: "Trumblers cups & ceramic",
    description: "Understand introductions to ceramic materials",
    buttons: ["shop", "now"],
  },
  {
    id: 2,
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Main-banner-01.jpg",
    title: "Summer Sale!",
    subTitle: "Trumblers cups & ceramic",
    description: "Understand introductions to ceramic materials",
    buttons: ["shop now"],
  },
];
