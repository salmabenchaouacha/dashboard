// ServiceOption.js
import React, { useState } from 'react';

const ServiceOption = ({ handleServiceIdChange }) => {
  const [serviceId, setServiceId] = useState('');

  const handleSelect = (value) => {
    setServiceId(value); // Mettre à jour serviceId dans le composant ServiceOption
    handleServiceIdChange(value); // Appeler la fonction de mise à jour de serviceId du composant parent
    console.log("Option sélectionnée :", value);
  };
  
  const options = [
    { value: '', label: 'Choisir le service' },
    { value: '1', label: 'Esports' },
    { value: '6', label: 'RafikniPlus' },
    { value: '7', label: 'Tawer' },
    { value: '8', label: 'Almouhakik' }
  ];

  return (
    <div>
      <div>
        <select
          value={serviceId}
          onChange={(e) => handleSelect(e.target.value)}
          style={{ backgroundColor: 'black', color: 'lightgray' }}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
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
