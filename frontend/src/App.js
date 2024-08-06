import { PipelineToolbar } from './components/toolbar';
import { PipelineUI } from './ui';

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <PipelineToolbar />
      <PipelineUI />
    </div>
  );
}

export default App;
