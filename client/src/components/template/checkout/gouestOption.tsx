import { FC } from "react";
import {Button} from 'components/common';
import {Link} from 'react-router-dom';

export const GouestOption: FC = () => {
  return (
    <section className='gouest'>
      <h4 className='gouest__title'>Buys as a guest</h4>
      <p className='gouest__description'>
        Do you want to create an account? You can also do it with one click
        after placing an order
      </p>
      <div className='buttons'>
        <Button className='buttons__btn'><Link to='/checkout/delivery'>buys without logging in</Link></Button>
        <Button darkButton className='buttons__dark'><Link to='/registration'>Create account</Link></Button>
      </div>
    </section>
  );
};
