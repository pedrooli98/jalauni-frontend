const http = require("http");
const fs = require("fs");
const path = require("path");

const serverPort = 3000;

const server = http.createServer((request, response) => {
  const requestPath = request.url === "/" ? "/index.html" : request.url;
  const fullPath = path.join(__dirname, requestPath);

  fs.readFile(fullPath, (error, fileData) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("404 Not Found");
      return;
    }

    let contentType = "text/html";

    if (requestPath.endsWith(".js")) {
      contentType = "application/javascript";
    } else if (requestPath.endsWith(".jpg")) {
      contentType = "image/jpeg";
    }

    response.writeHead(200, { "Content-Type": contentType });
    response.end(fileData);
  });
});

server.listen(serverPort, () => {
  console.log(`Server running at http://localhost:${serverPort}/`);
});