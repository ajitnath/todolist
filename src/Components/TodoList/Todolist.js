import React from 'react';
import Todo from './todo'
import {FormGroup, FormControl, Button, Checkbox} from 'react-bootstrap'

const Todolist = (props) =>   {
  const { todos, toggleTodo, clearTodo, addTodo } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    let review = Object.keys(e.target).filter(k => !isNaN(parseInt(k))).reduce( (obj, key) => {
     if ( e.target[key].name !== '')
       obj[ e.target[key].name ] = e.target[key].value
       return obj
     }, {})
    console.log('The value of event', review);
    
    if (review['todo-input'] !== '') {
      addTodo(review['todo-input']);
    } 
    else {
      alert('Todo not valid');
    }   
  };

  // This function syntax is confusing
  const toggleClick = id => event => toggleTodo(id);
  const clearClick = id => event => clearTodo(id);

  return (
    <div className='todolist'>
      <form onSubmit={onSubmit}>
        <FormControl type='text'
               className='todo-entry'
               name="todo-input"
        />
        <Button type="submit" className="button primary todo-button"> + </Button>
      </form>
      <ul >
        {todos.map(t => (
          <li key={t.get('id')} className='todo__item' >
            <Checkbox onClick={toggleClick(t.get('id'))} >  
                <Todo todo={t.toJS()} /> 
                <i className="fa fa-close" onClick={clearClick(t.get('id'))} />
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist