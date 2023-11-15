import { Plane, Geometry, Mesh } from "ogl";
import Material from "./mat/tile";

export class Tile extends Mesh {
  constructor(gl, num = 10, { attribs } = {}) {
    if (!attribs) attribs = new Plane(gl).attributes;

    super(gl, {
      geometry: new Geometry(gl, {
        ...attribs,
        ...calcAttributes(num),
      }),
      program: new Material(gl),
    });

    // this.gl = gl;

    const scale = 0.15;
    this.scale.set(scale, scale, scale);
  }

  resize() {}

  render(t) {
    this.program.time = t;

    this.program.uniforms.u_a_m.value = [
      window.app.gl.m.ex,
      window.app.gl.m.ey,
      window.app.gl.m.mex,
      window.app.gl.m.mey,
    ];
  }
}

/*
Utils
*/

function calcAttributes(num) {
  // let idA = new Float32Array(num * 4);
  let posmodA = new Float32Array(num * 3);
  let randomA = new Float32Array(num * 1);
  let xyA = new Float32Array(num * 2);

  const ratio = window.innerWidth / window.innerHeight;

  const numRows = Math.ceil(Math.sqrt(num) * ratio);
  const numCols = Math.ceil(num / numRows);
  console.log(numRows, numCols);

  for (let i = 0; i < num; i += 1) {
    randomA.set([Math.random() + 0.8], i);
    xyA.set([numRows, numCols], i * 2);

    const [x, y] = gridValues(i, numRows);
    // prettier-ignore
    posmodA.set([
      x - numRows / 2, 
      y - numCols / 2, 
      0
    ], i * 3);
  }

  return {
    // a_id: { instanced: 1, size: 4, data: idA },
    a_random: { instanced: 1, size: 1, data: randomA },
    a_posmod: { instanced: 1, size: 3, data: posmodA },
  };
}

// javascript make a grid based on the total number of items
function gridValues(i, width = 4) {
  let x = (i % width) + 0.5;
  let y = Math.floor(i / width) * 1.2 + 0.6;
  return [x, y];
}
