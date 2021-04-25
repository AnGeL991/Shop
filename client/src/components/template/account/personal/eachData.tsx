import { FC,Ref } from "react";

type DataProps = {
  title: string;
  name:string;
  value?: string;
  type?: string;
  placeholder?: string;
  half?:boolean,
  reference?: Ref<HTMLInputElement>;
  error?: { message: string; type?: string };
};

export const EachData: FC<DataProps> = ({
  title,
  value,
  name,
  type = "text",
  placeholder,
  half,
  reference,
  error
}) => {
  return (
    <>
      <div className={`personalData__wrapper ${half && 'personalData__wrapper--half'}`}>
        <label className="personalData__label">
          <p>{title}</p>
        </label>
        <input
          className="personalData__input"
          type={type}
          placeholder={placeholder}
          ref={reference}
          name={name}
          defaultValue={value}
        />
         {error &&<p className="error">{error.message}</p>}
      </div>
    </>
  );
};
