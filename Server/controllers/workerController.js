import db from '../db.js';

// Function to get the next worker ID based on the last worker ID
const getNextWorkerId = (lastWorkerId) => {
    if (!lastWorkerId) return 'W001';
    const number = parseInt(lastWorkerId.slice(1)) + 1;
    return 'W' + number.toString().padStart(3, '0');
};

// Controller to fetch the next worker ID
export const getNextWorkerIdController = async (req, res) => {
    try {
        const query = 'SELECT worker_id FROM worker_info ORDER BY worker_id DESC LIMIT 1';
        const result = await new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const lastWorkerId = result.length ? result[0].worker_id : null;
        const newWorkerId = getNextWorkerId(lastWorkerId);

        res.json({ worker_id: newWorkerId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

// Controller to add a new worker
export const addWorker = async (req, res) => {
    const { name, nic_no, birthday, address, tel_no, email, main_area, sub_area } = req.body;

    try {
        // Fetch the last worker ID
        const query = 'SELECT worker_id FROM worker_info ORDER BY worker_id DESC LIMIT 1';
        const result = await new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        const lastWorkerId = result.length ? result[0].worker_id : null;
        const newWorkerId = getNextWorkerId(lastWorkerId);

        // Insert the new worker
        const insertQuery = 'INSERT INTO worker_info (worker_id, name, nic_no, birthday, address, tel_no, email, main_area, sub_area) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        await new Promise((resolve, reject) => {
            db.query(insertQuery, [newWorkerId, name, nic_no, birthday, address, tel_no, email, main_area, sub_area], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        res.status(201).json({ message: 'Worker added', worker_id: newWorkerId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

// export default {
//     getNextWorkerIdController,
//     addWorker
// };

//-------------------------------------------
// Controller to fetch the worker table

export const worker_table= async (req,res) => {
    try{
        const q = `SELECT * FROM worker_info`;
        db.query(q,(err,result) => {
            if(err){
                console.error(err);
                res.status(500).json({error: 'An error occurred while fetching the worker table'});
            }else{
                res.status(200).json(result);
            }
        })
    }catch{
        console.error(err);
        res.status(500).json({error: 'An unexpected error occurred'});
    }

}

//---------------------------------------------------

export const getWorkerById = async (req, res) => {
    try {
        const { worker_id } = req.params;
        const q = `SELECT * FROM worker_info WHERE worker_id = ?`;
        db.query(q, [worker_id], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'An error occurred while fetching the worker' });
            } else {
                if (result.length > 0) {
                    res.status(200).json(result[0]);
                } else {
                    res.status(404).json({ error: 'No worker found with the provided ID' });
                }
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

// Controller to update worker details
export const updateWorkerDetails = async (req, res) => {
    const { worker_id } = req.params;
    const { name, nic_no, birthday, address, tel_no, email, main_area, sub_area } = req.body;

    try {
        const updateQuery = 'UPDATE worker_info SET name = ?, nic_no = ?, birthday = ?, address = ?, tel_no = ?, email = ?, main_area = ?, sub_area = ? WHERE worker_id = ?';
        const values = [name, nic_no, birthday, address, tel_no, email, main_area, sub_area, worker_id];

        await new Promise((resolve, reject) => {
            db.query(updateQuery, values, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        res.status(200).json({ message: 'Worker details updated successfully' });
    } catch (error) {
        console.error('Error updating worker details:', error);
        res.status(500).json({ message: 'Error updating worker details' });
    }
};

// Controller to delete worker
export const deleteWorker = async (req, res) => {
    const { worker_id } = req.params;

    try {
        const deleteQuery = 'DELETE FROM worker_info WHERE worker_id = ?';
        const values = [worker_id];

        await new Promise((resolve, reject) => {
            db.query(deleteQuery, values, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });

        res.status(200).json({ message: 'Worker deleted successfully' });
    } catch (error) {
        console.error('Error deleting worker:', error);
        res.status(500).json({ message: 'Error deleting worker' });
    }
};