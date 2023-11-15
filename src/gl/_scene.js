import { Transform } from "ogl";

import { Loader } from "./util/loader.js";

import { Cube } from "./cube.js";

export default class extends Transform {
  constructor(gl, data = {}) {
    super();
    this.gl = gl;
    this.isOn = true;

    this.load();
  }

  async load() {
    this.loader = new Loader(this.gl);
    this.asset = await this.loader.load();
    console.log(this.asset);

    this.create();
  }

  create() {
    /* Basic Quad */

    this.g = new Transform();
    this.cube = new Cube(this.gl, {
      mesh: this.asset.cube,
      mtc1: this.asset.mtc,
      mtc2: this.asset.mtc2,
    });

    this.cube.setParent(this.g);
    this.g.setParent(this);
  }

  render(t) {
    if (!this.isOn) return;
    this.cube?.render(t);
  }

  resize(vp) {
    this.vp = vp;
    if (this.quad) this.quad.resize(vp);
  }
}
