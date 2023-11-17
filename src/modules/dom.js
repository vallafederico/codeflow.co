import { Text } from "./animation/text";
// import { Track } from "../util/track";
import { Alpha } from "./animation/alpha";
import { Scramble } from "./animation/scramble";
import Tween from "gsap";

export class Dom {
  constructor() {
    this.hidden = document.querySelector("[data-start='hidden']");
    this.create();
  }

  resize() {}

  render(t) {
    // this.track?.render();
  }

  prep() {
    document.querySelectorAll("[data-ca]").forEach((el) => {
      el.setAttribute("data-a", el.getAttribute("data-ca"));
      el.removeAttribute("data-ca");
    });
  }

  create() {
    this.prep();

    this.texts = [
      ...document.querySelectorAll(
        '[data-a="char"],[data-a="word"],[data-a="line"]'
      ),
    ].map((el) => new Text({ element: el }));

    this.alphas = [...document.querySelectorAll('[data-a="alpha"]')].map(
      (el) => new Alpha({ element: el })
    );

    this.scrambles = [...document.querySelectorAll('[data-a="scramble"]')].map(
      (el) => new Scramble({ element: el })
    );

    // console.log(this.alphas);

    this.start();
  }

  start() {
    Tween.to(this.hidden, {
      autoAlpha: 1,
      duration: 1,
      delay: 0.2,
    });

    this.texts?.forEach((text) => text.start());
    this.alphas?.forEach((alpha) => alpha.start());
    this.scrambles?.forEach((scramble) => scramble.start());

    // this.track?.start();
  }

  destroy() {
    this.texts.forEach((text) => text.animateOut());
  }

  /* --  Pages */
  transitionOut(page) {
    // console.log("DOM::transitionOut", page);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
  }

  transitionIn(page) {
    // console.log("DOM::transitionIn", page);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
  }
}
