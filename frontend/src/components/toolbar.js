import { DraggableNode } from './draggableNode';
import SubmitButton from './submitButton';
import { Button } from './ui/button';

export const PipelineToolbar = () => {
  return (
    <div className="flex p-4 shadow justify-between">
      <div className="flex gap-4">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
      </div>
      <SubmitButton />
    </div>
  );
};
