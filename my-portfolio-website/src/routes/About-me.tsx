import data from "../data/resume-data";
import { Paper, Box, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import "../styles/about-me.css";
import { proficiency, skillCategory, numberOfYears } from "../data/resume-data";

interface SkillPillProps {
  name: string;
  proficiency: proficiency;
  skillCategory: skillCategory;
  numberOfYears: numberOfYears;
  skillUsedInRecentRole: boolean;
}

function getBoxSize(experienceWithSkill: string) {
  switch (experienceWithSkill) {
    case "< 1 Year":
      return { width: "60px", height: "40px" };
    case "1 - 3 Years":
      return { width: "120px", height: "80px" };
    case "> 3 Years":
      return { width: "150px", height: "60px" };
    case "5 Years":
      return { width: "180px", height: "80px" };
    case "> 5 Years":
      return { width: "200px", height: "100px" };
    default:
      return { width: "100px", height: "100px" };
  }
}

export function SkillPill(props: SkillPillProps) {
  const {
    name,
    proficiency,
    skillCategory,
    numberOfYears,
    skillUsedInRecentRole,
  } = props;
  return (
    <Box
      sx={{
        p: "1rem",
        m: "3rem 4rem",
      }}
      className="skillPill"
    >
      <Badge
        badgeContent={skillUsedInRecentRole ? "Last Project" : null}
        color="info"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Badge
          badgeContent={skillCategory}
          color="warning"
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <Badge badgeContent={proficiency} color="primary">
            <Badge
              badgeContent={numberOfYears}
              color="secondary"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <Box
                sx={{
                  color: "white",
                  backgroundColor: "black",
                  p: "20px",
                  borderRadius: "10px",
                  ...getBoxSize(numberOfYears),
                }}
              >
                {name}
              </Box>
            </Badge>
          </Badge>
        </Badge>
      </Badge>
    </Box>
  );
}

export function getSkillPills(allSkills = false) {
  const { skills } = data;
  const recentSkills = !allSkills
    ? skills.filter((item) => item.skillUsedInRecentRole)
    : skills;
  return recentSkills.map((item, index) => (
    <SkillPill
      key={index}
      name={item.name}
      proficiency={item.proficiency}
      skillCategory={item.skillCategory}
      numberOfYears={item.numberOfYears}
      skillUsedInRecentRole={item.skillUsedInRecentRole}
    />
  ));
}

const handleScrollTo = () => {
  const element = document.getElementById("skill-pill-section");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

setTimeout(() => {
  handleScrollTo();
}, 6000);

export default function AboutMe() {
  const { aboutMe } = data;
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "3rem",
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        <Paper
          sx={{
            padding: "1rem 2rem",
            fontSize: "2rem",
          }}
          elevation={6}
          className="firstQuestion"
        >
          Are you looking for a senior frontend developer?
        </Paper>
        <Paper
          sx={{
            padding: "1rem 2rem",
            marginTop: "0.5rem",
            backgroundColor: "black",
            color: "white",
          }}
          elevation={3}
          className="secondQuestion"
        >
          With Experience in React? And TypeScript? And More...
        </Paper>
        <Box>
          <Paper
            sx={{
              marginTop: "1.5rem",
              padding: "1rem 2rem",
              display: "flex",
              justifyContent: "space-around",
              fontSize: "1.5rem",
            }}
            elevation={0.5}
            className="searchEnds"
          >
            YOUR SEARCH ENDS HERE.
          </Paper>
        </Box>
        <Box sx={{}} id="skill-pill-section">
          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignContent: "center",
              flexWrap: "wrap",
            }}
          >
            {getSkillPills()}
          </Paper>
        </Box>
      </Box>
    </>
  );
}
