import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, CardActionArea, Box, CardMedia} from '@mui/material';
import { GitHub as GitHubIcon, Description as DescriptionIcon, StarBorder as StarBorderIcon } from '@mui/icons-material';

const API_KEY= "19e6e104bad3bf8ba90d715c55b808e6";

const PortfolioPage = () => {
    const [photos, setPhotos] = useState([]); // State to store the repositories
    const [loading, setLoading] = useState(true);
    const [views, setViews] = useState([]);

    useEffect(() => {
      const fetchPhotos = async () => {
      try {
        const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&user_id=200520874%40N03&format=json&nojsoncallback=1`);
        const fetchedPhotos = response.data.photos.photo;

        const photosWithViews = await Promise.all(fetchedPhotos.map(async (photo) => {
        const photo_id = photo.id;
    
        const photo_views = await fetchViews(photo_id);

        return { ...photo, views: photo_views }
        }));

        setPhotos(photosWithViews);

      } catch (error) {
        console.error("Error fetching data: ", error);
      }

      };

      const fetchViews = async (photo_id) => {
      try {
        const photo_info = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${API_KEY}&photo_id=${photo_id}&format=json&nojsoncallback=1`);
        return photo_info.data.photo.views;

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      };

      fetchPhotos();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
      <Grid container spacing={3}>
        {photos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} key={photo.id}>
            <Card elevation={4}>
              <CardActionArea component="a" href={`https://www.flickr.com/photos/${photo.owner}/${photo.id}/`} target="_blank" rel="noopener noreferrer">
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    <GitHubIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: 5 }} />
                    {photo.title}
                  </Typography>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                    alt="green iguana"
                  />
                  <Box display="flex" alignItems="center" marginBottom={2}>
                    <DescriptionIcon fontSize="small" style={{ marginRight: 5 }} />
                    <Typography variant="body2" color="textSecondary">
                      { photo.title || "No description available."}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <StarBorderIcon fontSize="small" style={{ marginRight: 5 }} />
                    <Typography variant="body2" color="textSecondary">
                      { photo.views } Stars
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

