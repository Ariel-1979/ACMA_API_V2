import models from './horses.models.js';

const getAllHorses = async () => {
    try {
        const rows = await models.getAllHorses();
        return { statusCode: 200, data: rows, message: 'OK' };
    } catch (error) {
        return { statusCode: 500, data: error, message: 'Error' };
    }
};

const getHorseById = async (id) => {
    try {
        const rows = await models.getHorseById(id);
        return { statusCode: 200, data: rows, message: 'OK' };
    } catch (error) {
        return { statusCode: 500, data: error, message: 'Error' };
    }
};

const getHorsesByStatus = async (status) => {
    try {
        const rows = await models.getHorsesByStatus(status);
        return { statusCode: 200, data: rows, message: 'OK' };
    } catch (error) {
        return { statusCode: 500, data: error, message: 'Error' };
    }
};

const getHorsesByPlace = async (place) => {
    try {
        const rows = await models.getHorsesByPlace(place);
        return { statusCode: 200, data: rows, message: 'OK' };
    } catch (error) {
        return { statusCode: 500, data: error, message: 'Error' };
    }
};

export default {
    getAllHorses,
    getHorseById,
    getHorsesByStatus,
    getHorsesByPlace,
};
