import { Router } from "express";
import { cartManager } from "../app.js";

const cartRouter = Router();

cartRouter.post('/', async (req, res) =>{
    try {
        const response = await cartManager.newCart()
        res.jsonn(response)
    } catch (error) {
        res.send('Error al crear carrito')
    }
})

cartRouter.get('/:cid', async (req, res) =>{
    const {cid} = req.params;
    try {
        const response = await cartManager.getCartProducts(cid)
        res.json(response)
    } catch (error) {
        res.send('Error al intentar enviar los productos del carrito')
    }
})

cartRouter.post('/:cid/products/:pid', async (req, res)=>{
    const {cid, pid} = req.params;
    try {
        await cartManager.addProductToCart(cid, pid)
        res.send('Producto agregado correctamente')
    } catch (error) {
        res.send('Error al intentar guardar productos al carrito')
    }
})

export {cartRouter}