const bcrypt = require('bcrypt');

const users = [
    {
        username: 'admin',
        password: bcrypt.hashSync('admin123', 10), // Hachage du mot de passe pour sécurité
        role: 'admin', // Rôle administrateur
        address: 'Adresse Admin, Ville, Pays',
    },
    {
        username: 'user1',
        password: bcrypt.hashSync('user123', 10),
        role: 'user',
        address: 'Adresse User1, Ville, Pays',
    },
];

module.exports = users;
