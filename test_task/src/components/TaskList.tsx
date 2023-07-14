import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './TaskItem';
import { RootState, Task, FilterState } from '../store/types';
import { removeTask, toggleTask } from '../store/actions';

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);
  const filter = useSelector((state: RootState) => state.filter);

  const handleRemoveTask = (taskId: number) => {
    dispatch(removeTask(taskId));
  };

  const handleToggleTask = (taskId: number) => {
    dispatch(toggleTask(taskId));
  };

  const filteredTasks = tasks.filter((task: Task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'uncompleted') {
      return !task.completed;
    }
    return true;
  });

  return (
    <ul>
      {filteredTasks.map((task: Task) => (
        <TaskItem
          key={task.id}
          task={task}
          onRemoveTask={handleRemoveTask}
          onToggleTask={handleToggleTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
