import TodoItem from './TodoItem';
import { useTodosContext } from './TodosContext';

const TodoList = () => {
  const { todos } = useTodosContext();
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};
export default TodoList;
