import db from '../db.js';

// Function to get the next service ID based on the last service ID
const getNextServiceJobId = (lastServiceId) => {
    if (!lastServiceId) return 'S001';
    const number = parseInt(lastServiceId.slice(1)) + 1;
    return 'S' + number.toString().padStart(3, '0');
};

// Controller to fetch the next servicejob ID
export const getNextServiceJobIdController = async (req, res) => {
    try {
        const query = 'SELECT service_id FROM servce_list ORDER BY service_id DESC LIMIT 1';
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

        res.json({ worker_id: newServiceId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};


// Controller to add a new servicejob
export const addServiceJob = async (req, res) => {
    const { s_name , s_price } = req.body;

    try {
        // Fetch the last worker ID
        const query = 'SELECT service_id FROM servce_list ORDER BY service_id DESC LIMIT 1';
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

        // Insert the new worker
        const q = 'INSERT INTO servce_list (service_id,s_name,s_price) VALUES (?, ?, ?)';
        await new Promise((resolve, reject) => {
            db.query(q, [newServiceId,s_name,s_price ], (err, result) => {
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