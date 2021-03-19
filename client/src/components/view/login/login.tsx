import {FC} from 'react';
import {Header} from 'components/common';
import {LoginForm,CreateAccount} from 'components/template';
import './login.scss';

export const Login:FC=()=>{

  return (
  <section className='page login'>
    <Header title='Log in'/>
    <LoginForm/>
    <CreateAccount/>
  </section>
  )
}