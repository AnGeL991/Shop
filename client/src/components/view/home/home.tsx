import { FC } from 'react';
import {
  Banner,
  BestSeller,
  DealOfDay,
  RecomendetProduct,
  SlideBanner,
  Brands,
} from 'components/template';

export const Home: FC = () => {

  return (
    <section>
      <SlideBanner />
      <Banner
        image="http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Sub-banner-01.jpg"
        title="Electronic Kettle"
        description="Now in all Color Varient Available."
        button="Shop now"
      />
      <Banner
        image="http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Sub-banner-02.jpg"
        title="Flower Pot"
        description="Now in all Color Varient Available."
        button="Shop now"
      />
      <BestSeller />
      <Banner
        image="http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Offer-banner.0.jpg"
        title="Clay Bowl Designs"
        description="Now Available all over the world"
        button="Shop Now"
      />
      <DealOfDay />
      <RecomendetProduct />
      <Banner
        image="http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-01.jpg"
        title="Dinnerware Sets"
        description="Now in Many design Available."
        button="Shop now"
      />
      <Banner
        image="http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-02.jpg"
        title="Handmade Pots"
        description="Now in Many Different Color Available."
        button="Shop now"
      />
      <Brands />
    </section>
  );
};

