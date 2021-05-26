import { FC } from "react";
import { ProductBox } from "components/template";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import { Inventory } from "components/interfaces";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./style/carousell.scss";

SwiperCore.use([Pagination, Navigation, Autoplay]);

interface CarousellProps {
  title: string;
  data: Array<Inventory>;
}
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
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    760: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1220: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
};

export const CarousellProduct: FC<CarousellProps> = ({ title, data }) => {
  const arrayOfProduct = data.map((el) => (
    <SwiperSlide key={el._id}>
      <ProductBox item={el} />
    </SwiperSlide>
  ));

  return (
    <section className="carousel">
      <header className="carousel__header">
        <h1 className="carousel__title">{title}</h1>
      </header>
      <Swiper {...settings}>{arrayOfProduct}</Swiper>
    </section>
  );
};
