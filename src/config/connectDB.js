import '#Confing/env.js';
import mysql from 'mysql2';
import util from 'util';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    password: process.env.BD_PASSWORD,
    user: process.env.BD_USER,
    database: process.env.BD_NAME,
});

pool.getConnection((error, connection) => {
    if (error) {
        console.log('Error de conexión a la Base de Datos');
    }
    connection.release();
    console.log('Conexión a Base de Datos - Exitosa');
});

pool.query = util.promisify(pool.query);

export default pool;
