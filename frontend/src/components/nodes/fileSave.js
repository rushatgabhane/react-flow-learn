import { useState } from 'react';
import BaseNode from './BaseNode';

export const FileSaveNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.outputName || id.replace('fileSave-', 'fileSave_')
  );

  return (
    <BaseNode
      title="File save"
      id={id}
      name={name}
      nameLabel=''
      handleNameChange={(e) => setName(e.target.value)}
      type='File'
      defaultInputConnections={[`${id}-file-input`]}
      shouldAllowTypeChange={false}
      outputConnections={[`${id}-file-output`]}
    />
  );
};
