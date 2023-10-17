/**
 * Serveur BackEnd Pokedex
 */

const fs = require('fs');
console.log ("Sadey");

//Définir l'emplacement des fichiers bases de données

const POKEDEX = './DATA/pokedex.json';
const MOVES = './DATA/moves.json';
const ITEMS = './DATA/items.json';
const TYPES = './DATA/types.json';

//Définir l'emplacement des images 
const IMAGES = './FILES/images'

//Définir un port 
const PORT = 5001;


const { response } = require('express');
//*************************


// Lancer un serveur sur un port 
const express = require('express'); //Oblige qu'il y est la dépendance 'express' d'installé
const app = express();

//Lancement du serveur et attente d'une requête du client
app.listen(
    PORT,           //Port
    '127.0.0.1',    //Adresse
    () => {         //Fonction de callback (n'a pas de nom)
        console.log('Serveur Pokedex is listening on ' + PORT);
    }
);

// Créer la route qui renvoit tout 
app.get(
    '/',
    findRandPokemon
)

// Fonction de lecture de tous les Pokemons
function findAllPokemon(request, response) {

    // 1. Lecture du fichier
    let data = fs.readFileSync(POKEDEX);

    // 2. Analyse du JSON
    let pokedex = JSON.parse(data);

    // 3. Retour de tout le JSON
    response.send(pokedex);
}

function findRandPokemon(request, response) {

    let data = fs.readFileSync(POKEDEX);

    let pokedex = JSON.parse(data);

    let random = Math.floor(Math.random() * pokedex.length) + 1;
    
    response.send(pokedex[random]);
}