import { screen, render, cleanup } from '@testing-library/react';
import MenuItem from './MenuItem';
import renderer from 'react-test-renderer';
import { Target } from '../../assets/icons/Target';
import { ThemeProvider } from '@mui/styles';
import theme from '../../styles/theme';
import Enzyme, { mount } from 'enzyme';

afterEach(() => {
  cleanup();
});

const menuItem = {
  label: 'Marketing',
  Icon: Target,
  children: [
    { label: 'Discount codes', link: '/page/discount' },
    { label: 'Exit intent', link: '/page/exit' },
    {
      label: 'Checkout Features',
      children: [
        { label: 'Discount codes', link: '/page/discount2' },
        { label: 'Exit intent', link: '/page/exit2' },
      ],
    },
  ],
};

it('should render the component', () => {
  it('Should render Example component', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <MenuItem {...menuItem} />
      </ThemeProvider>
    );
    expect(wrapper).toBeTruthy();
  });
});

it('matches snapshot', () => {
  const div = document.createElement('div');
  const menuItem = {
    label: 'Marketing',
    Icon: Target,
    children: [
      { label: 'Discount codes', link: '/page/discount' },
      { label: 'Exit intent', link: '/page/exit' },
      {
        label: 'Checkout Features',
        children: [
          { label: 'Discount codes', link: '/page/discount2' },
          { label: 'Exit intent', link: '/page/exit2' },
        ],
      },
    ],
  };
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <MenuItem {...menuItem} />
      </ThemeProvider>,
      div
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
