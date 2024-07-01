import React from 'react';

const OptionList = ({ categories, handleChange, value, dataToEdit }) => {
  return (
    <div>
      <select name='category' value={value} onChange={handleChange}>
        <option value='' defaultValue hidden>
          Seleccionar Categoria
        </option>
        {categories.map((category, index) => (
          <option
            value={category.title}
            key={index}
            style={{ backgroundColor: 'var(--dark-grey)' }}
          >
            {category.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionList;
