const INITIAL_STATE = { idx: 0, todos: [] };
//topText, botText,img, id
function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      let newTodo = { todo: action.payload, id: state.idx + 1 };
      console.log(newTodo);
      return { ...state, todos: [...state.todos, newTodo], idx: state.idx + 1 };
    case "REMOVE":
      console.log(action.payload.id);
      let newTodods = state.todos.filter((m) => m.id !== action.payload.id);
      return { ...state, todos: newTodods };
    default:
      return state;
  }
}

export default rootReducer;
