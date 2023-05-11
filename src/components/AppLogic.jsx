import UserInput from './UserInput';
import TodosList from './TodoList';

import { TodosProvider } from './TodosContext';

const AppLogic = () => (
  <TodosProvider>
    <div className="todo-container">
      <header><h1>React To-Do List WebApp</h1></header>
      <UserInput />
      <TodosList />
    </div>
  </TodosProvider>
);
export default AppLogic;
