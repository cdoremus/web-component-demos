class MyShadowDomWC extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const h3 = document.createElement("h4");
    h3.innerHTML = "Hello World from the Open Shadow DOM";
    shadowRoot.append(h3);
  }
}
customElements.define("my-shadow-dom", MyShadowDomWC);

class MyClosedShadowDomWC extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    const h3 = document.createElement("h4");
    h3.innerHTML = "Hello World from the Closed Shadow DOM";
    shadowRoot.append(h3);
  }
}
customElements.define("my-closed-shadow-dom", MyClosedShadowDomWC);
