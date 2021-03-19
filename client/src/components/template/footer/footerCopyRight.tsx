import { FC } from "react";

export const CopyRight: FC = () => {
  return (
    <div className="copyRight">
      <p>
        Copyright <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> 2021
      </p>
      <div>obrazki kart np paypal itp</div>
    </div>
  );
};
