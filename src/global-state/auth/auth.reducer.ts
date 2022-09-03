import { AuthActions, AuthCredentials } from 'types/auth.types';
import { getStorage } from '../../utils/local-storage';

export const initialState = {
  userId: getStorage('userId') ?? '',
  tokens: {
    access: getStorage('accessToken') ?? '',
    refresh: getStorage('refreshToken') ?? '',
  },
};

export const authReducer = (state: AuthCredentials, action: AuthActions) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        tokens: {
          refresh: action.payload.refreshToken,
          access: action.payload.accessToken,
        },
        userId: action.payload.userId,
      };
    case 'SET_AUTH_CREDENTIALS':
      return {
        ...state,
        userId: action.payload.userId,
      };
    case 'LOGOUT':
      window.location.reload();
      return {
        userId: '',
        tokens: {
          access: '',
          refresh: '',
        },
      };
    default:
      return state;
  }
};
