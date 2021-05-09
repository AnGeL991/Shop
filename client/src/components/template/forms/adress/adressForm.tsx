import { FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Field, FieldRadio, Button, Icons } from "components/common";
import { PaymentRenderProduct } from "components/template";
import { yupResolver } from "@hookform/resolvers/yup";
import { adressPrivateSchema } from "_helpers";
import { useAdressLogic } from "./useAdressLogic";
import { IDelivery } from "components/interfaces";
import "./adressForm.scss";

const { DeliveryIcon, HomeIcon } = Icons;

const delivery: Array<IDelivery> = [
  {
    price: 29,
    name: "payment",
    icon: <DeliveryIcon className="adressForm__icon" />,
    description: "Standard home delivery.",
  },
  {
    price: 39,
    name: "courier",
    icon: <DeliveryIcon className="adressForm__icon" />,
    description: "Nominated day delivery.",
  },
  {
    price: 0,
    name: "own",
    icon: <HomeIcon className="adressForm__icon" />,
    description: "Collect from store: (FREE)",
  },
];

export const AdressForm: FC = () => {
  const {
    handleSetRegulation,
    inputDelivery,
    fieldsData,
    submit,
  } = useAdressLogic();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(adressPrivateSchema),
  });

  const fieldsDelivery = useMemo(
    () =>
      delivery.map((el) => (
        <div className="adressForm__deliveryBox" key={el.name}>
          <div>
            <FieldRadio
              name={el.name}
              error={errors[el.name]}
              checked={inputDelivery[el.name]}
              onChange={handleSetRegulation}
            >
              ${el.price.toFixed(2)}
            </FieldRadio>
          </div>
          <div className="adressForm__description">
            {el.icon} {el.description}
          </div>
        </div>
      )),
    [errors, inputDelivery, handleSetRegulation]
  );

  const fields = useMemo(
    () =>
      fieldsData.map((el) => (
        <Field
          key={el.name}
          {...el}
          reference={register}
          error={errors[el.name]}
        />
      )),
    [fieldsData, register, errors]
  );

  return (
    <section className="adressForm">
      <form className="adressForm__form" onSubmit={handleSubmit(submit)}>
        <fieldset className="adressForm__fieldset">
          <legend className="adressForm__legend">Delivery address</legend>
          <div className="adressForm__person"></div>
          {fields}
          {fieldsDelivery}
          <div className="buttons">
            <Button className="buttons__btn">Choose payment method</Button>
            <Button darkButton className="buttons__dark">
              <Link to="/shop">Back to cart</Link>
            </Button>
          </div>
        </fieldset>
      </form>
      <div className="adressForm__products">
        <PaymentRenderProduct title="Summary" />
      </div>
    </section>
  );
};
