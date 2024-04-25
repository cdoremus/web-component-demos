import { JSDOM } from "npm:jsdom";

// import { HeaderWC } from "../common-wc.js";
// global.customElements.define("common-wc", HeaderWC);
// const WC = global.customElements.get("common-wc");
// const comp = new WC();
// comp.title = "Title";
// comp.anchor = true;
// console.log(comp.innerHTML);

// error: Uncaught (in promise) ReferenceError: HTMLElement is not defined
// class HeaderWC extends HTMLElement {
//                        ^
//     at file:///home/craig/git/web-components/web-component-demos/common-wc.js:1:24

const jsdom = new JSDOM(`<!doctype html>`);

const global = jsdom.window;
class MyWC extends global.HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const title = this.getAttribute("title") ?? "Web Component Examples";
    this.innerHTML = `<div>${title}</div>`;
  }
}
global.customElements.define("my-wc", MyWC);
const WC = global.customElements.get("my-wc");
const comp = new WC();
comp.setAttribute("title", "Testing 1,2,3...");
comp.connectedCallback();
console.log(comp.innerHTML);
const div = global.document.querySelector("div");
console.log(div.innerHTML);
