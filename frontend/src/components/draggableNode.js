import { cn } from '../lib/utils';
export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={cn(
        type,
        'cursor-grab min-w-20 h-8 text-xs items-center flex rounded justify-center flex-col bg-primary'
      )}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      <span className='text-input'>{label}</span>
    </div>
  );
};
