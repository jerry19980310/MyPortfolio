import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'; // Ensure you are importing correctly
import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './i18n';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);