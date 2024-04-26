import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';
import emailjs from '@emailjs/browser';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS values
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, error => {
        console.log('FAILED...', error);
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactPage;
