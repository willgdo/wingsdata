import { Box, Typography } from "@mui/material";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        // mt: 10,
        py: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.paper",
      }}
    >
      <Typography
        variant="body2"
        sx={{ opacity: 0.8, letterSpacing: "0.15em", color: "primary.main" }}
      >
        {year}
      </Typography>
    </Box>
  );
};

export default Footer;
