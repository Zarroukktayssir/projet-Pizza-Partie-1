// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Pizza App. Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;

