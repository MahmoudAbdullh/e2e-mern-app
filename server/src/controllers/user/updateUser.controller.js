import userServices from "../../services/User";
export default async function updateUser(req, res, next) {
  const { id } = req.params;
  const { name, email, age } = req.body;

  try {
    // add user to database
    const newUser = await userServices.updateUser(id, { name, email, age });
    res.status(201).json({
      message: "",
      data: newUser,
    });
    next();
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500) && next(error);
  }
}
