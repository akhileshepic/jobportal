import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";
import connectDB from "./config/db.js";
import testRoute from "./routes/testRoutes.js";
import authRoute from "./routes/authRoutes.js";
import errorMiddleware from "./middelwares/errorMiddleware.js";
//env config
dotenv.config();
//databse config
connectDB();
//rest object
const app = express();

//middelware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
//routes
app.use("/api/v1/test", testRoute);
app.use("/api/v1/auth", authRoute);

//validation middelware
app.use(errorMiddleware);

//PORT
const PORT = process.env.PORT || 8000;
//start server

app.listen(PORT, (req, res) => {
  console.log(
    `Node Server Runing In ${process.env.DEV_MODE} Mode on Port no ${PORT}`
      .bgCyan.white
  );
});
