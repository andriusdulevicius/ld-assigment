import MobileAdvert from '../MobileAdvert';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../styles/theme';
import { screen, render } from '@testing-library/react';

describe('MobileAdvert', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <MobileAdvert />
      </ThemeProvider>
    );

    expect(screen.getByText(/sell your products/i)).toBeTruthy();

    expect(screen.getByRole('img', { name: /deviceimage/i })).toBeTruthy();
    expect(screen.getByRole('img', { name: /appstore/i })).toBeTruthy();
    expect(screen.getByRole('img', { name: /googleplay/i })).toBeTruthy();
    expect(screen.getByText(/show more/i)).toBeTruthy();
  });
});
