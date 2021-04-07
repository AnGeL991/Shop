import { FC } from "react";
import { Carousell } from "components/template";
import { useChangeSlider, useDisplayProduct } from "_hooks";
import { Slide } from "./dealProduct";


export const DealOfDay: FC = () => {
  const { dealProduct } = useDisplayProduct();

  const { slide, nextSlide, prevSlide,handleSetOutSide } = useChangeSlider(dealProduct,0);

  const slides = dealProduct.map((el) => (
    <Slide
      key={el._id}
      transition={slide.transition}
      translate={slide.translate}
      item={el}
      onMouseMove={handleSetOutSide}
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
