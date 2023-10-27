import { Button, Link, Paper, Typography, Box } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-around",
          alignContent: "center",
          padding: "3rem",
        }}
      >
        <Paper elevation={0}>
          <Link
            sx={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/rittick/"
            target="_blank"
          >
            <Button
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                p: "1rem 2rem",
                letterSpacing: "0.5rem",
              }}
              color="primary"
            >
              LinkedIn
            </Button>
          </Link>
        </Paper>
        <Paper elevation={0}>
          <Link
            sx={{ textDecoration: "none" }}
            href="mailto:drittick@gmail.com"
            target="_blank"
          >
            <Button
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                p: "1rem 2rem",
                letterSpacing: "0.8rem",
              }}
              color="primary"
            >
              Gmail
            </Button>
          </Link>
        </Paper>
        <Paper elevation={0}>
          <Link
            sx={{ textDecoration: "none" }}
            href="tel:+48786642655"
            target="_blank"
          >
            <Button
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                p: "1rem 2rem",
                letterSpacing: "0.8rem",
              }}
              color="primary"
            >
              Phone
            </Button>
          </Link>
        </Paper>
      </Box>
    </>
  );
}
