import { FC } from "react";
import { CarousellProduct } from "components/template";
import { useGetState } from "_hooks";

export const BestSeller: FC = () => {
  const {
    inventory: { data },
  } = useGetState();

  return (
    <section>
      <CarousellProduct title="BestSeller Products" data={data} />
    </section>
  );
};
