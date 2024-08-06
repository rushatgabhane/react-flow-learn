import { useState } from 'react';
import BaseNode from './BaseNode';

export const FileJoinerNode = ({ id, data }) => {
  const [name, setName] = useState(data?.name || '');

  return (
    <BaseNode
      title="File Joiner"
      id={id}
      outputConnections={[`${id}-file-output`]}
      nameLabel="Output file name"
      name={name}
      handleNameChange={(e) => setName(e.target.value)}
      type="File"
    />
  );
};
