const template = document.querySelector("#tabbed-custom-element");

class PseudoSelectorWC extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).append(template.content);
  }

  connectedCallback() {
    // Find all tabs as a NodeList and convert to array
    const tabGroup = this.shadowRoot.querySelector(".tab-group");
    const tabs = tabGroup.querySelectorAll("div");
    const tabArray = Array.from(tabs);
    // Get the slot
    const contentElement = this.shadowRoot.querySelector("#slot-content");

    this.shadowRoot.addEventListener("click", (e) => {
      const tabName = e.target.id;
      this.clickHandler(tabName, contentElement, tabArray);
    });
    this.shadowRoot.addEventListener("keydown", (e) => {
      console.log("Keydown event: ", e);
      if (e.key === "Enter") {
        const tabName = e.target.id;
        this.clickHandler(tabName, contentElement, tabArray);
      }
    });
  }

  clickHandler(tabName, contentElement, tabArray) {
    console.log("Tab name clicked", tabName);
    // Change the slot name to the active tab, so
    //  that the content will be switched
    contentElement.name = tabName;
    // Make clicked tab the active one
    for (const tab of tabArray) {
      if (tab.id === tabName) {
        tab.part = "tab active";
      } else {
        tab.part = "tab";
      }
    }
  }
}

customElements.define(
  template.id,
  PseudoSelectorWC,
);
