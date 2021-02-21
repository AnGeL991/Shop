import {FunctionComponent,MouseEventHandler,useState} from 'react';
import { GoThreeBars } from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai';
import { EachLink } from 'components/common';
import './nav.scss';


export const Nav:FunctionComponent=()=>{
 
  const [open,setOpen] = useState(false);

  const handleToggle:MouseEventHandler=()=>{
    setOpen((prev)=>!prev)
  }
  const data= [
    {name:'Home',path:'/'},
    {name:'Shop',path:'/Shop',subLink:[{name:'Product Category',path:'/ProductCategory'},{name:'Top Rated Product',path:'/TopRated'}]},
    {name:'Blog',path:'/Blog',
    subLink:[{name:'Left SideBar',path:'/LeftSideBar'},{name:'Right SideBar',path:'/RightSideBar'}]},
    {name:'Media',path:'/Media'},
    {name:'ShortCode',path:'/ShordCode'},
    {name:'Features',path:'/Features'},
    {name:'About Us',path:'/AboutUs'},
    {name:'Contact Us',path:'/contact'}
]

  const filter =<nav className={`nav ${open && 'nav__active'}`}>
    <AiOutlineClose onClick={handleToggle} color='black' size='28'/>
    <ul className='nav__list'>{data.map((el)=>(
      <EachLink key={el.name} {...el}/>
    ))}</ul>
  </nav>;

  return (
    <>
    <div onClick={handleToggle} className='icon__bottom'>
      <GoThreeBars color='white' size='28'/>
    </div>
    {filter}
    </>
  )
}