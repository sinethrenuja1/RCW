import {db} from "../db.js"

export class BookingController {
    // Function to create a new booking
    static async createBooking(req, res) {
        try {
            const { name, vehicleNum, selectedServices } = req.body;

            // Start a transaction
            await db.promise().beginTransaction();

            try {
                // Insert data into the bookings table
                const [bookingResult] = await db.promise().execute('INSERT INTO booking (name, vehicle_num) VALUES (?, ?)', [name, vehicleNum]);
                const bookingId = bookingResult.insertId;

                // Insert data into the selected_services table
                for (const serviceId of selectedServices) {
                    await db.promise().execute('INSERT INTO selected_services (booking_id, service_id) VALUES (?, ?)', [bookingId, serviceId]);
                }

                // Commit the transaction
                await db.promise().commit();

                // Send a success response
                res.status(200).send('Booking created successfully');
            } catch (error) {
                // Rollback the transaction if an error occurs
                await db.promise().rollback();
                throw error;
            }
        } catch (error) {
            console.error('Error creating booking:', error);
            res.status(500).send('An error occurred while creating the booking');
        }
    }
}
