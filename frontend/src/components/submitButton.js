import { Button } from './ui/button';

import { useStore } from '../store';
import { shallow } from 'zustand/shallow';
import { getGraphDetails } from '../lib/api';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

function SubmitButton() {
  const { nodes, edges } = useStore(selector, shallow);
  return (
    <Button
      className="ml-auto min-w-20"
      size="sm"
      onClick={() => {
        getGraphDetails(nodes, edges).then((data) => {
          console.log(data);
        });
      }}
    >
      Submit
    </Button>
  );
}

export default SubmitButton;
