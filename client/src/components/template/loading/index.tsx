import { FC, useEffect } from "react";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
interface ILoading {
  active: boolean;
}

export const Loading: FC<ILoading> = ({ active }) => {
  useEffect(() => {
    const after = CSSRulePlugin.getRule(".loading__circle:after");
    const before = CSSRulePlugin.getRule(".loading__circle:before");
    const subtitle = ".loading__subtitle";
    const title = ".loading__title";
    const description = ".loading__description";
    const slice = ".loading__slice";
    gsap.set([subtitle, title, description], { autoAlpha: 0 });
  

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.fromTo(
      subtitle,
      { x: "-=100" },
      { duration: 1, x: "+=100", autoAlpha: 1 }
    )
      .fromTo(title, { x: "+=100" }, { duration: 1, x: "-=100", autoAlpha: 1 })
      .fromTo(
        description,
        { y: "+=100" },
        { duration: 1, y: "-=100", autoAlpha: 1 }
      )
      .fromTo(slice, { width: 0 }, { duration: 1, width: 10000 });

    tl.fromTo(
      after,
      { transform: "rotate(0deg)" },
      { duration: 4, delay: -4, transform: "rotate(360deg)", repeat: Infinity }
    );
    tl.fromTo(
      before,
      { transform: "rotate(360deg)" },
      { duration: 4, delay: -8, transform: "rotate(0deg)", repeat: Infinity }
    );
  }, []);

  return (
    <section className={`loading ${active && "loading--active"}`}>
      <div className="loading__slice loading__slice--top"></div>
      <article className="loading__circle">
        <div>
          <div className="loading__subtitle">Welcome to our</div>
          <div className="loading__title">Shop</div>
          <div className="loading__description">The starting page</div>
        </div>
      </article>
      <div className="loading__slice loading__slice--bottom"></div>
    </section>
  );
};
