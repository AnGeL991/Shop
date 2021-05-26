import { FC } from "react";
import { CarousellProduct } from "components/template";
import { useGetState } from "_hooks";

export const BestSeller: FC = () => {
  const {
    inventory: { data },
  } = useGetState();

  return <CarousellProduct title="Best seller product" {...{ data }} />;
};
