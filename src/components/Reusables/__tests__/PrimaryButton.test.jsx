import { mount } from 'enzyme';
import PrimaryButton from '../PrimaryButton';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../styles/theme';

const props = {
  children: 'test button',
};

describe('PrimaryButton', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <PrimaryButton {...props} />
      </ThemeProvider>
    );
    expect(wrapper.find('button').text()).toBe('test button');
  });

  it('should render with no text if  children is not passed', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <PrimaryButton />
      </ThemeProvider>
    );
    expect(wrapper.find('button').text().length).toBe(0);
  });
});
