import { Button } from './ui/button';

import { useStore } from '../store';
import { shallow } from 'zustand/shallow';
import { getGraphDetails } from '../lib/api';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { useState } from 'react';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

function SubmitButton() {
  const { nodes, edges } = useStore(selector, shallow);
  const [showModal, setShowModal] = useState(false);
  const [edgeCount, setEdgeCount] = useState(0);
  const [nodeCount, setNodeCount] = useState(0);
  const [isAcyclic, setIsAcyclic] = useState(false);

  return (
    <>
      <Button
        className="ml-auto min-w-20"
        size="sm"
        onClick={() => {
          getGraphDetails(nodes, edges)
            .then((data) => {
              setEdgeCount(data.num_edges);
              setNodeCount(data.num_nodes);
              setIsAcyclic(data.is_dag);
              setShowModal(true);
            })
            .catch((error) => {
              console.error('Error getting graph details:', error);
            });
        }}
      >
        Submit
      </Button>

      <AlertDialog open={showModal} onOpenChange={setShowModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>API response</AlertDialogTitle>
            <AlertDialogDescription>
              Number of nodes: {nodeCount}
            </AlertDialogDescription>
            <AlertDialogDescription>
              Number of edges: {edgeCount}
            </AlertDialogDescription>
            <AlertDialogDescription>
              Is the directed graph acyclic: {isAcyclic ? 'Yes' : 'No'}
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogAction>Close</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default SubmitButton;
