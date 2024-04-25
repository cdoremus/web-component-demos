<!-- deno-fmt-ignore-file -->
# Web Component Demo

This repo shows a number of simple web component examples demonstrating different features of the standard.

The files in this repo are designed to be run in a local HTTP server. You can use the Deno file server by installing it with this incantation:

```
deno install --allow-net --allow-read https://deno.land/std/http/file_server.ts
```

Once, installed, run the server from the command line using the `file_server` command in this folder.

The Deno file server runs on port 4507 by default.

If you have Python installed on your machine, then you can run its HTTP server using this command:

```
python3 -m http.server 8080
```
This instance of the Python web server runs on port 8080.

**NOTE:** The tests in the `test` folder do not work at this time.