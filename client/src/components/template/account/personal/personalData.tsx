import { FC } from "react";
import { useForm } from "react-hook-form";
import { EachData } from "./eachData";
import { Button } from "components/common";
import { AccountHeader } from "components/template";
import { IUser } from "components/interfaces";
import { useToggleClick } from "_hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalSchema } from "./shema";
import { usePersonalDateLogic } from "./usePersonalLogic";
import "../style/personalData.scss";

interface IPersonalData extends IUser {
  active?: boolean;
}

export const PersonalData: FC<IPersonalData> = ({
  firstName,
  lastName,
  email,
  contact,
  code,
  adress,
  country,
  city,
  state,
  active,
}) => {
  const { open, handleToggle } = useToggleClick();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(personalSchema),
  });
  const { onSubmit, name, surName } = usePersonalDateLogic(firstName);

  return (
    <section className={`personalData ${active && "personalData--active"} `}>
      <AccountHeader {...{ open, handleToggle, text: "Edit Profile" }} />
      <article
        className={`personalData__content ${
          open && "personalData__content--active"
        } `}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset style={{ border: "none" }}>
            <EachData
              name="firstName"
              title="First Name"
              value={name}
              placeholder="Personal Data"
              half
              reference={register}
              error={errors["name"]}
            />
            <EachData
              title="LastName"
              name="lastName"
              value={lastName || surName}
              half
              reference={register}
              error={errors["lastName"]}
            />
            <EachData title="E-mail" name="email" value={email} disable />
            <EachData
              title="Contacts Number"
              name="contact"
              value={contact}
              placeholder="000-000-000"
              reference={register}
              error={errors["contact"]}
            />
            <EachData
              title="Adress"
              name="adress"
              value={adress}
              placeholder="adress..."
              reference={register}
              error={errors["adress"]}
            />
            <EachData
              title="City"
              name="city"
              value={city}
              placeholder="City"
              half
              reference={register}
              error={errors["city"]}
            />
            <EachData
              title="State"
              name="state"
              value={state}
              placeholder="State"
              half
              reference={register}
              error={errors["state"]}
            />
            <EachData
              title="Zip code"
              name="code"
              value={code}
              placeholder="00-000"
              half
              reference={register}
              error={errors["code"]}
            />
            <EachData
              title="Country"
              name="country"
              value={country}
              placeholder="example 24a"
              half
              reference={register}
              error={errors["country"]}
            />
            <div className="personalData__buttonBox">
              <Button className="personalData__button">Save</Button>
            </div>
          </fieldset>
        </form>
      </article>
    </section>
  );
};
