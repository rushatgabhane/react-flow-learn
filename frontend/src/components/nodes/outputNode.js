import { useState } from 'react';
import BaseNode from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      title="Output"
      name={currName}
      handleNameChange={handleNameChange}
      type={outputType}
      handleTypeChange={handleTypeChange}
      containerStyle={{ width: 200, height: 80, border: '1px solid black' }}
      inputConnections={[`${id}-value`]}
    />
  );
};
