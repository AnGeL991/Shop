import { FC } from "react";
import { DealProduct } from "components/template";
import { useDisplayProduct } from "_hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
SwiperCore.use([Pagination, Navigation, Autoplay]);

const settings = {
  slidesPerView: 2,
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
    delay: 4000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
};

export const DealOfDay: FC = () => {
  const { dealProduct } = useDisplayProduct(1);

  const slides = dealProduct.map((el) => (
    <SwiperSlide key={el._id}>
      <DealProduct key={el._id} item={el} />
    </SwiperSlide>
  ));

  return (
    <section className="carousel">
      <header className="carousel__header">
        <h1 className="carousel__title">Deal of the day</h1>
      </header>
      <Swiper {...settings}>{slides}</Swiper>
    </section>
  );
};
