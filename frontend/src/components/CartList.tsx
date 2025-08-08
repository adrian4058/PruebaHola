import { Product } from "../types";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";

interface CartListProps {
  cart: Product[];
  onRemove: (id: number) => void;
}

export default function CartList({ cart, onRemove }: CartListProps) {
  if (cart.length === 0) {
    return <Typography color="text.secondary">El carrito está vacío.</Typography>;
  }
  const grouped = Object.values(
    cart.reduce((acc, product) => {
      if (!acc[product.id]) {
        acc[product.id] = { ...product, quantity: 1 };
      } else {
        acc[product.id].quantity += 1;
      }
      return acc;
    }, {} as Record<number, Product & { quantity: number }>)
  );
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {grouped.map((item) => (
        <li key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
          <span style={{ flex: 1 }}>
            {item.name} - ${item.price} {item.quantity > 1 && <b>(x{item.quantity})</b>}
          </span>
          <IconButton color="error" onClick={() => onRemove(item.id)}>
            <DeleteIcon />
          </IconButton>
        </li>
      ))}
    </ul>
  );
}
