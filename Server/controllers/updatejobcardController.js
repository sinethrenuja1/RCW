import db from '../db.js';

export const getJobCards = (req, res) => {
   
    const jobCardsQuery = `
        SELECT j.jobcard_id, j.veh_num, u.u_name, j.status
        FROM job_carddetails j
        JOIN user_info u ON j.user_id = u.user_id
        WHERE j.status IN ('not started', 'started')
    `;

    db.query(jobCardsQuery, (err, jobCards) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while fetching job cards.' });
        }

        res.json(jobCards);
    });
};


export const getJobCardDetails = (req, res) => {
    const { jobcard_id } = req.params;

    // SQL query to fetch records from used_services with the given jobcard_id
    const usedServicesQuery = `
        SELECT us.service_id, us.worker_id, us.s_quantity, sl.s_name, sl.s_price
        FROM used_services us
        JOIN service_list sl ON us.service_id = sl.service_id
        WHERE us.jobcard_id = ?
    `;

    // SQL query to fetch records from used_items with the given jobcard_id
    const usedItemsQuery = `
        SELECT ui.upart_id, ui.u_quantity, ui.uworker_id, s.price, s.name
        FROM used_items ui
        JOIN stock s ON ui.upart_id = s.part_id
        WHERE ui.ujobcard_id = ?
    `;

    // Perform both queries in parallel using Promise.all
    Promise.all([
        new Promise((resolve, reject) => {
            db.query(usedServicesQuery, [jobcard_id], (err, results) => {
                if (err) return reject(err);
                console.log(jobcard_id, results);
                resolve(results);
            });
        }),
        new Promise((resolve, reject) => {
            db.query(usedItemsQuery, [jobcard_id], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        })
    ])
    .then(([servicesResults, itemsResults]) => {
        const serviceDetails = servicesResults.map(row => ({
            service_name: row.s_name,
            s_quantity: row.s_quantity,
            worker_id: row.worker_id,
            s_price: row.s_price
        }));

        const itemDetails = itemsResults.map(row => ({
            part_name: row.name,
            u_quantity: row.u_quantity,
            uworker_id: row.uworker_id,
            price: row.price
        }));

        res.json({
            services: serviceDetails.length > 0 ? serviceDetails : 'No services found',
            parts: itemDetails.length > 0 ? itemDetails : 'No parts used'
        });
    })
    .catch(err => {
        res.status(500).json({ error: 'An error occurred while fetching job card details.' });
    });
};


export const getFinishedJobCards = (req, res) => {
   
    const jobCardsQuery = `
        SELECT j.jobcard_id, j.veh_num, u.u_name, j.status
        FROM job_carddetails j
        JOIN user_info u ON j.user_id = u.user_id
        WHERE j.status IN ('finished')
    `;

    db.query(jobCardsQuery, (err, jobCards) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while fetching job cards.' });
        }

        res.json(jobCards);
    });
};

export const updateStatus = async (req, res) => {
    const { jobcard_id, status } = req.body;

    if (!jobcard_id || !status) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const query = 'UPDATE job_carddetails SET status = ? WHERE jobcard_id = ?';
        const values = [status, jobcard_id];

        await new Promise((resolve, reject) => {
            db.query(query, values, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        res.status(200).json({ message: 'Job card status updated successfully' });
    } catch (error) {
        console.error('Error updating job card status:', error.message);
        res.status(500).json({ error: 'Failed to update job card status' });
    }
};

// // export const updateJobCardStatusonlystart = async (req, res) => {
// //     const { jobcard_id, status } = req.body;
  
// //     if (!jobcard_id || !status) {
// //       return res.status(400).json({ message: 'Job card ID and status are required.' });
// //     }
  
// //     try {
// //       // Find the job card by ID and update its status
// //       const jobCard = await JobCard.findById(jobcard_id);
  
// //       if (!jobCard) {
// //         return res.status(404).json({ message: 'Job card not found.' });
// //       }
  
// //       jobCard.status = status;
// //       await jobCard.save();
  
// //       res.status(200).json({ message: 'Job card status updated successfully.' });
// //     } catch (error) {
// //       console.error('Error updating job card status:', error);
// //       res.status(500).json({ message: 'An error occurred while updating the job card status.' });
// //     }
// //   };

// export const getJobCardStatus = async (req, res) => {
//     const { jobcard_id } = req.query;
  
//     if (!jobcard_id) {
//       return res.status(400).json({ message: 'Job card ID is required.' });
//     }
  
//     try {
//       const [rows] = await db.execute('SELECT status FROM job_carddetails WHERE jobcard_id = ?', [jobcard_id]);
  
//       if (rows.length === 0) {
//         return res.status(404).json({ message: 'Job card not found.' });
//       }
  
//       res.status(200).json({ status: rows[0].status });
//     } catch (error) {
//       console.error('Error fetching job card status:', error);
//       res.status(500).json({ message: 'An error occurred while fetching the job card status.' });
//     }
//   };

//   export const updateJobCardStatusonlystart = async (req, res) => {
//     const { jobcard_id, status } = req.body;
  
//     if (!jobcard_id || !status) {
//       return res.status(400).json({ message: 'Job card ID and status are required.' });
//     }
  
//     try {
//       const [rows] = await db.execute('SELECT * FROM job_carddetails WHERE jobcard_id = ?', [jobcard_id]);
  
//       if (rows.length === 0) {
//         return res.status(404).json({ message: 'Job card not found.' });
//       }
  
//       await db.execute('UPDATE job_carddetails SET status = ? WHERE jobcard_id = ?', [status, jobcard_id]);
  
//       res.status(200).json({ message: 'Job card status updated successfully.' });
//     } catch (error) {
//       console.error('Error updating job card status:', error);
//       res.status(500).json({ message: 'An error occurred while updating the job card status.' });
//     }
//   };


// export const saveBillDetails = (req, res) => {
//     const { jobcard_id, price } = req.body;
//     const date = new Date();
//     const b_date = date.toISOString().split('T')[0]; // YYYY-MM-DD
//     const b_time = date.toTimeString().split(' ')[0]; // HH:MM:SS

//     const query = 'INSERT INTO bill_details (b_date, b_time, jobcard_id, price) VALUES (?, ?, ?, ?)';

//     db.query(query, [b_date, b_time, jobcard_id, price], (err, result) => {
//         if (err) {
//             console.error('Error saving bill details:', err);
//             res.status(500).json({ error: 'Failed to save bill details' });
//         } else {
//             res.status(200).json({ message: 'Bill details saved successfully', bill_id: result.insertId });
//         }
//     });
// };

// export const saveBillDetails = async (req, res) => {
//     const {  b_date, b_time,jobcard_id, price } = req.body;

//     try {
//         const query = 'INSERT INTO bill_details (b_date, b_time, jobcard_id, price) VALUES (?, ?, ?, ?)';
//         const values = [b_date, b_time, jobcard_id, price];

//         await db.query(query, values);

//         res.status(200).json({ message: 'Bill details saved successfully.' });
//     } catch (error) {
//         console.error('Error saving bill details:', error.message);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

export const saveBillDetails = async (req, res) => {
    const { b_date, b_time, jobcard_id, price } = req.body;

    if (!b_date || !b_time || !jobcard_id || !price) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const query = 'INSERT INTO bill_details (b_date, b_time, jobcard_id, price) VALUES (?, ?, ?, ?)';
        const values = [b_date, b_time, jobcard_id, price];

        await new Promise((resolve, reject) => {
            db.query(query, values, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        res.status(200).json({ message: 'Bill details saved successfully.' });
    } catch (error) {
        console.error('Error saving bill details:', error.message);
        res.status(500).json({ error: 'Failed to save bill details' });
    }
};