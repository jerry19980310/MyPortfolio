import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import PhotographerImg from '../assets/Designer4.png';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box
            component="img"
            src={PhotographerImg}
            alt="photographer"
            sx={{
              width: '100%',
              maxHeight: { xs: 360, md: '100%' },
              objectFit: 'cover',
              borderRadius: 2
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Hi,<strong> I'm Jerry, a passionate photographer.</strong>  dedicated to capturing the ephemeral moments of life.
            <br /><br />
            My journey in photography...
          </Typography>
          <Button 
            variant="contained" 
            component={Link} 
            to="/resume" 
            sx={{ mt: 2 }}
          >
            More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;