import express from "express";
import getAllUsers from "../controllers/user/getAllUsers.controller";
import getUser from "../controllers/user/getUser.controller";
import registerUser from "../controllers/user/registerUser.controller";
import updateUser from "../controllers/user/updateUser.controller";
import deleteUser from "../controllers/user/deleteUser.controller";
const userRoutes = express.Router();

userRoutes.get("/", getAllUsers);
userRoutes.get("/:id", getUser);
userRoutes.post("/", registerUser);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);
export default userRoutes;
