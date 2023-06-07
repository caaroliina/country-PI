const { Country, Activity } = require('../db.js');
const { Op } = require('sequelize')
const axios = require('axios')

const getCountriesById = async (idPais) => {
    
    const id = idPais.toUpperCase();
    return await Country.findOne({where: {id: id}, include: Activity})
}

const searchCountry = async (name) => {
    return await Country.findAll({where: {name:{[Op.like]: `%${name}%`}}})
}

const process = async (array) => {
    await array.map(elem => {
        let country ={
            id: elem.alpha3Code,
            name: elem.name,
            flagImg: elem.flags.png,
            region: elem.region,
            capital: elem.capital ? elem.capital : null,
            subregion: elem.subregion,
            population: elem.population
        }
        Country.findOrCreate({ where: country })
    })
}

const searchCountries = async () => {
    const countriesApi = (await axios.get('https://rest-countries.up.railway.app/v2/all')).data;
    process(countriesApi);
    return await Country.findAll()
}

module.exports = {
    getCountriesById,
    searchCountry, 
    searchCountries
}