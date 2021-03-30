import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./headerIcons.scss";

export const Logo: FunctionComponent = () => {
  return (
    <div className="logo">
      <Link to="/">M-tibis-bis</Link>
    </div>
  );
};
