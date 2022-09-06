import React from 'react';
import { Container } from './styled';
import { Task } from './styled';
import useTaskStore from '../hooks/use-task-store';
import Spacer from '../components/Spacer';
import Button from '../components/Button';
import TextButton from '../components/TextButton';


type Props = {};

const FocusScreen: React.FC<Props> = () => {
  const {
    focusedTask: task,
    shuffleFocusedTask,
    updateTaskCompletion,
  } = useTaskStore();

  const handleMarkCompleted = () => {
    if (task) updateTaskCompletion(task.id, true);
  };

  return task ? (
    <Container>
      <Task>{task.label}</Task>
      <Button onClick={handleMarkCompleted}>Mark completed</Button>
      <Spacer height={45} />
      <TextButton onClick={shuffleFocusedTask}>nope</TextButton>
    </Container>
  ) : (
    <div>No incomplete tasks. Yay!</div>
  );
};

export default FocusScreen;
