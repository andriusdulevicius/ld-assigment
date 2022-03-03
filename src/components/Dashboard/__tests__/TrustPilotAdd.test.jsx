import TrustPilotAdd from '../TrustPilotAdd';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../styles/theme';
import { screen, render } from '@testing-library/react';

describe('TrustPilotAdd', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <TrustPilotAdd />
      </ThemeProvider>
    );

    expect(screen.getByAltText(/trustPilotLogo/i)).toBeTruthy();
    expect(screen.getByText(/show us your love/i)).toBeTruthy();
  });
});
