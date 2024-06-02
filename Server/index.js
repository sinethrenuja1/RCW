import express from 'express';
import cors from 'cors';
import stockRoutes from './Routes/stockRoute.js';
import jobRoutes from './Routes/jobcard_Routes.js';
import workerRoutes from './Routes/worker_Routes.js';
import servicejobRoutes from './Routes/servicejob_Routes.js';
import user_Routes from './Routes/user_Routes.js';
import jobcard_Routes from './Routes/updatejobcard_Routes.js';
import bookings from './Routes/booking_Routes.js';

import cookieParser from 'cookie-parser';


const app = express();
app.use(cors());

app.use (express.json());
app.use(cookieParser());

app.use('/api/jobRoutes', jobRoutes);
app.use('/api/stockRoute', stockRoutes);
app.use('/api/workerRoutes', workerRoutes);
app.use('/api/serviceRoutes', servicejobRoutes);
app.use('/api/userRoutes', user_Routes);
app.use('/api/jobcard', jobcard_Routes);
app.use('/api/booking', bookings);



app.listen (8800, () => {
    console.log ('Connected');
    
});