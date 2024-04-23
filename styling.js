class LinkedExternalStyleSheetWC extends HTMLElement {
  connectedCallback() {
    let html = `<link rel="stylesheet" href="custom-element-styles.css">`;
    html +=
      `<h4 id="linked-css">Custom element with a lightcoral background</h4>`;
    this.innerHTML = html;
  }
}
customElements.define("linked-css-wc", LinkedExternalStyleSheetWC);

class CSSStyleTagWC extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    let html = `<style>h4 {color:red}</style>`;
    html += `<h4>Hello World in Red!!!</h4>`;
    shadow.innerHTML = html;
  }
}
customElements.define("css-style-internal", CSSStyleTagWC);

const styleSheet = new CSSStyleSheet();
// Apply a rule to the sheet
styleSheet.replaceSync(
  "h4 { color: green; background-color:yellow; width:fit-content }",
);
class ConstructableStyleSheetWC extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    // associate the style sheet with the shadow DOM
    shadowRoot.adoptedStyleSheets = [styleSheet];
    // update the stylesheet with another rule
    styleSheet.insertRule(
      ".green-text {font-style: italic; border: 2px solid black;}",
    );
    styleSheet.insertRule("h4 {border: 3px solid blue;}");
    shadowRoot.innerHTML =
      `<h4>Styled using CSSStyleSheet that styles <span class="green-text">green text and italics</span></h4>`;
  }
}
customElements.define("css-style-interpolated", ConstructableStyleSheetWC);
