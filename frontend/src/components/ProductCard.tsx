import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAdd: (id: number) => void;
}

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography color="text.secondary">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={() => onAdd(product.id)}>
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}
