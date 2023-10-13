import data from "../data/resume-data";
import { workExperience } from "../models/WorkExperience";
let ExperienceDetails = ({ exp }: { exp: workExperience }) => {
  const responsibilities = exp.responsibilities.map((item) => <li>{item}</li>);
  const achievements = exp.achievements.map((item) => <li>{item}</li>);
  return (
    <>
      <div>
        <h1>{exp.title}</h1>
        <h2>{exp.company}</h2>
        <h3>
          {exp.from} - {exp.to}
        </h3>
        <p>
          {exp.city}, {exp.country}
        </p>
        <p>{exp.summary}</p>
        {exp.responsibilities.length > 1 && <ul>{responsibilities}</ul>}
        {exp.achievements.length > 1 && <ul>{achievements}</ul>}
      </div>
    </>
  );
};

export default function Experience() {
  const { workExperience } = data;
  return (
    <>
      {workExperience.map((item) => (
        <ExperienceDetails exp={item} />
      ))}
    </>
  );
}
