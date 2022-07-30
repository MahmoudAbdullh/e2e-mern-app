import userModel from "../../Model/User.model";
export default async function getAllUsers() {
  try {
    const users = await userModel.find();
    return users;
  } catch (e) {
    throw new Error(e.message);
  }
}
