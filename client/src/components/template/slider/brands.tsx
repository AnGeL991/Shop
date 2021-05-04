import { FC } from "react";
import { brands } from "db";
import { BrandSlider } from "components/template";

export const Brands: FC = () => (
  <section className='brands'>
    <BrandSlider data={brands} duration={0} />
  </section>
);
