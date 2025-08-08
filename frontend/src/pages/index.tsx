import { useEffect, useState } from "react";
import { fetchProducts, fetchCart, addToCart, removeFromCart } from "../fetchers/cartFetchers";
import { Product } from "../types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ProductCard from "../components/ProductCard";
import Button from "@mui/material/Button";
import CartList from "../components/CartList";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

function findBestCombination(products: Product[], budget: number): Product[] {
  let best: Product[] = [];
  let bestTotal = 0;
  const n = products.length;
  for (let mask = 0; mask < 1 << n; mask++) {
    let total = 0;
    let combo: Product[] = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        if (total + products[i].price <= budget) {
          total += products[i].price;
          combo.push(products[i]);
        } else {
          total = budget + 1;
          break;
        }
      }
    }
    if (total > bestTotal && total <= budget) {
      bestTotal = total;
      best = combo;
    }
  }
  return best;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [budget, setBudget] = useState(150);
  const [bestCombo, setBestCombo] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error: any) {
        alert("Error al cargar productos: " + (error?.message || error));
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const data = await fetchCart();
        setCart(data);
      } catch (error: any) {
        alert("Error al cargar el carrito: " + (error?.message || error));
      }
    };
    loadCart();
  }, []);

  const handleAddToCart = async (id: number) => {
    try {
      await addToCart(id);
      const data = await fetchCart();
      setCart(data);
    } catch (error: any) {
      alert("Error al agregar al carrito: " + (error?.message || error));
    }
  };

  const handleRemoveFromCart = async (id: number) => {
    try {
      await removeFromCart(id);
      const data = await fetchCart();
      setCart(data);
    } catch (error: any) {
      alert("Error al quitar del carrito: " + (error?.message || error));
    }
  };

  const handleFindCombo = () => {
    setBestCombo(findBestCombination(products, budget));
  };

  return (
    <div className="landing-root">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Prueba Técnica - Perez Adrian
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box className="landing-section">
          <Grid container spacing={3} className="landing-products">
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} onAdd={handleAddToCart} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box className="landing-section landing-cart">
          <Typography variant="h5" gutterBottom>
            Carrito de compras
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <CartList cart={cart} onRemove={handleRemoveFromCart} />
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Total: ${cart.reduce((acc, p) => acc + p.price, 0)}
          </Typography>
        </Box>

        <Box className="landing-section landing-budget">
          <Typography variant="h6">Mejor combinación por presupuesto</Typography>
          <TextField
            label="Presupuesto"
            type="number"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            inputProps={{ min: 0 }}
            size="small"
            sx={{ width: 120 }}
          />
          <Button variant="contained" onClick={handleFindCombo}>
            Buscar combinación óptima
          </Button>
          {bestCombo.length > 0 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1">Productos seleccionados:</Typography>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {bestCombo.map((product) => (
                  <li key={product.id}>
                    {product.name} - ${product.price}
                  </li>
                ))}
              </ul>
              <Typography variant="subtitle2">Total: ${bestCombo.reduce((acc, p) => acc + p.price, 0)}</Typography>
            </Box>
          )}
        </Box>
      </Container>
    </div>
  );
}
