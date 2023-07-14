import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from '../components/TaskList';
import FilterOptions from '../components/FilterOptions';
import { addTask } from '../store/actions';
import { RootState, Theme } from '../store/types';
import { toggleTheme } from '../store/actions';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/themes/lightTheme';
import { darkTheme } from '@/themes/darkTheme';

const AppContainer = styled.div<{ theme: Theme }>`
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: Arial, sans-serif;
`;

const Heading = styled.h1`
  margin-bottom: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  transition: border-color 0.3s;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondary}33;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const ToggleButton = styled.button`
  padding: 8px;
  font-size: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  &:focus {
    outline: none;
  }
  color: ${({ theme }) => theme.text}; 
`;

const ToggleIcon = styled.span`
  margin-right: 4px;
`;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');
  const theme = useSelector((state: RootState) => state.theme);

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText.trim()));
      setTaskText('');
    }
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <AppContainer key={theme}>
        <Heading>Список задач</Heading>
        <InputContainer>
          <Input
            type="text"
            placeholder="Введите задачу"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <Button onClick={handleAddTask}>Добавить</Button>
        </InputContainer>
        <TaskList />
        <FilterOptions />
        <ToggleButton onClick={handleToggleTheme}>
          <ToggleIcon>{theme === 'light' ? '🌞' : '🌚'}</ToggleIcon>
          Сменить тему
        </ToggleButton>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
