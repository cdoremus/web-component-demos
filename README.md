<!-- deno-fmt-ignore-file -->
# Web Component Demo

This repo shows a number of [Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) examples demonstrating different features of the standard running in a simple [Deno](https://deno.com) web server.

To run the repo locally, you need to [install Deno](https://docs.deno.com/runtime/manual/getting_started/installation) and  then run the following command:
```
deno task start
```
The application can then accessed at http://localhost:8000/

There is also a task in `deno.json` called `cli` that runs the `deno serve` command that is available in Deno v1.34+.

This code has been deployed on [Deno Deploy](https://deno.com/deploy) and can be accessed here: https://web-component-demo.deno.dev

**NOTE:** The tests in the `test` folder do not work. A way to test web components outside of a Node runtime does not appear to exist at this time.