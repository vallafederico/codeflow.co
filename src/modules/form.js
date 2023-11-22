import Tween from "gsap";

export class FormHandler {
  constructor() {
    this.form = document.querySelector("[data-dom='form']");
    // console.log("form", this.form);

    if (this.form) {
      this.initEvents();
    }
  }

  initEvents() {
    //  + success handler
    const obs = new MutationObserver((mutationsList, observer) => {
      if (window.umami) window.umami.track("Signup Success");
      window.app.gl.scene.cube.animateFormSuccess();
    });

    obs.observe(this.form.querySelector("[data-listen='success']"), {
      attributes: true,
      attributeFilter: ["style"],
    });

    // + inpuit validation
    // const hinttext = this.form.querySelector("[data-form='hint']");
    const field = this.form.querySelector("[data-validate='email']");
    this.submitBtn = this.form.querySelector("[data-form='submit']");

    this.fields = [...this.form.querySelectorAll("input")].map((el, i) => {
      el.addEventListener("input", () => {
        this.isValid();
      });

      return el;
    });
  }

  isValid() {
    let valid = true;
    this.fields.forEach((field, i) => {
      if (field.type === "email") {
        if (validateEmail(field.value) == false) {
          valid = false;
        }
      } else {
        if (!field.checkValidity()) {
          valid = false;
        }
      }
    });

    if (valid) {
      this.submitBtn.classList.remove("lock");
      this.submitBtn.style.pointerEvents = "auto";
    } else {
      this.submitBtn.classList.add("lock");
      this.submitBtn.style.pointerEvents = "none";
    }
  }
}

/** Utils */
function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
