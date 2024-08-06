import BaseNode from './BaseNode';

export const MultiplexNode = ({ id, data }) => {
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
      isNameEditable={false}
    />
  );
};
