import data from "../data/resume-data";
export default function AboutMe() {
  const { aboutMe } = data;
  return <div>{aboutMe}</div>;
}
