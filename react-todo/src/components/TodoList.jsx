import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Todoitem from './TodoItem';
import { ListGroup } from 'react-bootstrap';

const initialList = [
  { id: 1, text: 'Clean the house', done: true },
  { id: 2, text: 'Buy milk', done: false },
  { id: 3, text: 'Create React Todo App', done: false },
];

export default function TodoList() {
  const [list, setList] = useState(() => {
    // Load saved todos from localStorage or fallback to initialList
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : initialList;
  });

  const [textInput, setTextInput] = useState('');

  const toggleTodo = (id) => {
    setList(list.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleAdd = () => {
    if (textInput.trim() === '') return;

    const newTodo = {
      id: list.length > 0 ? list[list.length - 1].id + 1 : 1,
      text: textInput.trim(),
      done: false,
    };

    setList([...list, newTodo]);
    setTextInput('');
  };

  const deleteTodo = (id) => {
    setList(list.filter(todo => todo.id !== id));
  };

  // Save todos to localStorage whenever list changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list));
  }, [list]);

  const todoitems = list.map((item) => (
    <Todoitem
      key={item.id}
      todo={item}
      onToggle={() => toggleTodo(item.id)}
      onDelete={() => deleteTodo(item.id)}
    />
  ));

  return (
    <Card className="mt-3">
      <Card.Header>Todo List</Card.Header>
      <Card.Body>
        <ListGroup>{todoitems}</ListGroup>
      </Card.Body>
      <Card.Footer className="d-flex">
        <input
          type="text"
          onChange={handleChange}
          value={textInput}
          className="form-control me-2"
          placeholder="Add a new todo"
        />
        <Button variant="primary" onClick={handleAdd}>
          Add
        </Button>
      </Card.Footer>
    </Card>
  );
}
