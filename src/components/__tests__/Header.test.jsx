import Header from '../Header';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';

describe('Header', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByText(/whats new/i)).toBeTruthy();
    expect(screen.getByText(/welcome/i)).toBeTruthy();
    expect(screen.getByText(/app.vetrinalive.it/i)).toBeTruthy();
    expect(screen.getByRole('button')).toBeTruthy();
  });
});
