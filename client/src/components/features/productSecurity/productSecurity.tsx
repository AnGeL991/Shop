import {FC} from 'react';
import './productSecurity.scss';


export const ProductSecurity:FC = () => {
  const information = [
    {
      title: 'Gwarancja',
      text: 'Na wszystkie meble obowiązuje gwarancja ważna 24 miesiące.',
    },
    {
      title: 'zwroty',
      text:
        'Pamietaj, ze masz pełne prawo do zwrotu mebli w ciągu 14 dni. kupuj bez presji.',
    },
    {
      title: 'Reklamacja',
      text: 'Jeśli coś z meblami będzie nie tak wymienimy je na nasz koszt.',
    },
  ];
  return (
    <section className='security__wrapper'>
      <ul className='security__wrapper'>
        {information.map((item) => (
          <li key={item.title} className='security__info'>
            <h3 className='security__title'>{item.title}</h3>
            <p className='security__text'>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
