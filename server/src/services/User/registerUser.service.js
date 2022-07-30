import userModel from "../../Model/User.model";

export default async function registerUser(user) {
  try {
    const newUser = await userModel.create(user);
    return newUser;
  } catch (e) {
    throw new Error(e.message);
  }
}
