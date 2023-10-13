import data from "../data/resume-data";
import { EducationModel } from "../models/Education";
const EducationDetails = ({ edu }: { edu: EducationModel }) => (
  <>
    <h1>{edu.degree}</h1>
    <h2>{edu.collegeName}</h2>
    <h3>
      {edu.from} - {edu.to}
    </h3>
    <h4>
      {edu.address} , {edu.collegeWebsiteUrl}
    </h4>
  </>
);
export default function Education() {
  const { education } = data;
  return (
    <>
      {education.map((item) => (
        <EducationDetails edu={item} />
      ))}
    </>
  );
}
