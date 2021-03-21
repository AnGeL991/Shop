import { FC } from "react";
import { brands } from "db";
import { ImageSlider } from "components/template";

export const Brands: FC = () => (
  <section>
    <ImageSlider data={brands} duration={2} />
  </section>
);
