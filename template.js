class TemplateWC extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        .container {
          width: 50%;
          border: 2px solid black;
          padding: 0.25rem;
        }
        .title {
          font-size:1.75rem;
          font-weight:600;
        }
        slot {
          font-size:1.25rem;
          font-style:italic;
        }
      </style>
      <div class="container">
        <span class="title">This is inside the template JS code</span>
        <slot></slot>
        <slot name="slot2"></slot>
        <slot name="slot3"></slot>
      </div>
    `;
    this.shadowRoot.appendChild(template.content);
  }
}

customElements.define(
  "template-wc",
  TemplateWC,
);
