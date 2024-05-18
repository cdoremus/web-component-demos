/**
 * A Custom Element that uses the Declarative Shadow DOM
 * for templating its markup. This approach is best used in with
 * server-side routing where the template would be rendered and
 * sent to the browser and this custom element would provide
 * interactive functionality for the Web Component.
 */
class DeclarativeShadowDOMWC extends HTMLElement {
  #internals;
  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  connectedCallback() {
    const shadowRoot = this.#internals.shadowRoot;
    const input = shadowRoot.querySelector("input");
    const button = shadowRoot.querySelector("button");
    button.addEventListener("click", () => {
      const text = input.value;
      if (text.length > 200) {
        alert("Too much text entered!!");
      } else {
        alert(`Text entered: ${text}`);
      }
    });
  }
}

customElements.define(
  "dsd-wc",
  DeclarativeShadowDOMWC,
);
