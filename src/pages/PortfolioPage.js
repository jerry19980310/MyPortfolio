import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { Grid, Card, CardContent, Typography, CardActionArea, Box, CardMedia} from '@mui/material';
import { GitHub as GitHubIcon, Description as DescriptionIcon, StarBorder as StarBorderIcon } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const API_KEY_Flickr= "19e6e104bad3bf8ba90d715c55b808e6";

const API_KEY_NASA = "FQ5CkhtNceiPAHa3LnkZ34XlPi5exxoZuSV7dyW0"

const PortfolioPage = () => {
    const [photos, setPhotos] = useState([]); // State to store the photos
    const [loading, setLoading] = useState(true);
    const [selectDate, setSelectDate] = useState(null);
    const [earthPhoto, setEarthPhoto] = useState([]);

    useEffect(() => {
      const fetchPhotos = async () => {
      try {
        const response = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY_Flickr}&user_id=200520874%40N03&format=json&nojsoncallback=1`);
        
        const newphotos = response.data.photos.photo.map(async (photo) => {
        const photo_id = photo.id;
        const photo_info = await fetchPhotoInfo(photo_id);

        return { ...photo, photo_info };
    
        });
    
        const photosWithInfo = await Promise.all(newphotos); //why
        setPhotos(photosWithInfo);

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      };

      const fetchPhotoInfo = async (photo_id) => {
      try {
        const photo_info = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${API_KEY_Flickr}&photo_id=${photo_id}&format=json&nojsoncallback=1`);
        return photo_info.data.photo;

      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      };

      const fetchEarthPhoto = async (selectDate) => {
        try {
          const earthPhoto = await axios.get(`https://api.nasa.gov/EPIC/api/natural/date/${dayjs(selectDate).format("YYYY-MM-DD")}?api_key=${API_KEY_NASA}`);
          setEarthPhoto(earthPhoto.data[0])
  
        } catch (error) { //why沒照片的處理
          console.error("Error fetching data: ", error);
        }
        };
        
      fetchPhotos();
      fetchEarthPhoto(selectDate);
    }, [selectDate]); //why

    return (
      <Grid container spacing={3}>
        <Grid item xs={4} sm={6} md={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
              <DatePicker
                label="Controlled picker"
                value={selectDate}
                onChange={(newValue) => setSelectDate(newValue)}
                maxDate={dayjs().subtract(10, 'day')}
              />
            </DemoContainer>
          </LocalizationProvider>
          <Typography>
            Stored value: {selectDate == null ? 'null' : selectDate.format("YYYY-MM-DD")}
          </Typography>
          <CardMedia
            component="img"
            height="140"
            image={`https://epic.gsfc.nasa.gov/archive/natural/${dayjs(selectDate).format("YYYY/MM/DD")}/png/${earthPhoto.image}.png`}
            alt="earthPhoto"
          />
        </Grid>
        {photos.map((photo) => (
          <Grid item xs={8} sm={6} md={4} key={photo.id}>
            <Card elevation={4}>
              <CardActionArea component="a" href={`${photo.photo_info.urls.url[0]._content}`} target="_blank" rel="noopener noreferrer">
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
                      { photo.photo_info.description._content|| "No description available."}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <StarBorderIcon fontSize="small" style={{ marginRight: 5 }} />
                    <Typography variant="body2" color="textSecondary">
                      { photo.photo_info.views } Views
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      { photo.photo_info.comments._content } Comments
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
