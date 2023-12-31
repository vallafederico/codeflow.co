import { Program } from "ogl";
import vertex from "./vertex.vert";
import fragment from "./fragment.frag";

export default class extends Program {
  a = {
    hover: 0,
    solved: 0,
  };

  constructor(gl, options = {}) {
    super(gl, {
      vertex: vertex,
      fragment: fragment,
      transparent: true,
      cullFace: null,
    });

    this.uniforms = {
      u_time: { value: 0 },
      u_mtc1: { value: options.mtc1 },
      u_mtc2: { value: options.mtc2 },
      u_col_map: { value: window.app.gl.scene.asset.col_map },
      u_a_hover: { value: 0 },
      u_a_mouse: { value: [0, 0] },
      u_a_solved: { value: 0 },
    };
  }

  set time(t) {
    this.uniforms.u_time.value = t;

    // uniforms
    this.uniforms.u_a_hover.value = this.a.hover;
    // this.uniforms.u_a_mouse.value = [window.app.gl.m.ex, window.app.gl.m.ey];
  }

  set hover(v) {}
}
