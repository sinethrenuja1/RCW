import { db } from "../db.js";

// export const getNotStartedJobCards = async (req, res) => {
//     const query = 'SELECT * FROM job_carddetails WHERE status = "not started"';

//     try {
//         const results = await new Promise((resolve, reject) => {
//             db.query(query, (err, results) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(results);
//                 }
//             });
//         });

//         res.status(200).json({ message: 'Job cards fetched successfully', data: results });
//     } catch (error) {
//         console.error('Error fetching job cards with status "not started":', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

export const getNotStartedJobCards = async (req, res) => {
    const { user_id } = req.query; // Get user_id from the query parameters
    const query = 'SELECT * FROM job_carddetails WHERE status = "not started" AND user_id = ?';

    try {
        const results = await new Promise((resolve, reject) => {
            db.query(query, [user_id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        res.status(200).json({ message: 'Job cards fetched successfully', data: results });
    } catch (error) {
        console.error('Error fetching job cards with status "not started":', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
