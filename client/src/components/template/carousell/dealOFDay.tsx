import { FC } from "react";
import { Carousell, DealProduct } from "components/template";
import { useDisplayProduct } from "_hooks";

export const DealOfDay: FC = () => {
  const { dealProduct } = useDisplayProduct(1);

  const slides = dealProduct.map((el) => (
    <DealProduct key={el._id} item={el} />
  ));

  return (
    <section>
      <Carousell title="Deal of the day" deal>
        {slides}
      </Carousell>
    </section>
  );
};
