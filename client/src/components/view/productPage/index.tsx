import { FC } from "react";
import { ProductDetail, CarousellProduct } from "components/template";
import { useDisplayProduct } from "_hooks";
import { MatchProps } from "components/interfaces";

export const ProductPage: FC<MatchProps> = ({ match }) => {
  const { productById, productByCategory } = useDisplayProduct(1);

  const product = productById(match.params.id);
  console.log(product);
 
  if (!product ) {
    return <div>Loading</div>;
  } 
  const relatedProduct = productByCategory(product.category);
  

  return (
    <section style={{paddingBottom:'40px'}}>
      <ProductDetail id={match.params.id} product={product} />
      <CarousellProduct title="Related Products" data={relatedProduct} />
    </section>
  );
};
