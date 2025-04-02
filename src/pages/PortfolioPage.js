import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia, TextField } from "@mui/material";
import SearchBar from "../components/SearchBar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import PublicIcon from '@mui/icons-material/Public';
import { useTranslation } from "react-i18next";


const GITHUB_TOKEN = process.env.REACT_APP_API_KEY_GITHUB;
const API_KEY_NASA = process.env.REACT_APP_API_KEY_NASA;

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectDate, setSelectDate] = useState(dayjs("2025-03-10"));
  const [nasaPhoto, setNasaPhoto] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchProjects = async () => {

      const ALLOWED_REPOS = [
        "jerry19980310/IFN563_BoardGames",
        // "jerry19980310/IFN666_A2",
        "jerry19980310/IFN666_Budget_Master_FRONT",
        "jerry19980310/IFN666_Budget_Master_BACK",
        "jerry19980310/CAB432_Video_Transcoding",
        "jerry19980310/GF_Frontend"
      ];

      try {
        const response = await axios.get(`https://api.github.com/user/repos`, {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`, 
          },
          params: {
            visibility: "all", 
            affiliation: "owner",
          },
        });

        const filteredRepos = response.data.filter(repo => ALLOWED_REPOS.includes(repo.full_name));

        setProjects(filteredRepos);
        setFilteredProjects(filteredRepos);
      } catch (error) {
        console.error("Error fetching data: ", error);
        alert("Error fetching GitHub projects. Please try again later.");
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    // 根據搜尋條件過濾專案
    const filtered = projects.filter(project =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [searchTerm, projects]);

  useEffect(() => {
    const fetchNasaPhoto = async (selectDate) => {
      try {
        const nasaPhotoResponse = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY_NASA}&date=${dayjs(selectDate).format("YYYY-MM-DD")}`);
        setNasaPhoto(nasaPhotoResponse.data);
      } catch (error) {
        console.error("Error fetching NASA photo: ", error);
        alert("No image available for the selected date. Please try again later.");
        setSelectDate(dayjs().subtract(1, "day"));
      }
    };

    fetchNasaPhoto(selectDate);
  }, [selectDate]);

  return (
    <Grid container spacing={3} style={{ width: '100%', margin: '0 auto', padding: '20px' }}>
      {/* 搜尋 */}
      <SearchBar onSubmit={setSearchTerm} />
      
      {/* 顯示專案卡片 */}
      <Grid item xs={12} lg={9} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={project.id} style={{ padding: '10px' }}>
            <Card elevation={5} style={{ width: '100%', display: 'flex', flexDirection: 'column', height: '430px' }}>
              <CardActionArea
                component="a"
                href={project.homepage || project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  style={{ height: 300, width: '100%', objectFit: 'cover' }}
                  image={project.owner.avatar_url} 
                  alt={project.name}
                />
                <CardContent style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography gutterBottom variant="h6" component="div" textAlign='center'>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" textAlign='center'>
                    {project.description || "No description available."}
                  </Typography>
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
            {t('astronomy')}
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
              image={`${nasaPhoto.url}`}
              alt="Earth Photo"
            />
            <CardContent style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography gutterBottom variant="h6" component="div" textAlign='center'>
                <PublicIcon style={{ verticalAlign: "middle", marginRight: 5 }} />
                {nasaPhoto.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" textAlign='left'>
                {nasaPhoto.explanation || "No description available."}
              </Typography>
            </CardContent>
          </Card>
        </LocalizationProvider>
      </Grid>
    </Grid>

    
  );
};

export default PortfolioPage;
