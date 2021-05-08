import { FC } from "react";
import { Header } from "components/common";

export const Blog: FC = () => {
  return (
    <section className='height'>
      <Header title="Blog Page" />
      <div style={{ padding: "20px", maxWidth: "1220px", margin: "0 auto" }}>
        In Work
      </div>
    </section>
  );
};
