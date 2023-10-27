import data from "../data/resume-data";
import { EducationModel } from "../models/Education";
import { Typography, Paper, Box, Link, Button } from "@mui/material";

const EducationDetails = ({ edu }: { edu: EducationModel }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: "2rem",
        m: "3rem 2rem",
        borderLeft: "10px solid skyblue",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }} variant="h5">
        {edu.degree}
      </Typography>
      <Typography sx={{ marginBottom: "1rem" }} variant="h6">
        {edu.collegeName}
      </Typography>
      <Typography variant="subtitle2">
        {edu.from} - {edu.to}
      </Typography>
      <Box>{edu.address}</Box>
      <Link
        sx={{ textDecoration: "none" }}
        target="_blank"
        href={`${edu.collegeWebsiteUrl}`}
      >
        <Button sx={{ marginTop: "1rem", fontSize: "small" }}>
          Visit College Website{" "}
        </Button>
      </Link>
    </Paper>
  );
};
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
