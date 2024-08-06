import { cn } from '../lib/utils';
import { Button } from './ui/button';

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
    <Button variant="outline" size="sm">
      <div
        className={cn(
          type,
          'cursor-grab min-w-20 h-8 text-xs items-center flex rounded justify-center flex-col'
        )}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
        {label}
      </div>
    </Button>
  );
};
