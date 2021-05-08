import { FC } from "react";
import { Carousell, ProductBox } from "components/template";
import { Inventory } from "components/interfaces";
interface CarousellProps {
  title: string;
  data: Array<Inventory>;
  duration?: number;
}

export const CarousellProduct: FC<CarousellProps> = ({ title, data }) => {
  const arrayOfProduct = data.map((el) => (
    <div key={el._id} className="carousel__item">
      <ProductBox item={el} />
    </div>
  ));

  return (
    <section>
      <Carousell title={title}>{arrayOfProduct}</Carousell>
    </section>
  );
};
