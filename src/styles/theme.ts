import { createTheme } from '@mui/material/styles';
import { darkBlue, secondary, lightBlue, orange, success, darkGray, trustPilotBlue, danger, white } from './colors';

export interface Theme {
  typography: {
    fontFamily: string;
  };
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    menu: {
      main: string;
    };
    white: {
      main: string;
    };
    orange: {
      main: string;
    };
    success: {
      main: string;
    };
    darkGray: {
      main: string;
    };
    trustPilotBlue: {
      main: string;
    };
    danger: {
      main: string;
    };
  };
}

const theme = createTheme({
  typography: { fontFamily: 'Noto Sans' },
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
