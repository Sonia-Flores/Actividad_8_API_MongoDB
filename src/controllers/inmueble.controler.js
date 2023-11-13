const InmuebleModel = require('../models/inmuebles.model');

const getInmuebles = async (req, res) => {
    try{
        const inmuebles = await InmuebleModel.find();
        res.json(inmuebles);
    } catch(error){
        res.json({
            error: error.message,
            info: 'No ha sido posible listar los inmuebles' });
    }
}

const createInmueble = async (req, res) => {
    try{
        const result = await InmuebleModel.create(req.body);
        res.json(result);
    }catch(error){
        res.json({
            error: error.message,
            info: 'No ha sido posible crear el inmueble' });
    }
}

const updateInmueble = async (req, res) => {
    const { inmuebleId } = req.params;
    
    try{
        const result = await InmuebleModel.findByIdAndUpdate(inmuebleId, req.body, {new:true});
        res.json(result);

    }catch(error){
        res.json({
            error: error.message,
            info: 'No ha sido posible editar el inmueble' });
    }
}

const deleteInmueble = async (req, res) => {
    const { inmuebleId } = req.params;
    
    try{
        const result = await InmuebleModel.findByIdAndDelete(inmuebleId);
        res.json(result);

    }catch(error){
        res.json({
            error: error.message,
            info: 'No ha sido posible borrar el inmueble' });
    }
}

module.exports = {
    getInmuebles,
    updateInmueble,
    createInmueble,
    deleteInmueble
}