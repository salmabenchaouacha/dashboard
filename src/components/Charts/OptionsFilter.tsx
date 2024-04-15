import React, { useState } from 'react';

const OptionsFiltter = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (value) => {
    setSelectedOption(value);
    // Vous pouvez effectuer des actions en fonction de l'option sélectionnée, comme filtrer les données
    console.log("Option sélectionnée :", value);
  };

  const options = [ 'quotidienne', 'hepdomadaire','totale'];

  return (
    <div>
     
      <div>
      
        <select value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        
      </div>
      {/* Vous pouvez rendre d'autres composants ou afficher des données filtrées en fonction de l'option sélectionnée */}
    </div>
  );
};

export default OptionsFiltter;
