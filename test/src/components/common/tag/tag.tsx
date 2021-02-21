import { FC } from 'react';
import { Link } from 'react-router-dom'
import './tag.scss';

type Props = {
  name: string,
  className?:string,
  onClick?: () => void;
}


export const Tag: FC<Props> = ({ name,className='tag' }) => {

  return (<button className={className}><Link to={`/shop/${name}`}>{name}</Link></button>)
}