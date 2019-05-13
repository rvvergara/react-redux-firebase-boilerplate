import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

describe('Header component', () => {
  let wrapper;
  let startLogout;
  beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout} />);
  });
  test('should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call startLogout', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
  });
});
