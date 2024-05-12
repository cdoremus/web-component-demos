const css = `
  <style>
    :host {
      display:flex;
      background-color: aquamarine;
      border:3px solid black;
      width:60%;
      margin:0 auto;
    }
    ::slotted(*) {
      display:flex;
    }
    ::slotted(.topic) {
      font-size:2.5rem;
      font-weight:900;
      color: brown;
    }
    ::slotted(.question) {
      font-size:2rem;
      font-weight:900;
      color:blue;
    }
    .quiz-container {
      margin:1rem auto;
    }
    .button-group {
      display:flex;
      gap:2rem;
      margin:1rem 0;
    }
  </style>`;
const template = document.createElement("template");
template.innerHTML = `
    ${css}
    <div class="quiz-container">
      <slot name="topic"></slot>
      <slot name="question"></slot>
      <div class="button-group">
        <div part="answer default" role="button" tabindex="1">Yes</div>
        <div part="answer" role="button" tabindex="2">No</div>
        <div part="answer" role="button" tabindex="3">Maybe</div>
      </div>
    </div>`;
class QuizPage extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const buttons = this.shadowRoot.querySelectorAll("div[role='button']");
    this.addListeners(Array.from(buttons));
  }

  /** Responds to Yes, No & Maybe button clicks and
   * Enter key events when button is in focus */
  addListeners(buttons) {
    console.log("buttons: ", buttons);
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        alert(`${button.innerText} button clicked!`);
      });
      button.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          alert(`${button.innerText} button Enter key event invoked!`);
        }
      });
    });
  }
}
customElements.define("quiz-page", QuizPage);
