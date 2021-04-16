import { FC, useMemo } from "react";
import { IFieldIndput } from "components/interfaces";
import "./style/form.scss";

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
  const Label = useMemo(() => (required ? title + " *" : title), [
    required,
    title,
  ]);

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
        {error &&<p className="error">{error.message}</p>}
      </div>
    </div>
  );
};
