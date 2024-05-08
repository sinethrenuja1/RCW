import db from '../db.js'; // Import your database connection

// export const addStock = async (req, res) => {
//     const { part_id, name, price, min_limit, quantity } = req.body;

//     // Validate request body
//     if (!part_id || !name || !price || !min_limit || !quantity) {
//         return res.status(400).json({ error: 'Please enter all required fields' });
//     }
//     try {
//         const q = `INSERT INTO stock (part_id, name, price, min_limit, quantity) VALUES (?, ?, ?, ?, ?)`;
//         await new Promise((resolve, reject) => {
//             db.query(q, [part_id, name, price, min_limit, quantity], (err, result) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(result);
//                 }
//             });
//         });
//         res.status(201).json({ message: 'Stock added successfully' });
//     }
//     catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'An error occurred while adding the stock' });
//     }
// }
export const addStock = async (req, res) => {
    const { part_id, name, price, min_limit, quantity } = req.body;

    // Validate request body
    if (!part_id || !name || !price || !min_limit || !quantity) {
        return res.status(400).json({ error: 'Please enter all required fields' });
    }
    try {
        // Check if a stock item with the given part_id already exists
        const checkQuery = `SELECT * FROM stock WHERE part_id = ?`;
        const existingStock = await new Promise((resolve, reject) => {
            db.query(checkQuery, [part_id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        if (existingStock.length > 0) {
            return res.status(400).json({ error: 'A stock item with this part_id already exists' });
        }

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





// Controller function to handle auto-complete suggestions for part_id
export const autoCompletePartId = async (req, res) => {
    const { input } = req.query;

    try {
        const q = `SELECT part_id,name FROM stock WHERE part_id LIKE ?`;
        const searchQuery = `%${input}%`; // Add wildcard '%' to search for partial matches

        const results = await new Promise((resolve, reject) => {
            db.query(q, [searchQuery], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    // const suggestions = result.map(row => row.part_id);
                    const suggestions = result.map(row => ({ part_id: row.part_id, name: row.name }));
                    resolve(suggestions);
                }
            });
        });

        // Send the suggestions as a response
        res.status(200).json(results);
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        res.status(500).json({ error: 'An error occurred while fetching suggestions' });
    }
};

export const getaStock = async (req, res) => {
    const { suggestion } = req.params;
    try {
        const q = `SELECT * FROM stock WHERE part_id = ?`;

        db.query(q, [suggestion], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'An error occurred while fetching the stock' });
            } else {
                if (result.length === 0) {
                    res.status(404).json({ error: 'Stock not found' });
                } else {
                    res.status(200).json(result[0]);
                }
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}

export const updateStock = async (req, res) => {
    const { partId, price, quantity,min_limit} = req.body;
  
    console.log("came to update stock");
    try {
      const sql = "UPDATE stock SET price = ?, quantity = quantity + ? ,min_limit = ? WHERE part_id = ?";
      const values = [price,quantity,min_limit, partId ];
  
      // Assuming you have a connection to your SQL database in `db`
      db.query(sql, values, (error, results, fields) => {
        if (error) {
          console.error('Error updating stock:', error);
          res.status(500).json({ error: 'Failed to update stock' });
        } else {
          res.json({ message: 'Stock updated successfully' });
        }
      });
    } catch (error) {
      console.error('Error updating stock:', error);
      res.status(500).json({ error: 'Failed to update stock' });
    }
  };

//   export const trackStockUpdate = (req, res) => {
//     const { part_id, date, quantity } = req.body;
  
//     const q = `INSERT INTO stock_update (part_id, date, quantity) VALUES (?, ?, ?)`;
  
//     db.query(q, [part_id, date, quantity], (err, result) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ error: 'An error occurred while tracking the stock update' });
//       } else {
//         res.status(201).json({ message: 'Stock update tracked successfully' });
//       }
//     });
//   };

// export const trackStockUpdate = async (req, res) => {
//     const { partId, quantity } = req.body;
//     const date = new Date().toISOString().slice(0, 10);
  
//     try {
//       const sqlInsertStockUpdate = "INSERT INTO stock_update (part_id, date, quantity) VALUES (?, ?, ?)";
//       const valuesInsertStockUpdate = [partId, date, quantity];
  
//       // Assuming you have a connection to your SQL database in `db`
//       db.query(sqlInsertStockUpdate, valuesInsertStockUpdate, (error, results, fields) => {
//         if (error) {
//           console.error('Error inserting into stock_update table:', error);
//           res.status(500).json({ error: 'Failed to update stock' });
//         } else {
//           res.json({ message: 'Stock update tracked successfully' });
//         }
//       });
//     } catch (error) {
//       console.error('Error tracking stock update:', error);
//       res.status(500).json({ error: 'Failed to update stock' });
//     }
//   };

export const trackStockUpdate = async (req, res) => {
    const { partId, quantity } = req.body;
    const date = new Date().toISOString().slice(0, 10);
  
    if (quantity > 0) {
      try {
        const sqlInsertStockUpdate = "INSERT INTO stock_update (part_id, date, quantity) VALUES (?, ?, ?)";
        const valuesInsertStockUpdate = [partId, date, quantity];
  
        // Assuming you have a connection to your SQL database in `db`
        db.query(sqlInsertStockUpdate, valuesInsertStockUpdate, (error, results, fields) => {
          if (error) {
            console.error('Error inserting into stock_update table:', error);
            res.status(500).json({ error: 'Failed to update stock' });
          } else {
            res.json({ message: 'Stock update tracked successfully' });
          }
        });
      } catch (error) {
        console.error('Error tracking stock update:', error);
        res.status(500).json({ error: 'Failed to update stock' });
      }
    } else {
      res.status(400).json({ error: 'Quantity must be greater than 0' });
    }
  };
  