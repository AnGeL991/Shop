import { FC, ReactNode } from "react";
import { IFieldIndput } from "components/interfaces";
import "./style/form.scss";

interface FieldCheckedProps extends IFieldIndput {
  children: ReactNode;
  checked?: boolean;
}

export const FieldChecked: FC<FieldCheckedProps> = ({
  children,
  name,
  type,
  checked,
  onChange,
  reference,
  error,
}) => {
  return (
    <>
      <div className="checkedFild">
        <input
          type={type}
          name={name}
          checked={checked}
          onChange={onChange}
          ref={reference}
          className="checkedFild__input"
        />
        {children}
      </div>
      <p className="error">{error?.message}</p>
    </>
  );
};
