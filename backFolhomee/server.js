// ### NodeJS

// Etant développeur au sein de la société, on te demande de créer un projet NodeJS "from scratch". 
// Tu dois créer un serveur web possédant une page `GET /scrap` qui, coté back, fait une requête 
// pour récupérer le code HTML de la page `https://www.folhomee.fr/` et l'affiche coté front dans un `textarea`. 
// Décris les différentes étapes de création de ton projet et écris le code nécessaire pour réaliser la tâche. 
// Tu peux utiliser les librairies de ton choix et fournir le code sur un github (ou autre). 
// Si tu as des questions, tu peux les poser au chef de projet, mais malheureusement il n'est pas très technique : `julien@folhomee.fr`

const express = require('express')
const cheerio = require('cheerio');
const request = require('request');
const cors = require('cors')
const app = express()

app.use(cors())

app.get(`/scrap`, (req, res) => {
    request('https://www.folhomee.fr/', (error, response, html) => {
        if(!error && response.statusCode == 200) {
           const $ = cheerio.load(html)
           console.log($.html())
           res.json( JSON.stringify( $.html()))
        }
        else 
        console.log('ta race');
        
      })
})

app.listen(4343, (err) => {
    if(err) throw err
   
    console.log("yolooooooo")
} )