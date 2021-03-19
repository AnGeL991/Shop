import { FC } from "react";
import { Carousell } from "components/template";
import { ProductBox } from "components/common";
import { Inventory } from "components/interface";
import { useChangeSlider } from "_hooks";

interface CarousellProps {
  title: string;
  data: Array<Inventory>;
  duration?: number;
};

export const CarousellProduct: FC<CarousellProps> = ({
  title,
  data,
  duration,
}) => {
  const { nextSlide, prevSlide, slide } = useChangeSlider(data, duration);

  const arrayOfProduct = data.map((el) => (
    <div
      key={el._id}
      className="carousel__item"
      style={{
        transform: `translateX(-${slide.translate}%)`,
      }}
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
