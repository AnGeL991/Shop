import { FC, ChangeEvent } from "react";
import { TextArea } from "components/common";

type PaymentCommentProps = {
  inputComment: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const PaymentComment: FC<PaymentCommentProps> = ({
  inputComment,
  onChange,
}) => {
  return (
    <article className="comment">
      <h4 className="comment__title">Your Comment</h4>
      <TextArea
        value={inputComment}
        onChange={onChange}
        placeholder="Your Comment...."
      ></TextArea>
    </article>
  );
};
