import userServices from "../../services/User";
export default async function GetAllUsers(req, res, next) {
  try {
    const users = await userServices.getAllUsers();
    res.json({
      data: users,
    });
    next();
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500) && next(error);
  }
}
