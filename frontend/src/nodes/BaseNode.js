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
  name,
  handleNameChange,
  inputType = '',
  handleTypeChange = () => {},
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
        <label>
          Name: <input type="text" value={name} onChange={handleNameChange} />
        </label>

        {inputType && (
          <label>
            Type:
            <select value={inputType} onChange={handleTypeChange}>
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
