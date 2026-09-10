import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h1>Home Page</h1>
      <a href="/product">Product</a><br>
      <a href="/contactUs">Contact Us</a>
    `);
  } else if (req.url === "/product") {
    res.writeHead(200, { "Content-Type": "text/html" });
    createReadStream("product.html").pipe(res);
  } else if (req.url === "/contactUs") {
    res.writeHead(200, { "Content-Type": "text/html" });
    createReadStream("contactUs.html").pipe(res);
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("prg6 is running on http://localhost:3000");
});
