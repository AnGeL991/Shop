import { FC, lazy, Suspense } from "react";
import { useDisplayProduct } from "_hooks";
const CarousellProduct = lazy(() =>
  import("components/template/carousell/carousellProduct").then((module) => ({
    default: module.CarousellProduct,
  }))
);

export const RecomendetProduct: FC = () => {
  const { recomendedProduct } = useDisplayProduct(1);

  return (
    <Suspense fallback={<div>loading</div>}>
      <CarousellProduct title="Recomended Products" data={recomendedProduct} />
    </Suspense>
  );
};
