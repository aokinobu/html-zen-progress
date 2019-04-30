class ZenProgress extends HTMLElement {
  // A getter/setter for an open property.
  get open() {
    return this.hasAttribute("open");
  }

  set open(val) {
    // Reflect the value of the open property as an HTML attribute.
    if (val) {
      this.setAttribute("open", "");
    } else {
      this.removeAttribute("open");
    }
    this.toggleDrawer();
  }

  // A getter/setter for a disabled property.
  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(val) {
    console.log("settings to " + val);
    // Reflect the value of the disabled property as an HTML attribute.
    if (val) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  // Can define constructor arguments if you wish.
  constructor() {
    // If you define a constructor, always call super() first!
    // This is specific to CE and required by the spec.
    super();

    // Setup a click listener on <app-drawer> itself.
    this.addEventListener("click", e => {
      // Don't toggle the drawer if it's disabled.
      // if (this.disabled) {
      //   return;
      // }
      this.toggleDrawer();
    });
    this.innerHTML = "start";
  }

  toggleDrawer() {
    console.log("click");
    console.log(this.disabled);
    if (this.disabled) {
      this.innerHTML = "true";
      this.disabled(true)
      console.log(this.disabled);
    } else {
      this.innerHTML = "false";
      this.disabled("false");
      console.log(this.disabled);
    }
  }
}
customElements.define("html-zen-progress", ZenProgress);
