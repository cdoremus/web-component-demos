class HeaderWC extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.title = this.getAttribute("title") ?? "Web Component Examples";
    this.anchor = this.getAttribute("anchor");
    console.log("this.anchor", this.anchor);
    const link = this.anchor == null ? `<div></div>` : `<a href="/">Home</a>`;
    let html = `
    <header>
      <h2>${this.title}</h2>
      ${link}
    </header>
    `;
    html += `<link rel="stylesheet" href="styles.css">`;
    this.innerHTML = html;
  }
}
customElements.define("my-header", HeaderWC);
