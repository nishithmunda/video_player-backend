import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB Connection Failed", err);
    process.exit(1);
  });
