import express, { Application, Request, Response } from "express";
//import Education from "../models/education.model.ts";
import EducationController from "../controllers/education.controller";

const EducationRouter = (app: Application) => {
  const router = express.Router();

  // Create a new User
  router.post("/", EducationController.create);

  // Get all Users
  router.get("/", EducationController.getEducation);


  // Get one User by Name
  router.get("/:educationID", EducationController.getEducationByID);

  // Update one User by Name
  router.put("/:educationID", EducationController.updateEducationByID);

  // Remove one User by Name
  router.delete("/:educationID", EducationController.removeEducationByID);

  app.use("/api/education", router);
};

export default EducationRouter;