import mysql from 'mysql2/promise';

// Create a connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

// Query function
const querys = async (query, values = []) => {
    let connection;
    try {
        connection = await pool.getConnection(); // Get a connection from the pool
        const [rows] = await connection.query(query, values); // Execute the query with values
        return rows;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    } finally {
        if (connection) connection.release(); // Release the connection back to the pool
    }
};

export default querys;
