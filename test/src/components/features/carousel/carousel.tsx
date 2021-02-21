import { FC } from 'react';
import { ProductBox } from 'components/common';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useChangeSlider } from '_hooks/useChangeSlider';
import './carousel.scss';

type Props = {
  title: string,
  slides: Array<{ id: number, title: string, image: string, price: number | string, star: number }>
  showAmountItem: number,
}


export const Carousel: FC<Props> = ({ title, slides, showAmountItem = 2 }) => {


  const { slide, nextSlide, prevSlide } = useChangeSlider(slides)

  const arrayOfProduct = slides.map((el) => (
    <div
      key={el.id}
      className='carousel__item'
      style={{
        transform: `translateX(-${slide.translate}%)`,
        width: `${100 / showAmountItem}vw`
      }}>
      <ProductBox item={el} />
    </div>
  ))

  return (
    <section className='carousel'>
      <header className='carousel__header'>
        <h1 className='carousel__title'>
          {title}
        </h1>
        <MdKeyboardArrowLeft size='24' onClick={prevSlide} />
        <MdKeyboardArrowRight size='24' onClick={nextSlide} />
      </header>
      <div className='carousel__slide'
        style={{ width: `${slides.length * 100}%` }}
      >
        {arrayOfProduct}
      </div>
    </section>)
}
