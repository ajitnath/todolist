import { List, Map } from 'immutable';

// Load this list from a file later 
const init = List([]);

export default function(todos=init, action) {
  switch(action.type) {
    
    case 'ADD_TODO':
      return todos.push(Map(action.payload));
    
    case 'TOGGLE_TODO':
      return todos.map((t) => {
        if(t.get('id') === action.payload) {
          return t.update('isDone', isDone =>  !isDone);    
        } else {
          return t;
        }
      })

    case 'CLEAR_TODO': 
      // TODO remove the element from the array actually
      return todos.filter((t) => {
        if(t.get('id') !== action.payload) {
          return t
        }
      })

    default:
      return todos;
  }
}