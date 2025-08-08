import { Product } from "../types";
import axios from "axios";
import BACKEND_URL from "../utils";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await axios.get(`${BACKEND_URL}/api/products`);
    return res.data;
  } catch (error: any) {
    alert("Error al obtener productos: " + (error?.message || error));
    throw error;
  }
}

export async function fetchCart(): Promise<Product[]> {
  try {
    const res = await axios.get(`${BACKEND_URL}/api/cart`);
    return res.data;
  } catch (error: any) {
    alert("Error al obtener el carrito: " + (error?.message || error));
    throw error;
  }
}

export async function addToCart(id: number): Promise<void> {
  try {
    await axios.post(`${BACKEND_URL}/api/cart`, { id });
  } catch (error: any) {
    alert("Error al agregar al carrito: " + (error?.message || error));
    throw error;
  }
}

export async function removeFromCart(id: number): Promise<void> {
  try {
    await axios.delete(`${BACKEND_URL}/api/cart`, { data: { id } });
  } catch (error: any) {
    alert("Error al quitar del carrito: " + (error?.message || error));
    throw error;
  }
}
