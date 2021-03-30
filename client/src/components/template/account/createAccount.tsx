import { FC } from "react";
import { Header, Button } from "components/common";
import { Link } from "react-router-dom";

export const CreateAccount: FC = () => {
  return (
    <section>
      <Header title="Create Account" />
      <div className="login__createAccount">
        <p className="login__description">
          Don't have an account yet? <br />
          Don't hesitate, no longer.
          <br />
          Thanks to our account you will gain:
        </p>
        <ul className="login__list">
          <li className="login__item">You are able to conditions your order</li>
          <li className="login__item">You have access to the order history</li>
          <li className="login__item">
            You can easily save your selected products for later
          </li>
        </ul>
        <div className="login__buttonBox">
          <Button>
            <Link className="login__linkButton" to="/registration">
              Create Account
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
