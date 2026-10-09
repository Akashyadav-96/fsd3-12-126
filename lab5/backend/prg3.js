import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";
const app = express();

const urlPath = fileURLToPath(import.meta.url);
const rootfolder = path.dirname(urlPath);

app.use(express.static(path.join(rootfolder, "pages")));

app.use((req, res) => {
  res.status(404).send("<h1>Page Not Found<?h1>");
});

app.listen(3333, () => {
  console.log("server is running at port:3333");
});








