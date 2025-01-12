import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage'; // Importer LoginPage

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} /> {/* Ajout de la route pour la page de connexion */}
            </Routes>
        </Router>
    );
}

export default App;
