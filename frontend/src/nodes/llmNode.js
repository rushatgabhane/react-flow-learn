// llmNode.js

import { Handle, Position } from 'reactflow';
import BaseNode from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      title="LLM"
      containerStyle={{ width: 200, height: 80, border: '1px solid black' }}
      outputConnections={
        <Handle type="source" position={Position.Right} id={`${id}-response`} />
      }
      name="This is a LLM"
      isNameEditable={false}
      inputConnections={
        <>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-system`}
            style={{ top: `${100 / 3}%` }}
          />
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-prompt`}
            style={{ top: `${200 / 3}%` }}
          />
        </>
      }
    />
  );
};
