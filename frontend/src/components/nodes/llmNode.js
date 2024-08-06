import BaseNode from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      title="LLM"
      containerStyle={{ width: 200, height: 80, border: '1px solid black' }}
      name="This is a LLM"
      isNameEditable={false}
      inputConnections={[`{id}-system`, `${id}-prompt`]}
      outputConnections={[`${id}-response`]}
    />
  );
};
