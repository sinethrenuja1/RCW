import express from 'express';
import { db } from './db.js';

const app = express();

app.use (express.json());

// app.get("/book", (req, res) => {
//     const q="SELECT * FROM services_list;"
//     db.query(q, (err, data) => {
//         if(err) return res.json(err)
//         return res.json(data)
//     });
// });

app.listen (8800, () => {
    console.log ('Connected');
    
});