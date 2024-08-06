import React from 'react';

/**
 * container style
 * Name and name change handler
 * Type and type change handler
 * Input connections
 * Output connections
 */

const BaseNode = ({
  title,
  name = '',
  handleNameChange,
  nameLabel = 'Name',
  isNameEditable = true,
  type = '',
  handleTypeChange = () => {},
  typeLabel = 'Type',
  containerStyle,
  inputConnections = () => {},
  outputConnections = () => {},
}) => {
  return (
    <div style={containerStyle}>
      {inputConnections}
      <div>
        <span>{title}</span>
      </div>
      <div>
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
      </div>
      {outputConnections}
    </div>
  );
};

export default BaseNode;
