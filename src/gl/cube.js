import { Transform } from "ogl";
import Tween from "gsap";
import Material from "./mat/cube/index.js";
import { Spinner } from "./util/spinner.js";
import { lerp } from "../util/math.js";
import { bounceEase } from "../util/ease.js";

export class Cube extends Transform {
  start = 0;
  a = {
    mx: 0,
    my: 0,
    scale: 0.1,
    lspeed: 0,
    initial: 3,
    c_hover: 0,
    click: 0,
  };

  constructor(gl, { mesh, mtc1, mtc2 } = {}) {
    super();
    this.gl = gl;

    this.ctrl = new Transform();
    this.ctrl.setParent(this);

    this.mat = new Material(this.gl, {
      mtc1: mtc1,
      mtc2: mtc2,
    });
    this.mesh = mesh;
    this.mesh.children.forEach((m) => (m.children[0].program = this.mat));
    this.mesh.setParent(this.ctrl);
    const scale = this.a.scale;
    this.mesh.scale.set(scale, scale, scale);

    this.spinner = new Spinner();

    Tween.to(this.a, {
      initial: 0,
      ease: "back.out",
      duration: 1.2,
    });

    this.startInterval();
    this.initEvents();

    // setTimeout(() => this.startInterval(false), 5000);
    // setTimeout(() => this.startInterval(true), 10000);
  }

  startInterval(start = true) {
    let d = 0.8;

    if (start) {
      this.interval = setInterval(() => this.scramble(d), d * 1100);
    } else {
      this.shouldReset = true;
      clearInterval(this.interval);
    }
  }

  resetCube() {
    this.shouldReset = false;
    this.mesh.children.forEach((m) => (m.rotation.y = 0));
    this.ctrl.rotation.x = 0;
    this.ctrl.rotation.z = 0;
  }

  scramble(dur, rotateAxis = true) {
    this.start++;
    if (this.start > 2) this.start = 0;

    const base = this.mesh.children[this.start].rotation.y;
    const direction = Math.random() > 0.5 ? 1 : -1;
    const amount = Math.random() > 0.5 ? Math.PI / 2 : Math.PI;
    const ease = Math.random() > 0.5 ? "slow.out" : "back.inOut";

    Tween.to(this.mesh.children[this.start].rotation, {
      y: base + amount * direction,
      duration: dur,
      ease: ease,
      onComplete: () => {
        if (this.shouldReset) {
          this.resetCube();
        } else {
          if (!rotateAxis) return;
          Math.random() > 0.5
            ? (this.ctrl.rotation.z = this.ctrl.rotation.z + Math.PI / 2)
            : (this.ctrl.rotation.x = this.ctrl.rotation.x + Math.PI / 2);
        }
      },
    });
  }

  render(t) {
    this.a.lspeed = lerp(this.a.lspeed, window.sscroll.speed * 0.015, 0.05);
    this.spinner.render(t);

    // ** rotation
    const rt = t * 0.01;
    let rx = this.spinner.spin.y * 0.1 + rt;
    let ry = this.spinner.spin.x * 0.1 + rt;

    // rx -= this.a.initial;
    // ry += this.a.initial;

    this.a.mx = lerp(this.a.mx, this.spinner.velocity.x, 0.1);
    this.a.my = lerp(this.a.my, -this.spinner.velocity.y, 0.1);
    this.position.x = this.a.mx * 0.5;

    let z = 0;
    let y = 0;
    if (!window.isDebug) {
      // actual page

      // position y
      y =
        window.sscroll.percent * 0.4 + // move up on percent
        this.a.lspeed + // move on speed
        this.a.initial; // initial animation

      this.a.scale =
        0.1 + window.sscroll.percent * 0.05 + this.mat.a.hover * 0.02;

      this.mesh.scale.set(this.a.scale, this.a.scale, this.a.scale);

      // rotation
      rx += window.sscroll.a.lp * 5;
      ry += window.sscroll.a.lp * 5;

      z =
        Math.abs(Math.sin(this.position.x)) -
        Math.abs(Math.sin(this.position.y));
    }

    // ++ apply rotation
    this.position.z = -z - this.a.click;
    this.position.y = y + this.a.my * 1;
    this.rotation.x = rx + this.a.click * 0.2;
    this.rotation.y = ry + this.a.click * 0.2;

    // shader
    this.mat.time = t;
  }

  resize() {}

  /** Init Events */
  initEvents() {
    // + cta hover
    [...document.querySelectorAll("[data-a='cta']")].forEach((el) => {
      el.addEventListener("mouseenter", () => this.mouseCta(1));
      el.addEventListener("mouseleave", () => this.mouseCta(0));
    });

    //  + click
    let locked = false;
    document.addEventListener("click", () => {
      if (locked) return;
      locked = true;
      Tween.to(this.a, {
        click: 5,
        duration: 1.6,
        ease: bounceEase,
        onComplete: () => (locked = false),
      });
    });
  }

  /** Animations */
  mouseCta(val = 0) {
    // console.log("cta", val);

    if (this.mouseCtaAnimation) this.mouseCtaAnimation.kill();
    this.mouseCtaAnimation = Tween.to(this.mat.a, {
      hover: val,
      ease: "expo.out",
      duration: 1.2,
    });
  }

  animateFormSuccess() {
    // console.log("animateFormSuccess");
  }
}
