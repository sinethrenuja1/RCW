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

export const addHoliday= async (req, res) => {
    try {
        const { date } = req.body;
        const q =`INSERT INTO holiday_table (date) VALUES (?)` ;
        const result = await new Promise((resolve, reject) => {
            db.query(q, [date], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        res.status(201).json({ message: 'Holiday added successfully' });

    }catch{
        console.error('An error occurred while trying to add the holiday:', error);
        res.status(500).json({ error: 'An error occurred while trying to add the holiday' });
    }
}

export const deleteHoliday = async (req, res) => {
    const { date } = req.params;
    const query = 'DELETE FROM holiday_table WHERE date = ?';
    db.query(query, [date], (err, result) => {
        if (err) {
            console.error('An error occurred while trying to delete the holiday:', err);
            return res.status(500).json({ error: 'An error occurred while trying to delete the holiday' });
        }

        if (result.affectedRows === 0) {
            // No rows were affected, so the deletion did not occur.
            return res.status(404).json({ message: 'Holiday not found' });
        }

        res.status(200).json({ message: 'Holiday deleted successfully' });
    });
};

export const addBooking = async (req, res) => {
    const {bcon_num, bveh_num, b_date, b_time, vehicle_type, anything_else, bstatus} = req.body;
    const q='INSERT INTO booking(bcon_num, bveh_num, b_date, b_time, vehicle_type, anything_else) VALUES (?,?,?,?,?,?)';
    try {
        const result = await new Promise((resolve, reject) => {
            db.query(q, [bcon_num, bveh_num, b_date, b_time, vehicle_type, anything_else], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        res.status(201).json({ b_id: result.insertId });
    } catch (error) {
        console.error('An error occurred while trying to add the booking:', error);
        res.status(500).json({ error: 'An error occurred while trying to add the booking' });
    }

}

export const addBookingServices = async (req, res) => {
    const { b_id, services } = req.body;
    
    const q = 'INSERT INTO bookingapplied_services (b_id, slist_id) VALUES (?, ?)';
    
    try {
        const promises = services.map(service => 
            new Promise((resolve, reject) => {
                db.query(q, [b_id, service], (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            })
        );
        
        await Promise.all(promises);
        res.status(201).json({ message: 'Services added successfully' });
    } catch (error) {
        console.error('An error occurred while trying to add the booking services:', error);
        res.status(500).json({ error: 'An error occurred while trying to add the booking services' });
    }
};

export const getBookingDetails = async (req, res) => {
    const bookingDetailsQuery = `
        SELECT b.b_id, b.bcon_num, b.bveh_num,DATE_FORMAT(b.b_date, '%Y-%m-%d') AS b_date, b.b_time, b.vehicle_type, b.bstatus,b.anything_else,
               s.slist_id, s.servicelist_name
        FROM booking b
        
        LEFT JOIN bookingapplied_services bas ON b.b_id = bas.b_id
        LEFT JOIN select_serviceslist s ON bas.slist_id = s.slist_id
        WHERE b.bstatus = 'Sceduled'
    `;
    
    try {
        const results = await new Promise((resolve, reject) => {
            db.query(bookingDetailsQuery, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        // Organize results by booking ID
        const bookingsMap = results.reduce((acc, row) => {
            if (!acc[row.b_id]) {
                acc[row.b_id] = {
                    b_id: row.b_id,
                    bcon_num: row.bcon_num,
                    bveh_num: row.bveh_num,
                    vehicle_type: row.vehicle_type,
                    b_date: row.b_date,
                    b_time: row.b_time,
                    anything_else: row.anything_else,
                    
                    bstatus: row.bstatus,
                    services: []
                };
            }
            if (row.slist_id) {
                acc[row.b_id].services.push({
                    slist_id: row.slist_id,
                    servicelist_name: row.servicelist_name
                });
            }
            return acc;
        }, {});

        // Convert the map to an array
        const bookingDetailsWithHistory = Object.values(bookingsMap);

        res.status(200).json(bookingDetailsWithHistory);
    } catch (error) {
        console.error('An error occurred while trying to fetch the booking details:', error);
        res.status(500).json({ error: 'An error occurred while trying to fetch the booking details' });
    }
};

export const updateBookingStatus = async (req, res) => {
    const { b_id, bstatus } = req.body;

    if (!b_id || !bstatus) {
        return res.status(400).json({ error: 'Missing booking ID or status' });
    }

    const query = 'UPDATE booking SET bstatus = ? WHERE b_id = ?';
    try {
        const result = await new Promise((resolve, reject) => {
            db.query(query, [bstatus, b_id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        res.status(200).json({ message: 'Booking status updated successfully' });
    } catch (error) {
        console.error('Error updating booking status:', error);
        res.status(500).json({ error: 'An error occurred while updating the booking status' });
    }
};



export const getCancelledBookingDetails = async (req, res) => {
    const bookingDetailsQuery = `
        SELECT b.b_id, b.bcon_num, b.bveh_num,DATE_FORMAT(b.b_date, '%Y-%m-%d') AS b_date, b.b_time, b.vehicle_type, b.bstatus,b.anything_else,
               s.slist_id, s.servicelist_name
        FROM booking b
        
        LEFT JOIN bookingapplied_services bas ON b.b_id = bas.b_id
        LEFT JOIN select_serviceslist s ON bas.slist_id = s.slist_id
        WHERE b.bstatus = ''
    `;
    
    try {
        const results = await new Promise((resolve, reject) => {
            db.query(bookingDetailsQuery, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        // Organize results by booking ID
        const bookingsMap = results.reduce((acc, row) => {
            if (!acc[row.b_id]) {
                acc[row.b_id] = {
                    b_id: row.b_id,
                    bcon_num: row.bcon_num,
                    bveh_num: row.bveh_num,
                    vehicle_type: row.vehicle_type,
                    b_date: row.b_date,
                    b_time: row.b_time,
                    anything_else: row.anything_else,
                    
                    bstatus: row.bstatus,
                    services: []
                };
            }
            if (row.slist_id) {
                acc[row.b_id].services.push({
                    slist_id: row.slist_id,
                    servicelist_name: row.servicelist_name
                });
            }
            return acc;
        }, {});

        // Convert the map to an array
        const bookingDetailsWithHistory = Object.values(bookingsMap);

        res.status(200).json(bookingDetailsWithHistory);
    } catch (error) {
        console.error('An error occurred while trying to fetch the booking details:', error);
        res.status(500).json({ error: 'An error occurred while trying to fetch the booking details' });
    }
};


export const getCancelledOrCompletedBookingDetails = async (req, res) => {
    const bookingDetailsQuery = `
        SELECT b.b_id, b.bcon_num, b.bveh_num, DATE_FORMAT(b.b_date, '%Y-%m-%d') AS b_date, b.b_time, b.vehicle_type, b.bstatus, b.anything_else,
               s.slist_id, s.servicelist_name
        FROM booking b
        LEFT JOIN bookingapplied_services bas ON b.b_id = bas.b_id
        LEFT JOIN select_serviceslist s ON bas.slist_id = s.slist_id
        WHERE b.bstatus IN ('Cancelled', 'Completed')
    `;
    
    try {
        const results = await new Promise((resolve, reject) => {
            db.query(bookingDetailsQuery, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        // Organize results by booking ID
        const bookingsMap = results.reduce((acc, row) => {
            if (!acc[row.b_id]) {
                acc[row.b_id] = {
                    b_id: row.b_id,
                    bcon_num: row.bcon_num,
                    bveh_num: row.bveh_num,
                    vehicle_type: row.vehicle_type,
                    b_date: row.b_date,
                    b_time: row.b_time,
                    anything_else: row.anything_else,
                    bstatus: row.bstatus,
                    services: []
                };
            }
            if (row.slist_id) {
                acc[row.b_id].services.push({
                    slist_id: row.slist_id,
                    servicelist_name: row.servicelist_name
                });
            }
            return acc;
        }, {});

        // Convert the map to an array
        const bookingDetailsWithHistory = Object.values(bookingsMap);

        res.status(200).json(bookingDetailsWithHistory);
    } catch (error) {
        console.error('An error occurred while trying to fetch the booking details:', error);
        res.status(500).json({ error: 'An error occurred while trying to fetch the booking details' });
    }
};

// export const editbooking = async (req, res) => {
//     const { b_id, b_date, b_time } = req.body;

//     try {
//         await db.query('UPDATE booking SET b_date = ?, b_time = ? WHERE b_id = ?', [b_date, b_time, b_id]);
//         res.status(200).send({ message: 'Booking date/time updated successfully' });
//     } catch (error) {
//         console.error('An error occurred while trying to update the booking date/time:', error);
//         res.status(500).send({ error: 'An error occurred while trying to update the booking date/time' });
//     }
// }

export const updateBookingDateTime = async (req, res) => {
    const { b_id, b_date, b_time } = req.body;

    if (!b_id || !b_date || !b_time) {
        return res.status(400).json({ error: 'Missing booking ID, date, or time' });
    }

    const query = 'UPDATE booking SET b_date = ?, b_time = ? WHERE b_id = ?';
    try {
        const result = await new Promise((resolve, reject) => {
            db.query(query, [b_date, b_time, b_id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
        res.status(200).json({ message: 'Booking date/time updated successfully' });
    } catch (error) {
        console.error('Error updating booking date/time:', error);
        res.status(500).json({ error: 'An error occurred while updating the booking date/time' });
    }
};


// router.get('/appointments/availableslots', async (req, res) => {
//     const { appointmentDate } = req.query;
//     const allSlots = [
//       'Slot1 (08.00am to 08.45am)', 'Slot2 (08.45am to 09.30am)', 'Slot3 (9.30am to 10.15am)', 
//       'Slot4 (10.15am to 11.00am)', 'Slot5 (11.00am to 11.45am)', 'Slot6 (11.45am to 12.30pm)', 
//       'Slot7 (12.30pm to 13.15pm)', 'Slot8 (13.15pm to 14.00pm)', 'Slot9 (14.00pm to 14.45pm)', 
      
//     ];
  
//     try {
//       const [results] = await db.query('SELECT SlotNo FROM appointment WHERE AppointmentDate = ? AND Status = "Accepted"', [appointmentDate]);
//       const occupiedSlots = results.map(row => row.SlotNo);
//       const availableSlots = allSlots.filter(SlotNo => !occupiedSlots.includes(SlotNo));
//       res.json(availableSlots);
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   });

// export const getAvailableSlots = async (req, res) => {
//     const { appointmentDate } = req.query;
//     const allSlots = [
//       'Slot1 (08.00am to 08.45am)', 'Slot2 (08.45am to 09.30am)', 'Slot3 (9.30am to 10.15am)', 
//       'Slot4 (10.15am to 11.00am)', 'Slot5 (11.00am to 11.45am)', 'Slot6 (11.45am to 12.30pm)', 
//       'Slot7 (12.30pm to 13.15pm)', 'Slot8 (13.15pm to 14.00pm)', 'Slot9 (14.00pm to 14.45pm)'
//     ];
  
//     try {
//       const query = 'SELECT SlotNo FROM appointment WHERE AppointmentDate = ? AND Status = "Accepted"';
//       const [results] = await db.query(query, [appointmentDate]);
//       const occupiedSlots = results.map(row => row.SlotNo);
//       const availableSlots = allSlots.filter(slot => !occupiedSlots.includes(slot));
//       res.json(availableSlots);
//     } catch (error) {
//       console.error('Error fetching available slots:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };
  




// export const getTimeSlots = async (req, res) => {
//     try {
//         const { date } = req.query; // Assuming date is passed as a query parameter

//         // Validate date input (optional but recommended)
//         if (!date) {
//             return res.status(400).json({ error: 'Date parameter is required' });
//         }

//         // Generate dynamic time slots from 8:00 AM to 5:00 PM with 45-minute intervals
//         const startHour = 8; // Start hour
//         const endHour = 17; // End hour (5 PM)
//         const intervalMinutes = 45; // Interval in minutes

//         const allSlots = generateTimeSlots(startHour, endHour, intervalMinutes);

//         // MySQL query to fetch bookings for the date and group by b_time
//         const bookingQuery = `
//             SELECT b_time, COUNT(*) AS count
//             FROM booking
//             WHERE b_date = ?
//             GROUP BY b_time
//         `;

//         db.query(bookingQuery, [date], (err, bookingResults) => {
//             if (err) {
//                 console.error('Error fetching bookings:', err);
//                 return res.status(500).json({ error: 'Error fetching bookings' });
//             }

//             // Create a map for counting bookings per time slot
//             const slotCounts = {};
//             bookingResults.forEach((booking) => {
//                 const slot = allSlots.find(s => s.includes(booking.b_time));
//                 if (slot) {
//                     slotCounts[slot] = booking.count;
//                 }
//             });

//             // Modify allSlots to include availability status
//             const slotsWithAvailability = allSlots.map((slot) => ({
//                 slot,
//                 available: !slotCounts[slot] || slotCounts[slot] < 2
//             }));

//             res.status(200).json(slotsWithAvailability);
//         });
//     } catch (error) {
//         console.error('Error fetching time slots:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// // Function to generate time slots
// const generateTimeSlots = (startHour, endHour, intervalMinutes) => {
//     const timeSlots = [];
//     let currentHour = startHour;
//     let currentMinute = 0;

//     while (currentHour < endHour) {
//         // Format hour and minute with leading zeros
//         const formattedHour = currentHour.toString().padStart(2, '0');
//         const formattedMinute = currentMinute.toString().padStart(2, '0');

//         // Create time slot in HH:MM format
//         const timeSlot = `${formattedHour}:${formattedMinute}`;
//         timeSlots.push(timeSlot);

//         // Increment currentMinute by the intervalMinutes
//         currentMinute += intervalMinutes;

//         // Adjust currentHour and reset currentMinute if currentMinute exceeds 59
//         if (currentMinute >= 60) {
//             currentHour++;
//             currentMinute = 0; // Reset currentMinute to 0 for the new hour
//         }
//     }

//     return timeSlots;
// };

// export default getTimeSlots;

// Function to generate time slots
const generateTimeSlots = (startHour, endHour, intervalMinutes) => {
    const timeSlots = [];
    let currentHour = startHour;
    let currentMinute = 0;

    while (currentHour < endHour) {
        // Format hour and minute with leading zeros
        const formattedHour = currentHour.toString().padStart(2, '0');
        const formattedMinute = currentMinute.toString().padStart(2, '0');

        // Create time slot in HH:MM format
        const timeSlot = `${formattedHour}:${formattedMinute}`;
        timeSlots.push(timeSlot);

        // Increment currentMinute by the intervalMinutes
        currentMinute += intervalMinutes;

        // Adjust currentHour and reset currentMinute if currentMinute exceeds 59
        if (currentMinute >= 60) {
            currentHour++;
            currentMinute = 0; // Reset currentMinute to 0 for the new hour
        }
    }

    return timeSlots;
};

export default generateTimeSlots;


export const getTimeSlots = async (req, res) => {
    try {
        const { date } = req.query; // Assuming date is passed as a query parameter

        // Validate date input (optional but recommended)
        if (!date) {
            return res.status(400).json({ error: 'Date parameter is required' });
        }

        // Generate dynamic time slots from 8:00 AM to 5:00 PM with 45-minute intervals
        const startHour = 8; // Start hour
        const endHour = 14.45; // End hour (5 PM)
        const intervalMinutes = 45; // Interval in minutes

        const allSlots = generateTimeSlots(startHour, endHour, intervalMinutes);

        // MySQL query to fetch bookings for the date and group by b_time
        const bookingQuery = `
            SELECT b_time, COUNT(*) AS count
            FROM booking
            WHERE b_date = ?
            GROUP BY b_time
        `;

        db.query(bookingQuery, [date], (err, bookingResults) => {
            if (err) {
                console.error('Error fetching bookings:', err);
                return res.status(500).json({ error: 'Error fetching bookings' });
            }

            // Create a map for counting bookings per time slot
            const slotCounts = {};
            bookingResults.forEach((booking) => {
                // Format the booking time to match the time slots generated
                const formattedBookingTime = booking.b_time.substring(0, 5); // Extract HH:MM from HH:MM:SS
                const slot = allSlots.find(s => s === formattedBookingTime);
                if (slot) {
                    slotCounts[slot] = booking.count;
                }
            });

            // Modify allSlots to include availability status
            const slotsWithAvailability = allSlots.map((slot) => ({
                slot,
                available: !slotCounts[slot] || slotCounts[slot] < 2
            }));

            res.status(200).json(slotsWithAvailability);
        });
    } catch (error) {
        console.error('Error fetching time slots:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
