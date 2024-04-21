import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, CardActionArea, Box } from '@mui/material';
import { GitHub as GitHubIcon, Description as DescriptionIcon, StarBorder as StarBorderIcon } from '@mui/icons-material';

const ResumePage = () => {
  const [linkedindatas, setRLinkedindatas] = useState([]); // State to store the repositories
  const axios = require('axios');

const API_KEY = 'sk_live_6623d4c0631cab061a37711e_key_54qbzi1fbj'; // Replace with your API key from the Scrapin dashboard
const LINKEDIN_TARGET = 'https://api.linkedin.com/v2/userinfo'; // Replace with the LinkedIn URL or profile ID you want to fecth

const getLinkedInProfile = async () => {
  const endpoint = `https://api.scrapin.io/enrichment/profile?apikey=${API_KEY}&linkedinUrl=${LINKEDIN_TARGET}`;

  try {
    const response = await axios.get(endpoint);
    setRLinkedindatas(response.data);
    console.log('Data:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

getLinkedInProfile();

  return (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} >
          <h1>Resume</h1>
          <Card elevation={4}>
            <CardActionArea component="a"  target="_blank" rel="noopener noreferrer">
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  <GitHubIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 5 }} />
                  {linkedindatas.name}
                </Typography>
                <Box display="flex" alignItems="center" marginBottom={2}>
                  <DescriptionIcon fontSize="small" style={{ marginRight: 5 }} />
                  <Typography variant="body2" color="textSecondary">
                    {linkedindatas.given_name || "No description available."}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <StarBorderIcon fontSize="small" style={{ marginRight: 5 }} />
                  <Typography variant="body2" color="textSecondary">
                    {linkedindatas.email} Stars
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
    </Grid>
  );
};

export default ResumePage;


// {'sub': 'bOJFlM3eFq', 'email_verified': True, 'name': 'YuChiaSheng Kao', 'locale': {'country': 'TW', 'language': 'zh'}, 'given_name': 'YuChiaSheng', 'family_name': 'Kao', 'email': 'a0989718985@gmail.com', 'picture': 'https://media.licdn.com/dms/image/D4D03AQE3rxY1zitCNg/profile-displayphoto-shrink_100_100/0/1712920887405?e=1718841600&v=beta&t=fDAKggJhjqwRvs6maFn9REkR-MspFqWB92Isa469yr8'}

