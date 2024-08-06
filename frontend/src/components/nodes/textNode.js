import { useState } from 'react';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [name, setName] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setName(e.target.value);
  };

  return (
    <BaseNode
      title="Text"
      name={name}
      nameLabel="Text"
      handleNameChange={handleTextChange}
      outputConnections={[`${id}-output`]}
    />
  );
};
