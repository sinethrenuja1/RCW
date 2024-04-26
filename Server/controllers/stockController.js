import db from '../db.js'; // Import your database connection

export const addStock = async (req, res) => {
    const { part_id, name, price, min_limit, quantity } = req.body;

    // Validate request body
    if (!part_id || !name || !price || !min_limit || !quantity) {
        return res.status(400).json({ error: 'Please enter all required fields' });
    }
    try {
        const q = `INSERT INTO stock (part_id, name, price, min_limit, quantity) VALUES (?, ?, ?, ?, ?)`;
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
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while adding the stock' });
    }
}

export const showStock = async (req, res) => {
    try {
        const q = `SELECT * FROM stock`;

        db.query(q, (err, result) => {
            if(err){
                console.error(err);
                res.status(500).json({ error: 'An error occurred while fetching the stock' });
            }else{
                res.status(200).json(result);
            }
        }
        )
    }
    catch {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });

    }
}

export const lowStock = async(req,res) =>{
    try{
        const q=`SELECT * FROM stock where min_limit>quantity`

        db.query(q,(err,result) =>{
            if(err){
                console.log(err);
                res.status(500).json({ error: 'An error occurred while fetching the stock' });
            }else{
                res.status(200).json(result);
                console.log(result);
            }
        })

    }catch{
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}


