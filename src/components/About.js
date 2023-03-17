import { Box, Typography } from "@mui/material";
import React from "react";
import Store from "./store";
const About = (props) => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          Welcome to my Store
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          -One Place for All
        </Typography>
      </Box>
      <div>
        <Store />
      </div>
    </div>
  );
};

export default About;
