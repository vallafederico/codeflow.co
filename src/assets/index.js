const isLocal = false;
let mtc = isLocal
  ? "http://localhost:8000/asset/mtc16.png"
  : "https://uploads-ssl.webflow.com/651ef6c5494f36508ea49212/655637d3fc6e06242f0d7c95_mtc16.webp";
let mtc2 = isLocal
  ? "http://localhost:8000/asset/mtc3.png"
  : "https://uploads-ssl.webflow.com/651ef6c5494f36508ea49212/655637d30b73cf212f61b644_mtc3.webp";
let cube = isLocal
  ? "http://localhost:8000/asset/cube8.glb"
  : "https://uploads-ssl.webflow.com/651ef6c5494f36508ea49212/655637ab023b9146c71771e3_cube8.glb.txt";

export const ASSETS = {
  // tile: "http://localhost:8000/asset/tile2.glb",
  mtc,
  mtc2,
  cube,
};
