import ShopSelection from '../ShopSelection';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('ShopSelection', () => {
  it('should render correctly', () => {
    render(<ShopSelection />);

    expect(screen.getByText(/select your shop/i)).toBeTruthy();
    expect(screen.getByRole('button')).toBeTruthy();
  });
  it('should work correctly', () => {
    render(<ShopSelection />);

    userEvent.click(screen.getByRole('button'));
    const fenohStore = screen.getByRole('option', { name: 'Fenoh store' });
    userEvent.click(fenohStore);
    expect(screen.getByRole('button').textContent).toBe('Fenoh store');
  });
});
