import { FC } from "react";
import { ProductDetail, CarousellProduct } from "components/template";
import { useDisplayProduct } from "_hooks";
import { MatchProps } from "components/interfaces";

export const ProductPage: FC<MatchProps> = ({ match }) => {
  const { productById, productByCategory } = useDisplayProduct();
  const product = productById(match.params.id);
  const relatedProduct = productByCategory(product[0].category);

  return (
    <section className="page">
      <ProductDetail product={product[0]} />
      <CarousellProduct
        title="Related Products"
        data={relatedProduct}
        duration={0}
      />
    </section>
  );
};
