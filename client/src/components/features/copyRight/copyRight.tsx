import { FunctionComponent } from 'react';
import './copyRight.scss';
export const CopyRight: FunctionComponent = () => {
  return (
    <div className="copyRight">
      <p>
        Copyright <span dangerouslySetInnerHTML={{ __html: '&copy;' }} /> 2021
      </p>
      <div>obrazki kart np paypal itp</div>
    </div>
  );
};
