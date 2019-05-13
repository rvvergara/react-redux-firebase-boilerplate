import uuid from 'uuid';
import authReducer from '../../reducers/auth';

let uid;
beforeEach(() => {
  uid = uuid();
});

test('authReducer changes login state', () => {
  const action = {
    type: 'LOGIN',
    uid,
  };
  expect(authReducer({}, action)).toEqual({ uid });
});

test('auth reducer changes state during logout', () => {
  const action = {
    type: 'LOGOUT',
  };
  expect(authReducer({ uid }, action)).toEqual({});
});
