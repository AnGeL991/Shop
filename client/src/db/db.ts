export interface Option {
  name:string,
  text:string
}

export const option = [
  { name: 'defaultSort', text: 'Default sorting' },
  { name: 'maxPriceSort', text: 'Sort by price: low to hight' },
  { name: 'minPriceSort', text: ' Sort by price: hight to low' },
  { name: 'popularitySort', text: 'Sort by popularity' },
  { name: 'newsProductSort', text: 'Sort by latest' },
]
export interface Products {
  id:number,
  title:string,
  image:string,
  price:number,
  star:number,
}


export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  regulations: boolean;
  newsletter: boolean;
}



export const products =[{
  id: 1,
  title: 'Similique sunt in culpa',
  image:
    'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/03/3-256x360.jpg',
  price: '150.00',
  tags: ['new','promo'],
  star: 3,
},
{
  id: 2,
  title: 'Laborum et Dolorum Fug',
  image:
    'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg',
  price: '150.00',
  star: 4,
},
{
  id: 3,
  title: 'Laborum et Dolorum Fug',
  image:
    'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg',
  price: '1000.00',
  star: 1,
},
{
  id: 4,
  title: 'Laborum et Dolorum Fug',
  image:
    'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg',
  price: '30.00',
  star: 5,
},]

export const contactField =[{
  title: "Your name",
  name: "firstName",
  required: true,
  type: "text",
},{
  title: "Your Email",
  name: "email",
  required: true,
  type: "text"
},{
  title: "Subject",
  name: "subject",
  required: false,
  type: "text"
},{
  title:'Message',
  name:'message',
  reguired:false,
  type:'textarea'
}
]

export const registerField =[{
  title: "name",
  name: "firstName",
  required: true,
  type: "text"
},
{
  title: "surname",
  name: "lastName",
  required: true,
  type: "text"
},
{
  title: "email",
  name: "email",
  required: true,
  type: "email"
},
{
  title: "password",
  name: "password",
  required: true,
  type: "password"
},
{
  title: "confirm password",
  name: "passwordConfirmation",
  required: true,
  type: "password"
},
{
  name: "select all",
  type: "checkbox",
  children: ' Zaznacz wszystkie zgody'
},
{
  name: "regulations",
  type: "checkbox",
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,sed eveniet! Facilis, eius. Quo suscipit reprehenderit accusantium, iusto similique eaque animi at neque ad delectus consequuntur laborum aliquid dolorem? Dolorem.'
},
{
  name: "newsletter",
  type: "checkbox",
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,sed eveniet! Facilis, eius. Quo suscipit reprehenderitaccusantium, iusto similique eaque animi at neque ad delectus consequuntur laborum aliquid dolorem? Dolorem.'
},
]

export const user =[];