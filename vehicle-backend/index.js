import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import vehicleRouter from "./routes/vehicleRoute.js";
import userRouter from "./routes/userRoutes.js"
import errorMiddleware from "./utils/error.js"

dotenv.config();

const app = express();
app.use(express.json())
app.use(morgan("dev"));
app.use(cors());

const PORT = process.env.PORT || 8000;

app.use("/api", vehicleRouter);
app.use("/api", userRouter);
// app.use("/", )pos

app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`Node Server is running on http://localhost:${PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Database Error", err);
  });
