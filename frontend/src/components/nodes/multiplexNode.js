import { useState } from 'react';
import BaseNode from './BaseNode';

export const MultiplexNode = ({ id, data }) => {
  const [name, setName] = useState(data?.name || '');

  return (
    <BaseNode
      title="Multiplexer"
      id={id}
      outputConnections={[`${id}-mux-output`]}
      defaultInputConnections={[
        `${id}-mux-input-1`,
        `${id}-mux-input-2`,
        `${id}-mux-input-3`,
        `${id}-mux-input-4`,
      ]}
      nameLabel="Logic"
      name={name}
      handleNameChange={(e) => setName(e.target.value)}
    />
  );
};
