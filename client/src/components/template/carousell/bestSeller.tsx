import { FC } from "react";
import { CarousellProduct } from "components/template";
import { useSelector } from "react-redux";
import { ApplicationState } from "store/index";

export const BestSeller: FC = () => {
  const {data} = useSelector((state: ApplicationState) => state.inventory);

  return (
    <section>
      <CarousellProduct title="BestSeller Products" data={data} />
    </section>
  );
};
