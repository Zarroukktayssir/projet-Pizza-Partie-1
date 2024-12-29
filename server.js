const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./Config/db'); // Assurez-vous que le chemin est correct
const pizzaRoutes = require('./routes/pizzaRoutes'); // Vérifiez le chemin ici

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Permet à Express de traiter les requêtes JSON

// Routes
app.use('/api/pizza', pizzaRoutes); // Utilisez les routes pour /api/pizza

// Route par défaut
app.get('/', (req, res) => {
    res.send('Welcome to the Pizza API');
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


