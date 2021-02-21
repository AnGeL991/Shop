import {FunctionComponent} from 'react';
import './circle.scss';

type CircleProps={
  amount:Number
}
export const Circle:FunctionComponent<CircleProps> =({amount})=>{

  return(
  <div className="circle">
    {amount}
  </div>)
}