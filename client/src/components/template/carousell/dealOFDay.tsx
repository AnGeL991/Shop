import { FC, useMemo } from "react";
import { DealProduct } from "components/template";
import { useDisplayProduct } from "_hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

const settings = {
  slidesPerView: 2,
  spaceBetween: 20,
  look:true,
  slidesPerGroup: 1,
  pagination: false,
  className: "mySwiper",
  navigation: true,
  speed: 1000,
  breakpoints: {
    320: {
  
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

  },
};

export const DealOfDay: FC = () => {
  const { dealProduct } = useDisplayProduct(1);

  const slides = useMemo(
    () =>
      dealProduct.map((el) => (
        <SwiperSlide key={el._id}>
          <DealProduct key={el._id} item={el} />
        </SwiperSlide>
      )),
    [dealProduct]
  );

  return (
    <section className="carousel">
      <header className="carousel__header">
        <h1 className="carousel__title">Deal of the day</h1>
      </header>
      <Swiper {...settings}>{slides}</Swiper>
    </section>
  );
};
