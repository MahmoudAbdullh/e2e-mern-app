import userModel from "../../Model/User.model";

export default async function registerUser(id, payload) {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(id, payload, {
      new: true,
    });
    return updatedUser;
  } catch (e) {
    throw new Error(e.message);
  }
}
