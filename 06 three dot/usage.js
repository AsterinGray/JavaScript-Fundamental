const newObj = () => {
  const { todos, ...rest } = obj;
  const newTodos = todos.filter((todo) => todo.type === "Fun");
  return { todos: newTodos, ...rest };
};

const res = newObj();

console.log(res);
