import { FC } from "react";
import { IFieldIndput } from "components/interface";
import "./form.scss";

export const Field: FC<IFieldIndput> = ({
  name,
  required,
  type,
  placeholder,
  reference,
  value,
  onChange,
  keyUp,
  title,
  auto = "on",
  error,
}) => {
  const Label = required ? title + " *" : title;

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
          placeholder={placeholder}
        />
        <p className="error">{error?.message}</p>
      </div>
    </div>
  );
};
