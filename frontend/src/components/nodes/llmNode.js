import BaseNode from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      title="LLM"
      name="This is a LLM"
      id={id}
      isNameEditable={false}
      defaultInputConnections={[`{id}-system`, `${id}-prompt`]}
      outputConnections={[`${id}-response`]}
    />
  );
};
