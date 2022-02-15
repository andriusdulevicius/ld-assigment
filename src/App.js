import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { darkBlue, secondary, lightBlue, orange, success, darkGray, trustPilotBlue } from './styles/colors';
import GlobalProvider from './context';
import Layout from './components/Layout';

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
    white: { main: '#fff' },
    orange: { main: orange },
    success: { main: success },
    darkGray: { main: darkGray },
    trustPilotBlue: { main: trustPilotBlue },
  },
});

function App() {
  return (
    <div className='App'>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalProvider>
            <Layout />
          </GlobalProvider>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
