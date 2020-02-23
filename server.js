const http = require("http");

const todos = [
  {
    id: 1,
    text: "Todo1"
  },
  {
    id: 2,
    text: "Todo2"
  },
  {
    id: 3,
    text: "Todo3"
  }
];

const server = http.createServer((req, res) => {
  //   res.statusCode = 404;
  //   res.setHeader("Content-Type", "application/json");
  //   res.setHeader("X-Powered-By", "Node.js");

  res.writeHead(200, {
    "Content-Type": "application/json",
    "X-Powered-By": "Node.js"
  });

  let body = [];
  req
    .on("data", chunck => {
      body.push(chunck);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });

  res.end(
    JSON.stringify({
      success: true,
      data: todos
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => console.log("Server is running"));
