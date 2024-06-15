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


// export const getJobCardDetails = (req, res) => {
//     const { jobcard_id } = req.params;

//     // // SQL query to fetch records from used_services with the given jobcard_id
//     // const usedServicesQuery = `
//     //             SELECT us.service_id, wi.name, us.s_quantity, sl.s_name, sl.s_price
//     //     FROM used_services us
//     //     JOIN service_list sl ON us.service_id = sl.service_id
//     //     JOIN worker_info wi ON us.worker_id = wi.worker_id
//     //     WHERE us.jobcard_id = ?
//     // `;
//     const usedServicesQuery = `
//     SELECT us.service_id, wi.name AS worker_name, us.s_quantity, sl.s_name, sl.s_price
//     FROM used_services us
//     JOIN service_list sl ON us.service_id = sl.service_id
//     JOIN worker_info wi ON us.worker_id = wi.worker_id
//     WHERE us.jobcard_id = ?
// `;
//     // SQL query to fetch records from used_items with the given jobcard_id
//     const usedItemsQuery = `
//         SELECT ui.upart_id, ui.u_quantity, ui.uworker_id, s.price, s.name
//         FROM used_items ui
//         JOIN stock s ON ui.upart_id = s.part_id
        
//         WHERE ui.ujobcard_id = ?
//     `;

//     // Perform both queries in parallel using Promise.all
//     Promise.all([
//         new Promise((resolve, reject) => {
//             db.query(usedServicesQuery, [jobcard_id], (err, results) => {
//                 if (err) return reject(err);
//                 console.log(jobcard_id, results);
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
//             worker_name: row.worker_name,
//             s_price: row.s_price
//         }));

//         const itemDetails = itemsResults.map(row => ({
//             part_id: row.upart_id,
//             part_name: row.name,
//             u_quantity: row.u_quantity,
//             uworker_id: row.uworker_id,
//             price: row.price
//         }));

//         res.json({
//             services: serviceDetails.length > 0 ? serviceDetails : 'No services found',
//             parts: itemDetails.length > 0 ? itemDetails : 'No parts used'
//         });
//     })
//     .catch(err => {
//         res.status(500).json({ error: 'An error occurred while fetching job card details.' });
//     });
// };

export const getJobCardDetails = (req, res) => {
    const { jobcard_id } = req.params;

const usedServicesQuery = `
        SELECT us.service_id, wi.name AS worker_name, us.s_quantity,us.s_price, sl.s_name, sl.s_price
        FROM used_services us
        JOIN service_list sl ON us.service_id = sl.service_id
        JOIN worker_info wi ON us.worker_id = wi.worker_id
        WHERE us.jobcard_id = ?
    `;

    // SQL query to fetch records from used_items with the given jobcard_id
    const usedItemsQuery = `
        SELECT ui.upart_id, ui.u_quantity, wi.name AS worker_name, s.price, s.name
        FROM used_items ui
        JOIN stock s ON ui.upart_id = s.part_id
        JOIN worker_info wi ON ui.uworker_id = wi.worker_id
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
            worker_name: row.worker_name,
            s_price: row.s_price
        }));
console.log(servicesResults);
        const itemDetails = itemsResults.map(row => ({
            part_id: row.upart_id,
            part_name: row.name,
            u_quantity: row.u_quantity,
            worker_name: row.worker_name,
            price: row.price
        }));
        console.log(itemDetails);   

        res.json({
            services: serviceDetails.length > 0 ? serviceDetails : 'No services found',
            parts: itemDetails.length > 0 ? itemDetails : 'No parts used'
        });
    })
    .catch(err => {
        res.status(500).json({ error: 'An error occurred while fetching job card details.' });
    });
};



// export const getJobCardshowDetails = (req, res) => {
//     const { jobcard_id } = req.params;
//     console.log(jobcard_id);

// const usedServicesQuery = `
//         SELECT us.service_id, wi.name AS worker_name, us.s_quantity,us.s_price, sl.s_name, sl.s_price
//         FROM used_services us
//         JOIN service_list sl ON us.service_id = sl.service_id
//         JOIN worker_info wi ON us.worker_id = wi.worker_id
//         WHERE us.jobcard_id = ?
//     `;

//     // SQL query to fetch records from used_items with the given jobcard_id
//     const usedItemsQuery = `
//         SELECT ui.upart_id, ui.u_quantity, wi.name AS worker_name, s.price, s.name
//         FROM used_items ui
//         JOIN stock s ON ui.upart_id = s.part_id
//         JOIN worker_info wi ON ui.uworker_id = wi.worker_id
//         WHERE ui.ujobcard_id = ?
//     `;

//     // Perform both queries in parallel using Promise.all
//     Promise.all([
//         new Promise((resolve, reject) => {
//             db.query(usedServicesQuery, [jobcard_id], (err, results) => {
//                 if (err) return reject(err);
//                 console.log(jobcard_id, results);
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
//             worker_name: row.worker_name,
//             s_price: row.s_price
//         }));
// console.log(servicesResults);
//         const itemDetails = itemsResults.map(row => ({
//             part_id: row.upart_id,
//             part_name: row.name,
//             u_quantity: row.u_quantity,
//             worker_name: row.worker_name,
//             price: row.price
//         }));
//         console.log(itemDetails);   

//         res.json({
//             services: serviceDetails.length > 0 ? serviceDetails : 'No services found',
//             parts: itemDetails.length > 0 ? itemDetails : 'No parts used'
//         });
//     })
//     .catch(err => {
//         res.status(500).json({ error: 'An error occurred while fetching job card details.' });
//         console.log(err);
//     });
// };

// export const getJobCardshowDetails = (req, res) => {
//     const { jobcard_id } = req.params;

//     const usedServicesQuery = `
//         SELECT us.service_id, wi.name AS worker_name, us.s_quantity, us.s_price, sl.s_name
//         FROM used_services us
//         JOIN service_list sl ON us.service_id = sl.service_id
//         JOIN worker_info wi ON us.worker_id = wi.worker_id
//         WHERE us.jobcard_id = ?
//     `;

//     const usedItemsQuery = `
//         SELECT ui.upart_id, ui.u_quantity, wi.name AS worker_name, s.price, s.name
//         FROM used_items ui
//         JOIN stock s ON ui.upart_id = s.part_id
//         JOIN worker_info wi ON ui.uworker_id = wi.worker_id
//         WHERE ui.ujobcard_id = ?
//     `;

//     Promise.all([
//         new Promise((resolve, reject) => {
//             db.query(usedServicesQuery, [jobcard_id], (err, servicesResults) => {
//                 if (err) {
//                     console.error('Error fetching used services:', err);
//                     return reject(err);
//                 }
//                 console.log('Services results:', servicesResults);
//                 resolve(servicesResults);
//             });
//         }),
//         new Promise((resolve, reject) => {
//             db.query(usedItemsQuery, [jobcard_id], (err, itemsResults) => {
//                 if (err) {
//                     console.error('Error fetching used items:', err);
//                     return reject(err);
//                 }
//                 console.log('Items results:', itemsResults);
//                 resolve(itemsResults);
//             });
//         })
//     ])
//     .then(([servicesResults, itemsResults]) => {
//         const serviceDetails = servicesResults.map(row => ({
//             service_name: row.s_name,
//             s_quantity: row.s_quantity,
//             worker_name: row.worker_name,
//             s_price: row.s_price
//         }));

//         const itemDetails = itemsResults.map(row => ({
//             part_id: row.upart_id,
//             part_name: row.name,
//             u_quantity: row.u_quantity,
//             worker_name: row.worker_name,
//             price: row.price
//         }));

//         console.log('Transformed service details:', serviceDetails);
//         console.log('Transformed item details:', itemDetails);

//         res.json({
//             services: serviceDetails.length > 0 ? serviceDetails : 'No services found',
//             parts: itemDetails.length > 0 ? itemDetails : 'No parts used'
//         });
//     })
//     .catch(err => {
//         console.error('An error occurred while fetching job card details:', err);
//         res.status(500).json({ error: 'An error occurred while fetching job card details.' });
//     });
// };


export const getJobCardshowDetails = (req, res) => {
    const { jobcard_id } = req.params;

const usedServicesQuery = `
        SELECT us.service_id, wi.name AS worker_name, us.s_quantity,us.s_price, sl.s_name, sl.s_price
        FROM used_services us
        JOIN service_list sl ON us.service_id = sl.service_id
        JOIN worker_info wi ON us.worker_id = wi.worker_id
        WHERE us.jobcard_id = ?
    `;

    // SQL query to fetch records from used_items with the given jobcard_id
    const usedItemsQuery = `
        SELECT ui.upart_id, ui.u_quantity, wi.name AS worker_name, s.price, s.name
        FROM used_items ui
        JOIN stock s ON ui.upart_id = s.part_id
        JOIN worker_info wi ON ui.uworker_id = wi.worker_id
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
            worker_name: row.worker_name,
            s_price: row.s_price
        }));
console.log(servicesResults);
        const itemDetails = itemsResults.map(row => ({
            part_id: row.upart_id,
            part_name: row.name,
            u_quantity: row.u_quantity,
            worker_name: row.worker_name,
            price: row.price
        }));
        console.log(itemDetails);   

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

export const updateJobCardStatus = (req, res) => {
    const { jobcard_id, status } = req.body;

    const query = 'UPDATE job_carddetails SET status = ? WHERE jobcard_id = ?';

    db.query(query, [status, jobcard_id], (err, result) => {
        if (err) {
            console.error('Error updating job card status:', err);
            return res.status(500).json({ message: 'Failed to update job card status' });
        }

        res.status(200).json({ message: 'Job card status updated successfully' });
    });
};

export const getClosedJobCards = (req, res) => {
   
    const jobCardsQuery = `
        SELECT j.jobcard_id, j.veh_num, u.u_name, j.status, b.b_date, b.price
        FROM job_carddetails j
        JOIN user_info u ON j.user_id = u.user_id
        JOIN bill_details b ON j.jobcard_id = b.jobcard_id
        WHERE j.status IN ('Closed')
    `;

    db.query(jobCardsQuery, (err, jobCards) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while fetching job cards.' });
        }

        res.json(jobCards);
    });
};

// export const getFinishJobCardDetails = (req, res) => {
//     const { jobcard_id } = req.params;

//     const usedServicesQuery = `
//         SELECT us.service_id, wi.name AS worker_name, us.s_quantity, sl.s_name, sl.s_price
//         FROM used_services us
//         JOIN service_list sl ON us.service_id = sl.service_id
//         JOIN worker_info wi ON us.worker_id = wi.worker_id
//         WHERE us.jobcard_id = ?
//     `;

//     const usedItemsQuery = `
//         SELECT ui.upart_id, ui.ujobcard_id, ui.uworker_id, ui.u_quantity, s.part_id, s.name, s.price, wi.name AS worker_name
//         FROM used_items ui
//         JOIN stock s ON ui.upart_id = s.part_id
//         JOIN worker_info wi ON ui.uworker_id = wi.worker_id
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
//             worker_name: row.worker_name,
//             s_price: row.s_price
//         }));

//         const itemDetails = itemsResults.map(row => ({
//             upart_id: row.upart_id,
//             ujobcard_id: row.ujobcard_id,
//             uworker_id: row.uworker_id,
//             worker_name: row.worker_name,
//             u_quantity: row.u_quantity,
//             part_name: row.name,
//             price: row.price,
//             worker_name: row.worker_name // The name of the worker who changed the part
//         }));

//         res.json({
//             services: serviceDetails.length > 0 ? serviceDetails : 'No services found',
//             parts: itemDetails.length > 0 ? itemDetails : 'No parts used'
//         });
//     })
//     .catch(err => {
//         res.status(500).json({ error: 'An error occurred while fetching job card details.' });
//     });
// };

// export const getFinishJobCardDetails = (req, res) => {
//     const { jobcard_id } = req.params;

//     const usedServicesQuery = `
//         SELECT us.service_id,us.s_price, wi.name AS worker_name, us.s_quantity, sl.s_name, sl.s_price
//         FROM used_services us
//         JOIN service_list sl ON us.service_id = sl.service_id
//         JOIN worker_info wi ON us.worker_id = wi.worker_id
//         WHERE us.jobcard_id = ?
//     `;

//     const usedItemsQuery = `
//         SELECT ui.upart_id, ui.ujobcard_id, ui.uworker_id, ui.u_quantity, s.part_id, s.name, s.price, wi.name AS worker_name
//         FROM used_items ui
//         JOIN stock s ON ui.upart_id = s.part_id
//         JOIN worker_info wi ON ui.uworker_id = wi.worker_id
//         WHERE ui.ujobcard_id = ?
//     `;

//     const billDetailsQuery = `
//         SELECT bill_id, b_date, b_time, jobcard_id, price
//         FROM bill_details
//         WHERE jobcard_id = ?
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
//         }),
//         new Promise((resolve, reject) => {
//             db.query(billDetailsQuery, [jobcard_id], (err, results) => {
//                 if (err) return reject(err);
//                 resolve(results);
//             });
//         })
//     ])
//     .then(([servicesResults, itemsResults, billResults]) => {
//         const serviceDetails = servicesResults.map(row => ({
//             service_name: row.s_name,
//             s_quantity: row.s_quantity,
//             worker_name: row.worker_name,
//             s_price: row.s_price
//         }));

//         const itemDetails = itemsResults.map(row => ({
//             upart_id: row.upart_id,
//             ujobcard_id: row.ujobcard_id,
//             uworker_id: row.uworker_id,
//             worker_name: row.worker_name,
//             u_quantity: row.u_quantity,
//             part_name: row.name,
//             price: row.price
//         }));

//         const billDetails = billResults.map(row => ({
//             bill_id: row.bill_id,
//             date: row.b_date,
//             time: row.b_time,
//             jobcard_id: row.jobcard_id,
//             total_price: row.price
//         }))[0]; // Assuming there's only one bill detail per job card

//         res.json({
//             services: serviceDetails.length > 0 ? serviceDetails : 'No services found',
//             parts: itemDetails.length > 0 ? itemDetails : 'No parts used',
//             bill: billDetails || 'No bill details found'
//         });
//     })
//     .catch(err => {
//         res.status(500).json({ error: 'An error occurred while fetching job card details.' });
//     });
// };

export const getFinishJobCardDetails = (req, res) => {
    const { jobcard_id } = req.params;

    const usedServicesQuery = `
        SELECT us.service_id,us.s_price, wi.name AS worker_name, us.s_quantity, sl.s_name
        FROM used_services us
        JOIN service_list sl ON us.service_id = sl.service_id
        JOIN worker_info wi ON us.worker_id = wi.worker_id
        WHERE us.jobcard_id = ?
    `;

    const usedItemsQuery = `
        SELECT ui.upart_id, ui.ujobcard_id, ui.uworker_id, ui.u_quantity, s.part_id, s.name, ui.u_price, wi.name AS worker_name
        FROM used_items ui
        JOIN stock s ON ui.upart_id = s.part_id
        JOIN worker_info wi ON ui.uworker_id = wi.worker_id
        WHERE ui.ujobcard_id = ?
    `;

    const billDetailsQuery = `
        SELECT bill_id, b_date, b_time, jobcard_id, price
        FROM bill_details
        WHERE jobcard_id = ?
    `;

    Promise.all([
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
            db.query(billDetailsQuery, [jobcard_id], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        })
    ])
    .then(([servicesResults, itemsResults, billResults]) => {
        const serviceDetails = servicesResults.map(row => ({
            service_name: row.s_name,
            s_quantity: row.s_quantity,
            worker_name: row.worker_name,
            s_price: row.s_price
        }));

        const itemDetails = itemsResults.map(row => ({
            upart_id: row.upart_id,
            ujobcard_id: row.ujobcard_id,
            uworker_id: row.uworker_id,
            worker_name: row.worker_name,
            u_quantity: row.u_quantity,
            part_name: row.name,
            u_price: row.u_price
        }));

        const billDetails = billResults.map(row => ({
            bill_id: row.bill_id,
            date: row.b_date,
            time: row.b_time,
            jobcard_id: row.jobcard_id,
            total_price: row.price
        }))[0]; // Assuming there's only one bill detail per job card

        res.json({
            services: serviceDetails.length > 0 ? serviceDetails : 'No services found',
            parts: itemDetails.length > 0 ? itemDetails : 'No parts used',
            bill: billDetails || 'No bill details found'
        });
    })
    .catch(err => {
        res.status(500).json({ error: 'An error occurred while fetching job card details.' });
    });
};


    export const updateCustomerContact = async (req, res) => {
  const { phone_number, fname, lname, address } = req.body;
  console.log(phone_number, fname, lname, address);

  // Uncomment if validation is needed
  // if (!phone_number || !fname || !lname || !address) {
  //   return res.status(400).json({ message: 'All fields are required' });
  // }

  try {
    const response = await db.execute(
      `UPDATE customer_info 
       SET contact_number = ?
       WHERE first_name = ? 
       AND last_name = ? 
       AND address = ?`,
      [phone_number, fname, lname, address]
    );

    console.log(response);
    // if (results.affectedRows === 0) {
    //   return res.status(404).json({ message: 'Customer not found' });
    // }

    res.status(200).json({ message: 'Contact number updated successfully' });
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
};

