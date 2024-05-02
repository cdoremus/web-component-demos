/** Script file for running the `deno serve` command,
 * which is only available in Deno version 1.34+.
 *
 * The `cli` task defined in `deno.json` runs the appropriate
 * 'deno serve` command.
 */
import { serveFile } from "jsr:@std/http/file-server";

const ROOT_FILE_PATH = "./";

export default {
  fetch(req) {
    const pathname = new URL(req.url).pathname;
    console.log("pathname: ", pathname);
    if (pathname === "/") {
      return serveFile(req, `${ROOT_FILE_PATH}index.html`);
    }
    return serveFile(req, `${ROOT_FILE_PATH}${pathname}`);
  },
};
