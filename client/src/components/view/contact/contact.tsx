import { FC } from "react";
import { Header } from "components/common";
import { ContactForm, Map } from "components/template";

export const Contact: FC = () => {
  return (
    <section className="page">
      <Header title="Contact Us" />

      <Map />
      <ContactForm />
    </section>
  );
};
