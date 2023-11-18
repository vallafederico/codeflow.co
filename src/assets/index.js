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
let col_map = isLocal
  ? "http://localhost:8000/asset/col_map.jpg"
  : "https://uploads-ssl.webflow.com/651ef6c5494f36508ea49212/6558b79dde12de54c5a514a9_col_map.webp";
export const ASSETS = {
  mtc,
  mtc2,
  col_map,
  cube,
};
