import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

const mock = new AxiosMockAdapter(axios, { delayResponse: 1000 });

const users = [
  { name: "John", age: 43 },
  { name: "Strong", age: 24 },
];

mock.onGet("/users").reply(200, {
  users: users,
});

mock.onPost("/users").reply(204);

export async function getUsers(apiController = undefined) {
  const users = await axios.get("/users", { signal: apiController?.signal });
  return users.data.users;
}

export async function addUser(userDetails) {
  users.push(userDetails);
  await axios.post("/users", {});
}

export async function addUserMultipleArgs(name, age) {
  users.push({ name: name, age: age });
  await axios.post("/users", {});
}

export async function getUserByName(name) {
  const users = await axios.get("/users");
  const userData = users.data.users;
  return userData.filter((user) => user.name === name);
}
