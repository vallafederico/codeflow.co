import { Renderer, Orbit, Vec3 } from "ogl";
import Cam from "./_camera.js";
import Scene from "./_scene.js";
// import Tween from "gsap";
import { lerp, map } from "../util/math.js";

const CLEAR_COLOR = [
  0.09411764705882353, 0.09411764705882353, 0.09411764705882353,
];

export default class {
  constructor() {
    this.wrapper = document.querySelector("[data-gl='c']");
    this.vp = {
      dpr: Math.min(window.devicePixelRatio, 2),
    };

    this.renderer = new Renderer({ dpr: 2, antialias: true, alpha: true });
    this.gl = this.renderer.gl;

    this.gl.clearColor(0, 0, 0, 0);

    this.wrapper.appendChild(this.gl.canvas);

    this.camera = new Cam(this.gl, {});
    this.camera.position.set(0, 0, 5);

    // this.camera.lookAt([0, 0, 0]);

    this.scene = new Scene(this.gl);
    this.time = 0;

    this.m = {
      x: 0,
      y: 0,
      mx: 0,
      my: 0,
      mex: 0,
      mey: 0,
      ex: 0,
      ey: 0,
    };

    this.initEvents();

    // this.controls = new Orbit(this.camera, {
    //   target: new Vec3(0, 0, 0),
    // });

    this.render();
  }

  render(scroll = 0) {
    this.time += 0.5;

    this.m.ex = lerp(this.m.ex, this.m.x, 0.05);
    this.m.ey = lerp(this.m.ey, this.m.y, 0.05);
    this.m.mex = lerp(this.m.mex, this.m.mx, 0.03);
    // this.m.mey = lerp(this.m.mey, this.m.my, 0.1);

    // console.log(this.m.mex);
    // console.log(this.m.ex, this.m.ey);

    this.controls?.update();
    this.scene?.render(this.time);

    window.requestAnimationFrame(this.render.bind(this));

    this.renderer.render({
      scene: this.scene,
      camera: this.camera,
    });
  }

  initEvents() {
    // resize
    new ResizeObserver((entry) => this.resize(entry[0].contentRect)).observe(
      this.wrapper
    );

    // mouse
    window.addEventListener("mousemove", (e) => {
      this.m.x = (e.clientX / this.vp.w) * 2 - 1;
      this.m.y = (e.clientY / this.vp.h) * -2 + 1;
      this.m.mx = (Math.abs(e.movementX) + Math.abs(e.movementY)) * 0.1;
      // this.m.my = e.movementY;

      // console.log(this.m.x, this.m.y);
    });
  }

  resize(entry) {
    const cw = entry ? entry.width : this.wrapper.clientWidth;
    const ch = entry ? entry.height : this.wrapper.clientHeight;

    this.vp.w = cw;
    this.vp.h = ch;
    this.vp.ratio = cw / ch;
    this.vp.viewSize = this.camera.getViewSize(this.vp.ratio);
    this.vp.viewRatio = this.vp.viewSize.w / this.vp.w;
    // this.vp.scrollx = window.scrollX;
    // this.vp.scrolly = window.scrollY;

    this.renderer.setSize(this.vp.w, this.vp.h);
    this.camera.perspective({
      aspect: this.vp.ratio,
    });

    this.scene.resize(this.vp);
    // this.resizeChild();
  }
}
