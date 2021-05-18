import gsap from "gsap";
export const animation = () => {
  const img = ".slide__img";
  const title = ".slide__title";
  const subtitle = ".slide__subTitle";
  const description = ".slide__description";
  const shop = ".slide__shop";
  const now = ".slide__now";

  gsap.set([title, subtitle, description, shop, now], { autoAlpha: 0 });
  const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
  tl.fromTo(img, { scale: 1 }, { duration: 1, scale: 1.05 });
  tl.fromTo(title, { x: "-=20" }, { duration: 1, x: "+=20", autoAlpha: 1 })
    .fromTo(subtitle, { x: "-=20" }, { duration: 1, x: "+=20", autoAlpha: 1 })
    .fromTo(
      description,
      { x: "-=20" },
      { duration: 1, x: "+=20", autoAlpha: 1 }
    )
    .fromTo(shop, { x: "-=20" }, { duration: 1, x: "+=20", autoAlpha: 1 })
    .fromTo(now, { x: "-=20" }, { duration: 1, x: "+=20", autoAlpha: 1 });
};
