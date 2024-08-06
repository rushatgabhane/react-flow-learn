import BaseNode from './BaseNode';

export const AnotherLLMNode = ({ id, data }) => {
  return (
    <BaseNode
      title="Another LLM"
      name="This is another LLM"
      id={id}
      isNameEditable={false}
      defaultInputConnections={[`{id}-system`, `${id}-prompt`]}
      outputConnections={[`${id}-response`]}
    />
  );
};
