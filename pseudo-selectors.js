const template = document.querySelector("#tabbed-custom-element");

class PseudoSelectorWC extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).append(template.content);
  }

  // connectedCallback() {

  // }
}

customElements.define(
  template.id,
  PseudoSelectorWC,
);
