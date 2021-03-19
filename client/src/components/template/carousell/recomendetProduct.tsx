import { FC } from "react";
import { CarousellProduct } from "components/template";
import { useDisplayProduct } from "_hooks";

export const RecomendetProduct: FC = () => {
  const { recomendedProduct } = useDisplayProduct();
  return (
    <CarousellProduct title="Recomended Products" data={recomendedProduct} />
  );
};
