import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtr } from '../../../Utils';
import Button from './Button';

const setUp = (props = {}) => {
  const component = shallow(<Button {...props} />);
  return component;
};

describe('Button Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtr(component, 'booleanBtn false');
    expect(wrapper.length).toBe(1);
  });

  it('Should render with correct data', () => {
    const component = setUp({ type: 'True' });
    const data = findByTestAtr(component, 'booleanBtn true');
    expect(data.length).toBe(1);
  });
});
