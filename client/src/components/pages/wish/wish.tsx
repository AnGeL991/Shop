import { FC } from 'react';
import { Header } from 'components/common'
import './wish.scss';


export const Wish: FC = () => {

  const data = []

  if (data.length === 0) {
    return <section className='page'>
      <Header title='WishList' />
      <div className='empty'>
        <p> No products added to the wishlist</p>
      </div>
    </section>
  }

  return (
    <section>

    </section>
  )
}