import { Handle, Position } from 'reactflow';

function OutputConnections({ connections = [] }) {
  const verticalSpacingPercentage = 100 / (connections.length + 1);

  return connections.map((id, index) => (
    <Handle
      type="source"
      position={Position.Right}
      id={id}
      style={{ top: `${verticalSpacingPercentage * (index + 1)}%` }}
    />
  ));
}

export default OutputConnections;
