import React, { useState } from 'react';
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { AutosizeTextarea } from '../../ui/autoSizeTextArea';
import { Label } from '../../ui/label';
import { cn } from '../../../lib/utils';

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
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      className={cn(
        'w-80',
        containerStyle,
        isHovered && 'shadow-sm shadow-gray-400'
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
                onChange={handleNameChange}
                maxHeight={150}
              />
            </div>
          ) : (
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">{nameLabel}</Label>{' '}
            </div>
          )}

          {type && (
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="type">{typeLabel}</Label>
              <Select>
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
