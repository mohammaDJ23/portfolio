import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import XssProtection from "x-xss-protection";

import morgan from "./middleware/morgan/morgan";
import graphql from "./middleware/graphql/graphql";

const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(json());
app.use(cors());
app.use(XssProtection());
app.use(compression());
app.use(helmet());
app.use(morgan);
app.use("/graphql", graphql);

(async function () {
  try {
    await mongoose.connect(
      "***************************************************************************************************",
      { useUnifiedTopology: true, useNewUrlParser: true }
    );

    app.listen(PORT, function () {
      console.log("server is running.");
    });
  } catch (error) {
    console.log(error);
  }
})();
