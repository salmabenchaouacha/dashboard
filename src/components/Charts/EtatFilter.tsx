import React, { useState } from 'react';

const EtatFilter = ({ onOptionSelected }) => {
  const [selectedOption, setSelectedOption] = useState('');

  // Cette fonction est appelée lorsque l'utilisateur sélectionne une option dans la liste déroulante
  const handleSelect = (value) => {
    setSelectedOption(value);
    onOptionSelected(value);  // Notifie le composant parent de la sélection
  };

  // Liste des options pour la liste déroulante
  const options = [
    { label: 'resolved', value: 'resolved' },
    { label: 'Pending', value: 'pending' },
    { label: 'not resolvable', value: 'not resolvable' },
  ];

  return (
    <div>
      <select value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
        <option value="">Sélectionnez l'état</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default EtatFilter;
