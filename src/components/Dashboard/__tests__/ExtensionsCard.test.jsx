import { mount } from 'enzyme';
import ExtensionsCard from '../ExtensionsCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../styles/theme';

describe('ExtensionsCard', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <ExtensionsCard />
      </ThemeProvider>
    );

    expect(wrapper.find('.makeStyles-extension-8')).toBeTruthy();
  });
});
