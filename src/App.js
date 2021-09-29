import logo from './img/logo-clean3000-transparent.png';
import { Component } from "react";

import "./App.scss";

class App extends Component {

  
    
  render() {
    return (
      <div className="general">
        <header className="header">
          <img src={logo} className="App-logo" alt="Logo Clean3000" />
        </header>

        <h1>Bienvenue</h1>


        <p>
          Si vous êtes intéréssé par nos services, veuillez remplir le formulaire ci dessous
        </p>

        {/* <h3>Date du rendez vous : {date}</h3>
        <input type="date" value={date} /> */}
      </div>
    );
  }
}

export default App;
