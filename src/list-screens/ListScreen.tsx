
// import {
//   handleClearClick,
//   handleNewTaskKeyPress,
//   handleNewTaskLabelChange,
//   handleTaskCompleteChange,
//   handleTaskDeleteClick
// } from './useListScreen';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import Checkbox from '../components/Checkbox';
import Spacer from '../components/Spacer';
import useTaskStore from '../hooks/use-task-store';
import DeleteIcon from '../icons/DeleteIcon';

import TextButton from '../components/TextButton';
import { Container } from '../list-screens/styled';
import { List } from '../list-screens/styled';
import { ListItem } from '../list-screens/styled';
import { Input } from '../list-screens/styled';
import { DeleteButton } from '../list-screens/styled';

import { Task } from '../types';



type Props = {};

const ListScreen: React.FC<Props> = () => {
  const { addTask, tasks, setTasks, updateTaskCompletion } = useTaskStore();

  const [newTaskLabel, setNewTaskLabel] = useState('');

  const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);

  const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTaskLabel !== '') {
      addTask({ label: newTaskLabel });
      setNewTaskLabel('');
    }
  };

  const handleTaskCompleteChange =
    (task: Task) => (e: ChangeEvent<HTMLInputElement>) => {
      updateTaskCompletion(task.id, e.target.checked);
    };

  const handleTaskDeleteClick = (handledTask: Task) => () => {
    setTasks((tasks) => tasks.filter((task) => task.id !== handledTask.id));
  };

  const handleClearClick = () =>
    setTasks((tasks) => tasks.filter((task) => !task.isComplete));


  return (
    <Container>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <Checkbox
              checked={task.isComplete}
              onChange={handleTaskCompleteChange(task)}
            />
            <Spacer width={24} />
            {task.label}
            <Spacer flex={1} />
            <DeleteButton onClick={handleTaskDeleteClick(task)}>
              <DeleteIcon />
            </DeleteButton>
          </ListItem>
        ))}
      </List>
      <Spacer height={30} />
      <Input
        placeholder="Add a task"
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeyPress}
      />
      <Spacer height={45} />
      <TextButton onClick={handleClearClick} style={{ alignSelf: 'center' }}>
        clear completed
      </TextButton>
    </Container>
  );
};

export default ListScreen;
