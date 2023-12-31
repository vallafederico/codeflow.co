import { isTablet } from "./util/device";

import { Dom } from "./modules/dom";
import { Viewport } from "./modules/viewport";
import { Scroll } from "./modules/scroll";
// import { Pages } from "./modules/pages";
import Gl from "./gl/gl";

class App {
  constructor() {
    this.body = document.querySelector("body");
    this.viewport = new Viewport();

    this.time = 0;
    this.resize();
    this.init();
  }

  init() {
    this.scroll = new Scroll();
    // this.pages = new Pages();
    this.dom = new Dom();
    this.gl = new Gl();

    this.initEvents();
    this.render();
  }

  initEvents() {
    // prettier-ignore
    new ResizeObserver((entry) => this.resize(entry[0])).observe(this.body);
  }

  resize({ contentRect } = {}) {
    window.isMobile = isTablet();

    this.viewport?.resize();
    this.dom?.resize();
  }

  render(t) {
    // this.time += 0.1;
    this.scroll?.render(t);
    this.dom?.render();

    window.requestAnimationFrame(this.render.bind(this));
  }

  /* Events */
}

window.isDebug = window.location.pathname === "/webgl";
window.app = new App();

(() => {
  setTimeout(() => {
    console.log(
      "%c%s",
      "font-size:10px; color:#fff; background:#000; padding: 10px 10px; margin: 20px 0px;",
      "CC HTTPS://FEDERIC.OOO 👀"
    );
  }, 1000);
})();
