import { FC } from "react";
import { Header } from "components/common";
import { WhyUs, GalerySlick } from "components/template";

const data = [
  {
    id: 0,
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-02.jpg",
  },
  {
    id: 1,
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-02.jpg",
  },
  {
    id: 2,
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-02.jpg",
  },
  {
    id: 2,
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-02.jpg",
  },
  {
    id: 2,
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-02.jpg",
  },
  {
    id: 2,
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-02.jpg",
  },
  {
    id: 2,
    image:
      "http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-02.jpg",
  },
];

export const AboutUs: FC = () => {
  return (
    <section className="height">
      <Header title="About Us" />
      <GalerySlick
        data={data}
        slidesToScroll={1}
        slidesToShow={3}
        initialSlide={0}
        className="galerySlider"
      />
      <WhyUs />
    </section>
  );
};
