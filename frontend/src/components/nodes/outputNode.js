import { useState } from 'react';
import BaseNode from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      title="Output"
      id={id}
      name={name}
      handleNameChange={handleNameChange}
      type={outputType}
      handleTypeChange={handleTypeChange}
      defaultInputConnections={[`${id}-value`]}
    />
  );
};
