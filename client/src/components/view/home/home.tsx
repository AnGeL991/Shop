import { FC } from "react";
import {
  Banner,
  BestSeller,
  DealOfDay,
  RecomendetProduct,
  SlideBanner,
  Brands,
  TopBanner,
  BottomBanner,
} from "components/template";

export const Home: FC = () => {
  return (
    <section>
      <SlideBanner />
      <TopBanner />
      <BestSeller />
      <Banner
        image="http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Offer-banner.0.jpg"
        title="Clay Bowl Designs"
        description="Now Available all over the world"
        button="Shop Now"
      />
      <DealOfDay />
      <RecomendetProduct />
      <BottomBanner />
      <Brands />
    </section>
  );
};
