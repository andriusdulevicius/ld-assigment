import { screen, render, cleanup } from '@testing-library/react';
import { mount } from 'jest';
import BottomLink from './BottomLink';
import renderer from 'react-test-renderer';

describe('ButtonLink', () => {
  afterEach(() => {
    cleanup();
  });

  it('should match snapshot', () => {
    const text = 'test link';
    const wrapper = mount(<BottomLink text={text} />);

    console.log(wrapper.debug());
    expect(wrapper.getByText('test link').exists()).toBeTruthy();

    expect().toBeDefined();
    expect().toBeUndefined();
    expect(wrapper.find('span')).toBe();
    expect().toEqaul();
    expect().toBeTruthy();
    expect().tobeFalsy();
    expect().toHaveBeenCalled();
  });
});
