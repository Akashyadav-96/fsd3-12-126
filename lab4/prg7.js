import http from "http";
import {
  getAllUsers,
  getUsersById,
  updateUser,
  deleteUser,
  addUser,
} from "./users.js";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  // GET all users
  if (req.url === "/api/users" && req.method === "GET") {
    res.end(JSON.stringify(getAllUsers()));

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

    // Routes with ID
  } else if (req.url.startsWith("/api/users/")) {
    const pid = Number(req.url.split("/")[3]);

    // GET user by ID
    if (req.method === "GET") {
      const user = getUsersById(pid);

      if (!user) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ msg: "User not found" }));
      }

      res.end(JSON.stringify(user));

      // PUT update user
    } else if (req.method === "PUT") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        console.log("PUT BODY:", body);

        try {
          const updateData = JSON.parse(body);

          const updatedUser = updateUser(pid, updateData);

          if (!updatedUser) {
            res.statusCode = 404;
            return res.end(
              JSON.stringify({
                msg: "User not found",
              }),
            );
          }

          res.statusCode = 200;

          res.end(
            JSON.stringify({
              msg: "user updated",
              updatedUser,
            }),
          );
        } catch (error) {
          console.log("JSON ERROR:", error.message);

          res.statusCode = 400;

          res.end(
            JSON.stringify({
              msg: "Invalid JSON",
              error: error.message,
            }),
          );
        }
      });

      // DELETE user
    } else if (req.method === "DELETE") {
      const deleted = deleteUser(pid);

      if (!deleted) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ msg: "User not found" }));
      }

      res.end(JSON.stringify({ msg: "user deleted" }));
    }

    // 404
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ msg: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("prg7 is running on port 3000");
});
