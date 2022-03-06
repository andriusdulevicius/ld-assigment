import OrdersCard from '../OrdersCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../styles/theme';
import { screen, render, fireEvent, within } from '@testing-library/react';

describe('OrdersCard', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <OrdersCard />
      </ThemeProvider>
    );

    expect(screen.getByText(/orders received/i)).toBeTruthy();
    expect(screen.getByText(/earnings/i)).toBeTruthy();
    expect(screen.getByText(/336/i)).toBeTruthy();
  });
});
