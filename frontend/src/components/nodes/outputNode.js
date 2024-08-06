import { useState } from 'react';
import BaseNode from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  return (
    <BaseNode
      title="Output"
      id={id}
      name={name}
      handleNameChange={(e) => setName(e.target.value)}
      type={outputType}
      handleTypeChange={(e) => setOutputType(e)}
      defaultInputConnections={[`${id}-value`]}
    />
  );
};
