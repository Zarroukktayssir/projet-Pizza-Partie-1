const express = require('express');
const router = express.Router();
const User = require('../Models/User'); // Assurez-vous que le chemin est correct

// Route pour créer un nouvel utilisateur
router.post('/', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        // Créez un nouvel utilisateur
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Route pour récupérer tous les utilisateurs (facultatif)
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;






