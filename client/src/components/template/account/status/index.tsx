import { FC } from "react";
import { Icons } from "components/common";
import "../style/status.scss";

interface IStatus {
    status?:number,
}

export const Status: FC<IStatus> = ({status=0}) => {
  const { Star } = Icons;
  return (
    <div className="status">
      <Star className={`status__icon 
      ${status === 0 && 'status__icon--iron' }
      ${status === 1 && 'status__icon--silver' }
      ${status === 2 && 'status__icon--gold' }
      ${status === 3 && 'status__icon--platinum' }
      ${status === 4 && 'status__icon--master' }
      ${status === 5 && 'status__icon--grandMaster' }
      `} />
      <span className='status__amount'>{status * 5}</span>    
    </div>
  );
};
