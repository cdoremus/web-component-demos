import { serveFile } from "jsr:@std/http/file-server";

const ROOT_FILE_PATH = "./";

Deno.serve((req) => {
  const pathname = new URL(req.url).pathname;
  console.log("pathname: ", pathname);
  if (pathname === "/") {
    return serveFile(req, `${ROOT_FILE_PATH}index.html`);
  }
  return serveFile(req, `${ROOT_FILE_PATH}${pathname}`);
});
