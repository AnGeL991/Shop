import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  Banner,
  BestSeller,
  DealOfDay,
  RecomendetProduct,
  SlideBanner,
} from 'components/features';
import { Inventory } from 'store/inventory/types';
import { ApplicationState } from 'store/index';
import { fetchRequest } from 'store/inventory/action';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

interface PropsFromState {
  loading: boolean;
  data: Inventory[];
  errors?: string;
}
interface propsFromDispatch {
  fetchRequest: () => any;
}

type Allprops = PropsFromState & propsFromDispatch;

const Home: FC<Allprops> = ({ loading, errors, data, fetchRequest }) => {
  useEffect(() => {
    fetchRequest();
  }, [fetchRequest]);

  if (loading === true) {
    return <section>Loading ...</section>;
  } else if (errors) {
    return <section>Cos poszło nie tak</section>;
  }
  return (
    <section>
      <SlideBanner />
      <Banner
        image="http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Sub-banner-01.jpg"
        title="Electronic Kettle"
        description="Now in all Color Varient Available."
        button="Shop now"
      />
      <Banner
        image="http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Sub-banner-02.jpg"
        title="Flower Pot"
        description="Now in all Color Varient Available."
        button="Shop now"
      />
      <BestSeller data={data} />
      <Banner
        image="http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Offer-banner.0.jpg"
        title="Clay Bowl Designs"
        description="Now Available all over the world"
        button="Shop Now"
      />
      <DealOfDay />
      <RecomendetProduct />
      <Banner
        image="http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-01.jpg"
        title="Dinnerware Sets"
        description="Now in Many design Available."
        button="Shop now"
      />
      <Banner
        image="http://wordpress.templatemela.com/woo/WCM05/WCM050119/wp-content/uploads/2019/08/Cms-banner-02.jpg"
        title="Handmade Pots"
        description="Now in Many Different Color Available."
        button="Shop now"
      />
      {/* <SliderBaner/> */}
      {/* 
      <Brands/> */}
    </section>
  );
};

const mapStateToProps = ({ inventory }: ApplicationState) => ({
  loading: inventory.loading,
  errors: inventory.errors,
  data: inventory.data,
});

///thunk dispatch usuń 

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: () => {
      dispatch(fetchRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
