import express from 'express';
import cors from 'cors';
import stockRoutes from './Routes/stockRoute.js';
import jobRoutes from './Routes/jobcard_Routes.js';
import workerRoutes from './Routes/worker_Routes.js';
import servicejobRoutes from './Routes/servicejob_Routes.js';
import user_Routes from './Routes/user_Routes.js';
import jobcard_Routes from './Routes/updatejobcard_Routes.js';
import bookings from './Routes/booking_Routes.js';
import supervisor from './Routes/supervisor_Routes.js';
import package_Routes from './Routes/package_Routers.js';
import dashboard from './Routes/dashboard_Routes.js';
import { __dirname } from "./dirname.js";
import path from "path";
import cookieParser from 'cookie-parser';


const app = express();
app.use(cors());

app.use (express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.use('/api/jobRoutes', jobRoutes);
app.use('/api/stockRoute', stockRoutes);
app.use('/api/workerRoutes', workerRoutes);
app.use('/api/serviceRoutes', servicejobRoutes);
app.use('/api/userRoutes', user_Routes);
app.use('/api/jobcard', jobcard_Routes);
app.use('/api/booking', bookings);
app.use('/api/supervisor', supervisor);
app.use('/api/package', package_Routes);
app.use('/api/dashboard', dashboard);


app.use('/public/packages', express.static(path.join(__dirname, 'public/packages')));

app.listen (8800, () => {
    console.log ('Connected');
    
});