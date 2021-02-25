import { FC, ChangeEvent, ReactNode, Ref } from 'react';
import './fieldChecked.scss';

type Props = {
  name: string;
  type: string;
  children: ReactNode;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  reference?: Ref<HTMLInputElement>;
  error?: { message: string; type: string };
};

export const FieldChecked: FC<Props> = ({
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
      <p className="register__error">{error?.message}</p>
    </>
  );
};
