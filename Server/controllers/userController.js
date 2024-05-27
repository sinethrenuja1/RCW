import {db} from "../db.js"

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

    const q = `
        INSERT INTO user_info (u_name, u_nic, u_connum, u_email, u_address, user_name, u_password, acc_type, u_birthday)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(q, [u_name, u_nic, u_connum, u_email, u_address, user_name, u_password, acc_type, u_birthday], (err, result) => {
        if (err) {
            console.error('Error adding user:', err);
            return res.status(500).json({ error: 'Error adding user' });
        }
        res.status(201).json({ message: 'User added successfully', userId: result.insertId });
    });
};