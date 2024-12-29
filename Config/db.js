
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://zarrouktayssir60:1234@cluster0.wtg2d.mongodb.net/projet_pitza?retryWrites=true&w=majority&appName=Cluster0";
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');



// Charger les variables d'environnement
dotenv.config();

// Fonction de connexion à la base de données
const connectDB = async () => {
    try {
        // Suppression des options obsolètes
        await mongoose.connect(process.env.MONGO_URI); // Pas besoin d'options obsolètes
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Quitte le processus en cas d'erreur
    }
};

module.exports = connectDB; // Exporter la fonction
