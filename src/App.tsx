import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import useLocalStorage from './hooks/use-local-storage';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './list-screens/ListScreen';
import { Task } from './types';
import TaskContext from './contexts/task-store';
import { colors, GlobalStyle } from './styles';
import { Layout } from './styles';
import { TabButton } from './styles';
import { Nav } from './styles';


function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <TaskContext.Provider value={[tasks, setTasks]}>
          <Layout>
            <Nav>
              <TabButton exact to="/" activeClassName="active">
                List
              </TabButton>
              <TabButton to="/focus" activeClassName="active">
                Focus
              </TabButton>
            </Nav>

            <Switch>
              <Route exact path="/">
                <ListScreen />
              </Route>
              <Route path="/focus">
                <FocusScreen />
              </Route>
            </Switch>
          </Layout>
        </TaskContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
