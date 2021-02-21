import { FC } from 'react';
import { EachFilter } from 'components/common';
import {PersonalData} from 'components/features';

type Props = {
  name?: string;
};

export const AccountFilter: FC<Props> = ({ name = 'adrian' }) => {
  return (
    <section className='myAccount__filter'>
      <h4 className='myAccount__entryTitle'>Witaj z powrotem {name}</h4>
      <EachFilter title="Dane osobowe">
        <PersonalData/>
      </EachFilter>
      <EachFilter title="Twoje zamówienia">

      </EachFilter>
      <EachFilter title="Śledz paczkę">

      </EachFilter>
      <EachFilter title="Reklamacje">

      </EachFilter>
    </section>
  );
};
