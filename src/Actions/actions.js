// succinct hack for generating passable unique ids
let uid = 0;

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid++,
      isDone: false,
      text: text
    }
  };
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}

export const clearTodo = (id) => {
  return {
    type: 'CLEAR_TODO',
    payload: id
  }
}