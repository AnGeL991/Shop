import FacebookLogin from "react-facebook-login";
import { useFacebookLogic } from "./hook";
import './style.scss'
export const FacebookButton = () => {
  const { responseFacebook } = useFacebookLogic();

  return (
    <div className='facebook'>
      <FacebookLogin
        appId="754828438729477"
        fields="name,email"
        scope="public_profile,user_friends,email"
        callback={responseFacebook}
        icon="fa-facebook"
        buttonStyle={{width:'100%',height:'50px',padding:'10px'}}
        
      />
    </div>
  );
};
