import { FC } from "react";
import { Modal } from "components/template";
import { Stars, Button, Field, TextArea } from "components/common";
import { useCommentLogic } from "_hooks";
import "./style/comment.scss";

interface ICommentModal {
  star: number;
  showModal: boolean;
  handleToggle?: () => void;
  id?: string;
}

export const CommentModal: FC<ICommentModal> = ({
  showModal,
  star,
  handleToggle,
  id,
}) => {
  const {
    handleAddComment,
    handleSetComment,
    comment,
    handleSetBodyComment,
  } = useCommentLogic(star, id);

  const { body, name, email } = comment;

  return (
    <Modal show={showModal} close={handleToggle} className="comment">
      <div className="comment__wrapper">
        <h3 className="comment__title">Add new Comment</h3>
        <div className="comment__rating">
          <p className="comment__stars">Your rating:</p>
          <Stars productId={id} arrayOfStars={[star]} />
        </div>
        <form onSubmit={handleAddComment}>
          <fieldset className="comment__fieldset">
            <div className="comment__inputBox">
              <Field
                name="name"
                title="Name"
                required
                value={name}
                onChange={handleSetComment}
              ></Field>
              <Field
                name="email"
                title="E-mail"
                required
                value={email}
                onChange={handleSetComment}
              ></Field>
            </div>
            <div className="comment__textBox">
              <TextArea
                value={body}
                onChange={handleSetBodyComment}
                rows={8}
                name="Your review"
              />
            </div>
            <div className="comment__buttons">
          <Button onClick={handleToggle} className="comment__button">
            Cancel
          </Button>
          <Button className="comment__button">
            <p>Send new comment</p>
          </Button>
        </div>
          </fieldset>
        </form>
      </div>
    </Modal>
  );
};
