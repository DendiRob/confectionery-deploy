const Vacancy = require('../models/vacancy');

const handleError = (res, error) => {
    res.status(500).json({error})
}

const getAllVacancies = (req,res) => {
    Vacancy
        .find()
        .then((vacancy) => {
            res
                .status(200)
                .json(vacancy)
        })
        .catch((err) => handleError(res, err))
};
const getSingleVacancy = (req,res) => {
    Vacancy
        .find({"_id": `${req.params.id}`})
        .then((vacancy) => {
            res
                .status(200)
                .json(vacancy)
        })
        .catch((err) => handleError(res, err))
};

module.exports = {
    getAllVacancies,
    getSingleVacancy
}