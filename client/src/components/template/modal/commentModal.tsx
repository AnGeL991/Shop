import { FC } from "react";
import { Modal } from "components/template";
import { Stars, Button, Field, TextArea } from "components/common";
import { useCommentLogic, useStarLogic } from "_hooks";
import "./style/comment.scss";

interface ICommentModal {
  showModal: boolean;
  handleToggle?: () => void;
  id?: string;
}

export const CommentModal: FC<ICommentModal> = ({
  showModal,
  handleToggle,
  id,
}) => {
  const { star, handleSetStar } = useStarLogic();
  const {
    comment: { body, name, email },
    handleAddComment,
    handleSetComment,
    handleSetBodyComment,
  } = useCommentLogic(id, star);

  return (
    <Modal show={showModal} close={handleToggle} className="comment">
      <div className="comment__wrapper">
        <h3 className="comment__title">Add new Comment</h3>
        <div className="comment__rating">
          <p className="comment__stars">Your rating:</p>
          <Stars arrayOfStars={[0]} {...{ star, handleSetStar }} />
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
