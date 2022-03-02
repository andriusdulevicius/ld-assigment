import { mount } from 'enzyme';
import Card from '../Card';

const children = <div className={'testChildren'}>Test</div>;
const props = {
  children,
  backgroundColor: 'black',
};

describe('Card', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Card {...props} />);

    expect(wrapper.find('.testChildren').text()).toBe('Test');
    expect(wrapper.find('.makeStyles-wrapper-1').exists()).toBeTruthy();
  });
});
