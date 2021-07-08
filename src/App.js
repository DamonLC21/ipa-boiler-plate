import { Component } from 'react';

import './App.css';
const baseURL = "http://localhost:3000/beers"

class App extends Component {
  
  state = {
    favorites: [],
    ipas: [],
  }
  
  componentDidMount(){
    fetch(baseURL)
      .then(response => response.json())
      .then(ipas => this.setState({ ipas: ipas })) 
  }

  createBeerList = () => {
    return this.state.ipas.map(ipa => {
      return <li>
        <p>{ipa.name}</p>
        <img src={ipa.image_url} />
      </li>
    })
  }
  
  render(){
    return (
      <div className="App">
        <h1>IPA APP</h1>
        <h2>Who needs API's when you have IPA's</h2>
        <ul>
          Favorite IPAs
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul className="ipa-list">
            {this.createBeerList()}
        </ul>
      </div>
    );
  }
}

export default App;
