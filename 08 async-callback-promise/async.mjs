import { getTodos, getUsers, getUserTodo } from "./promise.mjs";

const printTodo = async (todos) => {
  todos.map(({ id, user, todo }) => {
    console.log(`id: ${id}`);
    console.log(`user: ${user}`);
    console.log(`todo: ${todo}`);
  });
};

(async () => {
  try {
    const users = await getUsers();
    const todos = await getTodos();
    printTodo(todos);
    console.log("=====================");
    const userTodos = await getUserTodo(users[0].name);
    printTodo(userTodos);
  } catch (e) {
    console.log(e);
  }
})();

// (async () => {
//   try {
//     const todos = await getUserTodo("Andy");
//     printTodo(todos);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("Process done");
//   }
// })();

// (() => {
//   getUserTodo()
//     .then((todos) => {
//       printTodo(todos);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// })();
