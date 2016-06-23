import React from 'react';
import {Button} from 'react-bootstrap'
const todo = (props) => {
  const {todo} = props;
  if(todo.isDone) {
    return (<div><span>{todo.text} </span> <Button className="default"> Clear </Button></div>)
  }
  else {
    return (<span className="todo">{todo.text}</span> )
  }
}

export default todo;