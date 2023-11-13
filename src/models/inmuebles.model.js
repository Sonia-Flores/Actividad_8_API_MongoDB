const { Schema, model } = require('mongoose');

const inmuebleSchema = new Schema({
    piso: String,
    letra: String,
    extension: Number,
    num_Habitaciones: Number,
    alquilado: String,
    nombre_propietario: String,
    mail_contacto: String
    
}, {
    versionKey: false,
    timestamps: true,
});


module.exports = model('product', inmuebleSchema);