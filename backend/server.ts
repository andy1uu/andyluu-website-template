import express, { Request, Response, Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDatabase } from "./app/database";
import EducationRouter from "./app/routes/education.routes";

const app: Application = express();

dotenv.config();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000/";

const corsOptions: cors.CorsOptions = {
  origin: [FRONTEND_URL],
};

app.use(cors<Request>(corsOptions));

// simple route
app.get("/api", (request: Request, response: Response) => {
  response.send("Welcome to the backend for Andy Luu's personal website.");
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

connectToDatabase()
  .then(() => {
    EducationRouter(app);

    app.listen(PORT, () => {
      console.log(`[server]: Server started at http://localhost:${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });
