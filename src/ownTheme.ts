import { createTheme, colors } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.red[500]
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2100
    }
  },
});
