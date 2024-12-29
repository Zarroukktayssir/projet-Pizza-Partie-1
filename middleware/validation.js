const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
};

const validatePassword = (password) => {
    return password.length >= 6; // Mot de passe de 6 caractères minimum
};

module.exports = { validateEmail, validatePassword };
