import { FC } from "react";
import { Header } from "components/common";
import { WhyUs, GalerySlick } from "components/template";

const data = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1616627435290-b2142d69212b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZhc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1612120867524-e3f3c59f4240?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmFzZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1595263600568-44a6b8e6a9d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmFzZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmFzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHZhc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1614441988354-ee80d2c2cdd0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHZhc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1544174397-630a8c4346c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHZhc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60",
  },
];

export const AboutUs: FC = () => {
  return (
    <section>
      <Header title="About Us" />
      <GalerySlick
        data={data}
        slidesToScroll={1}
        slidesToShow={3}
        initialSlide={0}
        className="galerySlider"
      />
      <WhyUs />
    </section>
  );
};
