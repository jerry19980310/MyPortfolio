import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { Grid, Card, CardContent, Typography, CardActionArea, Box, CardMedia, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchBar from "../components/SearchBar";

const API_KEY_FLICKR = process.env.REACT_APP_API_KEY_FLICKR;
const API_KEY_NASA = process.env.REACT_APP_API_KEY_NASA;
const FLICKR_USER_ID = process.env.REACT_APP_FLICKR_USER_ID;


const PortfolioPage = () => {
  const [photos, setPhotos] = useState([]);
  const [selectDate, setSelectDate] = useState(dayjs().subtract(12, "day"));
  const [earthPhoto, setEarthPhoto] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY_FLICKR}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1`
        );

        const newphotos = response.data.photos.photo.map(async (photo) => {
          const photo_info = await fetchPhotoInfo(photo.id);
          return { ...photo, photo_info };
        });

        setPhotos(await Promise.all(newphotos));
        setFilteredPhotos(await Promise.all(newphotos));
      } catch (error) {
        console.error("Error fetching data: ", error);
        alert("Error fetching data. Please try again later.");
        setError(true);
      }
    };

    const fetchPhotoInfo = async (photo_id) => {
      try {
        const photo_info = await axios.get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${API_KEY_FLICKR}&photo_id=${photo_id}&format=json&nojsoncallback=1`
        );
        return photo_info.data.photo;
      } catch (error) {
        console.error("Error fetching data: ", error);
        alert("Error fetching data. Please try again later.");
        setError(true);
      }
    };

    const fetchEarthPhoto = async (selectDate) => {
      try {
        const earthPhoto = await axios.get(
          `https://api.nasa.gov/EPIC/api/natural/date/${dayjs(selectDate).format("YYYY-MM-DD")}?api_key=${API_KEY_NASA}`);
          if (earthPhoto.data.length === 0) {
            alert("No image on that date. Please try again later.");
            setEarthPhoto([]);
            setSelectDate(dayjs().subtract(12, "day"));
          }
          else{
            setEarthPhoto(earthPhoto.data[0]);
          }
      } catch (error) {
        console.error("Error fetching data: ", error);
        alert("Error fetching data. Please try again later.");
        
      }
    };

    fetchPhotos();
    fetchEarthPhoto(selectDate)
  }, [selectDate]);

  useEffect(() => {
    // Filter photos based on search term
    const filtered = photos.filter(photo => photo.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredPhotos(filtered);
  }, [searchTerm, photos]);

  //search bar use props and header footer
if (error) {
    return (
      <div>
        <h1>Error fetching data. Please try again later.</h1>
      </div>
    );
}

  return (
    <Grid container spacing={3} style={{ width: '100%', margin: '0 auto', padding: '20px' }}>
      {/* Search */}
      <SearchBar onSubmit={setSearchTerm} />
      
      {/* Main content photo cards */}
      <Grid item xs={12} lg={9} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {filteredPhotos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={photo.id} style={{ padding: '10px' }}>
            <Card elevation={5} style={{ width: '100%', display: 'flex', flexDirection: 'column', height: '380px' }}>
              <CardActionArea
                component="a"
                href={`${photo.photo_info.urls.url[0]._content}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  style={{ height: 200, width: '100%', objectFit: 'cover' }}
                  image={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                  alt={photo.title || "Photo"}
                />
                <CardContent style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography gutterBottom variant="h6" component="div" textAlign='center'>
                    <PhotoCameraBackIcon style={{ verticalAlign: "middle", marginRight: 5 }} />
                    {photo.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" textAlign='center'>
                    {photo.photo_info.description._content || "No description available."}
                  </Typography>
                  <Box display="flex" justifyContent="space-between" marginTop={2}>
                    <Typography variant="body2" color="textSecondary">
                      <VisibilityIcon style={{ marginRight: 5 }} />
                      {photo.photo_info.views}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <CommentIcon style={{ marginRight: 5 }} />
                      {photo.photo_info.comments._content}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Sidebar */}
      <Grid item xs={12} lg={3} style={{ display: 'flex', flexDirection: 'column' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Typography gutterBottom variant="h6" component="div">
            The Earth on a Specific Date
          </Typography>
          <DatePicker
            label="Date"
            value={selectDate}
            onChange={(newValue) => setSelectDate(newValue)}
            defaultValue={dayjs().subtract(12, "day")}
            format="DD-MM-YYYY"
            renderInput={(params) => <TextField {...params} />}
          />
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={`https://epic.gsfc.nasa.gov/archive/natural/${dayjs(selectDate).format("YYYY/MM/DD")}/png/${earthPhoto.image}.png`}
              alt="Earth Photo"
            />
          </Card>
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
};

export default PortfolioPage;
