import http from "http";
import {
  getAllUsers,
  getUsersById,
  addUser,
  updateUser,
  updatePartialUser,
  deleteUser,
} from "./users.js";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  // GET all users
  if (req.url === "/api/users" && req.method === "GET") {
    res.end(JSON.stringify(getAllUsers()));
  }

  // POST add user
  else if (req.url === "/api/users" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const user = addUser(JSON.parse(body));
      res.end(JSON.stringify(user));
    });
  }

  // Routes with ID
  else if (req.url.startsWith("/api/users/")) {
    const id = Number(req.url.split("/")[3]);

    // GET user by ID
    if (req.method === "GET") {
      res.end(JSON.stringify(getUsersById(id)));
    }

    // PUT update user
    else if (req.method === "PUT") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        const user = updateUser(id, JSON.parse(body));
        res.end(JSON.stringify(user));
      });
    }

    // PATCH update some fields
    else if (req.method === "PATCH") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        const user = updatePartialUser(id, JSON.parse(body));
        res.end(JSON.stringify(user));
      });
    }

    // DELETE user
    else if (req.method === "DELETE") {
      const result = deleteUser(id);
      res.end(JSON.stringify(result));
    }
  }
});

server.listen(3333, () => {
  console.log("prg7 is running on port 3333");
});
