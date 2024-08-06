// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      title="Input"
      name={currName}
      handleNameChange={handleNameChange}
      type={inputType}
      handleTypeChange={handleTypeChange}
      containerStyle={{ width: 200, height: 80, border: '1px solid black' }}
      outputConnections={
        <Handle type="source" position={Position.Right} id={`${id}-value`} />
      }
    />
  );
};
