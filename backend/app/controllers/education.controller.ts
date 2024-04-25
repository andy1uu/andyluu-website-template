import { ObjectId } from "mongodb";
import { Request, Response } from "express";

import { collections } from "../database";
import Education from "../models/education.model";

const EducationController = () => {};

EducationController.create = async (request: Request, response: Response) => {
  // Validate the Request
  if (!request.body) {
    response.status(400).send({ message: "Request content can not be empty!" });
  }

  try {
    const newEducation = request.body as Education;
    const result = await collections.education?.insertOne(newEducation);

    result
      ? response
          .status(201)
          .send(`Successfully created a new game with id ${result.insertedId}`)
      : response.status(500).send("Failed to create a new game.");
  } catch (error) {
    console.error(error as Error);
    response.status(400).send((error as Error).message);
  }
};

EducationController.getEducation = async (
  request: Request,
  response: Response
) => {
  try {
    const education = (await collections.education
      ?.find({})
      .toArray()) as unknown as Education[];

    response.status(200).send(education);
  } catch (error) {
    response.status(500).send((error as Error).message);
  }
};

EducationController.getEducationByID = async (
  request: Request,
  response: Response
) => {
  const id = request?.params?.educationID;

  try {
    const query = { _id: new ObjectId(id) };
    const education = (await collections.education?.findOne(
      query
    )) as unknown as Education;

    if (education) {
      response.status(200).send(education);
    }
  } catch (error) {
    response
      .status(404)
      .send(`Unable to find matching education with id: ${request.params.id}`);
  }
};

EducationController.updateEducationByID = async (
  request: Request,
  response: Response
) => {
  const id = request?.params?.educationID;

  try {
    const updatedEducation: Education = request.body as Education;
    const query = { _id: new ObjectId(id) };

    const result = await collections.education?.updateOne(query, {
      $set: updatedEducation,
    });

    result
      ? response
          .status(200)
          .send(`Successfully updated education with id ${id}`)
      : response.status(304).send(`Education with id: ${id} not updated`);
  } catch (error) {
    console.error((error as Error).message);
    response.status(400).send((error as Error).message);
  }
};

EducationController.removeEducationByID = async (
  request: Request,
  response: Response
) => { const id = request?.params?.educationID;

try {
  const query = { _id: new ObjectId(id) };
  const result = await collections.education?.deleteOne(query);

  if (result && result.deletedCount) {
    response.status(202).send(`Successfully removed education with id ${id}`);
  } else if (!result) {
    response.status(400).send(`Failed to remove education with id ${id}`);
  } else if (!result.deletedCount) {
    response.status(404).send(`Education with id ${id} does not exist`);
  }
} catch (error) {
  console.error((error as Error).message);
  response.status(400).send((error as Error).message);
}};

export default EducationController;
