import { FC } from "react";
import { brands } from "db";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import "./style/brandSlider.scss";
SwiperCore.use([Pagination, Navigation, Autoplay]);

const settings = {
  slidesPerView: 5,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: false,
  observer: true,
  observeParents: true,
  className: "mySwiper",
  navigation: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      autoplay:false,
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      autoplay:true,
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    }
  },
};



export const BrandSlider: FC = () => {
  const data = brands.map((el) => (
    <SwiperSlide key={el}>
      <div  className="brands__slide">
        <img src={el} alt="brands" />
      </div>
    </SwiperSlide>
  ));

  return (
    <section className="brands">
      <Swiper {...settings}>{data}</Swiper>
    </section>
  );
};
