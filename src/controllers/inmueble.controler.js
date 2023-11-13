const InmuebleModel = require('../models/inmuebles.model');

const getInmuebles = (req, res) => {
    res.send('GET')
}

const createInmueble = (req, res) => {
    res.send('CREATE')
}

const updateInmueble = (req, res) => {
    res.send('UPDATE')
}

const deleteInmueble = (req, res) => {
    res.send('DELETE')
}

module.exports = {
    getInmuebles,
    updateInmueble,
    createInmueble,
    deleteInmueble
}