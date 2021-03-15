import { FC } from 'react';
import { Product } from 'components/features';
import './product.scss';

export const ProductPage: FC = () => {
  return (
    <section>
      <Product />
      {/* <RelatedProducts/> */}
    </section>
  );
};
