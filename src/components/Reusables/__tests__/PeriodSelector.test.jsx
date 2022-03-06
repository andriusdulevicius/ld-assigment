import PeriodSelector from '../PeriodSelector';
import { mount } from 'enzyme';

const props = {
  period: 'thisMonth',
};

describe('PeriodSelector', () => {
  it('should render correctly with 3 options', () => {
    const wrapper = mount(<PeriodSelector {...props} />);
    expect(wrapper.find('#period-select').length).toBe(3);
  });
});
