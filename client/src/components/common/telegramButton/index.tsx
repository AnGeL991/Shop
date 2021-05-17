/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { SVG } from "svg";
import { useToggleClick } from "_hooks";
import { useMessageLogic} from '_hooks';
import "./style/style.scss";

export const TelegramButton: FC = () => {
  const { open, handleToggle } = useToggleClick();
  const {message,handleSetMessage,newMessage} = useMessageLogic(open);
 
  useEffect(() => {
    window.addEventListener("message", function (e) {
      if (e.data.type === "Conversation") {
        handleSetMessage(e.data.payload);
      }
    });
  }, []);
 
  return (
    <>
      <div className="telegram" onClick={handleToggle}>
        <span className={`telegram__circle ${ newMessage && "telegram__circle--active"}`}>
          {message.length}
        </span>
        <img src={SVG.TELEGRAM} alt="TelegramButton" />
        <div className={`telegram__message  ${ newMessage && "telegram__message--active"}`}>
          New message!
        </div>
      </div>
      <iframe
        src="http://localhost:8080"
        title="widget Chat"
        className={`webChat ${open && "webChat--active"}`}
      />
    </>
  );
};
