import { useEffect, useState } from "react";
import { Product } from "../types";
import { fetchCart } from "../fetchers/cartFetchers";

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    fetchCart().then(setCart);
  }, []);

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${cart.reduce((acc, p) => acc + p.price, 0)}</p>
    </div>
  );
}
