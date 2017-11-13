export const allTodos = (state) => {
  return Object.keys(state.todos).map((todoID) => {
    return state.todos[todoID];
  });
};
