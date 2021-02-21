import {FunctionComponent,MouseEventHandler,useState} from 'react';
import { VscAccount } from 'react-icons/vsc';
import {Link} from 'react-router-dom';


export const Account:FunctionComponent=()=>{

  const [open,setOpen] =useState(false);
  const handleOpen:MouseEventHandler=()=>{
    setOpen((prev)=>!prev);
  }

    
  return (
    <>
    <div onClick={handleOpen} className='icon icon__bottom'>
      <VscAccount size='28'/>
    </div>
    <div className={`header__account ${open && 'header__account--active'}`}>
      <ul className='list' >
        <li className='item'><Link to='/login'>My Accont</Link></li>
        <li className='item'><Link to='/order'>Checkout</Link></li>
        <li className='item'><Link to='/registration'>Sign on</Link></li>
      </ul>
    </div>
    </>
  )
}