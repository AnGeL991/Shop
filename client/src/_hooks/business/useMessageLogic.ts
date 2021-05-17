import { useEffect, useState } from "react";

export const useMessageLogic = (open: boolean) => {
  const [message, setMessage] = useState<Array<any>>([]);
  const [newMessage, setNewMessage] = useState(false);
  const messageHendler = (open: boolean, count: number) => {
    if (!open && count !== 0) {
      setNewMessage(true);
    }
    if (open) {
      setNewMessage(false);
    }
  };
  const handleSetMessage = (payload: any) => {
    setMessage((prev) => [...prev, payload]);
  };
  useEffect(() => {
    if (open && message.length !== 0) {
      setMessage([]);
    }
  }, [open, message]);

  useEffect(() => {
    messageHendler(open, message.length);
  }, [open, message]);

  return { message, handleSetMessage, newMessage };
};
