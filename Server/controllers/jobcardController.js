// import db from '../db.js';

// //register cusstomer
// export const registerCustomer = async (req, res) => {
//     const {contact_number,first_name,last_name,address} = req.body;

//     try{
//         const q=`INSERT INTO customer_info (contact_number,first_name,last_name,address) VALUES (?,?,?,?)`
//         await new Promise((resolve, reject) => {
//             db.query(q, [contact_number,first_name,last_name,address], (err, result) => {
//                 if (err) {
//                     reject(err);  // If there's an error, reject the Promise
//                     console.log(err);
//                 } else {
//                     resolve(result); 
//                     console.log(result);
//                      // If everything went well, resolve the Promise
//                 }
//             });
//         });

//         res.status(201).json({ message: 'Customer Details added successfully' });

//     }catch(err){
//         console.error(err);
//         res.status(500).json({error: 'An unexpected error occurred'});
//     }
// }




// //------------------------------------------------------------------------
// //register vehicledetails

// export const registerVehicle = async (req, res) => {
//     const { veh_num,make,model,engine_type,contact_number} = req.body;

//     try{
//         const q=`INSERT INTO vehicle_details (veh_num,make,model,engine_type,contact_number) VALUES (?,?,?,?,?)`
//         await new Promise((resolve, reject) => {
//             db.query(q, [veh_num,make,model,engine_type,contact_number], (err, result) => {
//                 if (err) {
//                     reject(err);  // If there's an error, reject the Promise
//                     console.log(err);
//                 } else {
//                     resolve(result); 
//                     console.log(result);
//                      // If everything went well, resolve the Promise
//                 }
//             });
//         });
//         ;

//         res.status(201).json({ message: 'Vehicle Details added successfully' });
//     }catch(err){
//         console.error(err);
//         res.status(500).json({error: 'An unexpected error occurred'});
//     }
// }


// //------------------------------------------------------------------
// //Search Customer
// export const searchCustomer = async (req, res) => {
//     const {contact_number} = req.params;

//     try{
//         const q = `SELECT * FROM customer_info WHERE contact_number = ?`;
//         const customer =  await new Promise((resolve, reject) => {
//             db.query(q, [contact_number], (err, result) => {
//                 if (err) {
//                     reject(err);  // If there's an error, reject the Promise
//                     console.error(err);
//                 } else {
//                     resolve(result); 
//                     console.log(result);
//                      // If everything went well, resolve the Promise
//                 }
//             });
//         });
//         if (customer.length > 0) {
//             res.json(customer[0]);
//         } else {
//             res.status(404).json({ message: 'Customer not found' });
//         }
//     }catch{
//         console.error(err);
//         res.status(500).json({ error: 'An unexpected error occurred' });
//     }
// }

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