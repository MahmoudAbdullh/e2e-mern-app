import userModel from "../../Model/User.model";
export default async function getUserById(id) {
  try {
    const user = await userModel.findById(id);
    return user;
  } catch (e) {
    throw new Error(e.message);
  }
}
