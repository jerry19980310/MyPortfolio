import React from "react";
import { Typography, Card, CardContent, Container, Paper } from "@mui/material";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import WorkIcon from '@mui/icons-material/WorkOutline'
import SchoolIcon from '@mui/icons-material/School';
import BrushIcon from '@mui/icons-material/Brush';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BookIcon from '@mui/icons-material/Book';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';


const ResumePage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
       <Typography variant="h4" component="h1" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <PermContactCalendarRoundedIcon fontSize="large" sx={{ mr: 1 }} /> Resume
      </Typography>
      {/* Overview Card */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
        <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <BrushIcon sx={{ mr: 1 }} /> Overview
          </Typography>
          <Typography variant="body1">
            An experienced and passionate photographer with a keen eye for detail and storytelling. 
            Proven track record of delivering high-quality visual content across various genres including landscapes, portraits, and events. 
            Skilled in both photography and post-production techniques, 
            with a strong commitment to capturing authentic moments and conveying emotions through imagery.
          </Typography>
        </CardContent>
      </Card>

      {/* Career History Card */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <WorkOutlineIcon sx={{ mr: 1 }} /> Career History
          </Typography>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                color="text.secondary"
                className={timelineOppositeContentClasses.root}
              >
                Mar 2023 - Present
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Paper elevation={3} sx={{ p: 1.5 }}>
                  <Typography variant="h6" component="h1">
                    Independent Photographer
                  </Typography>
                  <Typography>
                    Produced captivating visual content for commercial advertising, product photography, and event coverage...
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                color="text.secondary"
                className={timelineOppositeContentClasses.root}
              >
                Mar 2021 - Mar 2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Paper elevation={3} sx={{ p: 1.5 }}>
                  <Typography variant="h6" component="h1">
                    Photography Assistant
                  </Typography>
                  <Typography>
                    Assisted lead photographer in equipment setup, scene preparation, and lighting adjustments...
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            {/* ... additional timeline items ... */}
          </Timeline>
        </CardContent>
      </Card>
      

      {/* Skills Card */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <StarBorderIcon sx={{ mr: 1 }} /> Skills
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
        </CardContent>
      </Card>

      {/* Publications Card */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <BookIcon sx={{ mr: 1 }} /> Publications
          </Typography>
          <Typography variant="body1">
            "Cityscapes: A Visual Journey Through Urban Landscapes" featuring a collection of architectural photographs from around the world.
          </Typography>
        </CardContent>
      </Card>

      {/* Qualifications Card */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <SchoolIcon sx={{ mr: 1 }} /> Qualifications
          </Typography>
          <Typography variant="body1">
            Bachelor's Degree in Photography, University of Photography, 2021/06
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ResumePage;
