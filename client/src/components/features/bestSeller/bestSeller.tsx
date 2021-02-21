import { FC } from 'react';
import { Carousel } from 'components/features'
import { Inventory } from 'store/inventory/types';


type Props = {
  data: Array<Inventory>
}

export const BestSeller: FC<Props> = ({ data }) => {

  return (
    <section >
      <Carousel title='BestSeller Products' slides={data} showAmountItem={2} />
    </section>
  )
};