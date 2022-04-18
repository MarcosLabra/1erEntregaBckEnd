import 'dotenv/config' 
import express from 'express';
import { routerProducto, routerCarrito } from './routes/index.js';

export const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', routerProducto);
app.use('/api/carrito', routerCarrito);

port = process.env.PORT || 80

const server = app.listen(PORT, () => {
    console.log(`Server is running on port: ${server.address().port}`);
});
server.on('error', error => console.log(`error running server: ${error}`));