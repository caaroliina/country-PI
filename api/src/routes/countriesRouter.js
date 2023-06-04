const { Router } = require('express');
const { getCountries, getCountryById } = require('../handlers/countriesHandlers')

const countriesRouter = Router();

countriesRouter.get('/', getCountries)

countriesRouter.get('/:idPais', getCountryById)

module.exports = countriesRouter;