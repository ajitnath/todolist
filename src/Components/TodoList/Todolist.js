import React from 'react';
import Todo from './todo'
import {FormGroup, FormControl, Button} from 'react-bootstrap'

const Todolist = (props) =>   {
  const { todos, toggleTodo, clearTodo, addTodo } = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    // Detect and press  the enter key
    const isEnterKey = (event.which == 13);
    // Minimum text length
    const isLongEnough = text.length > 0;

    if(isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  };

  // This function syntax is confusing
  const toggleClick = id => event => clearTodo(id);

  return (
    <div className='todolist'>
      <FormGroup>
        <FormControl type='text'
               className='todo-entry'
               onKeyDown={onSubmit} />
        <Button className="button primary todo-button"> + </Button>
      </FormGroup>
      <ul >
        {todos.map(t => (
          <li key={t.get('id')}
              className='todo__item'
              onClick={toggleClick(t.get('id'))}>
            <Todo todo={t.toJS()} /> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist