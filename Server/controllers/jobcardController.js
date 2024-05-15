import db from '../db.js';

export const registerCustomer = async (req, res) => {
    const {contact_number,first_name,last_name,address} = req.body;

    try{
        const q=`INSERT INTO customer_info (contact_number,first_name,last_name,address) VALUES (?,?,?,?)`
        [contact_number,first_name,last_name,address];

        res.status(201).json({ message: 'Customer Details added successfully' });

    }catch(err){
        console.error(err);
        res.status(500).json({error: 'An unexpected error occurred'});
    }
}

export const registerVehicle = async (req, res) => {
    const { veh_num,make,model,engine_type,contact_number} = req.body;

    try{
        const q=`INSERT INTO vehicle_details (veh_num,make,model,engine_type,contact_number) VALUES (?,?,?,?,?)`
        [veh_num,make,model,engine_type,contact_number];

        res.status(201).json({ message: 'Vehicle Details added successfully' });
    }catch(err){
        console.error(err);
        res.status(500).json({error: 'An unexpected error occurred'});
    }
}