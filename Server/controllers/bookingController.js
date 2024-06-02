import { db } from "../db.js";


export const addService = async (req, res) => {
    const { servicelist_name } = req.body;

    try {
        const q = 'INSERT INTO select_serviceslist ( servicelist_name) VALUES (?)';
        await new Promise((resolve, reject) => {
            db.query(q, [servicelist_name], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        res.status(201).json({ message: 'Service added successfully' });
    } catch (error) {
        console.error('An error occurred while trying to add the service:', error);
        res.status(500).json({ error: 'An error occurred while trying to add the service' });
    }
};

export const getServices = async (req, res) => {
    try {
        const query = 'SELECT * FROM select_serviceslist';
        const result = await new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        res.status(200).json(result);
    } catch (error) {
        console.error('An error occurred while trying to fetch the services:', error);
        res.status(500).json({ error: 'An error occurred while trying to fetch the services' });
    }
};

export const deleteService = async (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM select_serviceslist WHERE slist_id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('An error occurred while trying to delete the service:', err);
            
            return res.status(500).json({ error: 'An error occurred while trying to delete the service' });
            
        }

        if (result.affectedRows === 0) {
            // No rows were affected, so the deletion did not occur.
            return res.status(404).json({ message: 'Service not found' });
        }

        res.status(200).json({ message: 'Service deleted successfully' });
    });
};

// Controller to fetch holidays
// export const getHolidays = async (req, res) => {
//     try {
//         const query = 'SELECT date FROM holiday_table';
//         const result = await new Promise((resolve, reject) => {
//             db.query(query, (err, result) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(result);
//                 }
//             });
//         });

//         res.status(200).json(result.map(holiday => holiday.date));
//     } catch (error) {
//         console.error('An error occurred while trying to fetch the holidays:', error);
//         res.status(500).json({ error: 'An error occurred while trying to fetch the holidays' });
//     }
// };

export const getHolidays = async (req, res) => {
    try {
        const query = 'SELECT DATE_FORMAT(date, "%Y-%m-%d") as date FROM holiday_table';
        const result = await new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        res.status(200).json(result.map(holiday => holiday.date));
    } catch (error) {
        console.error('An error occurred while trying to fetch the holidays:', error);
        res.status(500).json({ error: 'An error occurred while trying to fetch the holidays' });
    }
};