import { Transform } from "ogl";
import Tween from "gsap";
import Material from "./mat/cube/index.js";
import { Spinner } from "./util/spinner.js";
import { lerp } from "../util/math.js";

export class Cube extends Transform {
  start = 0;
  a = {
    mx: 0,
    my: 0,
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
    const scale = 0.1;
    this.mesh.scale.set(scale, scale, scale);

    let d = 0.8;
    setInterval(() => {
      this.scramble(d);
    }, d * 1100);

    this.spinner = new Spinner();
  }

  scramble(dur) {
    this.start++;
    if (this.start > 2) this.start = 0;

    const base = this.mesh.children[this.start].rotation.y;
    const direction = Math.random() > 25 ? 1 : -1;
    const amount = Math.random() > 0.5 ? Math.PI / 2 : Math.PI;
    const ease = Math.random() > 0.5 ? "slow.out" : "back.inOut";

    Tween.to(this.mesh.children[this.start].rotation, {
      y: base + amount * direction,
      duration: dur,
      ease: ease,
      onComplete: () => {
        Math.random() > 0.5
          ? (this.ctrl.rotation.z = this.ctrl.rotation.z + Math.PI / 2)
          : (this.ctrl.rotation.x = this.ctrl.rotation.x + Math.PI / 2);
      },
    });
  }

  render(t) {
    this.spinner.render(t);
    this.rotation.x = -this.spinner.spin.y * 0.1;
    this.rotation.y = this.spinner.spin.x * 0.1;

    this.a.mx = lerp(this.a.mx, this.spinner.velocity.x, 0.1);
    this.a.my = lerp(this.a.my, -this.spinner.velocity.y, 0.1);
    this.position.x = this.a.mx * 0.5;
    this.position.y = this.a.my * 0.5;

    const z =
      Math.abs(Math.sin(this.position.x)) - Math.abs(Math.sin(this.position.y));
    this.position.z = -z;

    this.mat.time = t;
  }
  resize() {}
}
