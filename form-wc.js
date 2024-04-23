class MyNameFormInput extends HTMLElement {
  // Required static property indicating
  // this component is associated with a form
  static formAssociated = true;
  id = "";
  constructor() {
    super();
    // Use the component's id as the id (and name) of the input
    this.id = this.getAttribute("id");
    // Get reference to ElementInternals
    this.internals = this.attachInternals();
  }
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
    <style>input { width: 20%; }</style>
    <input type="text" id="${this.id}" name="${this.id}" placeholder="Enter name here"/>
    `;
    // monitor input values
    shadow.querySelector("input").addEventListener("change", (e) => {
      console.log("onchange value: ", e.target.value);
      this.setValue(e.target.value);
      // the label's text
      console.log("Label: ", this.internals.labels[0].textContent);
    });
  }
  // Additional lifecycle method called when component is associated with a form
  formAssociatedCallback(form) {
    console.log("form associated:", form["input"]); // "name-form" printed out
  }
  // set form value
  setValue(v) {
    console.log("MyNameForm value: ", v);
    this.value = v;
    this.internals.setFormValue(v);
  }
}
customElements.define("my-name-input", MyNameFormInput);
