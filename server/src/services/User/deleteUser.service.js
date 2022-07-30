import userModel from "../../Model/User.model";
export default async function deleteUser(id) {
  try {
    const deletedRecord = await userModel.findByIdAndDelete(id);
    return deletedRecord;
  } catch (e) {
    throw new Error(e.message);
  }
}
