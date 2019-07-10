import React, { Component } from 'react'
import axios from 'axios'
import './Result.css'

class Result extends Component {

  state = {
    scrap: []
  }

  // je crée une fonction avec un axios afin de pouvoir récuper le resultat de ma requète, de mon back-end, sur la route http://localhost:3000/scrap
  // j'agrémente ma state avec le résultat de cette fonction
  getScrap = async () => {
    const result = await axios.get('http://localhost:3000/scrap')
    this.setState({ scrap: result.data });
  }

// je lance la fonction getScrap avec componentDidMount pour que celle-ci s'execute après le rendu de ma page.
  componentDidMount() {
    this.getScrap()
  }

  render() {
    return (
      <div>
        <form className="container">
          <label>
            résultat du scraping:
          </label>
          {/* je donne comme valeur par defaut au textarea le contenu de ma state scrap */}
          <textarea readOnly value={this.state.scrap} className="scrap"/>
        </form>
      </div>
    )
  }
}

export default Result