import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

export const bounceEase = CustomEase.create(
  "custom",
  "M0,0 C0.126,0.382 0.18,0.726 0.241,0.726 0.397,0.726 0.482,-0.234 0.619,-0.234 0.746,-0.234 0.768,0 1,0 "
);
