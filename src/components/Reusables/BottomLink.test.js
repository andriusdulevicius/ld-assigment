import { screen, render, cleanup } from '@testing-library/react';
import BottomLink from './BottomLink';
import renderer from 'react-test-renderer';

afterEach(() => {
  cleanup();
});

it('matches snapshot', () => {
  const text = 'test link';
  const tree = renderer.create(<BottomLink text={text} />).toJSON();
  expect(tree).toMatchSnapshot();
});
