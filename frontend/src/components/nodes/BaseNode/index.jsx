import React from 'react';
import InputConnections from './inputConnections';
import OutputConnections from './outputConnections';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';

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
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={typeLabel} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Text">Text</SelectItem>
                <SelectItem value="File">File</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </label>
      )}
      <OutputConnections connections={outputConnections} />
    </div>
  );
};

export default BaseNode;
