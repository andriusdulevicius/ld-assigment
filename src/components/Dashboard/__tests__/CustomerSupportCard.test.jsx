import { mount } from 'enzyme';
import CustomerSupportCard from '../CustomerSupportCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('CustomerSupportCard', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <Router>
        <ThemeProvider theme={theme}>
          <CustomerSupportCard />
        </ThemeProvider>
      </Router>
    );

    expect(wrapper.find('p').at(0).text()).toContain('is here to help you');

    wrapper.find('PrimaryButton button').simulate('click');
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});
