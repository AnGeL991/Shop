import { ChangeEvent, FC,Ref } from 'react';
import './field.scss';

type Props = {
  name: string;
  type: string;
  required?: boolean;
  auto?: string;
  title?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  keyUp?: ()=> void;
  reference?: Ref<HTMLInputElement>;
  error?: { message: string, type: string },
};

export const Field: FC<Props> = ({
  name,
  required,
  type,
  reference,
  value,
  onChange,
  keyUp,
  title,
  auto = 'on',
  error
}) => {
  const Label = required ? title + ' *' : title;

  return (
    <div className="fild">
      <label className="fild__label">
        <span>{Label}</span>
      </label>
      <div>
        <input
          className="fild__input"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onKeyUp={keyUp}
          autoComplete={auto}
          ref={reference}
        />
        <p className='register__error'>{error?.message}</p>
      </div>
    </div>
  );
};
