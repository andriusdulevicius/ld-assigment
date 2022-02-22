import { createTheme } from '@mui/material/styles';
import { darkBlue, secondary, lightBlue, orange, success, darkGray, trustPilotBlue, danger, white } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: darkBlue,
    },
    secondary: {
      main: secondary,
    },
    menu: {
      main: lightBlue,
    },
    white: { main: white },
    orange: { main: orange },
    success: { main: success },
    darkGray: { main: darkGray },
    trustPilotBlue: { main: trustPilotBlue },
    danger: { main: danger },
  },
});

export default theme;
