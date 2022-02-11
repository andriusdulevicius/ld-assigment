import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { darkBlue, secondary, lightBlue } from './styles/colors';
import GlobalProvider from './context';

import Sidebar from './components/Sidebar/Sidebar';

const theme = createTheme({
  palette: {
    primary: {
      main: darkBlue,
    },
    secondary: {
      main: secondary,
    },
    main: {
      main: lightBlue,
    },
  },
});

function App() {
  return (
    <div className='App'>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalProvider>
            <Sidebar />
            {/* Header */}
            {/* Dashboard */}
          </GlobalProvider>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
