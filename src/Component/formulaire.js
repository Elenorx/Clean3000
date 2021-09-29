import React from 'react';


const Formulaire = ({name, date, observation}) => {
    return (
      <div className="form">
        <h3>Votre nom/ nom d'entrepise: {name}</h3>
        <input type="text" value={name} onChange={changeName}/>
        
        <h3>Date du rendez vous : {date}</h3>
        <input type="date" value={date} />

        <h3>Observation: {observation}</h3>
        <textarea value={observation} rows="2" />


        <Link to={`/member/${id}`}> Détail du membre </Link>
      </div>
    );
  }
  
  export default Formulaire;