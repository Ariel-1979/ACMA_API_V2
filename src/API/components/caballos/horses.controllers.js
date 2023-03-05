import dto from './horses.dto.js';

const getAllHorses = async (req, res) => {
    try {
        const { statusCode, data } = await dto.getAllHorses();
        res.status(statusCode).json(data);
    } catch (error) {
        return error;
    }
};

const getHorseById = async (req, res) => {
    try {
        const { statusCode, data } = await dto.getHorseById(req.params.id);
        res.status(statusCode).json(data);
    } catch (error) {
        return error;
    }
};

const getHorsesByStatus = async (req, res) => {
    try {
        const { statusCode, data } = await dto.getHorsesByStatus(
            req.body.status
        );
        res.status(statusCode).json(data);
    } catch (error) {
        return error;
    }
};

const getHorsesByPlace = async (req, res) => {
    try {
        const { statusCode, data } = await dto.getHorsesByPlace(req.body.place);
        res.status(statusCode).json(data);
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
