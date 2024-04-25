"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import Education from "../models/education.model.ts";
const education_controller_1 = __importDefault(require("../controllers/education.controller"));
const EducationRouter = (app) => {
    const router = express_1.default.Router();
    // Create a new User
    router.post("/", education_controller_1.default.create);
    // Get all Users
    router.get("/", education_controller_1.default.getEducation);
    // Get one User by Name
    router.get("/:educationID", education_controller_1.default.getEducationByID);
    // Update one User by Name
    router.put("/:educationID", education_controller_1.default.updateEducationByID);
    // Remove one User by Name
    router.delete("/:educationID", education_controller_1.default.removeEducationByID);
    app.use("/api/education", router);
};
exports.default = EducationRouter;
