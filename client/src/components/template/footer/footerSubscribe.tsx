import { useState, FC, ChangeEventHandler, ChangeEvent } from "react";
import { Icons } from "components/common";
import { ReadMore } from "components/template";
export const Subscribe: FC = () => {
  const [value, setValue] = useState("");

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setValue(e.currentTarget.value);
  };

  return (
    <ReadMore title="Subscribe Now" className="footerReadMore">
      <div>
        <p className="footer__subscribe">
          Subscribe to our newsletter get 10% off your first purchase at here
          for update
        </p>
        <div className="footer__subscribeInput">
          <input
            type="text"
            className="footer__input"
            onChange={handleChange}
            value={value}
            placeholder="Email"
          />
          <Icons.SendIcon size="28" className="footer__inputIcon" />
        </div>
      </div>
    </ReadMore>
  );
};
