import { Alpha } from "./alpha";
import gsap from "gsap";

import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
gsap.registerPlugin(ScrambleTextPlugin);

const chars1 = "▎▌▊▉█";
const chars2 = "▖▗ ▘ ▙ ▚ ▛ ▜ ▝ ▞ ▟";

export class Scramble extends Alpha {
  constructor({ element }) {
    super({ element });

    this.text = this.element.textContent;
  }

  animateIn() {
    if (this.animation) this.animation.kill();
    this.animation = gsap.to(this.animated, {
      ...this.params.in,
      ...this.anim,
    });

    gsap.to(this.animated, {
      duration: 0.8 + Math.random() * 0.2,
      scrambleText: {
        chars: chars2,
        revealDelay: 0.3,
        text: this.text,
        speed: 1,
        delimiter: "",
        rightToLeft: false,
      },
    });
  }

  //   animateOut() {
  //     this.stop();
  //     if (this.animation) this.animation.kill();
  //     this.animation = gsap.to(this.animated, {
  //       ...this.params.out,
  //       ...this.anim,
  //     });
  //   }

  //   setIn() {
  //     if (this.animation) this.animation.kill();
  //     gsap.set(this.animated, { ...this.params.in });
  //   }

  setOut() {
    if (this.animation) this.animation.kill();
    gsap.set(this.animated, { ...this.params.out });
  }
}
