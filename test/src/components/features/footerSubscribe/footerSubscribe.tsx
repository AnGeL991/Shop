import { useState, FunctionComponent, ChangeEventHandler, ChangeEvent } from 'react';
import { ReadMore } from 'components/common';
import { FiSend } from 'react-icons/fi';


export const Subscribe: FunctionComponent = () => {
  const [value, setValue] = useState('');

  const handleChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <ReadMore title="Subscribe Now">
      <div>
        <p className="footer__subscribe">Subscribe to our newsletter get 10% off your first purchase at here for update</p>
        <input type="text" className='footer__input' onChange={handleChange} value={value} />
        <FiSend size='28' color='whiteSmoke' />
      </div>
    </ReadMore>
  )
}