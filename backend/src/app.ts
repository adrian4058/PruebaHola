import express from "express";
import cors from "cors";
import indexRouter from "./routes/index";
import productsRouter from "./routes/products";
import cartRouter from "./routes/cart";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", indexRouter);
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);

app.listen(PORT);
