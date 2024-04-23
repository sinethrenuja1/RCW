import express from 'express';
import cors from 'cors';
import stockRoutes from './Routes/stockRoute.js';


const app = express();
app.use(cors());

app.use (express.json());

app.use('/api/stockRoute', stockRoutes);

app.listen (8800, () => {
    console.log ('Connected');
    
});