// In-memory database
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

// GET all users
export const getAllUsers = () => {
  return users;
};

// GET user by ID
export const getUsersById = (pid) => {
  return users.find((user) => user.id === pid);
};

// POST add user
export const addUser = (user) => {
  user.id = nextId++;
  users.push(user);

  return user;
};

// PUT update user
export const updateUser = (pid, updateData) => {
  const index = users.findIndex((user) => user.id === pid);

  if (index === -1) {
    return false;
  }

  users[index] = {
    ...users[index],
    ...updateData,
    id: pid,
  };

  return users[index];
};

// DELETE user
export const deleteUser = (pid) => {
  const index = users.findIndex((user) => user.id === pid);

  if (index === -1) {
    return false;
  }

  users.splice(index, 1);

  return true;
};
