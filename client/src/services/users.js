import request from "../utils/request";

const getAllUsers = () => {
  return request
    .get("/users")
    .then((res) =>
      res.data.data.map((val) => ({ ...val, id: val._id, key: val._id }))
    );
};
const getUserById = (id) =>
  request.get(`/users/${id}`).then((res) => res.data.data);

const createUser = (user) => request.post(`/users`, user);

const updateUser = (id, user) => request.put(`/users/${id}`, user);

const deleteUser = (id) => request.delete(`/users/${id}`);

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
