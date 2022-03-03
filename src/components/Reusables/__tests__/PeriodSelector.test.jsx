import { render, screen } from '@testing-library/react';
import PeriodSelector from '../PeriodSelector';

const props = {
  period: 'thisWeek',
};

describe('PeriodSelector', () => {
  it('should render correctly', () => {
    const text = 'test link';
    render(<PeriodSelector {...props} />);
    console.log(screen.debug());
    expect(screen.getByRole('button'))
      .text()
      .toBe(/this week/i);
  });
});
