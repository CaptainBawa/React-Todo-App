import { useState } from 'react';
import { useTodosContext } from './TodosContext';
import { FaPlusCircle } from 'react-icons/fa';

const UserInput = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const { addTodo } = useTodosContext();

  const handleChange = (e) => setTitle(e.target.value);

  const handleForm = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <input className='user-input'
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <button>
          <FaPlusCircle
            style={{
              color: '#5e5e5e',
              fontSize: '20px',
              marginTop: '2px',
            }}
          />
        </button>
      </form>
      <span>{message}</span>
    </>
  );
};

export default UserInput;
