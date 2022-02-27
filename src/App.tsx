import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import GlobalProvider from './context';
import Layout from './components/Layout';
import theme from './styles/theme';

const App = () => {
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
};

export default App;
