import { db } from "../db.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";



// export const loginUser = (req, res) => {
//     const { username, password } = req.body;

//     const q = "SELECT * FROM user_info WHERE user_name = ?";
//     db.query(q, [username], (err, data) => {
//         if (err) {
//             console.error('Error during login:', err);
//             return res.status(500).json({ error: 'Server error' });
//         }

//         if (data.length === 0) {
//             return res.status(401).json({ error: 'Invalid username or password' });
//         }

//         const user = data[0];
//         const isPasswordCorrect = bcrypt.compareSync(password, user.u_password);

//         if (!isPasswordCorrect) {
//             return res.status(401).json({ error: 'Invalid username or password' });
//         }

//         const token = Jwt.sign({ id: user.id }, "jwtkey");
//         const { u_password, ...other } = user;
//         res.cookie("access_token", token, {
//             httpOnly: true,
//         });

//         res.status(200).json({ message: 'Login successful', token, user: other });
//     });
// };



export const loginUser = (req, res) => {
    const { username, password } = req.body;

    const q = "SELECT * FROM user_info WHERE user_name = ?";
    db.query(q, [username], (err, data) => {
        if (err) {
            console.error('Error during login:', err);
            return res.status(500).json({ error: 'Server error' });
        }

        if (data.length === 0) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const user = data[0];
        const isPasswordCorrect = bcrypt.compareSync(password, user.u_password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const token = Jwt.sign({ id: user.id }, "jwtkey");
        const { u_password, ...other } = user;
        res.cookie("access_token", token, {
            httpOnly: true,
        });

        res.status(200).json({ message: 'Login successful', token, user: other });
    });
};

// export const addUser = (req, res) => {
//     const {
//         u_name,
//         u_nic,
//         u_connum,
//         u_email,
//         u_address,
//         user_name,
//         u_password,
//         acc_type,
//         u_birthday
//     } = req.body;

//     // Encrypt the user's password before storing it in the database
//     const hashedPassword = bcrypt.hashSync(u_password, 10);

//     const q = `
//         INSERT INTO user_info (u_name, u_nic, u_connum, u_email, u_address, user_name, u_password, acc_type, u_birthday)
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;

//     db.query(q, [u_name, u_nic, u_connum, u_email, u_address, user_name, hashedPassword, acc_type, u_birthday], (err, result) => {
//         if (err) {
//             console.error('Error adding user:', err);
//             return res.status(500).json({ error: 'Error adding user' });
//         }
//         res.status(201).json({ message: 'User added successfully', userId: result.insertId });
//     });
// };

// import bcrypt from 'bcrypt';
// import db from '../db'; // Adjust the import based on your project structure

export const addUser = (req, res) => {
    const {
        u_name,
        u_nic,
        u_connum,
        u_email,
        u_address,
        user_name,
        u_password,
        acc_type,
        u_birthday
    } = req.body;

    // Encrypt the user's password before storing it in the database
    const hashedPassword = bcrypt.hashSync(u_password, 10);

    const checkQuery = `
        SELECT * FROM user_info WHERE user_name = ? OR u_nic = ? OR u_connum = ?
    `;

    db.query(checkQuery, [user_name, u_nic, u_connum], (checkErr, checkResult) => {
        if (checkErr) {
            console.error('Error checking existing user:', checkErr);
            return res.status(500).json({ error: 'Error checking existing user' });
        }

        if (checkResult.length > 0) {
            return res.status(400).json({ error: 'User with the same username, NIC, or contact number already exists' });
        }

        const insertQuery = `
            INSERT INTO user_info (u_name, u_nic, u_connum, u_email, u_address, user_name, u_password, acc_type, u_birthday)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        db.query(insertQuery, [u_name, u_nic, u_connum, u_email, u_address, user_name, hashedPassword, acc_type, u_birthday], (insertErr, result) => {
            if (insertErr) {
                console.error('Error adding user:', insertErr);
                return res.status(500).json({ error: 'User name is already exists.' });
            }
            res.status(201).json({ message: 'User added successfully', userId: result.insertId });
        });
    });
};


export const encryptPasswords = (req, res) => {
    const q = "SELECT user_id, u_password FROM user_info";
    db.query(q, (err, data) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ error: 'Server error' });
        }

        const updatePromises = data.map(user => {
            const hashedPassword = bcrypt.hashSync(user.u_password, 10);
            const updateQuery = "UPDATE user_info SET u_password = ? WHERE user_id = ?";
            return new Promise((resolve, reject) => {
                db.query(updateQuery, [hashedPassword, user.user_id], (updateErr, result) => {
                    if (updateErr) {
                        console.error(`Error updating password for user ID ${user.user_id}:`, updateErr);
                        return reject(updateErr);
                    }
                    resolve(result);
                });
            });
        });

        Promise.all(updatePromises)
            .then(() => res.status(200).json({ message: 'Passwords encrypted successfully' }))
            .catch((error) => res.status(500).json({ error: 'Error encrypting passwords' }));
    });
};