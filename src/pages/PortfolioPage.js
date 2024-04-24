import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { Grid, Card, CardContent, Typography, CardActionArea, Box, CardMedia, TextField, Button } from "@mui/material";
import { GitHub as GitHubIcon, Description as DescriptionIcon, StarBorder as StarBorderIcon } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';


const API_KEY_FLICKR = process.env.REACT_APP_API_KEY_FLICKR;
const API_KEY_NASA = process.env.REACT_APP_API_KEY_NASA;
const FLICKR_USER_ID = process.env.REACT_APP_FLICKR_USER_ID;

const PortfolioPage = () => {

  const [photos, setPhotos] = useState([]); // State to store the photos
  // const [loading, setLoading] = useState(true);
  const [selectDate, setSelectDate] = useState(dayjs().subtract(11, "day"));
  const [earthPhoto, setEarthPhoto] = useState([]);
  const [search, setSearch] = useState("");

  const fetchPhotosSearch = async (search) => {
    try {
      const response = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY_FLICKR}&user_id=${FLICKR_USER_ID}&text=${search}&format=json&nojsoncallback=1`
      );

      const newphotos = response.data.photos.photo.map(async (photo) => {
        const photo_id = photo.id;
        const photo_info = await fetchPhotoInfo(photo_id);

        console.log(search)

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
      const photo_info = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${API_KEY_FLICKR}&photo_id=${photo_id}&format=json&nojsoncallback=1`
      );
      return photo_info.data.photo;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchPhotosSearch(search);
    }
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY_FLICKR}&user_id=${FLICKR_USER_ID}&format=json&nojsoncallback=1`
        );

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

    const fetchEarthPhoto = async (selectDate) => {
      try {
        const earthPhoto = await axios.get(
          `https://api.nasa.gov/EPIC/api/natural/date/${dayjs(selectDate).format("YYYY-MM-DD")}?api_key=${API_KEY_NASA}`);
        setEarthPhoto(earthPhoto.data[0]);
      } catch (error) { //why沒照片的處理
        console.error("Error fetching data: ", error);
      }
    };

    fetchPhotos();
    fetchEarthPhoto(selectDate);
  }, [selectDate, search]); //why

  return (
    <Grid container spacing={3}>
      <Grid item xs={4} sm={6} md={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker", "DatePicker"]}> {/* why 要改 */}
            <DatePicker
              label="Date"
              value={selectDate}
              onChange={(newValue) => setSelectDate(newValue)}
              maxDate={dayjs().subtract(11, "day")}
              defaultValue={dayjs().subtract(11, "day")}
              format="DD-MM-YYYY"
            />
          </DemoContainer>
        </LocalizationProvider>
        <CardMedia
          component="img"
          height="400"
          image={`https://epic.gsfc.nasa.gov/archive/natural/${dayjs(
            selectDate
          ).format("YYYY/MM/DD")}/png/${earthPhoto.image}.png`}
          alt="earthPhoto"
        />
      </Grid>
      <TextField id="standard-basic" label="Standard" variant="standard" type="search" value={search} onChange={(s) => setSearch(s.target.value)} onKeyDown={handleKeyDown}/>
      <Button type="button" onClick={() => fetchPhotosSearch(search)} >
        Search       
      </Button>
      {photos.map((photo) => (
        <Grid item xs={8} sm={6} md={4} key={photo.id}>
          <Card elevation={4}>
            <CardActionArea
              component="a"
              href={`${photo.photo_info.urls.url[0]._content}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContent>
                <CardMedia
                  component="img"
                  height="400px"
                  image={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                  alt="green iguana"
                />
                <Box display="flex" alignItems="center" marginBottom={2}>
                  <Typography gutterBottom variant="h6" component="div" textAlign={'center'}>
                    <PhotoCameraBackIcon
                      fontSize="medium"
                      style={{ verticalAlign: "middle", marginRight: 5 } }
                      textAlign={'center'}
                    />
                    {photo.title}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" marginBottom={2}>
                  <DescriptionIcon
                    fontSize="medium"
                    style={{ marginRight: 5 } } textAlign={'center'}
                  />
                  <Typography variant="body2" color="textSecondary" fontSize={18} textAlign={'center'}>
                    {photo.photo_info.description._content ||
                      "No description available."}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                <Grid container spacing={3}>
                  <Grid item xs={6} sx={{ display: 'flex' }} md={6}>
                  <VisibilityIcon fontSize="medium" style={{ marginRight: 5 }} textAlign={'center'} />
                  <Typography variant="body2" color="textSecondary" fontSize={18} textAlign={'center'}>
                    {photo.photo_info.views} Views
                  </Typography>
                  </Grid>
                  <Grid item xs={6} sx={{ display: 'flex' }} md={6}>
                  <CommentIcon fontSize="medium" style={{ marginRight: 5 }} textAlign={'center'} />
                  <Typography variant="body2" color="textSecondary" fontSize={18} textAlign={'center'}>
                    {photo.photo_info.comments._content} Comments
                  </Typography>
                  </Grid>
                </Grid>
                  
                  
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
