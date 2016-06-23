import { connect } from 'react-redux';
import TodoList from '../Components/TodoList/TodoList';
import { addTodo, toggleTodo, clearTodo } from '../Actions/actions';

export const TodoApp = connect(
  function mapStateToProps(state) {
    return { todos : state }
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id)),
      clearTodo: id => dispatch(clearTodo(id))
    };
  }
)(TodoList);