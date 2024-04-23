import { JSDOM } from "npm:jsdom";
import vm from "node:vm";

export * from "https://esm.sh/@testing-library/preact@3.2.3/pure?external=preact";
import { JSDOM } from "https://esm.sh/jsdom@22.1.0?no-dts";

import vm from "node:vm";

// export function setup() {
//   if (globalThis.document) return;

//   const isContext = vm.isContext;
//   vm.isContext = () => false;

//   const { document } = new JSDOM().window;
//   globalThis.document = document;

//   vm.isContext = isContext;
// }

export function setup() {
  if (globalThis.document) return;
  const isContext = vm.isContext;
  console.log(createContext);
  vm.isContext = () => false;
  const window = new JSDOM().window;
  globalThis.window = window;
  globalThis.document = window.document;
  vm.isContext = isContext;
  vm.createContext({ globalVar: 20 });
}

async function getHTML() {
  const script = await Deno.readTextFile(`${Deno.cwd()}/common-wc.js`);
  return `<html><head><script>${script}</script></head><body></body></html>`;
}

setup();
const html = await getHTML();
const dom = new JSDOM(html, { runScripts: "dangerously" });
// const window = dom.window;
// const document = window.document;
await globalThis.window.customElements.whenDefined("my-header");
const wc = globalThis.window.customElements.get("my-header");
console.log(wc.innerHTML);
