import OrdersCard from '../OrdersCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../styles/theme';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  it('should work correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <OrdersCard />
      </ThemeProvider>
    );

    userEvent.click(screen.getByRole('button'));
    const thisMonth = screen.getByRole('option', { name: 'This month' });
    userEvent.click(thisMonth);
    expect(screen.getByRole('button').textContent).toBe('This month');
    expect(screen.getByText(/1440/i)).toBeTruthy();
  });
});
