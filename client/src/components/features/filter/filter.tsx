import { FC } from 'react';
import { EachLink, Button, Tag,EachFilter } from 'components/common';
import './filter.scss';

const data = [
  { name: 'Sofa', path: '/shop/sofa' },
  {
    name: 'Bed',
    path: '/shop/bed',
    subLink: [
      { name: 'Single', path: '/shop/bed/single' },
      { name: 'Double', path: '/shop/bed/double' },
    ],
  },
  {
    name: 'Table',
    path: '/shop/table',
    subLink: [{ name: 'Long table', path: '/shop/table/long' }],
  },
  { name: 'Accesories', path: '/shop/accesories' },
];
const dataTag = [{ name: 'Summer' }, { name: 'Winter' }]

export const Filter: FC = () => {

  const categoryData = data.map((el) => <EachLink key={el.name} {...el} className='filterContext' />);

  const tagData = dataTag.map((el) => (<Tag key={el.name} name={el.name} />))

  return (
    <section className='container' >
      <EachFilter title="Product categories">
        <ul className="filterContext">
          {categoryData}
        </ul>
      </EachFilter>
      <EachFilter title="Filter by price">
        <div className='filterContext'>
          <input className='filterContext__range' type='range' />
          <Button className='filterContext__button'>Filter</Button>
          <p className='filterContext__price'>Price: <span>$0</span> — <span>$90</span></p>
        </div>

      </EachFilter>
      <EachFilter title="Product tags">
        {tagData}
      </EachFilter>
    </section>
  );
};
