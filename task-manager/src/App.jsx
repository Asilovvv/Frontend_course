
import TaskList from './TaskList';
import AddTask from './AddTask';
import { TaskProvider } from './TaskContext';

function App() {
  return (
    <TaskProvider>
      <div>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;