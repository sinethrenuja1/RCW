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

export default {
    getNextWorkerIdController,
    addWorker
};

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

// export const getWorkerById = async (req, res) => {
//     const workerId = req.params.worker_id;

//     try {
//         const query = 'SELECT * FROM worker_info WHERE worker_id = ?';
//         const [worker] = await db.execute(query, [workerId]);

//         if (worker.length === 0) {
//             return res.status(404).json({ message: 'Worker not found' });
//         }

//         res.status(200).json(worker[0]);
//     } catch (error) {
//         console.error('Error fetching worker details:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

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