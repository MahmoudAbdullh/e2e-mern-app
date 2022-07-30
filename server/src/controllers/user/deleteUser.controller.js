import userServices from "../../services/User";
export default async function deleteUser(req, res, next) {
  const { id } = req.params;
  try {
    const deletedRecord = await userServices.deleteUser(id);
    res.json({
      data: deletedRecord,
    });
    next();
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500) && next(error);
  }
}
