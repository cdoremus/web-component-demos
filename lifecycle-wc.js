class AttributeChangedWC extends HTMLElement {
  // required for
  static get observedAttributes() {
    return ["add"];
  }

  connectedCallback() {
    this.add = this.getAttribute("add");
    this.innerHTML = `
      <style>#sum-title{ color: blue;} .sum { color: black; font-weight: bold; }</style>
      <div>
      <p id="old-value">Old Attr Value: <span class="old">0</span></p>
      <p id="new-value">New Attr Value: <span class="new">0</span></p>
      </div>
      <p id="sum-title">Sum: <span class="sum">0</span></p>
    `;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "add") {
      console.log(`Old add Value: ${oldValue}, New add Value: ${newValue}`);
      let sum = 1;
      const sumDisplay = this.querySelector(".sum");
      const oldVal = this.querySelector(".old");
      const newVal = this.querySelector(".new");
      console.log("sumDisplay: ", sumDisplay);
      if (oldValue) {
        oldVal.innerHTML = oldValue;
        newVal.innerHTML = newValue;
        sum = parseInt(oldValue) + parseInt(newValue);
      } else {
        sum = parseInt(newValue);
      }
      console.log("sum: ", sum);
      if (sum !== null && sumDisplay !== null) {
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
