import pool from '#Confing/connectDB.js';

const getAllHorses = async () => {
    try {
        const rows = pool.query(
            'SELECT  id_caballo, ingreso, raza, sexo, nombre, historia_clinica, chip, diario, lugar FROM caballo'
        );
        return rows;
    } catch (error) {
        return error;
    }
};

const getHorseById = async (id) => {
    try {
        const rows = pool.query(
            'SELECT  id_caballo, ingreso, edad, raza, pelaje, marcas, nombre, historia_clinica, chip, diario, lugar, peso, informe, anamnesis, tratamiento, diagnostico, sexo, padrillo, tamanio FROM caballo WHERE id_caballo = ?',
            [id]
        );
        return rows;
    } catch (error) {
        return error;
    }
};

const getHorsesByStatus = async (status) => {
    try {
        const rows = pool.query(
            'SELECT  id_caballo, ingreso, raza, sexo, nombre, historia_clinica, chip, diario, lugar FROM caballo WHERE diario = ? ORDER BY ingreso DESC',
            [status]
        );
        return rows;
    } catch (error) {
        return error;
    }
};

const getHorsesByPlace = async (place) => {
    try {
        const rows = pool.query(
            'SELECT  id_caballo, ingreso, raza, sexo, nombre, historia_clinica, chip, diario, lugar FROM caballo WHERE lugar = ?',
            [place]
        );
        return rows;
    } catch (error) {
        return error;
    }
};

export default {
    getAllHorses,
    getHorseById,
    getHorsesByStatus,
    getHorsesByPlace,
};
