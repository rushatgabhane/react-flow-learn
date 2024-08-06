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
      containerStyle={{ width: 200, height: 80, border: '1px solid black' }}
      outputConnections={[`${id}-output`]}
    />
  );
};
