import { FC } from "react";
import { Link } from "react-router-dom";
import { Field, FieldRadio, Button } from "components/common";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adressPrivateSchema } from "_yup";
import { useAdressLogic } from "_hooks";

export const AdressForm: FC = () => {
  const {
    handleSetDelivery,
    inputChecked,
    handleSetData,
    dataForm,
    delivery,
    fieldsData
  } = useAdressLogic();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(adressPrivateSchema),
  });

  const fieldsDelivery = delivery.map((el) => (
    <div className="adressForm__deliveryBox" key={el.name}>
      <div>
        <FieldRadio
          name={el.name}
          reference={register}
          error={errors[el.name]}
          checked={inputChecked[el.name]}
          onChange={handleSetDelivery}
        >
          ${el.price.toFixed(2)}
        </FieldRadio>
      </div>

      <div className="adressForm__description">{el.description}</div>
    </div>
  ));

  const fields = fieldsData.map((el) => (
    <Field key={el.name} {...el} reference={register} error={errors[el.name]} />
  ));

  return (
    <section className="adressForm">
      <form
        className="adressForm__form"
        onSubmit={handleSubmit((d) => console.log(d))}
      >
        <fieldset className="adressForm__fieldset">
          <legend className="adressForm__legend">
            Your data - Delivery address
          </legend>
          <div className="adressForm__person">
            <FieldRadio
              name="private"
              checked={dataForm.private}
              onChange={handleSetData}
            >
              Osoba fizyczna
            </FieldRadio>
            <FieldRadio
              name="business"
              checked={dataForm.business}
              onChange={handleSetData}
            >
              Firma
            </FieldRadio>
          </div>
          {fields}
          {fieldsDelivery}
          <div className='buttons'>
            <Button className="buttons__btn">
             <Link to='/checkout/payment'> Choose payment method</Link>
            </Button>
            <Button
              darkButton
              className="buttons__dark"
            >
              <Link to="/shop">Back to cart</Link>
            </Button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};
