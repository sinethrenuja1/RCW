import express from 'express';
import cors from 'cors';
import stockRoutes from './Routes/stockRoute.js';
import jobRoutes from './Routes/jobcard_Routes.js';
import workerRoutes from './Routes/worker_Routes.js';


const app = express();
app.use(cors());

app.use (express.json());

app.use('/api/jobRoutes', jobRoutes);
app.use('/api/stockRoute', stockRoutes);
app.use('/api/workerRoutes', workerRoutes);

app.listen (8800, () => {
    console.log ('Connected');
    
});