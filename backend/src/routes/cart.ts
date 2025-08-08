import { Router } from "express";
import { addToCart, getCart, removeFromCart } from "../controllers/cartController";

const router = Router();

router.post("/", addToCart);
router.get("/", getCart);
router.delete("/", removeFromCart);

export default router;
