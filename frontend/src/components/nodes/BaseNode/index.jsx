import React from 'react';
import InputConnections from './InputConnections';
import OutputConnections from './OutputConnections';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import { AutosizeTextarea } from '../../ui/autoSizeTextArea';
import { Label } from '../../ui/label';

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
        <div className="grid w-full gap-1.5">
          <Label htmlFor="name">{nameLabel}</Label>
          <AutosizeTextarea
            value={name}
            onChange={handleNameChange}
            maxHeight={150}
          />
        </div>
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
