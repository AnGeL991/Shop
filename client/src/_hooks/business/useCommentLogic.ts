import ProductServices from "_services/product.services";
import { useState, ChangeEvent, useEffect } from "react";

export const useCommentLogic = (id?: string, stars?: number) => {
  const [comment, setComment] = useState({
    name: "",
    body: "",
    email: "",
    star: 0,
    date: new Date(),
  });

  const handleAddComment = () => {
    if (id) {
      ProductServices.addComment(id, comment);
    }
  };

  const handleSetStars = (stars: number) =>
    setComment((prev) => ({
      ...prev,
      stars,
    }));

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

  useEffect(() => {
    if (stars) {
      handleSetStars(stars);
    }
  }, [stars]);

  return {
    handleAddComment,
    handleSetComment,
    handleSetBodyComment,
    handleSetStars,
    comment,
  };
};
