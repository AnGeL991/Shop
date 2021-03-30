import { FC, useMemo } from "react";
import { EachBox } from "./subComponent/eachBox";
import { Icons } from "components/common";
import "./whyUs.scss";
const { ShoppingBag, BubbleChat, HeartIcon, CopyIcon } = Icons;

const data = [
  {
    children: <ShoppingBag className="whyUs__icon" />,
    title: "Easy to buy",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, assumenda quis eveniet ducimus perspiciatis non quas animi!",
  },
  {
    children: <BubbleChat className="whyUs__icon" />,
    title: "outstanding support ",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, assumenda quis eveniet ducimus perspiciatis non quas animi!",
  },
  {
    children: <HeartIcon className="whyUs__icon" />,
    title: "Simply beautiful ",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, assumenda quis eveniet ducimus perspiciatis non quas animi!",
  },
  {
    children: <CopyIcon className="whyUs__icon" />,
    title: "careful crafted",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, assumenda quis eveniet ducimus perspiciatis non quas animi!",
  },
];

export const WhyUs: FC = () => {
  const items = useMemo(
    () =>
      data.map((el, index) => (
        <EachBox key={index} {...el}>
          {el.children}
        </EachBox>
      )),
    []
  );

  return (
    <section className="whyUs">
      <h4 className="whyUs__title">Why Us</h4>
      {items}
    </section>
  );
};
