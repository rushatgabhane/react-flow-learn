import React from 'react';
import InputConnections from './InputConnections';
import OutputConnections from './OutputConnections';

const BaseNode = ({
  title,
  name = '',
  handleNameChange = () => {},
  nameLabel = 'Name',
  isNameEditable = true,
  type = '',
  handleTypeChange = () => {},
  typeLabel = 'Type',
  containerStyle,
  inputConnections = [],
  outputConnections = [],
}) => {
  return (
    <div style={containerStyle}>
      <InputConnections connections={inputConnections} />
      <div>{title}</div>
      {isNameEditable ? (
        <label>
          {nameLabel}
          {': '}
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      ) : (
        <div>{name}</div>
      )}

      {type && (
        <label>
          {typeLabel}
          {': '}
          <select value={type} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      )}
      <OutputConnections connections={outputConnections} />
    </div>
  );
};

export default BaseNode;
