// ### NodeJS

// Etant développeur au sein de la société, on te demande de créer un projet NodeJS "from scratch". 
// Tu dois créer un serveur web possédant une page `GET /scrap` qui, coté back, fait une requête 
// pour récupérer le code HTML de la page `https://www.folhomee.fr/` et l'affiche coté front dans un `textarea`. 
// Décris les différentes étapes de création de ton projet et écris le code nécessaire pour réaliser la tâche. 
// Tu peux utiliser les librairies de ton choix et fournir le code sur un github (ou autre). 
// Si tu as des questions, tu peux les poser au chef de projet, mais malheureusement il n'est pas très technique : `julien@folhomee.fr`

const cheerio = require('cheerio');
const cors = require('cors')
const express = require('express');
const request = require('request');
const port = 3001;
const app = express();


// j'initialise cors afin qu'il accepte mes requêtes
app.use(cors())


// écoute de l'url "/scrap"
app.get(`/scrap`, (req, res) => {
// on crée une requête si il n'y a pas d'erreurs et la réponse du serveur est 200
// alors on enregistre le contenu html dans une variable grasse à cheerio
// et on retourn celle-ci dans un format JSON html
  request('https://www.folhomee.fr/', (error, response, html) => {
    if(!error && response.statusCode == 200) {
       const $ = cheerio.load(html)
       res.json($.html())
       console.log($)
    }
  })
});
    
app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened ...');
  }
  console.log(`Server is listening on ${port}`);
})




