import { FC } from "react";
import { SVG } from "svg";

import "./media.scss";
const linkGoogle =
  "https://shop.auth.eu-west-2.amazoncognito.com/oauth2/authorize?redirect_uri=https://furnituresho.netlify.app/login&response_type=code&client_id=7r47kh0gdld9pi8o4f3dkjfudh&identity_provider=Google";
const linkFacebook =
  "https://shop.auth.eu-west-2.amazoncognito.com/oauth2/authorize?redirect_uri=https://furnituresho.netlify.app/login&response_type=code&client_id=7r47kh0gdld9pi8o4f3dkjfudh&identity_provider=Facebook";
export const Google: FC = () => {
  return (
    <button className="media media--google">
      <img src={SVG.GOOGLE} alt="logo Google" className="media__logo" />
      <a className="media__link" href={linkGoogle}>
        Login with Google
      </a>
    </button>
  );
};

export const Facebook: FC = () => {
  return (
    <button className="media media--facebook">
      <img src={SVG.FBLOGO} alt="logo Facebook" className="media__logo" />
      <a className="media__link media__link--white" href={linkFacebook}>
        Login with Facebook
      </a>
    </button>
  );
};
