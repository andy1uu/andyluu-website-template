"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const database_1 = require("../database");
const EducationController = () => { };
EducationController.create = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Validate the Request
    if (!request.body) {
        response.status(400).send({ message: "Request content can not be empty!" });
    }
    try {
        const newEducation = request.body;
        const result = yield ((_a = database_1.collections.education) === null || _a === void 0 ? void 0 : _a.insertOne(newEducation));
        result
            ? response
                .status(201)
                .send(`Successfully created a new game with id ${result.insertedId}`)
            : response.status(500).send("Failed to create a new game.");
    }
    catch (error) {
        console.error(error);
        response.status(400).send(error.message);
    }
});
EducationController.getEducation = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const education = (yield ((_b = database_1.collections.education) === null || _b === void 0 ? void 0 : _b.find({}).toArray()));
        response.status(200).send(education);
    }
    catch (error) {
        response.status(500).send(error.message);
    }
});
EducationController.getEducationByID = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const id = (_c = request === null || request === void 0 ? void 0 : request.params) === null || _c === void 0 ? void 0 : _c.educationID;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const education = (yield ((_d = database_1.collections.education) === null || _d === void 0 ? void 0 : _d.findOne(query)));
        if (education) {
            response.status(200).send(education);
        }
    }
    catch (error) {
        response
            .status(404)
            .send(`Unable to find matching education with id: ${request.params.id}`);
    }
});
EducationController.updateEducationByID = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f;
    const id = (_e = request === null || request === void 0 ? void 0 : request.params) === null || _e === void 0 ? void 0 : _e.educationID;
    try {
        const updatedEducation = request.body;
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield ((_f = database_1.collections.education) === null || _f === void 0 ? void 0 : _f.updateOne(query, {
            $set: updatedEducation,
        }));
        result
            ? response
                .status(200)
                .send(`Successfully updated education with id ${id}`)
            : response.status(304).send(`Education with id: ${id} not updated`);
    }
    catch (error) {
        console.error(error.message);
        response.status(400).send(error.message);
    }
});
EducationController.removeEducationByID = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h;
    const id = (_g = request === null || request === void 0 ? void 0 : request.params) === null || _g === void 0 ? void 0 : _g.educationID;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield ((_h = database_1.collections.education) === null || _h === void 0 ? void 0 : _h.deleteOne(query));
        if (result && result.deletedCount) {
            response.status(202).send(`Successfully removed education with id ${id}`);
        }
        else if (!result) {
            response.status(400).send(`Failed to remove education with id ${id}`);
        }
        else if (!result.deletedCount) {
            response.status(404).send(`Education with id ${id} does not exist`);
        }
    }
    catch (error) {
        console.error(error.message);
        response.status(400).send(error.message);
    }
});
exports.default = EducationController;
