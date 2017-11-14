export const allTodos = (state) => {
  return Object.keys(state.todos).map((todoID) => {
    return state.todos[todoID];
  });
};

export const stepsByTodoId = (state, todoId) => {
  const selectedSteps = Object.keys(state.steps).filter((stepId) => {
    return state.steps[stepId].todo_id === todoId;
  });
  return selectedSteps.map((stepId) => {
    return state.steps[stepId];
  });
};
