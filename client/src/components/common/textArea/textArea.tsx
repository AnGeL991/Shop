import { ChangeEvent, FC, Ref } from 'react';
import './textArea.scss';

type Props = {
  name: string;
  value?: string | number;
  rows?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  reference?: Ref<HTMLTextAreaElement>;
  error?: { message: string; type: string };
};

export const TextArea: FC<Props> = ({
  name,
  rows,
  reference,
  onChange,
  value,
  error,
}) => {
  return (
    <div className="textArea">
      <label className="textArea__label">
        <span>{name}</span>
      </label>
      <textarea
        className="textArea__block"
        value={value}
        onChange={onChange}
        rows={rows}
        ref={reference}
      ></textarea>
      <p className="register__error">{error?.message}</p>
    </div>
  );
};
