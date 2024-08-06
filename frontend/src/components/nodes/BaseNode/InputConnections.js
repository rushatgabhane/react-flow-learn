import { Handle, Position } from 'reactflow';

function InputConnections({ connections = [] }) {
  const verticalSpacingPercentage = 100 / (connections.length + 1);

  return connections.map((id, index) => (
    <Handle
      type="target"
      position={Position.Left}
      id={id}
      style={{
        top: `${verticalSpacingPercentage * (index + 1)}%`,
        height: '10px',
        width: '10px',
      }}
    />
  ));
}

export default InputConnections;
