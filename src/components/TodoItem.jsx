import { useState, useRef } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useTodosContext } from './TodosContext';

const TodoItem = ({ itemProp }) => {
  const [editing, setEditing] = useState(false);
  const { handleChange, deleteTodo, setUpdate } = useTodosContext();
  const editInput = useRef(null);
  const completedStyle = itemProp.completed ? {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  } : {};

  const handleEditing = () => setEditing(true);

  const handleUpdated = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInput.current.value, itemProp.id);
      setEditing(false);
    }
  };

  return (
    <li>
      <div className="todo" style={{ display: editing ? 'none' : 'flex' }}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <span style={completedStyle}>
          {itemProp.title}
        </span>
        <button type="button" onClick={handleEditing}>
          <AiFillEdit style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <button type="button" onClick={() => deleteTodo(itemProp.id)}>
          <FaTrash style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>

      </div>
      <input
        className="editInput"
        type="text"
        ref={editInput}
        defaultValue={itemProp.title}
        style={{ display: editing ? 'flex' : 'none' }}
        onKeyDown={handleUpdated}
      />
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.func.isRequired,
};

export default TodoItem;
