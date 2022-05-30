const users = [
  { id: 1, user: "Andy" },
  { id: 2, user: "Tom" },
  { id: 3, user: "Dave" },
];

const todos = [
  { id: 1, user: "Andy", todo: "Clean Bathroom" },
  { id: 2, user: "Tom", todo: "Mopping" },
  { id: 3, user: "Tom", todo: "Wash Clothes" },
  { id: 4, user: "Andy", todo: "Gaming all day" },
  { id: 5, user: "Dave", todo: "Sleep" },
];

export const getTodos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todos);
    }, 1000);
  });
};

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};

export const getUserTodo = (user) => {
  return new Promise((resolve, reject) => {
    if (user) {
      setTimeout(() => {
        const response = todos.filter((todo) => todo.user === user);
        resolve(response);
      }, 1500);
    } else {
      reject("No User Given");
    }
  });
};
