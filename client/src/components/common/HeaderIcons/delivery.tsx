import { FC } from "react";
import { Icons } from "components/common";

export const Delivery: FC = () => {
  return (
    <div className='supportIcon'>
      <Icons.DeliveryIcon  className='supportIcon__icon'/>
      <span>Free <br/>  Shipping</span>
    </div>
  );
};
