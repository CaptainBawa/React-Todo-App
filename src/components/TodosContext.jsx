import {
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const TodosContext = createContext(null);

function getInitialTodos() {
  const temp = localStorage.getItem('todos');
  const savedTodos = JSON.parse(temp);
  return savedTodos?.length ? savedTodos : [];
}

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    );
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        handleChange,
        deleteTodo,
        addTodo,
        setUpdate,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

TodosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTodosContext = () => useContext(TodosContext);
