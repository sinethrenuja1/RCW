import db from '../db.js';

export const getJobCards = (req, res) => {
   
    const jobCardsQuery = `
        SELECT j.jobcard_id, j.veh_num, u.u_name, j.status
        FROM job_carddetails j
        JOIN user_info u ON j.user_id = u.user_id
        WHERE j.status IN ('not started', 'started')
    `;

    db.query(jobCardsQuery, (err, jobCards) => {
        if (err) {
            return res.status(500).json({ error: 'An error occurred while fetching job cards.' });
        }

        res.json(jobCards);
    });
};


export const getJobCardDetails = (req, res) => {
    const { jobcard_id } = req.params;

    // SQL query to fetch records from used_services with the given jobcard_id
    const usedServicesQuery = `
        SELECT us.service_id, us.worker_id, us.s_quantity, sl.s_name, sl.s_price
        FROM used_services us
        JOIN service_list sl ON us.service_id = sl.service_id
        WHERE us.jobcard_id = ?
    `;

    // SQL query to fetch records from used_items with the given jobcard_id
    const usedItemsQuery = `
        SELECT ui.upart_id, ui.u_quantity, ui.uworker_id, s.price, s.name
        FROM used_items ui
        JOIN stock s ON ui.upart_id = s.part_id
        WHERE ui.ujobcard_id = ?
    `;

    // Perform both queries in parallel using Promise.all
    Promise.all([
        new Promise((resolve, reject) => {
            db.query(usedServicesQuery, [jobcard_id], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        }),
        new Promise((resolve, reject) => {
            db.query(usedItemsQuery, [jobcard_id], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        })
    ])
    .then(([servicesResults, itemsResults]) => {
        const serviceDetails = servicesResults.map(row => ({
            service_name: row.s_name,
            s_quantity: row.s_quantity,
            worker_id: row.worker_id,
            s_price: row.s_price
        }));

        const itemDetails = itemsResults.map(row => ({
            part_name: row.name,
            u_quantity: row.u_quantity,
            uworker_id: row.uworker_id,
            price: row.price
        }));

        res.json({
            services: serviceDetails.length > 0 ? serviceDetails : 'No services found',
            parts: itemDetails.length > 0 ? itemDetails : 'No parts used'
        });
    })
    .catch(err => {
        res.status(500).json({ error: 'An error occurred while fetching job card details.' });
    });
};