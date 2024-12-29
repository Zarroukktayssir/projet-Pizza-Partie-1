import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: 'development',
    entry: './src/index.js', // Point d'entrée de votre application
    output: {
        filename: 'bundle.js', // Nom du fichier de sortie
        path: path.resolve(__dirname, 'dist'), // Dossier de sortie
        publicPath: '/', // Chemin public pour servir les fichiers
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Regles pour les fichiers JS
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Prise en charge de ES6 et JSX
                    },
                },
            },
            {
                test: /\.css$/, // Regles pour les fichiers CSS
                use: ['style-loader', 'css-loader'], // Chargeur pour le CSS
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Regles pour les fichiers d'images
                type: 'asset/resource', // Gère les images comme des ressources
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'), // Dossier à servir pour le développement
        },
        compress: true,
        port: 8000, // Port du serveur de développement
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Extensions à résoudre
    },
};

