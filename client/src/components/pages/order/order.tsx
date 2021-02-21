import { Dispatch, FC } from 'react';
import { ProductSecurity, OrderProduct } from 'components/features';
import { DarkButton, Header } from 'components/common';
import { connect} from 'react-redux';
import { Order } from 'store/order/types';
import { ApplicationState } from 'store/index';
import { fetchOrderREquest } from 'store/order/action';
import { Link } from 'react-router-dom';
import './order.scss';



interface PropsFromState {
  data: Order;
}
interface propsFromDispatch {
  fetchOrderREquest: () => any;
}
type Allprops = PropsFromState & propsFromDispatch;


const Basket: FC<Allprops> = ({ fetchOrderREquest }) => {

  return (
    <section className='page'>
      <Header title='Basket' />
      <OrderProduct />
      <ProductSecurity />
      <div className='order__basketBox'>
        <DarkButton><Link to='/shop'>return to Shop</Link></DarkButton>
      </div>
    </section>
  )
}

const mapStateToProps = ({ order }: ApplicationState) => ({
  loading: order.loading,
  errors: order.errors,
  data: order.data,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    fetchOrderREquest: () => {
      dispatch(fetchOrderREquest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);


