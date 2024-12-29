const express = require('express');
const router = express.Router();

// Simuler une base de données pour les pizzas
let pizzas = [];

// Route pour ajouter une nouvelle pizza
router.post('/', (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ message: 'Name and price are required' });
    }

    const newPizza = { name, price, id: pizzas.length + 1 }; // Générer un ID simple
    pizzas.push(newPizza); // Ajouter à la "base de données"
    res.status(201).json(newPizza); // Retourner la nouvelle pizza
});

// Route pour obtenir toutes les pizzas (optionnelle)
router.get('/', (req, res) => {
    res.json(pizzas);
});

// Exporter le routeur
module.exports = router;

