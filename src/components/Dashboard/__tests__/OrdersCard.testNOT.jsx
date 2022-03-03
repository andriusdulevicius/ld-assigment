import { mount } from 'enzyme';
import OrdersCard from '../OrdersCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../styles/theme';
import { screen, render } from '@testing-library/react';

describe('OrdersCard', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <OrdersCard />
      </ThemeProvider>
    );

    expect(screen.getByText(/orders received/i)).toBeTruthy();
    expect(screen.getByText(/earnings/i)).toBeTruthy();
  });

  // it('should calculate correctly', () => {});
});
