let users = [
  {
    id: 1,
    name: "Amit Sharma",
    mob: "98345xxxxx",
    email: "amit.example@exam.com",
  },
  {
    id: 2,
    name: "Monika Verma",
    mob: "92345xxxxx",
    email: "moni.example@exam.com",
  },
];

let nextId = 3;

export const getAllUsers = () => {
  return users;
};

export const getUsersById = (pid) => {
  return users.find((user) => user.id === pid);
};

export const addUser = (user) => {
  user.id = nextId++;
  users.push(user);
  return user;
};

export const updateUser = (pid, updateData) => {
  const index = users.findIndex((user) => user.id === pid);

  if (index === -1) {
    return false;
  }

  updateData.id = pid;
  users[index] = updateData;

  return updateData;
};

export const updatePartialUser = (pid, updateData) => {
  const index = users.findIndex((user) => user.id === pid);

  if (index === -1) {
    return false;
  }

  users[index] = {
    ...users[index],
    ...updateData,
  };

  return users[index];
};

export const deleteUser = (pid) => {
  const index = users.findIndex((user) => user.id === pid);

  if (index === -1) {
    return false;
  }

  users.splice(index, 1);

  return true;
};
