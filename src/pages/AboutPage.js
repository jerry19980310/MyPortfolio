import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import PhotographerImg from "../assets/Designer4.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useTranslation } from "react-i18next";

const About = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const highlightText = (text, keywords) => {
    if (!keywords) return text;
    const words = keywords.split(',').map(word => word.trim()); // 取得關鍵字陣列
  
    // **正則表達式，將關鍵字用 <strong> 包起來**
    const regex = new RegExp(`(${words.join('|')})`, 'gi');
  
    return text.split(regex).map((part, index) =>
      words.includes(part) ? <strong key={index}>{part}</strong> : part
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box
            component="img"
            src={PhotographerImg}
            alt="photographer"
            sx={{
              width: "100%",
              maxHeight: { xs: 360, md: "100%" },
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            color="primary"
            textAlign="center"
            gutterBottom
            sx={{ mb: 3 }}
          >
            {t("about")}
          </Typography>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h4" fontWeight="bold">
              {t("intro")}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">
              🎓 {highlightText(t('study'), t('study_strong'))}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">
              💼 {highlightText(t('work'), t('work_strong'))}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">
              🚀 {highlightText(t('tech'), t('tech_strong'))}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">
              🏸 {highlightText(t('hobbies'), t('hobbies_strong'))}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="h5" fontWeight="bold" color="primary">
              {t("motto")}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              variant="contained"
              component={Link}
              to="/resume"
              sx={{ mt: 2 }}
              endIcon={<MoreHorizIcon />}
            >
              More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
