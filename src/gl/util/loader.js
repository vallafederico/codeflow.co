import { ASSETS } from "../../assets/";
import { loadTexture } from "./texture-loader";
import { loadModel } from "./model-loader";

export class Loader {
  constructor(gl) {
    this.gl = gl;
  }

  async load() {
    let [mtc, mtc2, col_map, cube] = await Promise.all([
      loadTexture(this.gl, ASSETS.mtc),
      loadTexture(this.gl, ASSETS.mtc2),
      loadTexture(this.gl, ASSETS.col_map),
      loadModel(this.gl, ASSETS.cube),
    ]);

    col_map.flipY = false;
    cube = cube.scene[0];

    return {
      mtc,
      mtc2,
      col_map,
      cube,
    };
  }
}
