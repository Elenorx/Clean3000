import React from "react";
import logo from "../img/logo-clean3000-transparent.png";


export const AvisDePassage = ({name, date, observation}) => {

  return (
    <div>
      <header className="header">
        <img src={logo} className="App-logo" alt="Logo Clean3000" />
      </header>

      <h1>avis de passage</h1>

       <div className="avis">
            <p>Nom entreprise/ou client : {name} </p>
            <p>Notre technicien est intervenu pour l'entretien de la vitrerie le {date}</p>
            <p>Observation: {observation} </p>
            <p>Merci de votre confiance</p>
            Signature du technicien:       Signature du client/Cachet de l'entreprise:
      </div>
    </div>
  );
};
