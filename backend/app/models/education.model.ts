import { ObjectId } from "mongodb";

class Education {
  constructor(
    public institution: string,
    public degreeType: string,
    public gpa: number,
    public location: number,
    public major: number,
    public id?: ObjectId
  ) {}
}
export default Education;
