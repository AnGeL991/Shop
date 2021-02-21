import { FC } from 'react';


export const EachData: FC = () => {

  return (
    <div className='personalData__wrapper'>
      <label className='personalData__label'>
        <p>Name</p>
      </label>
      <input className='personalData__input' type='text' value='adrian' disabled />
     <div className='personalData__btnBox'>
     <button className='personalData__button'>Edytuj</button>
      <button className='personalData__button'>Zapisz</button>
     </div>
     
    </div>
  )
}
