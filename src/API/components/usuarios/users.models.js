import pool from '#Confing/connectDB.js';

const getAllUsers = async () => {
    try {
        const rows = pool.query(
            'SELECT id_usuario, nombre, apellido, email, rol, telefono, observaciones FROM usuarios'
        );
        return rows;
    } catch (error) {
        return error;
    }
};

const login = (email, password) => {
    try {
        const rows = pool.query(
            `SELECT nombre, apellido FROM usuarios WHERE email = ${email} AND password = ${password}`
        );
        return rows;
    } catch (error) {
        return error;
    }
};

export default { getAllUsers, login };
