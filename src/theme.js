import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#C3986D',
      contrastText: '#4D3E2B',
    },
    secondary: {
      main: '#DEB887',
    },
    background: {
      default: '#FCFEFD',
      paper: '#FCFEFD',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
    },
    icon:{
      main: '#4D3E2B',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    }
  },
});
