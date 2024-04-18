import React, { useState } from 'react';

const ServiceOption = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (value) => {
    setSelectedOption(value);
    console.log("Option sélectionnée :", value);
  };

  const options = ['Tawer', 'Mou7a9i9', 'Esports', 'Rafi9ni'];

  return (
    <div>
      <div>
        <select
          value={selectedOption}
          onChange={(e) => handleSelect(e.target.value)}
          style={{ backgroundColor: 'black'  , color:'lightgray'}} // Définir le style en ligne pour changer le fond et la couleur du texte
        >
          <option value="">Choisir le service</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        {/* Vous pouvez rendre d'autres composants ou afficher des données filtrées en fonction de l'option sélectionnée */}
      </div>
    </div>
  );
};

export default ServiceOption;
