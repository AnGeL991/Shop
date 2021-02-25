import React, { FunctionComponent } from 'react';
import './logo.scss';

type Props = {
  onClick: () => void;
};

export const Logo: FunctionComponent<Props> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="logo">
      M-tibis-bis
    </div>
  );
};
