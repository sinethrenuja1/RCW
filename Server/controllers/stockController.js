// import db from '../db.js'; // Import your database connection

// export const addStock = async (req, res) => {
//     const { part_id, name, price, min_limit, quantity } = req.body;

//     // Validate request body
//     if (!part_id || !name || !price || !min_limit || !quantity) {
//         return res.status(400).json({ error: 'Please enter all required fields' });
//     }
//     try{
//         const q=`INSERT INTO stock (part_id, name, price, min_limit, quantity) VALUES (?, ?, ?, ?, ?)`;
//         db.query(q, [part_id, name, price, min_limit, quantity], (err, res) => {
//             if (err) {
//                 console.error(err);
//                 return res.status(500).json({ error: 'An error occurred while adding the stock' });
//             }
//             res.status(201).json({ message: 'Stock added successfully' });
//         });
//     }
//     catch(err){
//         console.error(err);
//         res.status(500).json({ error: 'An error occurred while adding the stock' });
//     }

// }

import db from '../db.js'; // Import your database connection

export const addStock = async (req, res) => {
    const { part_id, name, price, min_limit, quantity } = req.body;

    // Validate request body
    if (!part_id || !name || !price || !min_limit || !quantity) {
        return res.status(400).json({ error: 'Please enter all required fields' });
    }
    try{
        const q=`INSERT INTO stock (part_id, name, price, min_limit, quantity) VALUES (?, ?, ?, ?, ?)`;
        await new Promise((resolve, reject) => {
            db.query(q, [part_id, name, price, min_limit, quantity], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        res.status(201).json({ message: 'Stock added successfully' });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'An error occurred while adding the stock' });
    }
}