import React, { useEffect, useState } from 'react';
import InputConnections from './InputConnections';
import OutputConnections from './OutputConnections';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { AutosizeTextarea } from '../../ui/autoSizeTextArea';
import { Label } from '../../ui/label';
import { cn } from '../../../lib/utils';
import { useUpdateNodeInternals } from 'reactflow';

const BaseNode = ({
  title,
  id,
  name = '',
  handleNameChange = () => {},
  nameLabel = 'Name',
  isNameEditable = true,
  type = '',
  handleTypeChange = () => {},
  typeLabel = 'Type',
  containerStyle,
  defaultInputConnections = [],
  outputConnections = [],
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [inputConnections, setInputConnections] = useState(
    defaultInputConnections
  );
  const updateNodeInternals = useUpdateNodeInternals();
  const variableRegex = /{{[^{}]*}}/g;

  const addInputConnections = (value) => {
    if (!new RegExp(variableRegex).test(value)) {
      setInputConnections([]);
      return;
    }

    const matches = value.match(variableRegex);
    const connections = matches.map((connection, i) => {
      updateNodeInternals(id);
      return `${connection.slice(2, -2).replace(/ /g, '-')}-input`;
    });
    setInputConnections(connections);
  };

  useEffect(() => {
    addInputConnections(name);
  }, []);

  const updateInputConnectionsAndName = (e) => {
    addInputConnections(e.target.value);
    handleNameChange(e);
  };

  return (
    <Card
      className={cn(
        'w-80 border-primary',
        containerStyle,
        isHovered && 'shadow shadow-primary'
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <InputConnections connections={inputConnections} />
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          {isNameEditable ? (
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">{nameLabel}</Label>
              <AutosizeTextarea
                value={name}
                onChange={updateInputConnectionsAndName}
                maxHeight={200}
              />
            </div>
          ) : (
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">{name}</Label>{' '}
            </div>
          )}

          {type && (
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="type">{typeLabel}</Label>
              <Select onValueChange={handleTypeChange}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Text">Text</SelectItem>
                  <SelectItem value="File">File</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </CardContent>
      <OutputConnections connections={outputConnections} />
    </Card>
  );
};

export default BaseNode;
