import ShopSelection from '../ShopSelection';
import { screen, render } from '@testing-library/react';

describe('ShopSelection', () => {
  it('should render correctly', () => {
    render(<ShopSelection />);

    expect(screen.getByText(/select your shop/i)).toBeTruthy();
    expect(screen.getByRole('button')).toBeTruthy();
  });
});
