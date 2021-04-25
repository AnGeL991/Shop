import { FC } from "react";
import { Carousell, ProductBox } from "components/template";
import { Inventory } from "components/interfaces";
import { useChangeSlider } from "_hooks";

interface CarousellProps {
  title: string;
  data: Array<Inventory>;
  duration?: number;
}

export const CarousellProduct: FC<CarousellProps> = ({
  title,
  data,
  duration,
}) => {
  const { nextSlide, prevSlide, slide, handleSetOutSide } = useChangeSlider(
    data,
    duration
  );

  const arrayOfProduct = data.map((el) => (
    <div
      key={el._id}
      className="carousel__item"
      style={{
        transform: `translateX(-${slide.translate}%)`,
      }}
      onMouseEnter={handleSetOutSide}
      onMouseLeave={handleSetOutSide}
    >
      <ProductBox item={el} />
    </div>
  ));

  return (
    <section>
      <Carousell
        length={data.length}
        title={title}
        next={nextSlide}
        prev={prevSlide}
      >
        {arrayOfProduct}
      </Carousell>
    </section>
  );
};
