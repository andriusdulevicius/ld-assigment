import { mount } from 'enzyme';
import InviteFriendCard from '../InviteFriendCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../../styles/theme';

describe('InviteFriendCard', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <InviteFriendCard />
      </ThemeProvider>
    );

    expect(wrapper.find('.makeStyles-inviteFriend-8')).toBeTruthy();
  });
});
