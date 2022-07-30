import userServices from "../../services/User";
export default async function registerUser(req, res, next) {
  const { name, email, age } = req.params;

  try {
    // add user to database
    const newUser = await userServices.registerUser({ name, email, age });
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
