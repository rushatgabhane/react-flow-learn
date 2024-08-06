import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="flex gap-4 p-4 shadow">
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="text" label="Text" />
    </div>
  );
};
