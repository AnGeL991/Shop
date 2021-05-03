import { FC, useMemo } from "react";
import { EachFoto } from "./eachFoto";
import { fotosGalery } from "db";
import "./style/galery.scss";

export const Galery: FC = () => {
  const fotos = useMemo(
    () => fotosGalery.map((el, index) => <EachFoto key={index} {...el} />),
    []
  );
  return <section className="galery">{fotos}</section>;
};
