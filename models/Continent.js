const mongoose = require('mongoose');

const ContinentSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, 'Veuillez saisir le code'],
        unique: true,
        maxlength: [7, 'Le code ne peut pas avoir plus de 7 caractères']
    },
    name: {
        type: String,
        required: true,
        maxlength: [20, 'Le nom ne peut pas avoir plus de 20 caractères']
    }
})

module.exports = mongoose.models.Continent || mongoose.model('Continent', ContinentSchema);