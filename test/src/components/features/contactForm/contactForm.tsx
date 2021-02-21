import { FC } from 'react';
import { Field, DarkButton,TextArea } from 'components/common';
import { contactField,User } from 'db/db';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './contactForm.scss';

const schema = yup.object().shape({
  firstName: yup.string().required('To pole jest wymagane'),
  email: yup.string().email('Email posiada nie własciwą konstrukcję - @gmail.com').required('To pole jest wymagane'),
  subject: yup.string().required('Proszę wpisać temat wiadomości'),
  message: yup.string().required('Proszę wpisać treść wiadomości')
});


export const ContactForm: FC = () => {

  const { register, handleSubmit, errors, } = useForm({
    resolver: yupResolver(schema),
  });

  const contactFields = contactField.map((el) => {
    switch (el.type) {
      case 'text':
        return <Field key={el.name} {...el} reference={register} error={errors[el.name]} />;
      case 'textarea':
        return <TextArea key={el.name} name={el.name} rows={10} reference={register} error={errors[el.name]}/>
      default:
        return <p key={el.name}>dany typ jest błędny</p>;
    }
  });
  const onSubmit = (user: User) => {
    console.log(user);
  };

  return (
    <section className='contactForm'>
      <header className='contactForm__header'>
        <h4 className='contactForm__title'>Contact Form</h4>
        <p className='contactForm__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='contactForm__fieldset'>
          {contactFields}
          <DarkButton>Send</DarkButton>
        </fieldset>
      </form>
    </section>
  );
};
