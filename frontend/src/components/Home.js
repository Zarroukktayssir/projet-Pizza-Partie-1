// src/components/Home.js
import React from 'react';
import './Home.css';

 // Cela nécessite une configuration correcte dans Webpack
 // Assurez-vous que ce chemin est correct




const Home = () => {
    return (
        <div className="home">
            <header className="header">
                <nav>
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/login">Se connecter</a></li>
                        <li><a href="/order">Commander</a></li>
                    </ul>
                </nav>
            </header>

            <div className="hero">
                <h1>Bienvenue sur Pizza Time</h1>
                <p>Découvrez nos délicieuses pizzas !</p>
                <button className="order-button">Commander maintenant</button>
            </div>

            <footer>
                <p>© 2024 Pizza Time. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default Home;