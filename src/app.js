import express from 'express';
import { ProductManager} from './productManager.js';
import { CartManager } from './cartManager.js';
import { productsRouter } from './routes/products.router.js';
import { cartRouter } from './routes/carts.router.js';

const PORT = 8080;
const app = express();

export const productManager = new ProductManager;
export const cartManager = new CartManager;

app.use(express.json());
app.use('/api/products', productsRouter)
app.use('/api/carts', cartRouter)

app.listen(PORT, (req, res)=>{
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
})