import { FC } from "react";
import { Header } from "components/common";
import { WishProducts, EmptyWish } from "components/template";
import { useGetState } from "_hooks";

export const Wish: FC = () => {
  const {
    wish: { data },
  } = useGetState();
  if (data.length === 0) {
    return <EmptyWish />;
  }

  return (
    <section className='height'>
      <Header title="Wish List" />
      <WishProducts data={data} />
    </section>
  );
};
