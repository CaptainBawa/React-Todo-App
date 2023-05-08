import UserInput from './UserInput';
import TodosList from './TodoList';

import { TodosProvider } from './TodosContext';

const AppLogic = () => {
  return (
    <TodosProvider>
      <UserInput />
      <TodosList />
    </TodosProvider>
  );
};
export default AppLogic;