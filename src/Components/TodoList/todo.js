import React from 'react';
const todo = (props) => {
  const {todo} = props;
  if(todo.isDone) {
    return (<span className="todo-done"> {todo.text} </span>)
  }
  else {
    return (<span className="todo">{todo.text}</span> )
  }
}

export default todo;