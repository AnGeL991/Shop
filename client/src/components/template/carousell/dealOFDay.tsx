import { FC } from "react";
import { Carousell } from "components/template";
import { useChangeSlider,useDisplayProduct } from "_hooks";
import { Slide } from "./dealProduct";
import "./carousell.scss";

export const DealOfDay: FC = () => {
  const {dealProduct} = useDisplayProduct()
  const dataFoto = [
    {
      id: 0,
      image:
        "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/03/3-256x360.jpg",
    },
    {
      id: 1,
      image:
        "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg",
    },
    {
      id: 2,
      image:
        "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg",
    },
  ];

  const { slide, nextSlide, prevSlide } = useChangeSlider(dealProduct);

  const slides = dealProduct.map((el) => (
    <Slide
      key={el._id}
      data={dataFoto}
      transition={slide.transition}
      translate={slide.translate}
      item={el}
    />
  ));

  return (
    <section>
      <Carousell
        title="Deal of the day"
        next={nextSlide}
        prev={prevSlide}
        length={dealProduct.length}
      >
        {slides}
      </Carousell>
    </section>
  );
};
