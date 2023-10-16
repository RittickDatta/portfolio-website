import data from "../data/resume-data";
import { workExperience } from "../models/WorkExperience";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import NextWeekIcon from "@mui/icons-material/NextWeek";
import BusinessIcon from "@mui/icons-material/Business";

let ExperienceDetails = ({ exp }: { exp: workExperience }) => {
  const responsibilities = exp.responsibilities.map((item) => <li>{item}</li>);
  const achievements = exp.achievements.map((item) => <li>{item}</li>);
  return (
    <>
      <Card>
        <CardContent
          sx={{
            backgroundColor: "seagray",
            p: 2,
            m: 3,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#343d46",
              color: "white",
              px: 4,
              py: 2,
              border: "2px solid black",
              borderRadius: "0px",
              borderLeft: "10px solid skyblue",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 750 }}>
              <NextWeekIcon sx={{ mr: 1 }} />
              {exp.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 100, fontStyle: "italic", mb: 2 }}
            >
              <BusinessIcon sx={{ mr: 1 }} />
              {exp.company}
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "450",
              }}
            >
              <Typography sx={{ fontWeight: "inherit" }}>
                <DateRangeIcon sx={{ mr: 1 }} />
                {exp.from} - {exp.to}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "inherit",
                  diplay: "flex",
                  alignItems: "center",
                }}
              >
                <LocationOnIcon />
                {exp.city}, {exp.country}
              </Typography>
            </Box>
          </Box>
          <Accordion>
            <AccordionSummary
              sx={{
                backgroundColor: "black",
                color: "white",
                borderLeft: "10px solid skyblue",
              }}
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            >
              Summary
            </AccordionSummary>
            <AccordionDetails
              sx={{
                borderLeft: "10px solid skyblue",
              }}
            >
              <Typography>{exp.summary}</Typography>
            </AccordionDetails>
          </Accordion>
          {exp.responsibilities.length > 1 && (
            <Accordion>
              <AccordionSummary
                sx={{
                  borderLeft: "10px solid skyblue",
                  backgroundColor: "skyblue",
                }}
                expandIcon={<ExpandMoreIcon />}
              >
                Responsibilities
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  borderLeft: "10px solid skyblue",
                }}
              >
                <Typography>
                  <ul>{responsibilities}</ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          )}

          {exp.achievements.length > 1 && (
            <Accordion>
              <AccordionSummary>Achievements</AccordionSummary>
              <AccordionDetails>
                <ul>{achievements}</ul>
              </AccordionDetails>
            </Accordion>
          )}
          <Divider />
        </CardContent>
      </Card>
    </>
  );
};

export default function Experience() {
  const { workExperience } = data;
  return (
    <>
      <Box>
        {workExperience.map((item, index) => (
          <ExperienceDetails key={index} exp={item} />
        ))}
      </Box>
    </>
  );
}
