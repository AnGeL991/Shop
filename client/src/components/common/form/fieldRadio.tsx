import { FC, ReactNode } from "react";
import { IFieldIndput } from "components/interfaces";
import "./style/form.scss";
interface IFieldRadio extends IFieldIndput {
  children: ReactNode;
  checked?: boolean;
}

export const FieldRadio: FC<IFieldRadio> = ({
  name,
  children,
  checked,
  onChange,
  reference,
  error,
}) => {
  return (
    <>
      <div className="fieldRadio" onChange={onChange}>
        <input
          type="radio"
          name={name}
          checked={checked}
          onChange={onChange}
          ref={reference}
          className="fieldRadio__input"
        />
        {children}
      </div>
      <p className="error">{error?.message}</p>
    </>
  );
};
