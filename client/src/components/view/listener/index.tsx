import { FC, useEffect } from "react";
import { Dots } from "components/common";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import "./style.scss";

const dots = [{ id: 1 }, { id: 2 }, { id: 3 }];

export const Listener: FC = () => {
  useEffect(() => {
    gsap.set(
      [".loading__subtitle", ".loading__title", ".loading__description"],
      { autoAlpha: 0 }
    );
    gsap.registerPlugin(CSSRulePlugin);
    const after = CSSRulePlugin.getRule(".loading__circle:after");
    const before = CSSRulePlugin.getRule(".loading__circle:before");
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.fromTo(
      ".loading__subtitle",
      { x: "-=100" },
      { duration: 1, x: "+=100", autoAlpha: 1 }
    )
      .fromTo(
        ".loading__title",
        { x: "+=100" },
        { duration: 1, x: "-=100", autoAlpha: 1 }
      )
      .fromTo(
        ".loading__description",
        { y: "+=100" },
        { duration: 1, y: "-=100", autoAlpha: 1 }
      )
      .fromTo(".loading__slice", { width: 0 }, { duration: 1, width: 10000 });

    tl.fromTo(
      after,
      { transform: "rotate(0deg)" },
      { duration: 4, delay:-4, transform: "rotate(360deg)", repeat: Infinity }
    );
    tl.fromTo(
      before,
      { transform: "rotate(360deg)" },
      { duration: 4, delay:-8, transform: "rotate(0deg)", repeat: Infinity }
    );
 
  
  }, []);
  return (
    <section className="loading">
      <div className="loading__slice loading__slice--top"></div>
      <article className="loading__circle">
        <div className="loading__wrapper">
          <div className="loading__subtitle">Welcome to our</div>
          <div className="loading__title">Home</div>
          <div className="loading__description">The starting page</div>
        </div>
      </article>
      <div className="loading__slice loading__slice--bottom"></div>
    </section>
  );
};
