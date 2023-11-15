// import { lerp } from "../../util/math";

export class Spinner {
  spin = { x: 0, y: 0, mult: 0.8 };
  velocity = { x: 0.05, y: 0.05 };
  pointerDown = false;
  pointer = {
    x: 0,
    y: 0,
  };

  constructor() {
    // main

    this.addEvents();
  }

  addEvents() {
    if ("ontouchmove" in window) {
      window.addEventListener("touchstart", this.mouseDown.bind(this));
      window.addEventListener("touchmove", this.mouseMove.bind(this));
      window.addEventListener("touchend", this.mouseUp.bind(this));
    } else {
      window.addEventListener("mousedown", this.mouseDown.bind(this));
      window.addEventListener("mousemove", this.mouseMove.bind(this));
      window.addEventListener("mouseup", this.mouseUp.bind(this));
      window.addEventListener("mouseleave", this.mouseUp.bind(this));
    }
  }

  mouseDown(e) {
    this.pointerDown = true;
    this.spin.mult = 1;

    this.pointer.x = e.touches ? e.touches[0].clientX : e.clientX;
    this.pointer.y = e.touches ? e.touches[0].clientY : e.clientY;
  }

  mouseMove(e) {
    // if (!this.pointerDown) return;

    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    this.velocity.x += (x - this.pointer.x) * 0.002 * this.spin.mult;
    this.velocity.y += (y - this.pointer.y) * 0.002 * this.spin.mult;

    this.pointer.x = x;
    this.pointer.y = y;
  }

  mouseUp() {
    this.pointerDown = false;
    this.spin.mult = 0.8;
  }

  render() {
    // raf
    this.velocity.x *= 0.97;
    this.velocity.y *= 0.97;

    this.spin.x +=
      this.velocity.x +
      Math.sign(this.velocity.x) * 0.005 * (1 - Number(this.pointerDown));

    this.spin.y +=
      this.velocity.y +
      Math.sign(this.velocity.y) * 0.005 * (1 - Number(this.pointerDown));
  }
}
