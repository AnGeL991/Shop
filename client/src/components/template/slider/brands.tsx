import { FC } from "react";
import { brands } from "db";
import { ImageSlider } from "components/template";

export const Brands: FC = () => (
  <section className='brands'>
    <ImageSlider data={brands} duration={0} />
  </section>
);
