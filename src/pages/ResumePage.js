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
import TimelineOppositeContent, { timelineOppositeContentClasses, } from '@mui/lab/TimelineOppositeContent';
import { useTranslation } from "react-i18next";


const ResumePage = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ display: "flex", alignItems: "center", mb: 2 }}
      >
        <PermContactCalendarRoundedIcon fontSize="large" sx={{ mr: 1 }} /> {t("resume.title")}
      </Typography>

      {/* Overview */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ display: "flex", alignItems: "center" }}
          >
            <BrushIcon sx={{ mr: 1 }} /> {t("resume.overview.title")}
          </Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: t("resume.overview.content") }} />
        </CardContent>
      </Card>

      {/* Career History */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <WorkOutlineIcon sx={{ mr: 1 }} /> {t("resume.career.title")}
          </Typography>
          <Timeline position="alternate">
            {t("resume.career.items", { returnObjects: true }).map((job, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent sx={{ m: "auto 0" }} color="text.secondary">
                  {job.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <WorkIcon />
                  </TimelineDot>
                  {index !== t("resume.career.items", { returnObjects: true }).length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Paper elevation={3} sx={{ p: 1.5 }}>
                    <Typography variant="h6" component="h1" dangerouslySetInnerHTML={{ __html: job.position }} />
                    <Typography variant="body2">
                      {job.details.map((detail, idx) => (
                        <div key={idx} dangerouslySetInnerHTML={{ __html: detail }} />
                      ))}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ display: "flex", alignItems: "center" }}
          >
            <StarBorderIcon sx={{ mr: 1 }} /> {t("resume.skills.title")}
          </Typography>
          {t("resume.skills.content", { returnObjects: true }).map((skill, index) => (
            <Typography key={index} variant="body1" dangerouslySetInnerHTML={{ __html: skill }} />
          ))}
        </CardContent>
      </Card>

      {/* Qualifications */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ display: "flex", alignItems: "center" }}
          >
            <SchoolIcon sx={{ mr: 1 }} /> {t("resume.qualifications.title")}
          </Typography>
          {t("resume.qualifications.content", { returnObjects: true }).map((qual, index) => (
            <Typography key={index} variant="body1" dangerouslySetInnerHTML={{ __html: qual }} />
          ))}
        </CardContent>
      </Card>
    </Container>
  );
};

export default ResumePage;
