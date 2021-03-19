import { FC } from 'react';
import { useModalLogic } from '_hooks';
import { EachLink } from 'components/common';
import { Modal } from 'components/template';
import './nav.scss';



export const NavCategories:FC = ( ) => {
  const { showModal, handleToggleModal } = useModalLogic();
  const data =[
    { name: 'Appliances', path: '/shop' },
    { name: 'Bakeware', path: '/shop' },
    { name: 'Coffee maker', path: '/shop' },
    { name: 'Cooktops', path: '/shop' },
    { name: 'Cookware', path: '/shop' },
    { name: 'Cotlery', path: '/shop' },
    { name: 'Dishwasher', path: '/shop' },
    { name: 'Drawer', path: '/shop' },
    { name: 'Fryer', path: '/shop' },
  ]

  const category = (
    <nav className={`category ${showModal && 'category__active'}`}>
      <ul className='category__list'>
        {data.map((el)=>(
          <EachLink key={el.name} {...el} className='category'/>
        ))} 
      </ul>
    </nav>
  )


  return (
    <>
    <div className="allCategories" onClick={handleToggleModal}>
      All Categories
    </div>
    <Modal style={{backgroundColor:'rgba(255,255,255,0.6'}} show={showModal} close={handleToggleModal} fullHight>
      {category}
    </Modal>
    </>
  );
};
