class AttributeChangedWC extends HTMLElement {
  // required for
  static get observedAttributes() {
    return ["add"];
  }

  connectedCallback() {
    this.add = this.getAttribute("add");
    this.innerHTML = `
      <style>#sum-title{ color: blue;} .sum { color: black; font-weight: bold; }</style>
      <p id="sum-title">Sum: <span class="sum">0</span></p>
    `;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "add") { 
      console.log(`oldValue: ${oldValue}, newValue: ${newValue}`);
      let sum = 1;
      const sumDisplay = this.querySelector(".sum");
      console.log("sumDisplay: ", sumDisplay);
      if (oldValue !== null) {
        sum = parseInt(oldValue) + parseInt(newValue);
      } else {
        sum = parseInt(newValue);
      }
      console.log("sum: ", sum);
      if (sum.sumDisplay !== null) {
        sumDisplay.innerHTML = sum;
      }
    }
  }
  get add() {
    return this.getAttribute("add");
  }

  set add(val) {
    this.setAttribute("add", val);
  }
}
customElements.define("attribute-changed-wc", AttributeChangedWC);
