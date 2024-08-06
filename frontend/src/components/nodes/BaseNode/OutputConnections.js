import { Handle, Position } from 'reactflow';

function OutputConnections({ connections = [] }) {
  const verticalSpacingPercentage = 100 / (connections.length + 1);

  return connections.map((id, index) => (
    <Handle
      type="source"
      position={Position.Right}
      id={id}
      key={id}
      style={{
        top: `${verticalSpacingPercentage * (index + 1)}%`,
        height: '10px',
        width: '10px',
      }}
    />
  ));
}

export default OutputConnections;
