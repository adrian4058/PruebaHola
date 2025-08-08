import { Request, Response } from "express";
import { products } from "../db/products";
import { Product } from "../types";

export const removeFromCart = (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    if (typeof id !== "number") {
      return res.status(400).json({ error: "ID de producto inválido" });
    }
    const idx = cart.findIndex((p) => p.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: "Producto no encontrado en el carrito" });
    }
    cart.splice(idx, 1);
    res.json({ message: "Producto eliminado del carrito", cart });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

let cart: Product[] = [];

export const addToCart = (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    if (typeof id !== "number") {
      return res.status(400).json({ error: "ID de producto inválido" });
    }
    const product = products.find((p) => p.id === id);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    cart.push(product);
    res.json({ message: "Producto agregado al carrito", cart });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getCart = (req: Request, res: Response) => {
  try {
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
