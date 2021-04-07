import { FC } from "react";
import { Banner } from "components/template";
import "./style/banner.scss";
export const TopBanner: FC = () => {
  return (
    <section className="doubleBanner doubleBanner--shadow">
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
    </section>
  );
};
