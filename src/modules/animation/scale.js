import { Alpha } from "./alpha";
import Tween from "gsap";

export class Scale extends Alpha {
  constructor({ element }) {
    super({ element });

    this.anim = {
      duration: 1.2 + Math.random() * 0.2,
      ease: "expo.out",
      delay: 0.1,
      transformOrigin: this.element.dataset.origin || "right center",
      stagger: {
        each: 0.05,
        from: "start",
      },
    };

    this.params = getDirection(this.element.dataset.a);
  }

  animateIn() {
    if (this.animation) this.animation.kill();
    this.animation = Tween.to(this.animated, {
      ...this.params.in,
      ...this.anim,
    });
  }

  setOut() {
    if (this.animation) this.animation.kill();
    Tween.set(this.animated, { ...this.params.out });
  }
}

function getDirection(data) {
  switch (data) {
    case "sx":
      return {
        in: {
          scaleX: 1,
          scaleY: 1,
        },
        out: {
          scaleX: 0,
          scaleY: 1,
        },
      };
    case "sy":
      return {
        in: {
          scaleX: 1,
          scaleY: 1,
        },
        out: {
          scaleX: 1,
          scaleY: 0,
        },
      };
    case "s":
      return {
        in: {
          scaleX: 1,
          scaleY: 1,
        },
        out: {
          scaleX: 0,
          scaleY: 0,
        },
      };
    default:
      return 0;
  }
}
