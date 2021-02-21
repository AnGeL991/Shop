import { FC } from 'react';



type Props = {
  image: string,
  title: string,
  subTitle: string,
  description: string,
  buttons: Array<string>,
  index: number,
}

export const Slide: FC<Props> = ({ image, title, subTitle, description, buttons, index }) => {

 





  const button = buttons.map(el => (
    <button  key={el} className={`slide__${el}`}>{el}</button>
  ))

  return (
    <div className='slide' style={{ transform: `translate(-${index * 100}%)` }}>
      <div className='slide__image'>
        <img className='slide__img' src={image} alt={title} />
        <div className='slide__wrapper' >
          <h3 className='slide__title' >{title}</h3>
          <h3 className='slide__subTitle'><strong>{subTitle}</strong></h3>
          <span className='slide__description' >{description}</span>
          {button}
        </div>
      </div>
    </div>
  )
}