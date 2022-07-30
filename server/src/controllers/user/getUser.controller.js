import userServices from "../../services/User";
export default async function GetAllUsers(req, res, next) {
  const { id } = req.params;
  try {
    const users = await userServices.getUser(id);
    res.json({
      data: users,
    });
    next();
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500) && next(error);
  }
}
