import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, CardActionArea, Box } from '@mui/material';
import { GitHub as GitHubIcon, Description as DescriptionIcon, StarBorder as StarBorderIcon } from '@mui/icons-material';

const PortfolioPage = () => {
    const [repos, setRepos] = useState([]); // State to store the repositories

    useEffect(() => {
      const fetchRepos = async () => {
        try {
          const response = await axios.get('https://api.content.tripadvisor.com/api/v1/location/{locationId}/details');
          setRepos(response.data);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };

      fetchRepos();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
      <Grid container spacing={3}>
        {repos.map((repo) => (
          <Grid item xs={12} sm={6} md={4} key={repo.id}>
            <Card elevation={4}>
              <CardActionArea component="a" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    <GitHubIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 5 }} />
                    {repo.name}
                  </Typography>
                  <Box display="flex" alignItems="center" marginBottom={2}>
                    <DescriptionIcon fontSize="small" style={{ marginRight: 5 }} />
                    <Typography variant="body2" color="textSecondary">
                      {repo.description || "No description available."}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <StarBorderIcon fontSize="small" style={{ marginRight: 5 }} />
                    <Typography variant="body2" color="textSecondary">
                      {repo.stargazers_count} Stars
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
};

export default PortfolioPage;

