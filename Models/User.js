const mongoose = require('mongoose');

// Schéma de l'utilisateur
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Ajoute les timestamps pour createdAt et updatedAt
});

// Modèle de l'utilisateur
const User = mongoose.model('User', userSchema);

module.exports = User;


