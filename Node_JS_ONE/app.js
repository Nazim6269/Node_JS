const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  res.writeHead(202, { "content-type": "text/plain" });
  res.write("Hello world");
  res.end();
});

server.listen(port, hostname, () => {
  console.log(
    `Your server is running successfully at http://${hostname}:${port}`
  );
});
//run through node app.js command!!!!!
