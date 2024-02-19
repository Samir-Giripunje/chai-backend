import dotenv from "dotenv";
dotenv.config({ path: "./env" });
import app from "./app.js";
import connectDB from './db/index.js';

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });
    const server = app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection error !!! ", err);
  });
