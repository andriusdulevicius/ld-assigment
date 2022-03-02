import { mount } from 'enzyme';
import BottomLink from '../BottomLink';

describe('ButtonLink', () => {
  it('should render correctly', () => {
    const text = 'test link';
    const wrapper = mount(<BottomLink text={text} />);

    expect(wrapper.find('p').text()).toBe('test link');
  });
});
