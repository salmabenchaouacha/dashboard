import React, { useState } from 'react';

const FacturationFilter = ({ onOptionSelected }: any) => {
  const [selectedOption, setSelectedOption] = useState('');

  // This function is called when the user selects an option from the dropdown
  const handleSelect = (value:any) => {
    setSelectedOption(value);
    onOptionSelected(value);  // Notify the parent component of the selection
  };

  // List of options for the dropdown
  const options = [
    {label:'Frequence de facturation quotidienne', value:'1'},
    {label:'Frequence de facturation hebdomadaire', value:'7'},
  ];

  return (
    <div>
      <select value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
        <option >Selectionner la fréquence de facturation</option>
        {options.map((option, index) => (
          <option key={index} value={option?.value}>{option?.label}</option>
        ))}
      </select>
    </div>
  );
};

export default FacturationFilter;
