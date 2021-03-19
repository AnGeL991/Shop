import { FC } from "react";
import { Product, CarousellProduct } from "components/template";
import { RouteComponentProps } from "react-router";
import { useDisplayProduct } from "_hooks";

interface ProductPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const data = [
  {
    _id: "1",
    title: "Similique sunt in culpa",
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/03/3-256x360.jpg",
    price: 150.0,
    discount: 0,
    category: "test",
    star: 3,
    amount: 1,
  },
  {
    _id: "2",
    title: "Laborum et Dolorum Fug",
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg",
    price: 150.0,
    discount: 0,
    category: "test",
    star: 4,
    amount: 1,
  },
  {
    _id: "3",
    title: "Laborum et Dolorum Fug",
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg",
    price: 1000.0,
    discount: 0,
    category: "test",
    star: 1,
    amount: 1,
  },
  {
    _id: "4",
    title: "Laborum et Dolorum Fug",
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2016/12/16-256x360.jpg",
    price: 30.0,
    discount: 0,
    category: "test",
    star: 5,
    amount: 1,
  },
];

export const ProductPage: FC<ProductPageProps> = ({ match }) => {
  const { productById } = useDisplayProduct();
  const product = productById(match.params.id);
  return (
    <section className="page">
      <Product product={product[0]} />
      <CarousellProduct title="Related Products" data={data} duration={2} />
    </section>
  );
};
