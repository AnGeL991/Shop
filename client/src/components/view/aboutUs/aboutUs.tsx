import { FC } from 'react';
import { Header } from 'components/common';
import { WhyUs, GalerySlider } from 'components/template';
import 'styles/pageStyle/aboutUs.scss';

const data = [
  {
    id: 0,
    image:
      'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-02.jpg',
  },
  {
    id: 1,
    image:
      'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-02.jpg',
  },
  {
    id: 2,
    image:
      'http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-02.jpg',
  },
];

export const AboutUs: FC = () => {
  return (
    <section className="page">
      <Header title="About Us" />
      <GalerySlider data={data} arrows={true} />
      {/* <OurHistory/>  */}
      <WhyUs />
    </section>
  );
};
