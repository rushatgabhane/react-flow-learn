import { useState } from 'react';
import BaseNode from './BaseNode';

export const DemultiplexNode = ({ id, data }) => {
  const [name, setName] = useState(data?.name || '');

  return (
    <BaseNode
      title="Demultiplexer"
      id={id}
      defaultInputConnections={[`${id}-demux-input`]}
      outputConnections={[
        `${id}-demux-output-1`,
        `${id}-demux-output-2`,
        `${id}-demux-output-3`,
        `${id}-demux-output-4`,
      ]}
      nameLabel="Logic"
      name={name}
      handleNameChange={(e) => setName(e.target.value)}
    />
  );
};
