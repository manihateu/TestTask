import React from 'react';
import { Task } from '../store/types';
import styled from 'styled-components';

interface TaskItemProps {
  task: Task;
  onRemoveTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
}

const TaskItemContainer = styled.li`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;

  background-color: #f6f6f6;
  padding: 1rem;
  border-radius: .5rem;
`;

const TaskText = styled.span<{ completed: boolean }>`
  flex: 1;
  ${({ completed }) => completed && 'text-decoration: line-through;'}
  color: black; 
`;

const RemoveButton = styled.button`
  margin-left: 8px;
  padding: 8px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

const ToggleButton = styled.button<{ completed: boolean }>`
  margin-left: 8px;
  padding: 8px;
  background-color: ${({ completed }) => (completed ? '#00ff00' : '#ffcc00')};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ completed }) => (completed ? '#00cc00' : '#ff9900')};
  }
`;

const TaskItem: React.FC<TaskItemProps> = ({ task, onRemoveTask, onToggleTask }) => {
  const handleRemoveClick = () => {
    onRemoveTask(task.id);
  };

  const handleToggleClick = () => {
    onToggleTask(task.id);
  };

  return (
    <TaskItemContainer>
      <TaskText completed={task.completed}>{task.text}</TaskText>
      <RemoveButton onClick={handleRemoveClick}>Удалить</RemoveButton>
      <ToggleButton completed={task.completed} onClick={handleToggleClick}>
        {task.completed ? 'Отметить как невыполненную' : 'Отметить как выполненную'}
      </ToggleButton>
    </TaskItemContainer>
  );
};

export default TaskItem;
