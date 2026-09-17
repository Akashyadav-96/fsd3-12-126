import http from "http";
import { getUsers, addUser } from "./users.js";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  // GET all users
  if (req.url === "/api/users" && req.method === "GET") {
    res.end(JSON.stringify(getUsers()));

    // POST create user
  } else if (req.url === "/api/users" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const user = JSON.parse(body);
      const userCreated = addUser(user);

      res.end(
        JSON.stringify({
          msg: "user added",
          userCreated,
        }),
      );
    });

    // GET single user
  } else if (req.url === "/api/users/1" && req.method === "GET") {
    res.end(JSON.stringify({ msg: "single user with id 1" }));

    // PUT user
  } else if (req.url === "/api/users/1" && req.method === "PUT") {
    res.end(JSON.stringify({ msg: "update user 1" }));

    // DELETE user
  } else if (req.url === "/api/users/1" && req.method === "DELETE") {
    res.end(JSON.stringify({ msg: "remove 1" }));

    // 404
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ msg: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("prg7 is running on port 3000");
});
