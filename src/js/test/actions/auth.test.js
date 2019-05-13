import uuid from 'uuid';
import {
  login,
  logout,
} from '../../actions/auth';

test('login sets the right action', () => {
  const uid = uuid();
  expect(login(uid)).toEqual({
    type: 'LOGIN',
    uid,
  });
});

test('logout sets the right action', () => {
  expect(logout()).toEqual({
    type: 'LOGOUT',
  });
});
