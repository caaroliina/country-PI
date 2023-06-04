const { getCountriesById, searchCountry, searchCountries } = require('../controllers/countriesControllers.js')

const getCountryById = async (req,res) => {
    const {idPais} = req.params;
    const id = idPais.toUpperCase();

    try {
        const searchCountryId = await getCountriesById(id)
        return res.status(200).json(searchCountryId);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const getCountries = async (req, res) => {
    const { name } = req.query;

    try {
        const result = name !== undefined ? await searchCountry(name) : await searchCountries(); 
        return res.status(200).json(result);

    } catch (error) {
        return res.json({error: error.message})
    }
}

module.exports = {
    getCountries,
    getCountryById
}