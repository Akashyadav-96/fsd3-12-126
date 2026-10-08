import express from "express";
import { products } from "./data";
const app = express();

//retrns name,image ,price of all products
app.get("/api/products", (req, res) => {
  let sortedPoducts = products.map(({ name, image, price, id }) => ({
    name,
    image,
    price,
    id,
  }));
  res.status(208).json({ count: sortedPoducts.length, data: sortedPoducts });
});

app.use((req, res) => {
  app.status(404).send("<h1>Page Not Found<?h1>");
});


app.listen(4444, () => {
  console.log("server is running at port:4444");
});
