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

const getUsers = (cb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
      cb & cb(users[0].user);
    }, 1000);
  });
};

const getUserTodo = (user) => {
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

const printTodo = async (todos) => {
  todos.map(({ id, user, todo }) => {
    console.log(`id: ${id}`);
    console.log(`user: ${user}`);
    console.log(`todo: ${todo}`);
  });
};

(async () => {
  let myUser;

  const setUser = (user) => {
    myUser = user;
  };
  const users = await getUsers(setUser);

  console.log("List Of User");
  users.map((user) => {
    console.log(user.user);
  });

  console.log();
  console.log(`My User: ${myUser}`);
  console.log("===============");
  console.log();

  const userTodo = await getUserTodo(myUser);
  printTodo(userTodo);
})();
