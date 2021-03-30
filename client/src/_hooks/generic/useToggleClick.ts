import { useState } from "react";

export const useToggleClick = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return { open, handleToggle, handleClose };
};
