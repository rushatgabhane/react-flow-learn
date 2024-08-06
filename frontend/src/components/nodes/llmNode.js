import BaseNode from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      title="LLM"
      name="This is a LLM"
      isNameEditable={false}
      inputConnections={[`{id}-system`, `${id}-prompt`]}
      outputConnections={[`${id}-response`]}
    />
  );
};
