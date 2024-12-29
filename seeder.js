const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Pizza = require('./Models/Pizza'); // Modèle Pizza
const User = require('./Models/User'); // Modèle Utilisateur
const pizzas = require('./data/pizzas'); // Données initiales des pizzas
const users = require('./data/users'); // Données initiales des utilisateurs

// Charger les variables d'environnement
dotenv.config();

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch((err) => {
      console.error(`Error: ${err.message}`);
      process.exit(1);
  });

// Fonction pour importer les données
const importData = async () => {
    try {
        // Supprimer les données existantes dans la base
        await Pizza.deleteMany();
        await User.deleteMany();

        // Insérer les données initiales
        await Pizza.insertMany(pizzas);
        await User.insertMany(users);

        console.log('Données importées avec succès !');
        process.exit(); // Quitter le script
    } catch (error) {
        console.error(`Erreur lors de l'importation des données : ${error.message}`);
        process.exit(1); // Quitter avec une erreur
    }
};

// Lancer l'importation
importData();
