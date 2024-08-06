import { useState } from 'react';
import BaseNode from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <BaseNode
      title="Input"
      name={name}
      id={id}
      handleNameChange={(e) => setName(e.target.value)}
      type={inputType}
      handleTypeChange={(e) => setInputType(e)}
      outputConnections={[`${id}-value`]}
    />
  );
};
