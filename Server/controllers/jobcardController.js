import db from '../db.js';

//register cusstomer
export const registerCustomer = async (req, res) => {
    const {contact_number,first_name,last_name,address} = req.body;

    try{
        const q=`INSERT INTO customer_info (contact_number,first_name,last_name,address) VALUES (?,?,?,?)`
        await new Promise((resolve, reject) => {
            db.query(q, [contact_number,first_name,last_name,address], (err, result) => {
                if (err) {
                    reject(err);  // If there's an error, reject the Promise
                    console.log(err);
                } else {
                    resolve(result); 
                    console.log(result);
                     // If everything went well, resolve the Promise
                }
            });
        });

        res.status(201).json({ message: 'Customer Details added successfully' });

    }catch(err){
        console.error(err);
        res.status(500).json({error: 'An unexpected error occurred'});
    }
}




//------------------------------------------------------------------------
//register vehicledetails

export const registerVehicle = async (req, res) => {
    const { veh_num,make,model,engine_type,contact_number} = req.body;

    try{
        const q=`INSERT INTO vehicle_details (veh_num,make,model,engine_type,contact_number) VALUES (?,?,?,?,?)`
        await new Promise((resolve, reject) => {
            db.query(q, [veh_num,make,model,engine_type,contact_number], (err, result) => {
                if (err) {
                    reject(err);  // If there's an error, reject the Promise
                    console.log(err);
                } else {
                    resolve(result); 
                    console.log(result);
                     // If everything went well, resolve the Promise
                }
            });
        });
        ;

        res.status(201).json({ message: 'Vehicle Details added successfully' });
    }catch(err){
        console.error(err);
        res.status(500).json({error: 'An unexpected error occurred'});
    }
}


//------------------------------------------------------------------
//Search Customer
export const searchCustomer = async (req, res) => {
    const {contact_number} = req.params;

    try{
        const q = `SELECT * FROM customer_info WHERE contact_number = ?`;
        const customer =  await new Promise((resolve, reject) => {
            db.query(q, [contact_number], (err, result) => {
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
        if (customer.length > 0) {
            res.json(customer[0]);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    }catch{
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
}