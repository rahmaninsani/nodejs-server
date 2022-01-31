const http = require("http");

const routes = require("./routes");
const PORT = 3000;

const server = http.createServer((req, res) => {
  routes(req, res);
});

server.on("listening", () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

server.on("close", () => {
  console.log("Server is closed");
});

server.listen(PORT);
