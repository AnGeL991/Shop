import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {SVG} from 'svg';
import "./style/headerIcons.scss";

export const Logo: FunctionComponent = () => {
  return (
    <div className="logo">
      <Link to="/"><img src={SVG.LOGO} className='logo__img' alt='Logo'/></Link>
    </div>
  );
};
