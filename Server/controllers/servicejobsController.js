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

// Controller to delete worker
export const deleteService = async (req, res) => {
    const { service_id } = req.params;

    try {
        const deleteQuery = 'DELETE FROM service_list WHERE service_id = ?';
        const values = [service_id];

        await new Promise((resolve, reject) => {
            db.query(deleteQuery, values, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        console.error('Error deleting service:', error);
        res.status(500).json({ message: 'Error deleting service' });
    }
};

// fetch service by ID
export const getServiceById = async (req, res) => {
    const { service_id } = req.params;
    try {
        const q = 'SELECT * FROM service_list WHERE service_id = ?';
        db.query(q, [service_id], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'An error occurred while fetching the service details' });
            } else {
                res.status(200).json(result[0]);
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};


// update service by ID
export const updateService = async (req, res) => {
    const { service_id } = req.params;
    const { s_name, s_price } = req.body;
    try {
        const q = 'UPDATE service_list SET s_name = ?, s_price = ? WHERE service_id = ?';
        db.query(q, [s_name, s_price, service_id], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'An error occurred while updating the service details' });
            } else {
                res.status(200).json({ message: 'Service updated successfully' });
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};
