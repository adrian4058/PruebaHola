import { Request, Response } from "express";
import { products } from "../db/products";
import { Product } from "../types";

export const getProducts = (req: Request, res: Response) => {
  try {
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
