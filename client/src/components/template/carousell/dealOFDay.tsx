import { FC } from "react";
import { Carousell } from "components/template";
import { useDisplayProduct } from "_hooks";
import { Slide } from "./dealProduct";

export const DealOfDay: FC = () => {
  const { dealProduct } = useDisplayProduct(1);

  const slides = dealProduct.map((el) => <Slide key={el._id} item={el} />);

  return (
    <section>
      <Carousell title="Deal of the day" deal>
        {slides}
      </Carousell>
    </section>
  );
};
