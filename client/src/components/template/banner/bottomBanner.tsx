import { FC } from "react";
import { Banner } from "components/template";
import "./style/banner.scss";
export const BottomBanner: FC = () => {
  return (
    <section className="doubleBanner">
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
    </section>
  );
};
