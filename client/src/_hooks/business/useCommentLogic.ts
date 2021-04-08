import ProductServices from "_services/product.services";
import { useState, ChangeEvent } from "react";

export const useCommentLogic = (star: number, id?: string) => {
  const [comment, setComment] = useState({
    name: "",
    body: "",
    email: "",
    star,
    date: new Date(),
  });

  const handleAddComment = () => {
    if (id) {
      ProductServices.addComment(id, comment);
    }
  };

  const handleSetComment = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSetBodyComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setComment((prev) => ({
      ...prev,
      body: value,
    }));
  };

  return { handleAddComment, handleSetComment, comment, handleSetBodyComment };
};
