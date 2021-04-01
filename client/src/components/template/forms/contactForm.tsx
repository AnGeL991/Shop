import { FC, useMemo } from "react";
import { Field, Button, TextArea } from "components/common";
import { contactField, User } from "db";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "./validateSchema";
import "./style/contactForm.scss";

// zrób własnego hooka odpowiedzialnego za wysłanie wiadomosci na server do bazy

export const ContactForm: FC = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const contactFields = useMemo(
    () =>
      contactField.map((el) => {
        switch (el.type) {
          case "text":
            return (
              <Field
                key={el.name}
                {...el}
                reference={register}
                error={errors[el.name]}
              />
            );
          case "textarea":
            return (
              <TextArea
                key={el.name}
                name={el.name}
                rows={10}
                reference={register}
                error={errors[el.name]}
              />
            );
          default:
            return <p key={el.name}>dany typ jest błędny</p>;
        }
      }),
    [errors, register]
  );

  const onSubmit = (user: User) => {
    console.log(user);
  };

  return (
    <section className="contactForm">
      <header className="contactForm__header">
        <h4 className="contactForm__title">Contact Form</h4>
        <p className="contactForm__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="contactForm__fieldset">
          {contactFields}
          <Button darkButton>Send</Button>
        </fieldset>
      </form>
    </section>
  );
};
