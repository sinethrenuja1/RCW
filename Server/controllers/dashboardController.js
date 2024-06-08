import { db } from "../db.js";

export const getBillDetails = async (req, res) => {
    const query = 'SELECT * FROM bill_details';

    try {
        const results = await new Promise((resolve, reject) => {
            db.query(query, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        res.status(200).json(results);
    } catch (error) {
        console.error('Error fetching bill details:', error);
        res.status(500).json({ error: 'An error occurred while fetching the bill details' });
    }
};

export const getTodayBookingsCount = (req, res) => {
    // Get today's date in the format 'YYYY-MM-DD'
    const today = new Date().toISOString().split('T')[0];

    // Construct SQL query to count bookings for today with status 'scheduled'
    const query = `SELECT COUNT(*) AS count FROM booking WHERE b_date = ? AND bstatus = 'sceduled'`;

    // Execute query
    db.query(query, [today], (error, results) => {
        if (error) {
            console.error('Error fetching today\'s bookings count:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Send the count as JSON response
            res.json({ count: results[0].count });
        }
    });
};



// export const getTodayEarnings = (req, res) => {
//     const today = new Date().toISOString().split('T')[0];

//     const query = `SELECT SUM(price) AS earnings FROM bill_details WHERE b_date = ?`;

//     connection.query(query, [today], (error, results) => {
//         if (error) {
//             console.error('Error fetching today\'s earnings:', error);
//             res.status(500).json({ error: 'Internal Server Error' });
//         } else {
//             res.json({ earnings: results[0].earnings || 0 });
//         }
//     });
// };

export const getTodayEarnings = async (req, res) => {
    try {
        const now = new Date();
        const start = new Date(now);
        start.setHours(0, 0, 0, 0); // Set start to the beginning of the day in local time
        
        const end = new Date(now);
        end.setHours(23, 59, 59, 999); // Set end to the end of the day in local time

        console.log('Start:', start.toISOString(), 'End:', end.toISOString());

        const [rows] = await new Promise((resolve, reject) => {
            db.query(
                'SELECT SUM(price) AS earnings FROM bill_details WHERE b_date BETWEEN ? AND ?',
                [start, end],
                (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                }
            );
        });

        if (rows && rows.length > 0 && rows[0].hasOwnProperty('earnings')) {
            res.json({ earnings: rows[0].earnings || 0 });
        } else {
            res.json({ earnings: 0 }); // Return earnings as 0 if no rows or earnings property found
        }
    } catch (error) {
        console.error('Error fetching today\'s earnings:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};