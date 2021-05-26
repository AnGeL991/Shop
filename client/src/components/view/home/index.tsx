import { FC } from "react";
import {
  Banner,
  BestSeller,
  DealOfDay,
  RecomendetProduct,
  SlideBanner,
  TopBanner,
  BottomBanner,
  BrandSlider,
} from "components/template";

export const Home: FC = () => {
  return (
    <section>
      <SlideBanner />
      <TopBanner />
      <BestSeller />
      <Banner
        image="./images/Offer-banner.0.jpg"
        title="Clay Bowl Designs"
        description="Now Available all over the world"
        button="Shop Now"
      />
      <DealOfDay />
      <RecomendetProduct />
      <BottomBanner />
      <BrandSlider />
    </section>
  );
};
