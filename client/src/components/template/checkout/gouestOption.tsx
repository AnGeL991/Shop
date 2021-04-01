import { FC } from "react";
import { Button } from "components/common";
import { Link } from "react-router-dom";
import "./style/guest.scss";

export const GouestOption: FC = () => {
  return (
    <section className="gouest">
      <h4 className="gouest__title">Buys as a guest</h4>
      <p className="gouest__description">
        Do you want to create an account? You can also do it with one click
        after placing an order
      </p>
      <div className="buttons">
        <Link to="/checkout/delivery">
          <Button className="buttons__btn">buys without logging in</Button>
        </Link>
        <Link to="/registration">
          <Button darkButton className="buttons__dark">
            Create account
          </Button>
        </Link>
      </div>
    </section>
  );
};
