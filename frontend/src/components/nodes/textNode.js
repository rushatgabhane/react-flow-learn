import { useState } from 'react';
import BaseNode from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [name, setName] = useState(data?.text);
  return (
    <BaseNode
      title="Text"
      id={id}
      name={name}
      nameLabel="Text"
      handleNameChange={(e) => setName(e.target.value)}
      outputConnections={[`${id}-output`]}
    />
  );
};
