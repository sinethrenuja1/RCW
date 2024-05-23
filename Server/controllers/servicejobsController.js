import db from '../db.js';

// next service ID based on the last service ID
const getNextServiceJobId = (lastServiceId) => {
    if (!lastServiceId) return 'S001';
    const number = parseInt(lastServiceId.slice(1)) + 1;
    return 'S' + number.toString().padStart(3, '0');
};

// fetch the next service job ID
export const getNextServiceJobIdController = async (req, res) => {
    try {
        const query = 'SELECT service_id FROM service_list ORDER BY service_id DESC LIMIT 1';
        const result = await new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const lastServiceId = result.length ? result[0].service_id : null;
        const newServiceId = getNextServiceJobId(lastServiceId);

        res.json({ service_id: newServiceId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

// add a new service job
export const addServiceJob = async (req, res) => {
    const { s_name, s_price } = req.body;

    try {
        // Fetch the last service ID
        const query = 'SELECT service_id FROM service_list ORDER BY service_id DESC LIMIT 1';
        const result = await new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const lastServiceId = result.length ? result[0].service_id : null;
        const newServiceId = getNextServiceJobId(lastServiceId);

        const q = 'INSERT INTO service_list (service_id, s_name, s_price) VALUES (?, ?, ?)';
        await new Promise((resolve, reject) => {
            db.query(q, [newServiceId, s_name, s_price], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        res.status(201).json({ message: 'New Service added', service_id: newServiceId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};


//controller to get all service jobs

export const getAllServices = async (req, res) => {
    try {
        const q = 'SELECT * FROM service_list';
        const result = await new Promise((resolve, reject) => {
            db.query(q, (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'An error occurred while fetching the worker table' });
                } else {
                    res.status(200).json(result);
                }
            });
        });

    } catch {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};