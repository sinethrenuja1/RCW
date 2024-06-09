import db from '../db.js';

// Register customer
export const registerCustomer = async (req, res) => {
    const { contact_number, first_name, last_name, address } = req.body;

    try {
        const checkQuery = `SELECT * FROM customer_info WHERE contact_number = ?`;
        const customer = await new Promise((resolve, reject) => {
            db.query(checkQuery, [contact_number], (err, result) => {
                if (err) {
                    reject(err);  // If there's an error, reject the Promise
                } else {
                    resolve(result);  // If everything went well, resolve the Promise
                }
            });
        });

        if (customer.length > 0) {
            // Customer already exists
            res.status(200).json({ message: 'Customer already exists' });
        } else {
            // Insert new customer
            const insertQuery = `INSERT INTO customer_info (contact_number, first_name, last_name, address) VALUES (?,?,?,?)`;
            await new Promise((resolve, reject) => {
                db.query(insertQuery, [contact_number, first_name, last_name, address], (err, result) => {
                    if (err) {
                        reject(err);  // If there's an error, reject the Promise
                    } else {
                        resolve(result);  // If everything went well, resolve the Promise
                    }
                });
            });

            res.status(201).json({ message: 'Customer details added successfully' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

// Register vehicle
export const registerVehicle = async (req, res) => {
    const { veh_num, make, model, engine_type, contact_number } = req.body;

    try {
        const query = `INSERT INTO vehicle_details (veh_num, make, model, engine_type, contact_number) VALUES (?,?,?,?,?)`;
        await new Promise((resolve, reject) => {
            db.query(query, [veh_num, make, model, engine_type, contact_number], (err, result) => {
                if (err) {
                    reject(err);  // If there's an error, reject the Promise
                } else {
                    resolve(result);  // If everything went well, resolve the Promise
                }
            });
        });

        res.status(201).json({ message: 'Vehicle details added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

// Search customer
export const searchCustomer = async (req, res) => {
    const { contact_number } = req.params;

    try {
        const query = `SELECT * FROM customer_info WHERE contact_number = ?`;
        const customer = await new Promise((resolve, reject) => {
            db.query(query, [contact_number], (err, result) => {
                if (err) {
                    reject(err);  // If there's an error, reject the Promise
                } else {
                    resolve(result);  // If everything went well, resolve the Promise
                }
            });
        });

        if (customer.length > 0) {
            res.json(customer[0]);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}

//find when veh_num in the db(already customer)
export const checkVehicle = async (req, res) => {
    const {veh_num} = req.params;

    try{
        const q=`select * FROM vehicle_details WHERE veh_num=?`;
        const vehicle = await new Promise((resolve, reject) => {
            db.query(q, [veh_num], (err, result) => {
                if (err) {
                    reject(err);  // If there's an error, reject the Promise
                    console.error(err);
                } else {
                    resolve(result); 
                    console.log(result);
                     // If everything went well, resolve the Promise
                }
            });
        });

        if (vehicle.length > 0) {
            res.status(200).json({exists: true});
        } else {
            res.status(200).json({exists: false});
        }
    }catch{
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });

    }
}

//load exisisting vehicle details
export const loadDetails = async (req, res) => {
    const { veh_num } = req.params;

    try {
        const vehicleQuery = `SELECT * FROM vehicle_details WHERE veh_num = ?`;
        const customerQuery = `SELECT * FROM customer_info WHERE contact_number = ?`;

        // Get vehicle details
        const vehicle = await new Promise((resolve, reject) => {
            db.query(vehicleQuery, [veh_num], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        if (vehicle.length > 0) {
            const contact_number = vehicle[0].contact_number;

            // Get customer details
            const customer = await new Promise((resolve, reject) => {
                db.query(customerQuery, [contact_number], (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });

            res.json({
                vehicle: vehicle[0],
                customer: customer.length > 0 ? customer[0] : null
            });
        } else {
            res.status(404).json({ message: 'Vehicle not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};


// Get next job card ID
export const getNextJobCardId = (lastJobCardId) => {
    if (!lastJobCardId) return 'J0001';
    const number = parseInt(lastJobCardId.slice(1)) + 1;
    return 'J' + number.toString().padStart(4, '0');
};
 
export const getNextJobCardIdController = async (req, res) => {
    try {
        const query = 'SELECT jobcard_id FROM job_carddetails ORDER BY jobcard_id DESC LIMIT 1';
        const result = await new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const lastJobCardId = result.length ? result[0].jobcard_id : null;
        const newJobCardId = getNextJobCardId(lastJobCardId);

        res.json({ jobcard_id: newJobCardId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

//get supervisors from db
export const getSupervisors= async (req, res) => {
    try{
        const q = `SELECT u_name FROM user_info WHERE acc_type='supervisor'`;
        const result = await new Promise((resolve, reject) => {
            db.query(q, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        res.json(result);

    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });

    }
}

//save job card details
export const saveJobCard = async (req, res) => {
    const { jobcard_id, veh_num, mileage, supervisor } = req.body;
    const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
    const status = 'not started';

    try {
        // Get user_id of the selected supervisor
        const userQuery = `SELECT user_id FROM user_info WHERE u_name = ? AND acc_type = 'supervisor'`;
        const userResult = await new Promise((resolve, reject) => {
            db.query(userQuery, [supervisor], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        if (userResult.length === 0) {
            return res.status(404).json({ error: 'Supervisor not found' });
        }

        const user_id = userResult[0].user_id;

        // Insert job card data into the database
        const insertQuery = `INSERT INTO job_carddetails (jobcard_id, veh_num, mileage, user_id, j_date, status) VALUES (?, ?, ?, ?, ?, ?)`;
        await new Promise((resolve, reject) => {
            db.query(insertQuery, [jobcard_id, veh_num, mileage, user_id, currentDate, status], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        res.status(200).json({ message: 'Job card saved successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

//fetch the services according to user input
export const fetchServiceSuggestions = async (req, res) => {
    const { input } = req.query;

    try {
        // Query the database to find services that start with the input
        const q = `SELECT service_id, s_name, s_price FROM service_list WHERE s_name LIKE ?`;
        const searchQuery = `${input}%`; // Add wildcard '%' to search for services that start with the input

        db.query(q, [searchQuery], (err, services) => {
            if (err) {
                console.error('Error fetching service suggestions:', err);
                res.status(500).json({ error: 'An error occurred while fetching service suggestions' });
            } else {
                // Send the suggestions as a response
                res.status(200).json(services);
            }
        });
    } catch (error) {
        console.error('Error fetching service suggestions:', error);
        res.status(500).json({ error: 'An error occurred while fetching service suggestions' });
    }
};

export const addUsedService = async (req, res) => {
    const { jobcard_id, service_id, worker_id, s_quantity } = req.body;

    if (worker_id === undefined) {
        worker_id = null;
    }
    
    try {
        const query = 'INSERT INTO used_services (jobcard_id, service_id, s_quantity) VALUES ( ?, ?, ?)';
        const values = [jobcard_id, service_id, s_quantity];

        await new Promise((resolve, reject) => {
            db.query(query, values, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        res.status(201).json({ message: 'Used service added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

export const getRequestjobs = (req, res) => {
    const jobcard_id = req.params.jobcard_id;

    const q = `SELECT * FROM used_services WHERE jobcard_id = ?`;

    db.query(q, [jobcard_id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while fetching the job card details' });
        } else {
            res.status(200).json(result);
        }
    });
};

//show table of used services
export const getServices = (req, res) => {
    const { jobcard_id } = req.query; 

    const sql = `
        SELECT service_list.service_id, service_list.s_name, service_list.s_price, used_services.s_quantity
        FROM service_list
        JOIN used_services ON service_list.service_id = used_services.service_id
        WHERE used_services.jobcard_id = ?
    `;

    db.query(sql, [jobcard_id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while fetching the service details' });
        } else {
            res.status(200).json(results);
        }
    });
};

export const deleteUsedService = (req, res) => {
    const {jobcard_id, service_id} = req.body;
    console.log(jobcard_id, service_id );

    const q=`DELETE FROM used_services WHERE jobcard_id = ? AND service_id = ?`;
    db.query(q, [jobcard_id, service_id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while deleting the service' });
        } else {
            res.status(200).json({ message: 'Service deleted successfully' });
        }
    });
};


export const searchParts = (req, res) => {
    const searchQuery = req.query.q;

    const sql = `SELECT part_id, name, price FROM stock WHERE part_id LIKE ? OR name LIKE ?`;

    db.query(sql, [`%${searchQuery}%`, `%${searchQuery}%`], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while searching for parts' });
        } else {
            res.status(200).json(results);
        }
    });
};

export const addUsedPart = async (req, res) => {
    let { upart_id, ujobcard_id, uworker_id, u_quantity } = req.body;
  
    if (uworker_id === undefined) {
      uworker_id = null;
    }
  
    try {
      const insertQuery = 'INSERT INTO used_items (upart_id, ujobcard_id, uworker_id, u_quantity) VALUES (?, ?, ?, ?)';
      const insertValues = [upart_id, ujobcard_id, uworker_id, u_quantity];
  
      await new Promise((resolve, reject) => {
        db.query(insertQuery, insertValues, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
  
      const updateQuery = 'UPDATE stock SET quantity = quantity - ? WHERE part_id = ?';
      const updateValues = [u_quantity, upart_id];
  
      await new Promise((resolve, reject) => {
        db.query(updateQuery, updateValues, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
  
      res.status(201).json({ message: 'Used part added successfully and stock updated' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  };

export const getPartsForJobCard = async (req, res) => {
    const { jobcard_id } = req.params;
  
    try {
      const usedItemsQuery = 'SELECT upart_id, u_quantity FROM used_items WHERE ujobcard_id = ?';
      const usedItemsValues = [jobcard_id];
  
      const usedItems = await new Promise((resolve, reject) => {
        db.query(usedItemsQuery, usedItemsValues, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
  
      const parts = await Promise.all(usedItems.map(async (item) => {
        const stockQuery = 'SELECT price FROM stock WHERE part_id = ?';
        const stockValues = [item.upart_id];
  
        const price = await new Promise((resolve, reject) => {
          db.query(stockQuery, stockValues, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result[0].price);
            }
          });
        });
  
        return {
          part_id: item.upart_id,
          quantity: item.u_quantity,
          price,
        };
      }));
  
      res.status(200).json(parts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  };

  
export const deleteUsedPart = (req, res) => {
    const { upart_id, ujobcard_id, u_quantity } = req.body;
  
    // Start a transaction
    db.beginTransaction((err) => {
      if (err) throw err;
  
      // Delete the used part
      const deleteQuery = 'DELETE FROM used_items WHERE upart_id = ? AND ujobcard_id = ?';
      db.query(deleteQuery, [upart_id, ujobcard_id], (err, result) => {
        if (err) {
          // If an error occurred, rollback the transaction
          db.rollback(() => {
            throw err;
          });
        }
  
        // Increment the stock
        const incrementQuery = 'UPDATE stock SET quantity = quantity + ? WHERE part_id = ?';
        db.query(incrementQuery, [u_quantity, upart_id], (err, result) => {
          if (err) {
            // If an error occurred, rollback the transaction
            db.rollback(() => {
              throw err;
            });
          }
  
          // If no errors occurred, commit the transaction
          db.commit((err) => {
            if (err) {
              // If an error occurred, rollback the transaction
              db.rollback(() => {
                throw err;
              });
            }
  
            res.send('Used part deleted and stock incremented successfully!');
          });
        });
      });
    });
  };
  