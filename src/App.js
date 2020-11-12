import { useState, useEffect } from 'react';
import Form from './components/Form'
import ItemsList from './components/ItemsList'

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('savedTodos')) || []);

  function handleFormSubmit(event, item) {
    event.preventDefault();
    setTodos([...todos, item]);
  }

  function clearList() {
    localStorage.removeItem('savedTodos')
    setTodos([])
  }

  function updateItem(index, completed) {
    setTodos(
      todos.map((todo, idx) => {
        if (idx !== index) return todo;
        return {
          ...todo,
          completed: completed
        }
      })
    );
  }

  useEffect(() => {
    localStorage.setItem('savedTodos', JSON.stringify(todos));
  });

  return (
    <div>
      <Form onFormSubmit={handleFormSubmit} />
      <ItemsList list={todos}
        reset={clearList}
        updateItem={updateItem} />
    </div>
  );
}

export default App;
