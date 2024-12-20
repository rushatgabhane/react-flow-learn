import { DraggableNode } from './draggableNode';
import SubmitButton from './submitButton';

export const PipelineToolbar = () => {
  return (
    <div className="flex p-4 shadow justify-between">
      <div className="flex gap-4">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="fileSave" label="File Save" />
        <DraggableNode type="multiplex" label="Multiplexer" />
        <DraggableNode type="demultiplex" label="Demultiplexer" />
        <DraggableNode type="fileJoiner" label="File Joiner" />
        <DraggableNode type="anotherLLM" label="Another LLM" />
      </div>
      <SubmitButton />
    </div>
  );
};
