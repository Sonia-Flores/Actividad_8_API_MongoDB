const InmuebleModel = require('../models/inmuebles.model');

const getInmuebles = async (req, res) => {
    try{
        const inmuebles = await InmuebleModel.find();
        console.log(inmuebles);
        res.json(inmuebles);
    } catch(error){
        res.json({ error: error.message });
    }
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