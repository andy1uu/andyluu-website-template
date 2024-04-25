"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./app/database");
const education_routes_1 = __importDefault(require("./app/routes/education.routes"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000/";
const corsOptions = {
    origin: [FRONTEND_URL],
};
app.use((0, cors_1.default)(corsOptions));
// simple route
app.get("/api", (request, response) => {
    response.send("Welcome to the backend for Andy Luu's personal website.");
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
(0, database_1.connectToDatabase)()
    .then(() => {
    (0, education_routes_1.default)(app);
    app.listen(PORT, () => {
        console.log(`[server]: Server started at http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
