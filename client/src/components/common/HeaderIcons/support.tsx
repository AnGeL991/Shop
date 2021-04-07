import { FC } from "react";
import { Icons } from "components/common";



export const Support: FC = () => {
  return <div className='supportIcon' >
      <Icons.SupportIcon  className='supportIcon__icon' />
      <span>Contact <br/> 23 2321 231</span>
  </div>;
};
