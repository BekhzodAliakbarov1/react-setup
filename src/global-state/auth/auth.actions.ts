import { removeStorage, setStorage } from 'utils/local-storage';
import { Login, Logout, Tokens } from 'types/auth.types';

export const login = (data: { userId: string } & Tokens): Login => {
  setStorage('accessToken', data.tokens.access);
  setStorage('refreshToken', data.tokens.refresh);
  setStorage('userId', data.userId);
  return {
    type: 'LOGIN',
    payload: {
      accessToken: data.tokens.access,
      refreshToken: data.tokens.refresh,
      userId: data.userId,
    },
  };
};

export const logout = (): Logout => {
  removeStorage('accessToken');
  removeStorage('refreshToken');
  removeStorage('userId');
  return {
    type: 'LOGOUT',
  };
};
