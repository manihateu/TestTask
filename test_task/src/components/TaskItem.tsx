import React from 'react';
import { Task } from '../store/types';

interface TaskItemProps {
  task: Task;
  onRemoveTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onRemoveTask, onToggleTask }) => {
  const handleRemoveClick = () => {
    onRemoveTask(task.id);
  };

  const handleToggleClick = () => {
    onToggleTask(task.id);
  };

  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={handleRemoveClick}>Удалить</button>
      <button onClick={handleToggleClick}>
        {task.completed ? 'Отметить как невыполненную' : 'Отметить как выполненную'}
      </button>
    </li>
  );
};

export default TaskItem;
