import React from "react";
import { Typography, Box } from "@mui/material";

const ResumePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          Resume
        </Typography>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          Overview
        </Typography>
        <Typography variant="body1">
        An experienced and passionate photographer with a keen eye for detail and storytelling. 
        Proven track record of delivering high-quality visual content across various genres including landscapes, portraits, and events. 
        Skilled in both photography and post-production techniques, 
        with a strong commitment to capturing authentic moments and conveying emotions through imagery.
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          Career History
        </Typography>
        <Typography variant="subtitle1" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          Independent Photographer: 202303/ - Present
        </Typography>
        <Typography variant="body1">
          Produced captivating visual content for commercial advertising, product photography, and event coverage, meeting client needs and exceeding expectations.
        </Typography>
        <Typography variant="body1">
          Conceptualized and executed photography projects, showcasing a unique style and technical expertise.
        </Typography>
        <Typography variant="body1">
          Conducted post-production editing using industry-standard software to ensure exceptional quality and visual impact.
        </Typography>
        <Typography variant="subtitle1" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          Photography Assistant: 2021/03 - 2023/03
        </Typography>
        <Typography variant="body1">
          Assisted lead photographer in equipment setup, scene preparation, and lighting adjustments, ensuring smooth shooting processes.
        </Typography>
        <Typography variant="body1">
          Conducted location scouting and preparation to ensure optimal shooting environments.
        </Typography>
        <Typography variant="body1">
          Supported lead photographer in post-production tasks including photo selection, editing, and production.
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          Skills
        </Typography>
        <Typography variant="body1">
          Proficient in operating photography equipment and controlling lighting setups.
        </Typography>
        <Typography variant="body1">
          Excellent communication and teamwork abilities, collaborating effectively with clients and team members to achieve common goals.
        </Typography>
        <Typography variant="body1">
          Creative and imaginative, bringing unique visual concepts and ideas to photography projects.
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          Publications
        </Typography>
        <Typography variant="body1">
          "Cityscapes: A Visual Journey Through Urban Landscapes" featuring a collection of architectural photographs from around the world.
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5" color="inherit" component="div" sx={{ flexGrow: 1 }}>
          Qualifications
        </Typography>
        <Typography variant="body1">
          Bachelor's Degree in Photography, [University of Photography], [2021/06]
        </Typography>
      </Box>
    </Box>
  );
};

export default ResumePage;
