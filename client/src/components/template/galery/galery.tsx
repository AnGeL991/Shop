import { FC, useMemo } from "react";
import { EachFoto } from "./eachFoto";
import "./style/galery.scss";

const fotosGalery = [
  {
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/9.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/10.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/11.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
];

export const Galery: FC = () => {
  const fotos = useMemo(
    () => fotosGalery.map((el, index) => <EachFoto key={index} {...el} />),
    []
  );
  return <section className="galery">{fotos}</section>;
};
