import { useEffect, useState } from 'react';
import BaseNode from './BaseNode';
import { useUpdateNodeInternals } from 'reactflow';

export const TextNode = ({ id, data }) => {
  console.log('[id]: ', id);
  const [name, setName] = useState(data?.text || '{{input}}');
  const [inputConnections, setInputConnections] = useState();
  const updateNodeInternals = useUpdateNodeInternals();
  const variableRegex = /{{[^{}]*}}/g;

  const addInputConnections = (value) => {
    if (!new RegExp(variableRegex).test(value)) {
      return;
    }

    const matches = value.match(variableRegex);
    const connections = matches.map((connection, i) => {
      updateNodeInternals(id);
      return `${connection.slice(2, -2).replace(' ', '-')}-input`;
    });
    setInputConnections(connections);
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    addInputConnections(value);
    setName(value);
  };

  useEffect(() => {
    addInputConnections(name);
  }, []);

  return (
    <BaseNode
      title="Text"
      name={name}
      nameLabel="Text"
      handleNameChange={handleTextChange}
      outputConnections={[`${id}-output`]}
      inputConnections={inputConnections}
    />
  );
};
