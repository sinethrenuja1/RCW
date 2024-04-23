import mysql2 from 'mysql2';

export const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '20010312',
    database: 'rcw'
});

export default db;