import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

describe('LoginPage', () => {
  let wrapper;
  let startGithubLogin;
  let startGoogleLogin;
  beforeEach(() => {
    startGithubLogin = jest.fn();
    startGoogleLogin = jest.fn();
    wrapper = shallow(
      <LoginPage
        startGithubLogin={startGithubLogin}
        startGoogleLogin={startGoogleLogin}
      />,
    );
  });
  test('it should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('it should call startGoogleLogin on button click', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(startGoogleLogin).toHaveBeenCalled();
  });
  test('it should call startGithublogin on button click', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(startGithubLogin).toHaveBeenCalled();
  });
});
