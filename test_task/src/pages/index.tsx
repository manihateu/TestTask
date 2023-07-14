import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TaskList from '../components/TaskList';
import FilterOptions from '../components/FilterOptions';
import { addTask } from '../store/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText.trim()));
      setTaskText('');
    }
  };

  return (
    <div>
      <h1>Список задач</h1>
      <input
        type="text"
        placeholder="Введите задачу"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Добавить</button>
      <TaskList />
      <FilterOptions />
    </div>
  );
};

export default App;
