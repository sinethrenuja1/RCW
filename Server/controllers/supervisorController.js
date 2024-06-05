import { db } from "../db.js";

// export const getNotStartedJobCards = async (req, res) => {
//     const query = 'SELECT * FROM job_carddetails WHERE status = "not started"';

//     try {
//         const results = await new Promise((resolve, reject) => {
//             db.query(query, (err, results) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(results);
//                 }
//             });
//         });

//         res.status(200).json({ message: 'Job cards fetched successfully', data: results });
//     } catch (error) {
//         console.error('Error fetching job cards with status "not started":', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

export const getNotStartedJobCards = async (req, res) => {
    const { user_id } = req.query; // Get user_id from the query parameters
    const query = 'SELECT * FROM job_carddetails WHERE status = "not started" AND user_id = ?';

    try {
        const results = await new Promise((resolve, reject) => {
            db.query(query, [user_id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        res.status(200).json({ message: 'Job cards fetched successfully', data: results });
    } catch (error) {
        console.error('Error fetching job cards with status "not started":', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const startJob = async (req, res) => {
    const { jobcard_id } = req.params;
    const updateQuery = 'UPDATE job_carddetails SET status = "started" WHERE jobcard_id = ?';

    try {
        await new Promise((resolve, reject) => {
            db.query(updateQuery, [jobcard_id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        res.status(200).json({ message: 'Job started successfully' });
    } catch (error) {
        console.error('Error starting job:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// export const getJobCardDetails = (req, res) => {
//     const { jobcard_id } = req.params;

//     const usedServicesQuery = `
//         SELECT us.service_id, us.s_quantity, sl.s_name, sl.s_price
//         FROM used_services us
//         JOIN service_list sl ON us.service_id = sl.service_id
//         WHERE us.jobcard_id = ?
//     `;

//     const usedItemsQuery = `
//         SELECT ui.upart_id, ui.u_quantity, ui.uworker_id, s.price, s.name
//         FROM used_items ui
//         JOIN stock s ON ui.upart_id = s.part_id
//         WHERE ui.ujobcard_id = ?
//     `;

//     Promise.all([
//         new Promise((resolve, reject) => {
//             db.query(usedServicesQuery, [jobcard_id], (err, results) => {
//                 if (err) return reject(err);
//                 resolve(results);
//             });
//         }),
//         new Promise((resolve, reject) => {
//             db.query(usedItemsQuery, [jobcard_id], (err, results) => {
//                 if (err) return reject(err);
//                 resolve(results);
//             });
//         })
//     ])
//     .then(([servicesResults, itemsResults]) => {
//         const serviceDetails = servicesResults.map(row => ({
//             service_name: row.s_name,
//             s_quantity: row.s_quantity,
//             worker_id: row.worker_id,
//             s_price: row.s_price
//         }));

//         const itemDetails = itemsResults.map(row => ({
//             part_name: row.name,
//             u_quantity: row.u_quantity,
//             uworker_id: row.uworker_id,
//             price: row.price
//         }));

//         res.json({
//             services: serviceDetails,
//             parts: itemDetails
//         });
//     })
//     .catch(err => {
//         res.status(500).json({ error: 'An error occurred while fetching job card details.' });
//     });
// }

export const getJobCardDetails = async (req, res) => {
    const { jobcard_id } = req.params;
  
    const usedServicesQuery = `
      SELECT us.service_id, us.s_quantity, us.worker_id, sl.s_name, sl.s_price
      FROM used_services us
      JOIN service_list sl ON us.service_id = sl.service_id
      WHERE us.jobcard_id = ?
    `;
  
    const usedItemsQuery = `
      SELECT ui.upart_id, ui.u_quantity, ui.uworker_id, s.price, s.name
      FROM used_items ui
      JOIN stock s ON ui.upart_id = s.part_id
      WHERE ui.ujobcard_id = ?
    `;
  
    const workersQuery = `
      SELECT worker_id, name
      FROM worker_info
      WHERE w_status = 'work'
    `;
  
    try {
      const [servicesResults, itemsResults, workersResults] = await Promise.all([
        new Promise((resolve, reject) => {
          db.query(usedServicesQuery, [jobcard_id], (err, results) => {
            if (err) return reject(err);
            resolve(results);
          });
        }),
        new Promise((resolve, reject) => {
          db.query(usedItemsQuery, [jobcard_id], (err, results) => {
            if (err) return reject(err);
            resolve(results);
          });
        }),
        new Promise((resolve, reject) => {
          db.query(workersQuery, (err, results) => {
            if (err) return reject(err);
            resolve(results);
          });
        })
      ]);
  
      const serviceDetails = servicesResults.map(row => ({
        service_id: row.service_id,
        service_name: row.s_name,
        s_quantity: row.s_quantity,
        worker_id: row.worker_id,
        s_price: row.s_price
      }));
  
      const itemDetails = itemsResults.map(row => ({
        part_name: row.name,
        u_quantity: row.u_quantity,
        uworker_id: row.uworker_id,
        price: row.price,
        upart_id: row.upart_id
      }));
  
      const workers = workersResults.map(row => ({
        worker_id: row.worker_id,
        name: row.name
      }));
  
      res.json({
        services: serviceDetails,
        parts: itemDetails,
        workers: workers
      });
    } catch (err) {
      res.status(500).json({ error: 'An error occurred while fetching job card details.' });
    }
  };
  
  export const getAvailableWorkers = async (req, res) => {
    const workersQuery = `
      SELECT worker_id, name
      FROM worker_info
      WHERE w_status = 'work'
    `;
  
    try {
      const workersResults = await new Promise((resolve, reject) => {
        db.query(workersQuery, (err, results) => {
          if (err) return reject(err);
          resolve(results);
        });
      });
  
      const workers = workersResults.map(row => ({
        worker_id: row.worker_id,
        name: row.name
      }));
  
      res.json({ workers });
    } catch (err) {
      res.status(500).json({ error: 'An error occurred while fetching available workers.' });
    }
  };

  export const updateServiceWorker = (req, res) => {
    const { jobcard_id, service_id,worker_id } = req.body;
    
    const updateWorkerQuery = `
        UPDATE used_services
        SET worker_id = ?
        WHERE jobcard_id = ? AND service_id = ?
    `;

    db.query(updateWorkerQuery, [worker_id, jobcard_id, service_id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error updating worker' });
        }

        res.json({ message: 'Worker updated successfully' });
    });
};

// export const updatePartWorker = (req, res) => {
//     const { jobcard_id, part_id, worker_id } = req.body;
    
//     const updateWorkerQuery = `
//         UPDATE used_items
//         SET uworker_id = ?
//         WHERE ujobcard_id = ? AND upart_id = ?
//     `;

//     db.query(updateWorkerQuery, [worker_id, jobcard_id, part_id], (err, result) => {
//         if (err) {
//             return res.status(500).json({ error: 'Error updating worker for part' });
//         }

//         res.json({ message: 'Worker updated successfully for part' });
//     });
// };

export const updatePartWorker = (req, res) => {
    const { ujobcard_id, upart_id, uworker_id } = req.body;
    console.log("updatePartWorker", ujobcard_id, upart_id, uworker_id);
    
    const updateWorkerQuery = `
        UPDATE used_items
        SET uworker_id = ?
        WHERE ujobcard_id = ? AND upart_id = ?
    `;

    db.query(updateWorkerQuery, [uworker_id, ujobcard_id, upart_id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error updating worker for part' });
            
        }
        console.log(uworker_id);
        res.json({ message: 'Worker updated successfully for part' });
    });
};



export const updateJobCardStatus = (req, res) => {
    const { jobcard_id } = req.params;
    const { status } = req.body;

    const updateStatusQuery = `
        UPDATE job_carddetails
        SET status = ?
        WHERE jobcard_id = ?
    `;

    db.query(updateStatusQuery, [status, jobcard_id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while updating the job card status.' });
        }

        res.json({ message: 'Job card status updated successfully.' });
    });
}