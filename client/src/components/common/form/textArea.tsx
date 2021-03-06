import { ChangeEvent, FC, Ref } from "react";
import "./style/form.scss";

interface TextAreaProps {
  name?: string;
  value?: string | number;
  rows?: number;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  reference?: Ref<HTMLTextAreaElement>;
  error?: { message: string; type: string };
}

export const TextArea: FC<TextAreaProps> = ({
  name,
  rows,
  reference,
  onChange,
  value,
  error,
  placeholder,
}) => {
  return (
    <div className="textArea">
      <label className="textArea__label">
        <span>{name}</span>
      </label>
      <textarea
        className="textArea__block"
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        ref={reference}
        placeholder={placeholder}
      ></textarea>
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};
