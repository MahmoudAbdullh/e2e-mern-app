import mongoose from "mongoose";
export default function DBConnect() {
  mongoose
    .connect(`${process.env.DB_URL}/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.info("🚀 DB connected !!");
    })
    .catch((e) => {
      console.error("🚀 Connection Error: ", e);
      process.exit();
    });
}
