import { ASSETS } from "../../assets/";
import { loadTexture } from "./texture-loader";
import { loadModel } from "./model-loader";

// console.log(ASSETS);
export class Loader {
  constructor(gl) {
    this.gl = gl;
  }

  async load() {
    let [mtc, mtc2, cube] = await Promise.all([
      loadTexture(this.gl, ASSETS.mtc),
      loadTexture(this.gl, ASSETS.mtc2),
      loadModel(this.gl, ASSETS.cube),
    ]);

    cube = cube.scene[0];

    return {
      mtc,
      mtc2,
      cube,
    };
  }
}
