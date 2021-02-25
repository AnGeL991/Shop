import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEvent,
  FormEventHandler,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { Button, Field } from 'components/common';

interface Account {
  login: string;
  password: string;
}

// import {UserApi} from ...
// import {actions} from ...

// akcje, api, i dispach
// class ConnectedUserLogic{
//   static handleLogin = (dispatch) => async (email, password) => {
//     try{
//       dispatch(action.init())
//       const userData = await UserApi.login(...,...)
//       dispatch(action.login(userData))
//     }
//     catch(error){
//       dispatch(action.error(error))
//     }
//   }
// }

// const useLogin = ()=>{
//   const dispatch = useDispatch()

//   const handleLogin = useCallback(ConnectedUserLogic.handleLogin(dispatch) ,[])

//   const handleLogout = useCallback(async ()=>{
//     try{
//       dispatch(action.init())
//       const userData = await UserApi.logout(...,...)
//       dispatch(action.login(userData))
//     }
//     catch(error){
//       dispatch(action.error(error))
//     }
//   },[])

//   const handleLogout = ()=>{}

// }

export const LoginForm: FC = () => {
  const [account, setAccount] = useState<Account>({
    login: '',
    password: '',
  });
  const { login, password } = account;

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.currentTarget;
    if (name === 'login') {
      setAccount((prev) => ({
        ...prev,
        login: value,
      }));
    } else if (name === 'password') {
      setAccount((prev) => ({
        ...prev,
        password: value,
      }));
    }
  };
  const handleSubmit: FormEventHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(account);
    setAccount({
      login: '',
      password: '',
    });
  };

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <fieldset className="login__fildset">
        <Field
          type="text"
          name="login"
          required
          value={login}
          onChange={handleChange}
          title="E-mail Adress"
        />
        <Field
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
          title="password"
        />
        <div className="login__buttons">
          <Button>Log in</Button>
          <Link className="login__link" to="/login/forget-password">
            Forget password?
          </Link>
        </div>
      </fieldset>
    </form>
  );
};
